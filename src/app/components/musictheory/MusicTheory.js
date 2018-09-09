import React from 'react'
import { QuestionPoolUtil } from '../../utils/QuestionPoolUtils'
import { playAudioCorrect, playAudioIncorrect } from '../../utils/AudioUtil.js'
import { MusicTheoryQuestion } from './MusicTheoryQuestion'
import { MusicTheoryResult } from './MusicTheoryResult'
import { NewTest } from './NewTest'

import "../../css/musictheory/MusicTheory.css"

export class MusicTheory extends React.Component {
	constructor() {
    super()
		this.questionPool = new QuestionPoolUtil()
    this.state = {
  		book: 1,
    	correct: 0,
    	incorrect: 0,
    	total: 0,
			questionNum: 1
    }
    this.bookBtn = this.bookBtn.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
	}

	bookBtn(book) {
		this.questionPool.clearUsedQuestionList()
		this.questionPool.clearSelectedAnswerList()
		this.setState({
			book: book,
    	correct: 0,
    	incorrect: 0,
    	total: 0,
			questionNum: 1
		})
	}

	handleAnswer(idx) {
		let correct = this.state.correct
		let incorrect = this.state.incorrect
		let total = this.state.total + 1
		this.questionPool.addSelectedAnswerList(this.questionPool.getCurrentAnswerIdxList()[idx])
		if (this.questionPool.getCurrentAnswerIdxList()[idx] == this.questionPool.getCurrentQuestionIdx()) {
			correct = correct + 1
			playAudioCorrect()
		} else {
			incorrect = incorrect + 1
			playAudioIncorrect()
		}
		this.setState({
			correct: correct,
			incorrect: incorrect,
			total: total,
			questionNum: this.state.questionNum + 1
		})
	}

	render() {
		let contentJsx = ""
		if (this.state.book > 0) {
			contentJsx = (<div>
											<MusicTheoryQuestion book={this.state.book}
		                  	                   questionNum={this.state.questionNum} 
		                    	                 questionPool={this.questionPool} 
		                      	               handleAnswer={this.handleAnswer} />
			              </div>)
		}
		return (
			<div>
				<h2 className="floatLeft">Music Theory</h2>
				<div className="floatRight"><NewTest book={this.state.book} bookBtn={this.bookBtn}/></div>
				<div className="floatClear">
					{contentJsx}
				</div>
			</div>
		)
	}
}