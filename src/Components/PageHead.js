import React, {Component} from 'react';
import styles from '../Pages/pageStyle.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
const cx = classNames.bind(styles);

class PageHead extends Component {
  
    render() { 
        return ( 

            <div className={cx('mainContainerTitle')}>
					<p> 
						Poooding Dev  
					  <span className={cx("badge", "badge-danger", "aboutHomepageBadge")} style={{textShadow : 'none',padding : '10px'}}><Link to='/homepage' style={{color : '#fff'}}>홈페이지 소개</Link></span>
						<span className={cx("badge", "badge-danger", "aboutMeBadge")} style={{textShadow : 'none',padding : '10px'}}><Link to='/intro' style={{color : '#fff'}}>Poooding 소개</Link></span>

					</p>
				</div>
        
        
        )
    }
}
 
export default PageHead;