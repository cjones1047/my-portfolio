import './Home.css'
import Pic1 from '../assets/5B7F4FD2-C222-4580-BCE2-1B49F04F6545_1_201_a.jpg'

import { useState } from "react";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ContactMe from './shared/ContactMe';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Home = (props) => {

	const {
		viewportWidth
	} = props

	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
        setExpanded(!expanded)
    };

	return (
		<>
			<div className="brand-statement-container">

					<img
						className='profile-image'
						src={Pic1}
						alt="Pic1"
						width={viewportWidth < 450 ? '90%' : 400}
						height={'auto'}
						style={{borderRadius: '20px', zIndex: 1}}
					/>

				{ viewportWidth > 800 
					?
						<div
							style={{ fontSize: '75px', fontWeight: 600, textAlign: 'right', margin: 'auto 0px 0px auto', justifyContent: 'right', alignItems: 'middle', zIndex: 2 }}
						>
							Hi,<br /> I'm <span style={{ color: 'rgba(151, 238, 255, 1)', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black' }}>Casey</span>
						</div>
					:
						null
				}
				
			</div>

			{ viewportWidth <= 800 
				?
					<div
						style={{ fontSize: '75px', fontWeight: 600, textAlign: 'left', margin: '0px 20px', justifyContent: 'right', alignItems: 'middle', zIndex: 1 }}
					>
						Hi,<br /> I'm <span style={{ color: 'rgba(151, 238, 255, 1)', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black' }}>Casey</span>
					</div>
				:
					null
			}

			<Card sx={{ margin: viewportWidth > 800 ? '20px auto' : '20px 20px', maxWidth: 800 }} raised={true}>

                <CardContent>
                    <Typography color="text.secondary" style={{textAlign: 'justify'}}>
						A creative, task-oriented and efficient software engineer. I strive to combine all the best I see in humanity every day with the consistency and scalability of the best computer programs. My perspective and my former experience as a full-time registered nurse have given me the communicational skills necessary to understand what problems affect people the most. It is with this understanding that I am able to most positively affect change for clients.
                    </Typography>
                </CardContent>
                
				<CardActions disableSpacing>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						style={{ borderRadius: '50px', border: '2px solid rgba(188, 188, 188, 1)' }}
						aria-expanded={expanded}
						aria-label="show more"
					>
						{expanded === false
							?
							<div style={{ fontSize: '30px' }}>Contact Me</div>
							:
							<div style={{ fontSize: '20px', transform: 'rotate(180deg)' }}>Close</div>
						}
						<ExpandMoreIcon style={{height: '40px', width: '40px'}} />
					</ExpandMore>
                </CardActions>

                <Collapse in={expanded} timeout="auto" mountOnEnter={false} unmountOnExit={false}>
                    <CardContent>
						<ContactMe />
                    </CardContent>
                </Collapse>
            </Card>
		</>
	)
}

export default Home
