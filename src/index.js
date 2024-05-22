import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Information from './Acc-set/information';
import ChangePass from './Acc-set/changepass';
import reportWebVitals from './reportWebVitals';
// import Sidebar from './Acc-set/sidebar';

ReactDOM.render(
  <React.StrictMode>
    {/* <Information /> */}
    {/* <Sidebar /> */}
    <ChangePass />
     
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
