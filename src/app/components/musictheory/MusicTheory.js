import React from 'react'
import { QuestionPoolUtil } from '../../utils/QuestionPoolUtils'
import { playAudioCorrect, playAudioIncorrect } from '../../utils/AudioUtil.js'

import "../../css/musictheory/MusicTheory.css"
import "../../images/redcross.png"
import "../../images/greentick.png"

export class MusicTheory extends React.Component {
	constructor(props) {
    super(props)
		this.questionPool = new QuestionPoolUtil()
    this.state = {
  		book: 5,
			questionNum: 1,
			score: 0,
			answerSelected: -1,
			currentQuestion: -1,
			currentAnswer: []
    }
		this.renderQuestion = this.renderQuestion.bind(this)
		this.renderAnswer = this.renderAnswer.bind(this)
		this.handleAnswer = this.handleAnswer.bind(this)
    this.handleBook = this.handleBook.bind(this)
	}

	componentWillMount() {
		console.log('componentWillMount')
		this.loadQuestionAndAnswer()
	}

	loadQuestionAndAnswer() {
		console.log('loadQuestionAndAnswer before setState book ' + this.state.book)
		let qn = this.questionPool.pullQuestion(this.state.book)
		this.setState({
			currentQuestion: qn,
			currentAnswer: this.questionPool.pullAnswers(this.state.book)
		})
		console.log('loadQuestionAndAnswer after setState book ' + this.state.book)
	}

	handleAnswer(idx) {
		if (this.state.answerSelected >= 0) {
			if (this.state.currentAnswer[idx] == this.state.currentQuestion) {
				console.log('handleAnswer before setState')
				this.setState({
					questionNum: this.state.questionNum + 1,
					answerSelected: -1,
					currentQuestion: -1,
					currentAnswer: []
				})
				console.log('handleAnswer after setState')
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
			console.log('handleAnswer before setState')
			this.setState({
				score: newScore,
				answerSelected: idx
			})
			console.log('handleAnswer after setState')
		}
	}

	handleBook(book) {
		this.questionPool.clearUsedQuestionList()
		this.questionPool.clearSelectedAnswerList()
  	console.log('handleBook before setState')
		this.setState({
  		book: book,
			questionNum: 1,
			score: 0,
			answerSelected: -1,
			currentQuestion: -1,
			currentAnswer: []
		})
		this.loadQuestionAndAnswer()
  	console.log('handleBook after setState')
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
			          {this.questionPool.getAnswerOption(idx)}. {this.questionPool.getAnswerByIdx(this.state.book, ansIdx)} 
			        </button>
		        </li>)
	}

	renderQuestion() {
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
						<p>What does "{this.questionPool.getQuestionByIdx(this.state.book, this.state.currentQuestion)}" mean?</p>
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

	renderState(){
		return (
			<div className="floatClear">
				<h3>this.state.book = {this.state.book}</h3>
				<h3>this.state.questionNum = {this.state.questionNum}</h3>
 				<h3>this.state.currentQuestion = {this.state.currentQuestion}</h3>
				<h3>this.state.score = {this.state.score}</h3>
			</div>
			)
	}

	render() {
		return (
			<div>
				<h2 className="floatLeft">Music Theory</h2>
				<div className="floatRight">
					<div className="booksButton">
						<button type="button" className={this.state.book == 5 ? "BookButton currentBook" : "BookButton"} onClick={() => this.handleBook(5)}>Book 5</button>
					</div>
				</div>
				<div className="floatClear">
					{this.renderQuestion()}
				</div>
			</div>
		)
	}
}