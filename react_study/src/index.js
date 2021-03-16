import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VinetiReactExample from './vineti_react_example'

ReactDOM.render(
  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>,
    <React.StrictMode>
        <VinetiReactExample />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
