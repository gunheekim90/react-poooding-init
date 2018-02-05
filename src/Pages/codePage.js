import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard'
const cx = classNames.bind(styles);

class RegisterPage extends Component {
	render(){
		return (
			<div>
				<NavigationBar/>
				<div className={cx('mainContainerTitle')}>
					<p> Poo<span style={{color : 'yellow'}}>o</span>ooding Dev</p>

				</div>
				<BigCard/>
			</div>
		)
	}
}

export default RegisterPage;