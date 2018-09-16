import React from 'react'
import PropTypes from 'prop-types'
import { toTwoDecimal } from '../../utils/NumberUtils.js'
import { getStockPrice, getStockDesc, getPrevClosePrice } from '../../utils/StockQuoteUtils.js'

import '../../css/stockquote/OneStockQuote.css'

export class OneStockQuote extends React.Component {

	constructor(props) {
		super(props)
		this.handleInterval
		const currentPrice = toTwoDecimal(getStockPrice(props.stock))
		const prevClosePrice = toTwoDecimal(getPrevClosePrice(props.stock))
		this.state = {
			price: currentPrice,
			priceChange: toTwoDecimal(currentPrice - prevClosePrice)
		}
		this.refreshPrice = this.refreshPrice.bind(this)
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
			price: currentPrice,
			priceChange: toTwoDecimal(currentPrice - prevClosePrice)
		})
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
		return (
			<div className="quoteBox">
				<h3>{this.props.stock}</h3>
				<p>{getStockDesc(this.props.stock)}</p>
				{priceJsx}
			</div>
		)
	}
}

OneStockQuote.propTypes = {
	stock: PropTypes.string
}