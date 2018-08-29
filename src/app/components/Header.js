import React from 'react'
import { render } from 'react-dom'
import '../css/Header.css'
import '../images/henryhkyim.jpg'

export class Header extends React.Component {
	render() {
		return (
				<div className="headerContainer">
					<div className="contentContainer">
						<img id="profilePicture" src="images/henryhkyim.jpg"></img>
					  <div id="navbar">
					    <ul>
					      <li><a href="#">About me</a></li>
					      <li><a href="#">Stock Quote</a></li>
					      <li><a href="#">Protfolio View</a></li>
					    </ul>
					  </div>
					</div>
				</div>
			)
	}
}