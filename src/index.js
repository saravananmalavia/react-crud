import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter}  from 'react-router-dom' 
import App from './App';
import AddTutorial from './components/add-tutorial.component'
import Tutorial from './components/tutorial.component'
import TutorialsList from './components/tutorials-list.component'


ReactDOM.render(
  <BrowserRouter>
    <App />
</BrowserRouter>

, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


