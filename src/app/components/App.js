import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'
import { FlashGame } from './FlashGame'
import { StockQuote } from './StockQuote'
import { Portfolio } from './Portfolio'
import '../css/App.css'

export class App extends React.Component {
	render() {
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
								<Route path="/stockQuote" exact component={StockQuote}/>
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