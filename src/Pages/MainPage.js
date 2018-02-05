import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test,getAllData,pushData } from '../API/data';
import { sessionCheck } from '../API/Auth';
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

	async componentWillMount(){
		console.log("componentWillMount : Data Load...");
		await this.props.getAllData().then((res)=>{
			// console.log(res);
		})	
		if(this.props.isAuthenticated){

		}else{
			await this.props.sessionCheck();
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
		const {isAuthenticated} = this.props

		const Modal = (
			<ModalButton pushData={this.props.pushData}/>
		)
		const noModal = (<p></p>);
		return (
			<div>
				<NavigationBar/>
				<div className={cx('mainContainerTitle')}>
					<p> Poo<span style={{color : 'yellow'}}>o</span>ooding Dev</p>

				</div><br/><br/>
				<div className={cx('mainContainer')}
					 onMouseDown={this.mouseDownEvent.bind(this)}
					 onMouseMove={this.onMouseMoveEvent.bind(this)}
					 onMouseUp={this.mouseUpEvent.bind(this)}
					 ref={div => this.mainContainer = div}
				><br/><br/>
				
				
					{this.props.data.map((each, i) => {
                        return (<CardComponent key={i} data={each}/>);
                     })}
				</div>
				<div className={cx('mainContainerSearchWrapper')}>
					<div className={cx('mainContainerSearch')}>
					 	<span className={cx('searchTitle')}>Try search keyword</span>
						<input className={cx('searchInput')} type="text" /><button className={cx('searchButton')}>SEARCH</button>
					</div>
				</div>

			    {isAuthenticated ? Modal : noModal}

				
				
			</div>
		)
	}
}

MainPage.PropTypes = {
	test : PropTypes.func.isRequired,
	getAllData : PropTypes.func.isRequired,
	sessionCheck : PropTypes.func.isRequired
}

// export default NavigationBar;
function mapStateToProps(state) {
  return {
	isAuthenticated : state.Auth.get('isAuthenticated'),
  	data : state.Data.get('data')
  };
}

export default connect(mapStateToProps,{ test, getAllData, pushData, sessionCheck })(MainPage);