import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import {connect} from 'react-redux';
import { getSnippetData } from '../API/data';
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
class moviePage extends Component {

	constructor(props){
		super(props);
		this.state = {
            data : []
		}

	}
    
    async componentWillMount(){
        // console.log("componentWillMount : Data Load...");
		// console.log(this.props.match.params.id)
		let data = {
			category : 'MOVIE'
		}
		await this.props.getSnippetData(data).then((res)=>{
     
			this.setState({
                data : res.data
            })
		})	
	}

	render(){
		return (
			<div>
				<NavigationBar/>
				<PageHead/><br/><br/><br/><br/><br/>
				<div className={cx('codeContainer')}>
					   <div style={{padding : '100px',marginLeft : '-50px'}}>
					  	 {this.state.data.map((each, i) => {
	                        
	                        return (<CardComponent key={i} data={each} id={each.id}/>);
						 })}
						 
						</div>
						
				</div><br/><br/><br/>
				
			</div>
		)
	}
}

export default connect(null,{getSnippetData})(moviePage);