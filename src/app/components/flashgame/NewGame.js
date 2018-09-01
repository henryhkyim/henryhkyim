import React from "react"
import PropTypes from "prop-types"

import "../../css/flashgame/NewGame.css"

/* a stateless component */
export const NewGame = (props) => {
	return (
		<div className="questionContainer">
			<p>Start a new game?</p>
			<button type="button" className="LevelButton" onClick={() => props.levelBtn(1)}>Level 1</button>
			<button type="button" className="LevelButton" onClick={() => props.levelBtn(2)}>Level 2</button>
			<button type="button" className="LevelButton" onClick={() => props.levelBtn(3)}>Level 3</button>
		</div>
	)
} 

NewGame.propTypes = {
	levelBtn: PropTypes.func
}