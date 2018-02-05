import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import LoginForm from '../Containers/Login/LoginForm';
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LoginPage extends Component {
	render(){
		return (
			<div>
				<NavigationBar/>
				<div>
		          <LoginForm/>
		        </div>
			</div>
		)
	}
}

export default LoginPage;