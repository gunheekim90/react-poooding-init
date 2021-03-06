import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard';
import { getThemeDataSpecific, getThemeEachData } from '../API/data';
import { connect } from 'react-redux';
import { lchmod } from 'fs';
import ReactDOM from 'react-dom';
import { Link, NavLink  } from 'react-router-dom';
import TagButtons from '../Containers/Tag/TagButtons'
import PageHead from '../Components/PageHead'
import CardComponent from '../Containers/Card/CardComponent'
const cx = classNames.bind(styles);

class codeThemePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			themes : [],
			data : [],
			id : this.props.match.params.id
		}

		this.props.getThemeEachData({theme : this.state.id}).then((res)=>{
			
			this.setState({
				data : res.data
			})
		})

	}


	async componentWillMount(){

		await this.props.getThemeDataSpecific({theme : this.state.id}).then((res)=>{
			
			this.setState({
				themes : res.data
			})
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

		return (
			<div>
				<NavigationBar/>
				<PageHead/>
				<div className={cx('codePageTheme')} style={{width : '100%',textAlign : 'center',color : '#fff',position : 'relative',marginTop : '150px'}}>
				
					<p>- 태그(Tag) -</p><br/>
					<div className={cx('container')}>
					<TagButtons/>
					</div><br/>
					<div>
						{this.state.themes.map((element,i)=>{

						let matchReact = /react/i.exec(element.tag);
						let matchJavaScript = /javascript/i.exec(element.tag);
						let matchMysql = /mysql/i.exec(element.tag);
						let matchCss = /css/i.exec(element.tag);
						let matchBlock = /block/i.exec(element.tag);
						let matchNode = /node/i.exec(element.tag);
						var backgroundImage;
						if(matchReact != null){
							backgroundImage = '/js-min.PNG';
						}else if(matchJavaScript != null){
							backgroundImage = '/js-min.PNG';
						}else if(matchMysql != null){
							backgroundImage = '/mysql-min.PNG';
						}else if(matchCss != null){
							backgroundImage = '/css-min.PNG';
						}else if(matchBlock != null){
							backgroundImage = '/block-min.PNG';
						}else{
							backgroundImage = '/js-min.PNG';
						}
							console.log(backgroundImage)
							return (
								<div className={cx('codePageContent')} 
									 key={i} style={{backgroundImage : "url('"+backgroundImage+"')", backgroundSize : "100% auto", border : "none !important"}}
								> 
									<br/>
									<p>{element.theme}</p>
									<span>{element.count} Posts</span><br/>
									<br/>

								</div>
							)
						})}
					
						
					</div><br/>
					


				</div>
				<div className={cx('mainContainer')}
					onMouseDown={this.mouseDownEvent.bind(this)}
					onMouseMove={this.onMouseMoveEvent.bind(this)}
					onMouseUp={this.mouseUpEvent.bind(this)}
					ref={div => this.mainContainer = div}>
					   <div>
					  	 {this.state.data.map((each, i) => {
	                        
	                        return (<CardComponent key={i} data={each} id={each.id}/>);
	                     })}
						</div>
						
				</div><br/><br/><br/>

					
				
			</div>
		)
	}
}

export default connect(null,{getThemeDataSpecific,getThemeEachData})(codeThemePage);
