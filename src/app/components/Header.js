import React from 'react'
import { render } from 'react-dom'
import { NavLink } from "react-router-dom"

import '../css/Header.css'
import '../images/henryhkyim.jpg'

export class Header extends React.Component {
	render() {
		return (
				<div className="headerContainer">
					<div className="mainContainer">
					  <div id="navbar">
					    <ul>
					    	<li><img id="profilePicture" src="images/henryhkyim.jpg"></img></li>
					      <li><NavLink to="/home" activeClassName="currentPage">Home</NavLink></li>
					      <li><NavLink to="/flashGame" activeClassName="currentPage">Flash Game</NavLink></li>
					      <li><NavLink to="/stockQuote" activeClassName="currentPage">Stock Quote</NavLink></li>
					      <li><NavLink to="/portfolio" activeClassName="currentPage">Portfolio</NavLink></li>
					    </ul>
					  </div>
					</div>
				</div>
			)
	}
}