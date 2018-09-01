import React from "react"
import PropTypes from "prop-types"
import { QuestionPoolUtil } from "../../utils/QuestionPoolUtils"

export class FlashGameQuestion extends React.Component {

	constructor(props) {
		super(props)
		this.renderAnswer = this.renderAnswer.bind(this)
	}

	renderAnswer(ansIdx, idx) {
		return (<li key={idx}> 
							<button type="button" className="answerButton" onClick={() => this.props.handleAnswer(idx)}>
			          {this.props.questionPool.getAnswerOption(idx)}. {this.props.questionPool.getAnswerByIdx(ansIdx)} 
			        </button>
		        </li>)
	}

	render() {
		return (
				<div className="questionContainer">
					<h3>Question {this.props.questionNum}:</h3>
					<p>What does "{this.props.questionPool.getQuestionByIdx(this.props.questionPool.pullQuestion())}" mean?</p>
					<ul>
						{this.props.questionPool.pullAnswers(this.props.level+1).map(this.renderAnswer)}
					</ul>
				</div>
			)
	}
} 

FlashGameQuestion.propTypes = {
	questionPool: PropTypes.object,
	questionNum: PropTypes.number,
	level: PropTypes.number,
	handleAnswer: PropTypes.func
}