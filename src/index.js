import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let c=()=>{

  console.log("index")
}


ReactDOM.render(
  <App  c={c}/>,
  document.getElementById('root')
);
