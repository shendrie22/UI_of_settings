import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Information from './Acc-set/information';
// import ChangePass from './Acc-set/changepass';
import reportWebVitals from './reportWebVitals';
// import Sidebar from './Acc-set/sidebar';
import Booking from './Acc-set/booking';

ReactDOM.render(
  <React.StrictMode>
    {/* <Information /> */}
    {/* <Sidebar /> */}
    {/* <ChangePass /> */}
    <Booking />
     
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
