import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';

import projects from '../../api/project-list';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`
    };
}

const Project = (props) => {

    const {
        viewportWidth
    } = props

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const tabs = projects.map((project, i) => {
        return (
            <Tab label={project.title} key={i}  style={{fontWeight: 600, width: '250px'}} {...a11yProps(i)} />
        )
    })

    const tabPanels = projects.map((project, i) => {
        return (
            <TabPanel value={value} index={i} key={`tab-${i}`} dir={theme.direction} style={{backgroundColor: 'whitesmoke'}}>

                <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: viewportWidth > 600 ? '20px' : '15px'}}>
                    <LinkTwoToneIcon style={{marginRight: '15px', height: viewportWidth > 600 ? '40px' : '30px', width: 'auto'}}/>
                    <a key={`link${i}`} href={project.link} target={'_blank'} rel="noreferrer" >{project.link}</a>
                </span>

                <img
                    src={project.pic}
                    alt={project.title}
                    width={'100%'}
                    height={'auto'}
                    style={{display: 'flex', justifyContent: 'center', borderRadius: '20px', boxShadow: '0.25px 0.25px 3px black, -0.25px -0.25px 3px black', margin: '20px auto', maxWidth: '800px'}}
                />

                {projects[i].description.map((listItem, i) => {
                    return (
                        <li key={`list-item-${i}`} style={{ listStyle: 'none', margin: '0 auto 15px auto', paddingTop: '15px', borderTop: i === 0 ? 'none' : '1px solid rgba(170, 170, 170, 1)', maxWidth: '800px'}}>
                            {listItem}
                        </li>
                    )
                })}

            </TabPanel>
        )
    })

    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant={viewportWidth < (250*projects.length) ? "scrollable" : "standard"}
                scrollButtons={viewportWidth < (250*projects.length) ? true : false}
                aria-label="project tabs"
                allowScrollButtonsMobile={true}
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                }}
                // above attributes ternary operators ^^^ set variant to scrollable if all tabs combined to be wider than viewport width
                // below, we will center tabs if viewport width is greater than one tab's width (200px) multiplied by however many tabs there are
                centered={viewportWidth > (250*projects.length) ? true : false}
                
            >
                {tabs}
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {tabPanels}
            </SwipeableViews>
        </Box>
    );
}

export default Project
