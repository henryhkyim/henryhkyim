import React from "react"
import PropTypes from "prop-types"

import "../../css/flashgame/NewGame.css"

/* a stateless component */
export const NewGame = (props) => {
			// <button type="button" className="LevelButton" onClick={() => props.levelBtn(5)}>Book 5</button>
	return (
		<div className="questionContainer">
			<p>Start a new game?</p>
			<button type="button" className="LevelButton" onClick={() => props.levelBtn(1)}>Book 1</button>
			<button type="button" className="LevelButton" onClick={() => props.levelBtn(3)}>Book 3</button>
		</div>
	)
} 

NewGame.propTypes = {
	levelBtn: PropTypes.func
}