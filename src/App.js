import './App.css'

import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import Home from './components/Home.js'
import Project from './components/projects/Project'

const App = () => {

	const [msgAlerts, setMsgAlerts] = useState([])
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

	const resizeWindow = () => {
		setViewportWidth(window.innerWidth)
	}

	window.onresize = resizeWindow

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	return (
		<Fragment>
			<Header />
			<Routes>
				<Route 
					path='/'
					element={
						<Home
							msgAlert={msgAlert}
							viewportWidth={viewportWidth}
						/>
					} 
				/>
				<Route 
					path='/my-projects' 
					element={
						<Project 
							msgAlert={msgAlert}
							viewportWidth={viewportWidth}
						/>
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
