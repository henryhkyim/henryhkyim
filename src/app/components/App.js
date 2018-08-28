import React from 'react'
import { render } from 'react-dom'
import '../images/green_up_arrow.gif'
import '../css/App.css'

export class App extends React.Component {
	render() {
		return (
				<div>
					<h2>Welcome to Henry's Portal!</h2>
					<img src='images/green_up_arrow.gif'></img>
				</div>
			)
	}
}