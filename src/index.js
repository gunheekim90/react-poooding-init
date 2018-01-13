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
