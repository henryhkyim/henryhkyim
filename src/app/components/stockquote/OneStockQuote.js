import React from 'react'
import PropTypes from 'prop-types'
import { toTwoDecimal } from '../../utils/NumberUtils.js'
import { getStockPrice, getStockDesc, getPrevClosePrice } from '../../utils/StockQuoteUtils.js'

import "../../images/cross_icon.jpg"

import '../../css/stockquote/OneStockQuote.css'

export class OneStockQuote extends React.Component {

	constructor(props) {
		super(props)
		const currentPrice = toTwoDecimal(getStockPrice(props.stock))
		const prevClosePrice = toTwoDecimal(getPrevClosePrice(props.stock))

		this.state = {
			loading: true,
			price: currentPrice,
			priceChange: toTwoDecimal(currentPrice - prevClosePrice)
		}
		this.handleInterval = null
		this.refreshPrice = this.refreshPrice.bind(this)
		this.renderState = this.renderState.bind(this)
	}

	componentDidMount() {
	  this.handleInterval = setInterval(this.refreshPrice, Math.max(10000 * Math.random(), 3000))
	}

	componentWillUnmount() {
		clearInterval(this.handleInterval)
	}	

	refreshPrice() {
		const currentPrice = toTwoDecimal(getStockPrice(this.props.stock))
		const prevClosePrice = toTwoDecimal(getPrevClosePrice(this.props.stock))
		this.setState({
			loading: false,
			price: currentPrice,
			priceChange: toTwoDecimal(currentPrice - prevClosePrice)
		})
	}

	renderState() {
		console.log(`this.state.loading ${this.state.loading}`)
		return (
			<div>
				<p>state.loading: {this.state.loading ? "true" : "false"}</p>
				<p>state.price: {this.state.price}</p>
				<p>state.priceChange: {this.state.priceChange}</p>
			</div>
			)
	}

	render() {
		let priceClass = ''
		if (this.state.priceChange > 0) {
			priceClass = 'quoteBoxGreen'
		} else if (this.state.priceChange == 0) {
			priceClass = 'quoteBoxBlack'
		} else {
			priceClass = 'quoteBoxRed'
		}
		const priceJsx = (<div className="quoteBoxPrice">
		  	            <h1 className={priceClass}>{this.state.price}</h1>
									  <p className={priceClass}>{this.state.priceChange}</p>
									</div>)
		let loadingStyle = {display:"block"}
		let quoteBoxContentStyle = {display: "none"}
    if (!this.state.loading) {
      loadingStyle = {display: "none"}
      quoteBoxContentStyle = {display:"block"}
    }
		return (
			<div className="quoteBox">
				<div className="loader" style={loadingStyle}></div>
				<div className="quoteBoxContent" style={quoteBoxContentStyle}>
					<img className="crossIcon" src="./images/cross_icon.jpg" onClick={() => this.props.handleDelete(this.props.stock)} />
					<h3>{this.props.stock}</h3>
					<p>{getStockDesc(this.props.stock)}</p>
					{priceJsx}
				</div>
			</div>
		)
	}
}

OneStockQuote.propTypes = {
	stock: PropTypes.string,
	handleDelete: PropTypes.func
}