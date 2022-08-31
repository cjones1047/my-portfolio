import './Header.css'
// import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';

let pages = [
	{ str: 'About Me', link: ''},
	{ str: 'Projects', link: 'my-projects'}
]

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	let navigate = useNavigate()

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" style={{backgroundColor: 'rgba(182, 182, 182, 0.8)', width: '80%', margin: '40px auto', borderRadius: '30px'}}>
			<Container maxWidth="">
				<Toolbar disableGutters>
					{/* <SportsGolfIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="h6"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: '',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						CADDYSTACK
					</Typography> */}

					{/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page, i) => {
								const pageStr = page.str
								const pageLink = page.link
								return (
									<MenuItem 
										key={i}
										onClick={() => {
											handleCloseNavMenu()
											navigate(`/${pageLink}`, {replace: false})
										}}
										divider={i > (pages.length) - 2 ? false : true}
										style={{width: '70vw', maxWidth: '300px'}}
										>
											<Typography
												textAlign="center"
												// style={profileLinkStyle}
											>
												{pageStr}
											</Typography>
									</MenuItem>
								)
							})}
						</Menu>
					</Box> */}

					{/* <SportsGolfIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="h5"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: '',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						CADDYSTACK
					</Typography> */}
					<Box
						// sx={{ display: { xs: 'flex', md: 'flex' }, m: 1 }}
						style={{display: 'flex', justifyContent: 'center', width: '100%'}}
					>
						{pages.map((page, i) => {
							const pageStr = page.str
							const pageLink = page.link
							return (
								<Button
									key={i}
									className="appbarButton"
									onClick={() => {
										navigate(`/${pageLink}`, {replace: false})
									}}
									
									sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: '15px', borderRadius: '30px', margin: '20px' }}
								>
									{pageStr}
								</Button>
							)
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
