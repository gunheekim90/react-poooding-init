import React, { Component } from 'react';
import { Route } from 'react-router';

import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import codePage from '../Pages/codePage';
import snippetPage from '../Pages/snippetPage';
import MoviePage from '../Pages/moviePage';

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
			</div>
		);
	}
}

export default RootRoute;