import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

import LinkedinLogo from '../../assets/linked-in-icon.png'
import GithubLogo from '../../assets/github-icon.png'

const ContactMe = () => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

    let navigate = useNavigate()

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
            

            <div style={{float: 'right', textAlign: 'right', marginBottom: '20px'}}>
                <div>
                    <Button 
                        variant="outlined" 
                        href="#contained-buttons"
                        style={{fontWeight: 600, marginBottom: '10px'}}
                    >
                        View my
                        <img
                            className='linkedin-icon'
                            src={LinkedinLogo}
                            alt="LinkedIn Logo"
                            height={'fit-content'}
                            width={'auto'}
                            // style={{borderRadius: '20px', zIndex: 1}}
                        />
                    </Button>
                </div>
                <div>
                    <Button 
                        variant="outlined"       
                        href="#contained-buttons"
                        style={{fontWeight: 600}}
                    >
                        Check out my GitHub
                    </Button>
                </div>
            </div>

        </>
	)
}

export default ContactMe
