import React, { Component } from 'react';
import { Route } from 'react-router';

import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

class RootRoute extends Component {
	render(){
		return (
			<div>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/signup" component={RegisterPage}/>
			</div>
		);
	}
}

export default RootRoute;