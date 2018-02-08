import React, { Component } from 'react';
import NavigationBar from '../Containers/NavigationBar/NavigationBar'
import styles from './pageStyle.scss';
import classNames from 'classnames/bind';
import BigCard from '../Containers/BigCard/BigCard'


const cx = classNames.bind(styles);

class codeEachPage extends Component {


	render(){


		return (
			<div>
				<NavigationBar/>
				<div className={cx('mainContainerTitle')}>
					<p> Poooding Dev</p>

				</div>
				<BigCard id={this.props.match.params.id}/>
			</div>
		)
	}
}



export default codeEachPage