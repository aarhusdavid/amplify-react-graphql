import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';

// import reportWebVitals from './reportWebVitals';
import {FrontContextProvider} from './providers/frontContext';

// ...proceed with the request.
ReactDOM.render(
  <React.StrictMode>
    <FrontContextProvider>
      <App />
    </FrontContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <FrontContextProvider>
      <Admin />
    </FrontContextProvider>
  </React.StrictMode>,
  document.getElementById('root2')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
