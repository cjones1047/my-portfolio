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

const projects = [
    {
        title: 'Caddystack',
        description: [
            `Created a MERN (MongoDB, Express, React.js, Node.js) stack that allowed a user to post tee times for any golf course for sale and buy other users’ posted tee times`, 
            `Front-end React app utilized Bootstrap and Material UI as styling libraries`, 
            `Used Golf Course Finder API to get JSON data on lists of golf courses within a certain radius of a certain zip code`,
            `Golf Course Finder API queried to get data on individual golf courses`,
            `Queried Forward & Reverse Geocoding API to convert zip codes to specific coordinates of longitude and latitude`,
            `Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Postman.`,
            `Used Mongoose to define and implement three different schemas for separate MongoDB collections.`,
            `Implemented ES6 tagged template literals along with JSX and CSS3 to provide style and flexbox layout of the application.`, 
            `Back-end MEN stack created with MongoDB, Express, Node.js and queried with Axios requests`,
            `Front-end and back-end both deployed via Heroku`,
            `Leveraged Git and GitHub for version control`
        ],
        screenshot: '',
        link: 'https://caddystack.herokuapp.com/'
    },
    {
        title: 'Stockpile',
        description: [
            `Used QuickFS API to fetch recent ten years of any searched company’s financial data`,
            `Used Puppeteer to web scrape most-recent market share price`,
            `Wireframed for the planning process of the UI design for the application.`,
            `Created the front-end of the application utilizing Javascript array methods and functions to handle all data received from API and back-end along with Liquid for rendering on the front-end.`,
            `Served the back-end of the application using Express, MongoDB, and Node.js`,
            `Made all fetch API calls from the back-end to send data to the front-end.`,
            `Utilized HTML5 and Bootstrap, CSS3, and jQuery to create overall visual aspects and animations.`
        ],
        screenshot: '',
        link: 'https://stockpile-1047.herokuapp.com/'
    }
]

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
            <Tab label={project.title} key={i}  style={{fontWeight: 600, width: '400px'}} {...a11yProps(i)} />
        )
    })

    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant={viewportWidth < (400*projects.length) ? "scrollable" : "standard"}
                scrollButtons={viewportWidth < (400*projects.length) ? true : false}
                // variant="scrollable"
                aria-label="project tabs"
                allowScrollButtonsMobile={true}
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                }}
                // style={{fontWeight: 600}}
                // center tabs if viewport width is greater than one tab's width (200px) multiplied by however many tabs there are
                // set to scrollable if all tabs combined to be wider than viewport width
                centered={viewportWidth > (400*projects.length) ? true : false}
                
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
                <TabPanel value={value} index={0} dir={theme.direction}>
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
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

export default Project
