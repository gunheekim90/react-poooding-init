import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import {connect} from 'react-redux';
import { getHomePageData } from '../API/data';
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
class HomePage extends Component {

	constructor(props){
		super(props);
		this.state = {
            code : 0,
            snippet : 0,
            movie : 0
		}

	}
    
    async componentWillMount(){

		await this.props.getHomePageData().then((res)=>{
            console.log(res.data)
			this.setState({
                code : res.data[0].count,
                movie : res.data[1].count,
                snippet : res.data[2].count
                
            })
		})	
	}

	render(){

        console.log(this.state)
		return (
			<div>
				<NavigationBar/>
				<PageHead/><br/><br/><br/><br/><br/><br/>
				<div className={cx('container')} style={{textAlign : 'center'}}>
                   
                       <img src='/homepageStruct.jpg' className={cx('homePageImage')}/>
					   <br/>
					   <div style={{color : '#fff',fontSize : '110%', textAlign : 'left'}}>
					   <span style={{color : "yellow", fontSize : '120%'}}>구조</span> : 아키텍처는 위와 같습니다. 별거 없습니다만, 도메인도 사고 개인 서버도 판 이상 앞으로 지속적으로 블로그 외의 것들을 시도해볼 계획입니다.
						   <br/> 그래서 약간은 개인 블로그엔 오바스런 구조로 짰습니다.<br/><br/>
						
						   <span style={{color : "yellow", fontSize : '120%'}}>제작이유</span> : 서버 다루는게 멋있고 잘은 못하지만 잘 하고 싶어 백엔드만 고집하다가, 프론트를 괄시해선 안되겠다 싶어 리엑트를 시작 했습니다<br/>
						 다들 그러하듯 블로그 제작을 목표로 공부했고 현재 방문하신 이 블로그를 만들게 되었습니다.<br/><br/><br/>

						 <span style={{color : "yellow", fontSize : '120%'}}>총 제작 기간</span> : 매일 1~2시간 씩 42일 걸렸습니다.<br/>
						 중간에 계획에 엇나가는 터미널 페이지라던지 영화페이지라던지, 막무가내 계획이였지만 재미있었습니다.<br/><br/>

						 리액트를 하면서 처음엔 도대체 이걸 왜 하는거지, MVC로다가 서버사이드 렌더링 하면 간단한걸 왜 리덕스, 리액트 라우터같은 걸로 사서 고생하는지...때려치고 싶었지만, <br/>지금은 리액트의 HOC, 재사용등의 매력에 빠져 회사 앱까지 리액트 네이티브로 만들고 있습니다.ㅎㅎ<br/><br/>
						 <span style={{color : "yellow", fontSize : '120%'}}>리액트</span> : 리덕스, 리액트 라우터, thunk, 리액트 라우터 돔, 서버사이드 랜더링을 사용했습니다.
						 <br/><br/>

						 <span style={{color : "yellow", fontSize : '120%'}}>디자인</span> : 놀랄 수 있지만, 가장 공들인건 디자인 부분입니다. SCSS 스타일링을 했고 최대한 외부 컴포넌트는 사용안하고 구현했습니다.
						 <br/><br/><br/><br/>
						  <div style={{width : '100%',height : '100%', border : '1px solid #fff',padding : '40px'}}>
							*이 곳은 지극히 개인적인 공간이고, 지극히 개방적인 지식들로 가득합니다. <br/>잘못되게 기술된 포스트도 있을 것이고, 더 나은 방법도 있을 겁니다. 의견이 있으면 언제든지 연락주세요!<br/>(스팸 방지를 위해 FORMSPREE 방식을 사용하고 있습니다.)<br/><br/>
							<form action="https://formspree.io/gunhee21@gmail.com" method="POST">
								<div className="form-group"  >
									<label>Email address</label>
									<input type="email" className="form-control" name="_replyto" id="exampleInputEmail1" placeholder="Enter email" style={{borderRadius : '0px'}}/>
								
								</div>
								<div className="form-group">
									<label>의견</label>
									<textarea type="text"  className="form-control" name="name" id="exampleInputPassword1" placeholder="Opinon" style={{borderRadius : '0px'}} />
								</div>
								<input type="hidden" name="_next" value="http://localhost:3010/homepage" />
							
								<button type="submit" className="btn btn-success" style={{borderRadius : '0px', backgroundColor : 'transparent !important', color : '#fff'}}>Submit</button>
							</form>
						
							
						   </div>
						   
						   
						</div>
						<br/><br/><br/>
                </div>
				<br/><br/><br/><br/><br/><br/>
			</div>
		)
	}
}

export default connect(null,{getHomePageData})(HomePage);