import React from "react"
import PropTypes from "prop-types"
import { QuestionPoolUtil } from "../../utils/QuestionPoolUtils"
import { playAudioCorrect, playAudioIncorrect } from '../../utils/AudioUtil.js'

import "../../css/musictheory/MusicTheoryQuestion.css"
import "../../images/redcross.png"
import "../../images/greentick.png"

export class MusicTheoryQuestion extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			questionNum: props.questionNum,
			score: 0,
			answerSelected: -1,
			currentQuestion: -1,
			currentAnswer: []
		}
		this.renderAnswer = this.renderAnswer.bind(this)
		this.handleAnswer = this.handleAnswer.bind(this)
	}

	componentWillMount() {
		this.loadQuestionAndAnswer()
	}

	loadQuestionAndAnswer() {
		let qn = this.props.questionPool.pullQuestion(this.props.book)
		this.setState({
			currentQuestion: qn,
			currentAnswer: this.props.questionPool.pullAnswers(this.props.book)
		})
	}

	handleAnswer(idx) {
		if (this.state.answerSelected >= 0) {
			if (this.state.currentAnswer[idx] == this.state.currentQuestion) {
				this.setState({
					questionNum: this.state.questionNum + 1,
					answerSelected: -1,
					currentQuestion: -1,
					currentAnswer: []
				})
				this.loadQuestionAndAnswer()
			}
		} else {
			let newScore = this.state.score;
			if (this.state.currentAnswer[idx] == this.state.currentQuestion) {
				newScore = newScore + 1
				playAudioCorrect()
			} else {
				playAudioIncorrect()
			}
			this.setState({
				score: newScore,
				answerSelected: idx
			})
		}
	}

	renderAnswer(ansIdx, idx) {
		let className = "answerButton";
		if (this.state.answerSelected >= 0) {
			if (ansIdx == this.state.currentQuestion) {
				className += " green"
			} else {
				className += " red"
			}
		}
		return (<li key={idx}> 
							<button type="button" className={className} onClick={() => this.handleAnswer(idx)}>
			          {this.props.questionPool.getAnswerOption(idx)}. {this.props.questionPool.getAnswerByIdx(this.props.book, ansIdx)} 
			        </button>
		        </li>)
	}

	render() {
		let resultImageJsx = ""
		let hintJsx = ""
		if (this.state.answerSelected >= 0) {
			if (this.state.currentAnswer[this.state.answerSelected] == this.state.currentQuestion) {
				resultImageJsx = <img src="./images/greentick.png"></img>
			} else {
				resultImageJsx = <img src="./images/redcross.png"></img>
			}
			hintJsx = <p>Click the correct answer to move on</p>
		}
		return (
				<div className="questionContainer">
					<div className="floatLeft">
						<h3>Question {this.state.questionNum}:</h3>
						<p>What does "{this.props.questionPool.getQuestionByIdx(this.props.book, this.state.currentQuestion)}" mean?</p>
						<div className="floatLeft">
							<ul>
								{this.state.currentAnswer.map(this.renderAnswer)}
							</ul>
							{hintJsx}
						</div>
						<div className="resultImage">
							{resultImageJsx}
						</div>
					</div>
					<div className="floatRight">
						<h3>Score: {this.state.score}</h3>
					</div>
				</div>
			)
	}
} 

MusicTheoryQuestion.propTypes = {
	questionPool: PropTypes.object,
	questionNum: PropTypes.number,
	book: PropTypes.number,
	handleAnswer: PropTypes.func
}