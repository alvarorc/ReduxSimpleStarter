import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const API_KEY = 'AIzaSyB_d3gsBYxbbMvvAFgIjYbG994cSN0akIE';

ReactDOM.render(
  <App apikey={API_KEY}/>,
  document.querySelector('.container')
);
