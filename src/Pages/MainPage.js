import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test,getAllData,pushData } from '../API/data';
import { sessionCheck } from '../API/Auth';
import ModalButton from '../Components/ModalButton'
import CardComponent from '../Containers/Card/CardComponent'
import PageHead from '../Components/PageHead'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import ScrollArea from 'react-scrollbar';
import { ListGroup, ListGroupItem } from 'reactstrap';

const cx = classNames.bind(styles);

class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			test : false,
			enableScroll : false,
			_scroller : '',
			scrollLeft : '',
			clientX : '',
			redditTop : [],
			redditNew : []
		}
		
	}

	async componentWillMount(){

		await this.props.getAllData().then((res)=>{
			// console.log(res);
		})	
		const response1 = await fetch('https://www.reddit.com/r/programming/top/.json?limit=5');
		const redditTop = await response1.json();
		
		const response2 = await fetch('https://www.reddit.com/r/programming/new/.json?limit=5');
		const redditNew = await response2.json();
		
		await this.setState({
			redditNew : redditNew.data.children,
			redditTop : redditTop.data.children
		})
		if(this.props.isAuthenticated){

		}else{
			await this.props.sessionCheck();
		}
		
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
				<PageHead/>
				
				<br/><br/><br/><br/>
				<div className={cx('mainContainer')}
					 onMouseDown={this.mouseDownEvent.bind(this)}
					 onMouseMove={this.onMouseMoveEvent.bind(this)}
					 onMouseUp={this.mouseUpEvent.bind(this)}
					 ref={div => this.mainContainer = div}
				><br/><br/>
				
					{this.props.data.map((each, i) => {
                        return (<CardComponent key={i} data={each} id={each.id}/>);
                     })}
				</div>
				{/* <div className={cx('mainContainerSearchWrapper')}>
					<div className={cx('mainContainerSearch')}>
					 	<span className={cx('searchTitle')}>Try search keyword</span>
						<input className={cx('searchInput')} type="text" /><button className={cx('searchButton')}>SEARCH</button>
					</div>
				</div> */}

				<div className={cx('mainContainerReddit')}>
				 

				  	<div className={cx('col-md-4')}>
						<ListGroup className={cx('redditListGroup')}>
						<ListGroupItem style={{color : "#fff", textAlign : 'center', background : 'transparent', fontSize : '120%'}}>Poooding Top 5.</ListGroupItem>
						{this.props.data.map((item,i)=>{
							let url = '/code/'+item.id;
							if(i > 4) return;
							return(
								<ListGroupItem key={i} className={cx('redditListItem')}>{i+1}.  <a href={url}>{item.title}</a></ListGroupItem>
							);
						})}
						</ListGroup>
					</div>
				    <div className={cx('col-md-4')}>
						<ListGroup className={cx('redditListGroup')}>
						<ListGroupItem style={{color : "#fff", textAlign : 'center', background : 'transparent', fontSize : '120%'}}>Reddit Top 5.</ListGroupItem>
							{this.state.redditTop.map((item,i)=>{
								return(
									<ListGroupItem key={i} className={cx('redditListItem')}>{i+1}.  <a href={item.data.url}>{item.data.title}</a></ListGroupItem>
								);
							})}
							
						</ListGroup>
					</div>
					<div className={cx('col-md-4')}>
						<ListGroup className={cx('redditListGroup')}>
						<ListGroupItem style={{color : "#fff", textAlign : 'center', background : 'transparent', fontSize : '120%'}}>Reddit New 5.</ListGroupItem>
						{this.state.redditNew.map((item,i)=>{
							
							return(
								<ListGroupItem key={i} className={cx('redditListItem')}>{i+1}.  <a href={item.data.url}>{item.data.title}</a></ListGroupItem>
							);
						})}
						</ListGroup>
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