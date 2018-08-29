import React from 'react'
import { render } from 'react-dom'

import '../css/AboutMe.css'

export class AboutMe extends React.Component {
	render() {
		return (
				<div className="mainContainer">
	    		<h2>Contact me!</h2>
	    		<div className="contactInfo">
	          <a href="mailto:yimhingkwong@yahoo.com.hk">Email</a>
	          <a href="https://github.com/henryhkyim">GitHub</a>
	    		  <a href="https://www.linkedin.com/in/henryyim">LinkedIn</a>
	    		</div>
	    		<p>Copyright &copy 2018 by Henry Yim</p>
				</div>
			)
	}
}