import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'


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
class RegisterPage extends Component {
	render(){
		return (
			<div>
				<NavigationBar/>
				<div class="container" style={customStyle.container}>
					<p style={customStyle.MainAlarm}>
					  Snippets
					</p>
				</div>
			</div>
		)
	}
}

export default RegisterPage;