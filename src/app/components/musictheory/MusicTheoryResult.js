import React from "react"
import PropTypes from "prop-types"
import { QuestionPoolUtil } from "../../utils/QuestionPoolUtils"

import "../../css/musictheory/MusicTheoryResult.css"

export class MusicTheoryResult extends React.Component {

	constructor(props) {
		super(props)
		this.renderResult = this.renderResult.bind(this)
	}

	renderResult(qnIdx, idx) {
		let resultJsx = ""
		if (qnIdx != this.props.questionPool.getSelectedAnswerList()[idx]) {
			resultJsx = <p className="wrongAnswer">Your answer: {this.props.questionPool.getAnswerByIdx(this.props.book, this.props.questionPool.getSelectedAnswerList()[idx])}</p>
		}
		return (
			<div key={idx}>
				<h3>Question {idx + 1}:</h3>
			  <p>What does "{this.props.questionPool.getQuestionByIdx(this.props.book, qnIdx)}" mean?</p>
				<p>Answer: {this.props.questionPool.getAnswerByIdx(this.props.book, qnIdx)}</p>
				{resultJsx}
			</div>
			)
	}

	render() {
		return (
				<div className="resultContainer">
					{this.props.children}
					<hr/>
					{this.props.questionPool.getUsedQuestionList().map(this.renderResult)}
				</div>
			)
	}

}

MusicTheoryResult.propTypes = {
	questionPool: PropTypes.object,
	book: PropTypes.number
}