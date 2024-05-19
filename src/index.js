import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Information from './Acc-set/information';
// import ChangePass from './Acc-set/changepass';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Information />
    {/* <ChangePass /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
