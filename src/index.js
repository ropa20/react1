import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
  //robots inside curly bracket because it has no export
  //props are simply things that come out of state STATE>>PROPS

ReactDOM.render(
				<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
