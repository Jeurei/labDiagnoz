import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import ScrollToTop from './containers/scroll-to-top';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="labDiagnoz/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
