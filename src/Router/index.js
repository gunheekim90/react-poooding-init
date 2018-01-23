import React, { Component } from 'react';
import { Route } from 'react-router';

import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import codePage from '../Pages/codePage';
import snippetPage from '../Pages/snippetPage';

class RootRoute extends Component {
	render(){
		return (
			<div>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/signup" component={RegisterPage}/>
				<Route exact path="/code" component={codePage}/>
				<Route exact path="/snippet" component={snippetPage}/>
			</div>
		);
	}
}

export default RootRoute;