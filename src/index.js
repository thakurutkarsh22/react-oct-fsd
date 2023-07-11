import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './HelloCompontnt';
import ByeComponent from './ByeComponent'
import IncrementDecrementComponent from './IncementDecrementCounter/IncrementDecrementComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
// This is where the vitual dom Root is created from the REAL DOm (Basically it is a light copy of real dom node...).

root.render(
  <React.StrictMode>
    {/* <HelloComponent name={"akash"} standard={"9th"}/> */}
    {/* <ByeComponent /> */}
    
    <IncrementDecrementComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
