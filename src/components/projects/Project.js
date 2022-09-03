import './Project.css'

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, styled } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import projects from '../../api/project-list';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

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

    const navigate = useNavigate()

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
            <TabPanel value={value} index={i} key={`tab-${i}`} dir={theme.direction}>
                <img
                    src={project.pic}
                    alt={project.title}
                    width={'100%'}
                    height={'auto'}
                    style={{borderRadius: '20px'}}
                />

                <h2 style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                    View full site&nbsp;<a href={project.link} target='_blank'>here</a>
                </h2>

                {projects[i].description.map((listItem, i) => {
                    return (
                        <li key={`list-item-${i}`} style={{ listStyle: 'none', marginBottom: '15px', paddingTop: '15px', borderTop: i === 0 ? 'none' : '1px solid rgba(140, 140, 140, 1)'}}>
                            {listItem}
                        </li>
                    )
                })}
                <a key={`link${i}`} href={project.link}>{project.link}</a>
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
