import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import { getThemeData } from '../API/data';
import { connect } from 'react-redux';
import { lchmod } from 'fs';
import { Link, NavLink  } from 'react-router-dom';
import TagButtons from '../Containers/Tag/TagButtons'
import PageHead from '../Components/PageHead'
const cx = classNames.bind(styles);

class codePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			themes : []
		}

	}


	async componentWillMount(){
		let data = {
			category : 'CODE'
		}
		await this.props.getThemeData(data).then((res)=>{
			// console.log(res.data[0])
			this.setState({
				themes : res.data
			})
		})
	}
	

	render(){
		// console.log("state")
		// console.log(this.state.themes);
		return (
			<div>
				<NavigationBar/>
				<PageHead/>
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
						let url = '/code/theme/'+element.theme
							return (
								<div className={cx('codePageContent')} 
									 key={i} style={{backgroundImage : "url('"+backgroundImage+"')", backgroundSize : "100% auto"}}
								> 
									<Link to={url} style={{color : "#fff"}}>
									<p>{element.theme}</p>
									</Link>
									<span>{element.count} Posts</span><br/>
									<span>UPDATED : {element.date}</span>
									

								</div>
							)
						})}
						
						
					</div>

				</div><br/><br/><br/>
			</div>
		)
	}
}

export default connect(null,{ getThemeData })(codePage);