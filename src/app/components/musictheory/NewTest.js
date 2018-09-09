import React from "react"
import PropTypes from "prop-types"

import "../../css/musictheory/NewTest.css"

/* a stateless component */
export const NewTest = (props) => {
			// <button type="button" className="bookButton" onClick={() => props.bookBtn(5)}>Book 5</button>
	return (
		<div className="booksButton">
			<button type="button" className={props.book == 1 ? "BookButton currentBook" : "BookButton"} onClick={() => props.bookBtn(1)}>Book 1</button>
			<button type="button" className={props.book == 3 ? "BookButton currentBook" : "BookButton"} onClick={() => props.bookBtn(3)}>Book 3</button>
			<button type="button" className={props.book == 5 ? "BookButton currentBook" : "BookButton"} onClick={() => props.bookBtn(5)}>Book 5</button>
		</div>
	)
} 

NewTest.propTypes = {
	bookBtn: PropTypes.func,
	book: PropTypes.number
}