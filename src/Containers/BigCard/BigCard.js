import React, { Component } from 'react';
import styles from './BigCard.scss';
import Parser from 'html-react-parser'
import classNames from 'classnames/bind';
import axios from 'axios';
import { API_HOST, cert } from '../../API/config';
const cx = classNames.bind(styles);

class BigCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title : '',
            tag : '',
            content : '',
            date : '',
            category : ''
        }
    }

    componentWillMount(){
    //    console.log(this.props.id)
       
       axios.get(API_HOST+'/client/getData/'+this.props.id).then((res)=>{
            // console.log(res.data.data);
            this.setState({
                title : res.data.data.title,
                tag : res.data.data.tag,
                content : res.data.data.content,
                date : res.data.data.date,
                category : res.data.data.category
            })
        })
    
    }
    render() { 
        var cardWrapper;
		if(this.state.category === 'CODE'){
			cardWrapper = 'codeContainerTopImageWrapper1';
		}else if(this.state.category === 'SNIPPET'){
			cardWrapper = 'codeContainerTopImageWrapper3';
		}else{
			cardWrapper = 'codeContainerTopImageWrapper4';
        }
        
        return (  
        <div className={cx('codeContainer')}>
            
                <div className={cx(cardWrapper)}>
                    

                    <p className={cx('codeContainerText')}>{this.state.title}</p>
                    <p className={cx('codeContainerTag')}>{this.state.tag}</p>
                    <p className={cx('codeContainerDate')}>{this.state.date}</p>
                </div>
                <div className={cx('codeContainerTitle')} style={{color : "#000 !important"}}> {Parser(this.state.content)} </div>
            
           
                    
        </div>

        )
    }
}
 
export default BigCard;