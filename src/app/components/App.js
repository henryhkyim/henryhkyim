import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'
import { FlashGame } from './flashgame/FlashGame'
import { StockQuote } from './stockquote/StockQuote'
import { Portfolio } from './Portfolio'
import '../css/App.css'

export class App extends React.Component {
	render() {
		let stockList = ["00005.HK", "00006.HK", "00700.HK", "07336.HK", "00005.HK", "00006.HK", "00700.HK", "07336.HK",
									   "00005.HK", "00006.HK"]
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
								<Route path="/flashGame" exact component={FlashGame}/>
								<Route path="/stockQuote" exact component={() => <StockQuote stockList={stockList}/>}/>
								<Route path="/portfolio" exact component={Portfolio}/>
							</Switch>
						</div>
						<div className="mainContainer">
							<footer>
								<p>Copyright &copy 2018 by Henry Yim</p>
							</footer>
						</div>
					</div>
				</BrowserRouter>
			)
	}
}