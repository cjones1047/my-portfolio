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

import { Link } from "@mui/material";

const ContactMe = () => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

    let navigate = useNavigate()

	return (
        <>

            <div style={{fontSize: '30px', fontWeight: 600, marginBottom: '15px'}}>
                Contact information:
                
            </div>

            <Typography color="text.secondary" style={{fontSize: '20px', marginBottom: '5px'}}>
                <EmailTwoToneIcon/>&nbsp;&nbsp;<a href="mailto:cjmj1047@gmail.com">cjmj1047@gmail.com</a>
            </Typography>
            
            <Typography color="text.secondary" style={{fontSize: '20px'}}>
                <LocalPhoneTwoToneIcon/>&nbsp;&nbsp;<a href="tel:2197072088">(219) 707-2088</a>
            </Typography>

        </>
	)
}

export default ContactMe
