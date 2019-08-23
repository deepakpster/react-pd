import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import '../scss/main.scss';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
