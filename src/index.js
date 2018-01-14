import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Modules/index';
import RootRoute from './Router/index';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import querystring from 'querystring';
//////////////////////////////////////////////////////////////////////////////////
// AJAX Setting                                                                 //
//////////////////////////////////////////////////////////////////////////////////
//axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

axios.defaults.transformRequest = [function (data) {
    if (data instanceof FormData) return data;
    return querystring.stringify(data);
}];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


ReactDOM.render(<Provider store={store}>
                  <BrowserRouter>
                    <RootRoute/>
                  </BrowserRouter>   
                </Provider>, document.getElementById('root'));

registerServiceWorker();
