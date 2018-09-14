import React from "react"
import PropTypes from "prop-types"
import { GiftDrawing } from './GiftDrawing'

import "../../css/musictheory/MusicTheoryResult.css"

export class MusicTheoryResult extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {
  	let correctPct = this.props.correct / this.props.bounsCount * 100
  	if (correctPct > 100) {
  		correctPct = 100
  	}
  	let incorrectPct = this.props.incorrect / this.props.bounsCount * 100
  	if (incorrectPct > 100) {
  		incorrectPct = 100
  	}
		const correctBarStyle = {
		  width: correctPct + "%"
		}
		const incorrectBarStyle = {
		  width: incorrectPct + "%"
		}
		let completedJsx = ''
		if (this.props.correct == this.props.bounsCount) {
			completedJsx = (<div>
												<p>Congratulations! You got the bouns now!</p>
												<GiftDrawing/>
											</div>)
		}
		return (
			<div>
				<div id="correctResultContainer">
				  <div id="correctBar" style={correctBarStyle}>{this.props.correct}</div>
				</div>
				<div id="incorrectResultContainer">
				  <div id="incorrectBar" style={incorrectBarStyle}>{this.props.incorrect}</div>
				</div>
				{completedJsx}
			</div>
			)
	}

}

MusicTheoryResult.propTypes = {
	correct: PropTypes.number,
	incorrect: PropTypes.number,
	bounsCount: PropTypes.number
}