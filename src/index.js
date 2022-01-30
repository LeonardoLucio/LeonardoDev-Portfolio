import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/components/header/index'
import Router from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

