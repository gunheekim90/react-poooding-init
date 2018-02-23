import React from 'react';
import { Redirect } from 'react-router';
import { Link, NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../API/Auth';
import styles from './NavigationBar.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const backColor = '#2A363B';


class NavigationBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect : false
    }

  }

  async logoutHandle(e){
    e.preventDefault();
    console.log("로그아웃 실행");
    await this.props.logout();
    console.log("로그아웃 완료")
    await this.setState({
          redirect : true
    })  
  }
  

  render() {

    const { isAuthenticated, user } = this.props;
    const { redirect } = this.state;
    // console.log(this.props.isAuthenticated)
    // console.log(this.props.user)

    if(redirect){
      <Redirect to="/"/>
    }

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logoutHandle.bind(this)} style={{color : '#fff'}}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
         {/*<li><Link to="/signup" style={{color : '#fff'}}>Sign up</Link></li>*/}
        <li><Link to="/login" style={{color : '#fff'}}>Login</Link></li>
      </ul>
    );

    return (
      <nav className={cx("navbar", "navbar-inverse", "BorderStyle")}>
        
        <div className="container-fluid" style={{backgroundColor : backColor,color : '#fff'}}>
         {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header" style={{backgroundColor : backColor}}>
            <button type="button" className="navbar-toggle collapsed" style={{backgroundColor : backColor}} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
             <NavLink exact to="/" className="navbar-brand" style={{color : '#fff'}}>Poooding</NavLink>
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{backgroundColor : backColor}}>
            <ul className="nav navbar-nav">

              <li><Link to="/code" style={{color : '#fff'}}>코드</Link></li>
              <li><Link to="/snippet" style={{color : '#fff'}}>토막글</Link></li>
              <li><Link to="/movie" style={{color : '#fff'}}>영화</Link></li>
              <li><Link to="/homepage" style={{color : '#fff'}}>홈페이지 소개</Link></li>
              <li><Link to="/intro" style={{color : '#fff'}}>소개</Link></li>
              <li><Link to="/terminal" style={{color : '#41FF3A', backgroundColor : '#000'}}>terminal</Link></li>
              
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default" style={{background : 'orange',color : '#fff', border : 'none'}}>글 검색</button>
            </form>
            <div className="container-fluid">
               { isAuthenticated ? userLinks : guestLinks }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// export default NavigationBar;
function mapStateToProps(state) {
  return {
    isAuthenticated : state.Auth.get('isAuthenticated'),
    user : state.Auth.get('user')
  };
}

export default connect(mapStateToProps,{ logout })(NavigationBar);