import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test } from '../API/data';


class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			test : false
		}
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

	render(){
		return (
			<div>
				<NavigationBar/>
				MainPage
				<button
				  onClick={this.testHandle.bind(this)}>
					test
				  </button>
			</div>
		)
	}
}

MainPage.PropTypes = {
	test : PropTypes.func.isRequired
}
export default connect(null,{ test })(MainPage);