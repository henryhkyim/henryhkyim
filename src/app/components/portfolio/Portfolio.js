import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

export class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stockCode: '',
			stockQty: '',
			stockPrice: '',
			portfolio: [...this.props.portfolio]
		}
		this.handleStockCodeChange = this.handleStockCodeChange.bind(this)
		this.handleStockQtyChange = this.handleStockQtyChange.bind(this)
		this.handleStockPriceChange = this.handleStockPriceChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.renderPnL = this.renderPnL.bind(this)
	}

	handleStockCodeChange(event) {
		this.setState({
			stockCode: event.target.value
		})
	}

	handleStockQtyChange(event) {
		this.setState({
			stockQty: event.target.value
		})
	}

	handleStockPriceChange(event) {
		this.setState({
			stockPrice: event.target.value
		})
	}

	handleAdd() {
		const obj = {stockCode: this.state.stockCode, stockQty: this.state.stockQty, stockPrice: this.state.stockPrice}
		this.setState({
				portfolio: [...this.state.portfolio, obj]
		})
	}

	renderPnL(stockItem, index) {
		return (
			<div key={index}>
				{stockItem.stockCode}, {stockItem.stockQty}, {stockItem.stockPrice}
			</div>
		)
	}

	render() {
		return (
			<div className="contentContainer">
				<h2>Portfolio</h2>
				<div>
					<p>This is a reactjs sample demostrating the portfolio P/L with real time quote data refreshing.</p>
					<p className="redbold">*** This is just a sample page, the price are hypothetical and random generated. ***</p>
				</div>
				<hr/>
        <label>
          Stock code:
          <input type="text" value={this.state.stockCode} onChange={this.handleStockCodeChange} />
          Quantity:
          <input type="text" value={this.state.stockQty} onChange={this.handleStockQtyChange} />
          Price:
          <input type="text" value={this.state.stockPrice} onChange={this.handleStockPriceChange} />
        </label>
        <button type="button" onClick={() => this.handleAdd()}>Add</button>
      	<hr/>
				<span className="floatClear alignCenter">
					{this.state.portfolio.map(this.renderPnL)}
				</span>
				<div className="clearFloat"></div>
			</div>
			)
	}
}

Portfolio.propTypes = {
	portfolio: PropTypes.array
}