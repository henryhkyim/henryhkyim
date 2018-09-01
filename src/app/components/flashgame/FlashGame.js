import React from 'react'
import { QuestionPoolUtil } from '../../utils/QuestionPoolUtils'
import { FlashGameQuestion } from './FlashGameQuestion'
import { FlashGameResult } from './FlashGameResult'
import { NewGame } from './NewGame'

import "../../css/flashgame/FlashGame.css"

export class FlashGame extends React.Component {
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
		} else {
			incorrect = incorrect + 1
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
			contentJsx = <NewGame levelBtn={this.levelBtn} />
			headingJsx = ""
		} else {
			if (this.state.total == 10) {
				contentJsx = (
					<FlashGameResult questionPool={this.questionPool}>
						<NewGame levelBtn={this.levelBtn} />
					</FlashGameResult>
				)
				headingJsx = <div>Level: {this.state.level}  You got {this.state.correct} out of {this.state.total}!</div>
			} else {
				contentJsx = (<FlashGameQuestion level={this.state.level}
				                                 questionNum={this.state.questionNum} 
				                                 questionPool={this.questionPool} 
				                                 handleAnswer={this.handleAnswer} />
				             )
				headingJsx = (<div>
										    Level: {this.state.level} Correct: {this.state.correct} Incorrect: {this.state.incorrect} Total: {this.state.total}
										  </div>
										 )
			}
		}
		return (
			<div>
				<h2 className="floatLeft">Flash Game</h2>
				<h2 className="floatRight">{headingJsx}</h2>
				{contentJsx}
			</div>
		)
	}
}