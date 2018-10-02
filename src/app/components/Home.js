import React from 'react'
import { render } from 'react-dom'

import '../css/Home.css'
import '../images/henryhkyim.jpg'

export class Home extends React.Component {
	render() {
		return (
				<div className="mainContainer">
					<div className="leftCol">
						<div className="leftBodyContainer">
							<span>
								<h1>Henry Yim</h1>
								<h2>Software Developer</h2>
								<br/>
			          <p><a href="mailto:yimhingkwong@gmail.com">yimhingkwong@gmail.com</a>   <b>Email</b></p>
			          <p><a href="https://github.com/henryhkyim">https://github.com/henryhkyim</a>   <b>GitHub</b></p>
			    		  <p><a href="https://www.linkedin.com/in/henryyim">https://www.linkedin.com/in/henryyim</a>   <b>LinkedIn</b></p>
			    		</span>
		    		</div>
					</div>
					<div className="rightCol">
						<div className="rightBodyContainer">
							<img className="homePicture" src="images/henryhkyim.jpg"></img>
						</div>
					</div>
				</div>
			)
	}
}