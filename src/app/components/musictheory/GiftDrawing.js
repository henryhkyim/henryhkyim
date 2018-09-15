import React from "react"
import PropTypes from "prop-types"

import "../../css/musictheory/GiftDrawing.css"

import "../../images/apple.jpg"
import "../../images/egg_waffle.jpg"
import "../../images/fish_ball.jpg"
import "../../images/water.jpg"
import "../../images/siu_mai.jpg"
import "../../images/ice_cream.jpg"
import "../../images/violin.jpg"
import "../../images/string_cheese.jpg"

export class GiftDrawing extends React.Component {

	constructor(props) {
		super(props)
		this.imagesName = ["Apple", "Egg waffle", "Fish ball", "Water", "Siu Mai", "Ice-cream", "Violin practice", "String Cheese"]
		this.images = ["apple.jpg", "egg_waffle.jpg", "fish_ball.jpg", "water.jpg", "siu_mai.jpg", "ice_cream.jpg", "violin.jpg", "string_cheese.jpg"]
		this.intervalHandle = null
		this.state = {
			draw: 0,
			imageIdx: 0
		}
		this.changeImage = this.changeImage.bind(this)
		this.handleDraw = this.handleDraw.bind(this)
		this.draw = this.draw.bind(this)
	}

	changeImage() {
		this.setState({
			imageIdx: (this.state.imageIdx + 1) % this.images.length
		})
	}

	handleDraw() {
		this.intervalHandle = setInterval(this.changeImage, 100)
		this.setState({
			draw: 1
		})
	}

	draw() {
		clearInterval(this.intervalHandle)
		this.setState({
			draw: 2
		})
	}

	render() {
  	let drawJsx = ''
  	if (this.state.draw == 0) {
  		drawJsx = <button onClick={() => this.handleDraw()}>Click to draw your gift!</button>
  	} else {
	  	let image = "./images/" + this.images[this.state.imageIdx]
  		drawJsx = (<img className="drawImage" src={image} onClick={() => this.draw()}/>)
  		if (this.state.draw == 2) {
	  		drawJsx = (<div> 
	  							   <img className="drawImage" src={image}/>
	  							   <p>Congratulations! You got {this.imagesName[this.state.imageIdx]}! Ask your Daddy for one!</p>
	  							 </div>)
  		}
  	}
  	return drawJsx
	}

}
