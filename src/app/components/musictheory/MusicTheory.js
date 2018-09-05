import React from 'react'
import { QuestionPoolUtil } from '../../utils/QuestionPoolUtils'
import { playAudioCorrect, playAudioIncorrect } from '../../utils/AudioUtil.js'
import { MusicTheoryQuestion } from './MusicTheoryQuestion'
import { MusicTheoryResult } from './MusicTheoryResult'
import { NewTest } from './NewTest'

import "../../css/musictheory/MusicTheory.css"

export class MusicTheoryTest extends React.Component {
	constructor() {
    super()
		this.questionPool = new QuestionPoolUtil()
    this.state = {
  		level: -1,
    	correct: 0,
    	incorrect: 0,
    	total: 0
    }
    this.levelBtn = this.levelBtn.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
	}

	levelBtn(level) {
		this.questionPool.clearUsedQuestionList()
		this.questionPool.clearSelectedAnswerList()
		this.setState({
			level: level,
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
		let headingJsx = ""
		if (this.state.level == -1) {
			contentJsx = <NewTest levelBtn={this.levelBtn} />
			headingJsx = ""
		} else {
			if (this.state.total == 10) {
				contentJsx = (
					<MusicTheoryResult book={this.state.level} questionPool={this.questionPool}>
						<NewTest levelBtn={this.levelBtn} />
					</MusicTheoryResult>
				)
				headingJsx = <div>Book: {this.state.level}  You got {this.state.correct} out of {this.state.total}!</div>
			} else {
				contentJsx = (<MusicTheoryQuestion level={this.state.level}
				                                 questionNum={this.state.questionNum} 
				                                 questionPool={this.questionPool} 
				                                 handleAnswer={this.handleAnswer} />
				             )
				headingJsx = (<div>
										    Question from Book {this.state.level}
										  </div>
										 )
			}
		}
		return (
			<div>
				<h2 className="floatLeft">Music Theory</h2>
				<h2 className="floatRight">{headingJsx}</h2>
				{contentJsx}
			</div>
		)
	}
}