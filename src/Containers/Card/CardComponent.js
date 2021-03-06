import React from 'react';
import Parser from 'html-react-parser'
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Route, Redirect } from 'react-router';
import { Link, NavLink  } from 'react-router-dom';
import styles from './Card.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Card extends React.Component {


	render(){
		var cardWrapper;
		if(this.props.data.category === 'CODE'){
			cardWrapper = 'cardWrapper01';
		}else if(this.props.data.category === 'SNIPPET'){
			cardWrapper = 'cardWrapper03';
		}else{
			cardWrapper = 'cardWrapper04';
		}
		const id = this.props.data.id;
		const LinkId = '/code/'+id;
		return (

			<div className={cx(cardWrapper)}>

				<span className={cx('cardCategory')}>{Parser(this.props.data.category)}</span>
				<br/>
				<span className={cx('cardTitle')}>{Parser(this.props.data.title)}</span><br/>
				<span className={cx('cardDate')}>{Parser(this.props.data.date)}</span><br/>
				<span className={cx('cardTag')}>{Parser(this.props.data.tag)}</span><br/>
				<button className={cx('cardButton')}><Link to={LinkId} style={{color : "#fff"}}> Read More</Link></button>

			</div>
		)
	}
}

export default Card;