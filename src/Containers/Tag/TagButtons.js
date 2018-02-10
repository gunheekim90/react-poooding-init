import React, { Component } from 'react';

import styles from './TagStyle.scss';
import classNames from 'classnames/bind';
import {  Link,NavLink  } from 'react-router-dom';

const cx = classNames.bind(styles);


class TagButtons extends Component {

    render() { 
        
        return (  
        <div>
            <Link to='/code/tag/react' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#React</span></Link>
			<Link to='/code/tag/NodeJS' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#NodeJS</span></Link>
			<Link to='/code/tag/Spring' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Spring</span></Link>
			<Link to='/code/tag/CSS' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#CSS</span></Link>
			<Link to='/code/tag/Mysql' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Mysql</span></Link><br/><br/>
			<Link to='/code/tag/블록체인' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Smart Contract</span></Link>
			<Link to='/code/tag/react' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#React Native</span></Link><br/><br/>
			<Link to='/code/tag/JAVA' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#JAVA</span></Link>
			<Link to='/code/tag/블록체인' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#블록체인</span></Link>
        </div>

        )
    }
}
 
export default TagButtons;