import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'polyfill-array-includes';
import '@babel/polyfill';
import './sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from 'store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
