import './Header.css'

import { useNavigate } from 'react-router-dom'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

let pages = [
	{ str: 'About Me', link: ''},
	{ str: 'Projects', link: 'my-projects'}
]

const theme = createTheme({
	palette: {
	  primary: {
		main: 'rgba(117, 244, 252, 1)',
	  },
	  secondary: {
		main: '#11cb5f',
	  },
	},
});

const Header = () => {

	const [selection, setSelection] = React.useState(
		window.localStorage.getItem('selected') 
			? 
				window.localStorage.getItem('selected') 
			: 
				'About Me'
	);

	const handleChange = (event, newSelection) => {
		setSelection(newSelection);
		window.localStorage.setItem('selected', newSelection)
	};

	let navigate = useNavigate()

	return (
		<AppBar position="static" style={{backgroundColor: 'rgba(182, 182, 182, 1)', width: '80%', margin: '40px auto', borderRadius: '30px'}}>
			<Container maxWidth="">
				<Toolbar disableGutters>
					<Box
						// sx={{ display: { xs: 'flex', md: 'flex' }, m: 1 }}
						style={{display: 'flex', justifyContent: 'center', width: '100%'}}
					>
						<ThemeProvider theme={theme}>
							<ToggleButtonGroup
								color='primary'
								value={selection}
								exclusive
								onChange={handleChange}
								aria-label="Selection"
							>
								{pages.map((page, i) => {
									const pageStr = page.str
									const pageLink = page.link
									return (
										<ToggleButton
											key={i}
											value={pageStr}
											className="appbarButton"
											onClick={() => {
												navigate(`/${pageLink}`, {replace: false})
											}}
											sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: '15px', borderRadius: '30px'}}
										>
											{pageStr}
										</ToggleButton>
									)
								})}
							</ToggleButtonGroup>
						</ThemeProvider>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
