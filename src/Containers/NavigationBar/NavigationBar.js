import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import PropTypes from 'prop-types';


import styles from './NavigationBar.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


class NavigationBar extends React.Component {

  render() {

    return (
      <nav className={cx("navbar", "navbar-inverse", "BorderStyle")}>
        
        <div className="container-fluid">
         {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
             <NavLink exact to="/" className="navbar-brand">로고</NavLink>
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {/*<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>*/}
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/register">Sign up</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </ul>
            </div>
            
           
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;