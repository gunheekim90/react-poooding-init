import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test,getAllData } from '../API/data';
import ModalButton from '../Components/ModalButton'


class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			test : false
		}
		this.test = this.testHandle.bind(this);
	}

	componentWillMount(){
		console.log("componentWillMount : Data Load...");
		this.props.getAllData().then((res)=>{
			console.log(res);
		})	

	}

	async testHandle(e){
		e.preventDefault();
		let testData = {
			success : 200,
			message : "test 입니당"
		}
		await this.props.test(testData).then((res)=>{
			console.log(res);
		})
	}

	// test(){
	// 	this.test.then((res)=>{
	// 		console.log(res)
	// 	})
	// }

	render(){
		return (
			<div>
				<NavigationBar/>
				MainPage

				<ModalButton/>
			</div>
		)
	}
}

MainPage.PropTypes = {
	test : PropTypes.func.isRequired,
	getAllData : PropTypes.func.isRequired
}

export default connect(null,{ test,getAllData })(MainPage);