import React from 'react'
import PropTypes from 'prop-types'

import { OneStockQuote } from './OneStockQuote.js'
import { isStockAvailable } from '../../utils/StockQuoteUtils.js'

import '../../css/stockquote/StockQuote.css'

export class StockQuote extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			stockList: [...this.props.stockList],
			stockCode: "",
			message: ""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.renderQuote = this.renderQuote.bind(this)
	}

	handleDelete(filterCode) {
		let finalList = this.state.stockList.filter((stockCode) => stockCode != filterCode)
		this.setState({
			stockList: finalList
		});
	}

	handleAdd() {
		if (this.state.stockCode == '') {
			this.setState({
				message: " " + "Please input stock code to be added!"
			})
		} else {
			if (isStockAvailable(this.state.stockCode)) {
				if (this.state.stockList.includes(this.state.stockCode)) {
					this.setState({
						message: " " + this.state.stockCode + " is already added!"
					})
				} else {
					this.setState({
						stockList: [...this.state.stockList, this.state.stockCode],
						message: ""
					})
				}
			} else {
				this.setState({
					message: " " + this.state.stockCode + " does not exist!"
				})
			}
		}
	}

	handleChange(event) {
		this.setState({
			stockCode: event.target.value
		});
	}

	renderQuote(symbol, index) {
		return <OneStockQuote key={index} stock={symbol} handleDelete={this.handleDelete} />
	}

	render() {
		return (
			<div className="contentContainer">
				<h2>Stock Quote</h2>
				<div>
					<p>This is a reactjs sample demostrating the real time quote data refreshing.</p>
					<p className="redbold">*** This is just a sample page, the price are hypothetical and random generated. ***</p>
				</div>
				<hr/>
        <label>
          Stock code:
          <input type="text" value={this.state.stockCode} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={() => this.handleAdd()}>Add</button>
        <p className="inlineMessage">{this.state.message}</p>
      	<hr/>
				<span className="floatClear alignCenter">
					{this.state.stockList.map(this.renderQuote)}
				</span>
				<div className="clearFloat"></div>
			</div>
		)
	}
}

StockQuote.propTypes = {
	stockList: PropTypes.array
}