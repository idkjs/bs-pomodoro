import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { ClockDemo} from './ClockDemo';
console.log('Hello from jsx!')

ReactDOM.render(
  <ClockDemo initialTime="25:00"/>,
  document.getElementById('root'),
)