import React from 'react'
import { QuestionPoolUtil } from '../../utils/QuestionPoolUtils'
import { playAudioCorrect, playAudioIncorrect } from '../../utils/AudioUtil.js'
import { MusicTheoryResult } from './MusicTheoryResult'

import "../../css/musictheory/MusicTheory.css"
import "../../images/redcross.png"
import "../../images/greentick.png"

const BOUNS_COUNT = 50

export class MusicTheory extends React.Component {
	constructor(props) {
    super(props)
		this.questionPool = new QuestionPoolUtil()
    this.state = {
  		book: 1,
			questionNum: 1,
			score: 0,
			incorrect: 0,
			answerSelected: -1,
			currentQuestion: -1,
			currentQuestionText: '',
			currentAnswer: []
    }
		this.renderQuestion = this.renderQuestion.bind(this)
		this.renderAnswer = this.renderAnswer.bind(this)
		this.handleAnswer = this.handleAnswer.bind(this)
    this.handleBook = this.handleBook.bind(this)
	}

	componentWillMount() {
		this.loadQuestionAndAnswer(this.state.book)
	}

	loadQuestionAndAnswer(book) {
		let questionIdx = this.questionPool.pullQuestion(book)
		this.setState({
			currentQuestion: questionIdx,
			currentQuestionText: this.questionPool.getQuestionByIdx(book, questionIdx),
			currentAnswer: this.questionPool.pullAnswers(book)
		})
	}

	handleAnswer(idx) {
		if (this.state.answerSelected >= 0) {
			if (this.state.score < BOUNS_COUNT) {
				if (this.state.currentAnswer[idx] == this.state.currentQuestion) {
					this.setState({
						questionNum: this.state.questionNum + 1,
						answerSelected: -1,
						currentQuestion: -1,
						currentQuestionText: '',
						currentAnswer: []
					})
					this.loadQuestionAndAnswer(this.state.book)
				}
			}
		} else {
			let newScore = this.state.score;
			let newIncorrect = this.state.incorrect;
			if (this.state.currentAnswer[idx] == this.state.currentQuestion) {
				newScore = newScore + 1
				playAudioCorrect()
			} else {
				newIncorrect = newIncorrect + 1
				playAudioIncorrect()
			}
			this.setState({
				score: newScore,
				incorrect: newIncorrect,
				answerSelected: idx
			})
		}
	}

	handleBook(book) {
		this.questionPool.clearUsedQuestionList()
		this.questionPool.clearSelectedAnswerList()
		this.setState({
  		book: book,
			questionNum: 1,
			score: 0,
			incorrect: 0,
			answerSelected: -1
		})
		this.loadQuestionAndAnswer(book)
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
			if (this.state.score < BOUNS_COUNT) {
				hintJsx = <p>Click the correct answer to move on</p>
			}
		}
		return (
				<div className="questionContainer">
					<div className="floatLeft">
						<h3>Question {this.state.questionNum}:</h3>
						<p>What does "{this.state.currentQuestionText}" mean?</p>
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
				<h3>this.state.currentAnswer = {this.state.currentAnswer}</h3>
			</div>
			)
	}

	render() {
				// <div>
				// 	{this.renderState()}
				// </div>
		return (
			<div>
				<h2 className="floatLeft">Music Theory</h2>
				<div className="floatRight">
					<div className="booksButton">
						<button type="button" className={this.state.book == 1 ? "BookButton currentBook" : "BookButton"} onClick={() => this.handleBook(1)}>Book 1</button>
						<button type="button" className={this.state.book == 3 ? "BookButton currentBook" : "BookButton"} onClick={() => this.handleBook(3)}>Book 3</button>
						<button type="button" className={this.state.book == 5 ? "BookButton currentBook" : "BookButton"} onClick={() => this.handleBook(5)}>Book 5</button>
					</div>
				</div>
				<div className="floatClear">
					<MusicTheoryResult bounsCount={BOUNS_COUNT} correct={this.state.score} incorrect={this.state.incorrect}/>
				</div>
				<div className="floatClear">
					{this.renderQuestion()}
				</div>
			</div>
		)
	}
}