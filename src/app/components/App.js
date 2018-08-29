import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './Header'
import { AboutMe } from './AboutMe'
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
						<div className="contentContainer">
							<Switch>
							  <Redirect exact from="/" to="/aboutMe"/>
								<Route path="/aboutMe" exact component={AboutMe}/>
								<Route path="/flashGame" exact component={FlashGame}/>
								<Route path="/stockQuote" exact component={StockQuote}/>
								<Route path="/portfolio" exact component={Portfolio}/>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			)
	}
}