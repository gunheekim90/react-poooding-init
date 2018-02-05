import React from 'react';
import { Redirect } from 'react-router';
import { Link, NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../API/Auth';
import styles from './NavigationBar.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);



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
        <li><Link to="/mypage" style={{color : '#fff'}}>about {user.name}</Link></li>
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
        
        <div className="container-fluid" style={{backgroundColor : '#0881A3',color : '#fff'}}>
         {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header" style={{backgroundColor : '#0881A3'}}>
            <button type="button" className="navbar-toggle collapsed" style={{backgroundColor : '#0881A3'}} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
             <NavLink exact to="/" className="navbar-brand" style={{color : '#fff'}}>Poooding</NavLink>
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{backgroundColor : '#0881A3'}}>
            <ul className="nav navbar-nav">

              <li><Link to="/code" style={{color : '#fff'}}>CODEs</Link></li>
              <li><Link to="/snippet" style={{color : '#fff'}}>SNIPPETs</Link></li>
              <li><Link to="/movie" style={{color : '#fff'}}>MOVIEs</Link></li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Search</button>
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

NavigationBar.PropTypes = {
  auth : PropTypes.object.isRequired,
  logout : PropTypes.func.isRequired
}

// export default NavigationBar;
function mapStateToProps(state) {
  return {
    isAuthenticated : state.Auth.get('isAuthenticated'),
    user : state.Auth.get('user')
  };
}

export default connect(mapStateToProps,{ logout })(NavigationBar);