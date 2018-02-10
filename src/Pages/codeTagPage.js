import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard';
import { getTagData } from '../API/data';
import { connect } from 'react-redux';
import CardComponent from '../Containers/Card/CardComponent'
import { lchmod } from 'fs';
import { Link, NavLink  } from 'react-router-dom';
import TagButtons from '../Containers/Tag/TagButtons'
const cx = classNames.bind(styles);

class codeTagPage extends Component {

	constructor(props){
		super(props);
		this.state = {
            data : []
		}

	}
    
    async componentWillMount(){
        // console.log("componentWillMount : Data Load...");
        // console.log(this.props.match.params.id)
		await this.props.getTagData(this.props.match.params.id).then((res)=>{
            // console.log(res.data)
			this.setState({
                data : res.data
            })
		})	
	}
	shouldComponentUpdate(nextProps, nextState){
        this.props.getTagData(this.props.match.params.id).then((res)=>{
            // console.log(res.data)
			this.setState({
                data : res.data
            })
		})	

        return true;
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
					
                    
				</div>
                <div className={cx('codeContainer')}><br/><br/>
				   <div style={{marginLeft : '30px'}}>
				  	 {this.state.data.map((each, i) => {
                        
                        return (<CardComponent key={i} data={each} id={each.id}/>);
                     })}
					</div>
					
				</div>
			</div>
		)
	}
}

export default connect(null,{getTagData})(codeTagPage);