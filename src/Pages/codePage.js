import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard'
const cx = classNames.bind(styles);

class codePage extends Component {
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
					<p>- 주제(Theme) -</p>
				</div>
				
			</div>
		)
	}
}

export default codePage;