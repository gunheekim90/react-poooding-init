import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard';
import { getTagData } from '../API/data';
import { connect } from 'react-redux';
import CardComponent from '../Containers/Card/CardComponent'
import { lchmod } from 'fs';

import PageHead from '../Components/PageHead'
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
	// shouldComponentUpdate(nextProps, nextState){
	// 	if(this.state.data.length == 0){

	// 	}else{

	// 	}
    //     this.props.getTagData(this.props.match.params.id).then((res)=>{
    //         // console.log(res.data)
	// 		this.setState({
    //             data : res.data
    //         })
	// 	})	
    //     return true;
    // }

	render(){
        
		return (
			<div>
				<NavigationBar/>
				<PageHead/>
				<div className={cx('codePageTheme')} style={{width : '100%',textAlign : 'center',color : '#fff',position : 'relative',marginTop : '150px'}}>
					<p>- 태그(Tag) -</p><br/>
					<div className={cx('container')}>
                    <TagButtons/>
					</div><br/><br/>
					
                    
				</div>
                <div className={cx('codeContainer')}><br/><br/>
				   <div style={{marginLeft : '50px'}}>
				  	 {this.state.data.map((each, i) => {
                        
                        return (<CardComponent key={i} data={each} id={each.id}/>);
                     })}
					</div>
					
				</div><br/><br/><br/>
			</div>
		)
	}
}

export default connect(null,{getTagData})(codeTagPage);