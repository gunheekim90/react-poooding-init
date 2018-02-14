import React, { Component } from 'react';

import styles from './TagStyle.scss';
import classNames from 'classnames/bind';
import {  Link,NavLink  } from 'react-router-dom';

const cx = classNames.bind(styles);


class TagButtons extends Component {

    render() { 
        
        return (  
        <div>
            <a href='/code/tag/react' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#React</span></a>
			<a href='/code/tag/NodeJS' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#NodeJS</span></a>
			<a href='/code/tag/Spring' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Spring</span></a>
			<a href='/code/tag/CSS' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#CSS</span></a>
			<a href='/code/tag/Mysql' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Mysql</span></a><br/><br/>
			<a href='/code/tag/블록체인' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Smart Contract</span></a>
			<a href='/code/tag/react' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#React Native</span></a><br/><br/>
			<a href='/code/tag/JAVA' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#JAVA</span></a>
			<a href='/code/tag/블록체인' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#블록체인</span></a>
			<a href='/code/tag/server' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Server</span></a>
			<a href='/code/tag/server' style={{color : "#fff"}}><span style={{padding : '10px', border : '1px solid #fff', borderRadius : '10px',cursor : 'pointer'}}>#Android</span></a>       
		</div>

        )
    }
}
 
export default TagButtons;
