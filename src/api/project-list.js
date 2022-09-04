import Caddystack from '../assets/Caddystack.png'
import Stockpile from '../assets/Stockpile.png'
import Goggles from '../assets/Goggles.png'
import TicTacToe from '../assets/Tic-Tac-Toe.png'

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
        pic: Caddystack,
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
        pic: Stockpile,
        link: 'https://stockpile-1047.herokuapp.com/'
    },
    {
        title: 'Goggles',
        description: [
            `Used Reddit API to fetch image data on any keyword search topic, and visually render the top six most relevant images into a format for a quiz game`,
            `Utilized HTML5 and Bootstrap, CSS3, and JavaScript to create visual aspects and animations`,
            `Leveraged Git and GitHub for version control`,
            `Deployed via gh-pages`
        ],
        pic: Goggles,
        link: 'https://cjones1047.github.io/goggles/'
    },
    {
        title: 'Tic-Tac-Toe',
        description: [
            `Created a dynamic, interactive tic-tac-toe game board`,
            `Utilized HTML5, CSS3, and Vanilla JavaScript to create visual aspects and animations`,
            `Leveraged Git and GitHub for version control`,
            `Deployed via gh-pages`
        ],
        pic: TicTacToe,
        link: 'https://cjones1047.github.io/tic-tac-toe/'
    }
]

export default projects