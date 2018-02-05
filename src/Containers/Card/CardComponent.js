import React from 'react';
import Parser from 'html-react-parser'
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Route, Redirect } from 'react-router'
import styles from './Card.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


class Card extends React.Component {

	render(){
		var cardWrapper;
		if(this.props.data.id%3 === 1){
			
			cardWrapper = 'cardWrapper01';
		}else if(this.props.data.id%3 === 2){
			
			cardWrapper = 'cardWrapper01';
		}else{
			
			cardWrapper = 'cardWrapper03';
		}

		return (

			<div className={cx(cardWrapper)}>

				<span className={cx('cardCategory')}>{Parser(this.props.data.category)}</span>
				<br/>
				
				
				<span className={cx('cardTitle')}>{Parser(this.props.data.title)}</span><br/>
				<span className={cx('cardTag')}>{Parser(this.props.data.tag)}</span><br/>
				<button className={cx('cardButton')}>Read More</button>

			</div>
		)
	}
}

export default Card;