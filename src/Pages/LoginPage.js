import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import LoginForm from '../Containers/Login/LoginForm';
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import PageHead from '../Components/PageHead'
const cx = classNames.bind(styles);

class LoginPage extends Component {
	render(){
		return (
			<div>
				<NavigationBar/>
				<PageHead/>
				<div>
		          <LoginForm/>
		        </div>
			</div>
		)
	}
}

export default LoginPage;