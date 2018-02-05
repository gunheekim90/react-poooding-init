import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test,getAllData,pushData } from '../API/data';
import ModalButton from '../Components/ModalButton'
import CardComponent from '../Containers/Card/CardComponent'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import ScrollArea from 'react-scrollbar';

const cx = classNames.bind(styles);

class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			test : false,
			enableScroll : false,
			_scroller : '',
			scrollLeft : '',
			clientX : ''
		}
		
	}

	componentWillMount(){
		console.log("componentWillMount : Data Load...");
		this.props.getAllData().then((res)=>{
			// console.log(res);
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

	mouseDownEvent(evt){
		// console.log(evt.clientX);
		// console.log(ReactDOM.findDOMNode(this.mainContainer).scrollLeft)
		this.setState({
			enableScroll : true,
			scrollLeft : ReactDOM.findDOMNode(this.mainContainer).scrollLeft,
			clientX : evt.clientX
		})
	}

	mouseUpEvent(evt){
		this.setState({
			enableScroll : false,
			scrollLeft: 0
		})
	}

	onMouseMoveEvent(evt){
		if(this.state.enableScroll){
			// console.log(ReactDOM.findDOMNode(this.mainContainer).scrollLeft)
			// scrollLeft - clientX + event.clientX;
			ReactDOM.findDOMNode(this.mainContainer).scrollLeft = this.state.scrollLeft + this.state.clientX - evt.clientX;	
			
		}
		
	}

	
	render(){
		const { renderData } = this;
		return (
			<div>
				<NavigationBar/>
				<div className={cx('mainContainer')}
					 onMouseDown={this.mouseDownEvent.bind(this)}
					 onMouseMove={this.onMouseMoveEvent.bind(this)}
					 onMouseUp={this.mouseUpEvent.bind(this)}
					 ref={div => this.mainContainer = div}
				>

					{this.props.data.map((each, i) => {
                        return (<CardComponent key={i} data={each}/>);
                     })}
				</div>
				<div>
					로그아웃 안눌렀을 때 계속 로컬스토리지에 토큰이 남아 있는 현상 개선
				</div>

				<ModalButton pushData={this.props.pushData}/>
			</div>
		)
	}
}

MainPage.PropTypes = {
	test : PropTypes.func.isRequired,
	getAllData : PropTypes.func.isRequired
}

// export default NavigationBar;
function mapStateToProps(state) {
  return {
  	data : state.Data.get('data')
  };
}

export default connect(mapStateToProps,{ test,getAllData,pushData })(MainPage);