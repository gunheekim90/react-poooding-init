import React, { Component } from 'react';
import { Route } from 'react-router';

import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import codePage from '../Pages/codePage';
import codeEachPage from '../Pages/codeEachPage';
import snippetPage from '../Pages/snippetPage';
import MoviePage from '../Pages/moviePage';

import codeTagPage from '../Pages/codeTagPage';
import codeThemePage from '../Pages/codeThemePage';

import HomePage from '../Pages/HomePage';
import IntroPage from '../Pages/IntroPage';

import terminalPage from '../Pages/terminalPage';

class RootRoute extends Component {
	render(){
		return (
			<div>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/signup" component={RegisterPage}/>
				<Route exact path="/code" component={codePage}/>
				<Route exact path="/snippet" component={snippetPage}/>
				<Route exact path="/movie" component={MoviePage}/>
				<Route exact path="/code/:id" component={codeEachPage}/>
				<Route exact path="/code/tag/:id" component={codeTagPage}/>
				<Route exact path="/code/theme/:id" component={codeThemePage}/>
				<Route exact path="/homepage" component={HomePage}/>
				<Route exact path="/intro" component={IntroPage}/>
				<Route exact path="/terminal" component={terminalPage}/>
			</div>
		);
	}
}

export default RootRoute;