import './Project.css'

import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        'aria-controls': `full-width-tabpanel-${index}`,
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
            <TabPanel value={value} key={i} index={i} dir={theme.direction}>
                {projects[i].description.map((listItem, i) => {
                    return (
                        <li key={i}>
                            {listItem}
                        </li>
                    )
                })}
                <a href={project.link}>{project.link}</a>
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
                {/* <Tab label="Item One"  style={{fontWeight: 600, }} {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} /> */}
                {tabs}
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {tabPanels}
                {/* <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    Item Four
                </TabPanel> */}
            </SwipeableViews>
        </Box>
    );
}

export default Project
