import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import LoginForm from '../Containers/Login/LoginForm';


class LoginPage extends Component {
	render(){
		return (
			<div>
				<NavigationBar/>
				<div className="col-md-4 col-md-offset-4">
		          <LoginForm />
		        </div>
			</div>
		)
	}
}

export default LoginPage;