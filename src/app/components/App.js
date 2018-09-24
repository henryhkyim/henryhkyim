import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'
import { MusicTheory } from './musictheory/MusicTheory'
import { StockQuote } from './stockquote/StockQuote'
import { Portfolio } from './portfolio/Portfolio'
import '../css/App.css'

export class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			copyrightYear: new Date().getFullYear()
		}
	}

	render() {
		let stockList = ["00002.HK", "00005.HK", "00006.HK", "00011.HK", "00066.HK", "00388.HK", "00700.HK", "00823.HK", 
		                 "07336.HK", "02318.HK", "02800.HK", "07336.HK"]
		// let stockList = ["00002.HK"] 
		let portfolioStockList = ["00005.HK", "00006.HK", "02800.HK"]
		let portfolio = [{stockCode: "00005.HK", stockQty: 800, stockPrice: 70}, 
		                 {stockCode: "00006.HK", stockQty: 1500, stockPrice: 61.97},
		                 {stockCode: "02800.HK", stockQty: 5000, stockPrice: 28.265}]
		return (
				<BrowserRouter>
					<div>
						<div>
							<Header/>
						</div>
						<div className="mainContainer">
							<Switch>
							  <Redirect exact from="/" to="/home"/>
								<Route path="/home" exact component={Home}/>
								<Route path="/musicTheory" exact component={MusicTheory}/>
								<Route path="/stockQuote" exact component={() => <StockQuote stockList={stockList}/>}/>
								<Route path="/portfolio" exact component={() => <Portfolio portfolio={portfolio}/>}/>
							</Switch>
						</div>
						<div className="mainContainer">
							<footer>
								<p>Copyright © {this.state.copyrightYear} by Henry Yim</p>
							</footer>
						</div>
					</div>
				</BrowserRouter>
			)
	}
}