import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import {connect} from 'react-redux';

import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import CardComponent from '../Containers/Card/CardComponent'
import PageHead from '../Components/PageHead'
const cx = classNames.bind(styles);
const customStyle = {
	body : {
		backgroundColor : '#E84A5F'
	},
	container : {
		textAlign : 'center',
		width : '100%',
		height : '500px',
		lineHeight : '500px',
		backgroundColor : '#E84A5F'
	},
	MainAlarm : {
		display : 'inline-block',
		lineHeight : 'normal',
		verticalAlign : 'middle',
		color : '#fff',
		fontWeight : '200',
		fontSize : '130%'
	}
}

class IntroPage extends Component {

	constructor(props){
		super(props);
		this.state = {
            data : []
		}

	}

	render(){
		return (
			<div>
				<NavigationBar/>
				<PageHead/><br/><br/><br/><br/><br/>
				<div className={cx('container')} style={{textAlign : 'center',marginTop : '200px',color : '#fff'}}>
					준비중입니다.
				</div>
						 	
				
				
			</div>
		)
	}
}

export default connect(null,{})(IntroPage);