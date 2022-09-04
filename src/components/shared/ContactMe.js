import './ContactMe.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LinkedinLogo from '../../assets/linked-in-icon.png'
import GithubLogo from '../../assets/github-icon.png'

const theme = createTheme({
	palette: {
	  primary: {
		main: 'rgba(170, 170, 170, 1)',
	  },
	  secondary: {
		main: 'rgba(0, 0, 0, 1)',
	  },
	},
});

const ContactMe = () => {

	return (
        <>

            <div style={{fontSize: '30px', fontWeight: 600, marginBottom: '15px'}}>
                Contact information:
                
            </div>

            <div style={{float: 'left', marginBottom: '20px'}}>
                <Typography color="text.secondary" style={{fontSize: '20px', marginBottom: '5px'}}>
                    <EmailTwoToneIcon/>&nbsp;&nbsp;<a href="mailto:cjmj1047@gmail.com">cjmj1047@gmail.com</a>
                </Typography>
                
                <Typography color="text.secondary" style={{fontSize: '20px'}}>
                    <LocalPhoneTwoToneIcon/>&nbsp;&nbsp;<a href="tel:2197072088">(219) 707-2088</a>
                </Typography>
            </div>

            <ThemeProvider theme={theme}>
                <div style={{float: 'right', textAlign: 'right', marginBottom: '20px'}}>
                    <div>
                        <Button
                            className="info-button"
                            variant="contained"
                            color="primary"
                            href="https://www.linkedin.com/in/casey-jones-11113b83/"
                            rel="noreferrer" 
                            target="_blank"
                            size="large"
                            style={{marginBottom: '15px'}}
                        >
                            View my
                            <img
                                className='linkedin-icon'
                                src={LinkedinLogo}
                                alt="LinkedIn Logo"
                                height={'35px'}
                                width={'auto'}
                                style={{marginLeft: '10px'}}
                            />
                        </Button>
                    </div>
                    <div>
                        <Button
                            className="info-button"
                            variant="contained"
                            color="primary"     
                            href="https://github.com/cjones1047"
                            rel="noreferrer"
                            target="_blank"

                            size="large"
                        >
                            Check out my
                            <img
                                className='github-logo'
                                src={GithubLogo}
                                alt="GitHub Logo"
                                height={'35px'}
                                width={'auto'}
                                style={{marginLeft: '10px'}}
                            />
                        </Button>
                    </div>
                </div>
            </ThemeProvider>

        </>
	)
}

export default ContactMe
