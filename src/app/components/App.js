import React from 'react'
import { render } from 'react-dom'
import { Header } from './Header'
import '../css/App.css'
import '../images/green_up_arrow.gif'

export class App extends React.Component {
	render() {
		return (
				<div>
					<Header/>
					<div className="contentContainer">
						<h2>Welcome to Henry's Portal!</h2>
						<img src='images/green_up_arrow.gif'></img>
					</div>
				</div>
			)
	}
}