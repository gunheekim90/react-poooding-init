import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard';
import { getThemeData } from '../API/data';
import { connect } from 'react-redux';
import { lchmod } from 'fs';
import { Link, NavLink  } from 'react-router-dom';
import TagButtons from '../Containers/Tag/TagButtons'
const cx = classNames.bind(styles);

class codeThemePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			themes : [{}]
		}

	}


	async componentWillMount(){
		let data = {
			category : 'CODE'
		}
		
	}
	

	render(){
	
		return (
			<div>
				<NavigationBar/>
				<div className={cx('mainContainerTitle')}>
				    <p>	Poooding Dev  
					  <span className={cx("badge", "badge-danger", "aboutHomepageBadge")} style={{textShadow : 'none',padding : '10px'}}>홈페이지 소개</span>
					  <span className={cx("badge", "badge-danger", "aboutMeBadge")} style={{textShadow : 'none',padding : '10px'}}>Poooding 소개</span>
					</p>
				</div>
				<div className={cx('codePageTheme')} style={{width : '100%',textAlign : 'center',color : '#fff',position : 'relative',marginTop : '150px'}}>
					<p>- 태그(Tag) -</p><br/>
					<div className={cx('container')}>
					<TagButtons/>
					</div><br/><br/>
					<p>- 주제(Title) -</p><br/>
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
							backgroundImage = './js-min.PNG';
						}else if(matchJavaScript != null){
							backgroundImage = './js-min.PNG';
						}else if(matchMysql != null){
							backgroundImage = './mysql-min.PNG';
						}else if(matchCss != null){
							backgroundImage = './css-min.PNG';
						}else if(matchBlock != null){
							backgroundImage = './block-min.PNG';
						}else{
							backgroundImage = './js-min.PNG';
						}
							
							return (
								<div className={cx('codePageContent')} 
									 key={i} style={{backgroundImage : "url('"+backgroundImage+"')", backgroundSize : "100% auto"}}
								> 

									<p>{element.theme}</p>
									<span>{element.count} Posts</span><br/>
									<span>UPDATED : {element.date}</span>

								</div>
							)
						})}
						
						
					</div>

				</div>
			</div>
		)
	}
}

export default connect(null,{})(codeThemePage);