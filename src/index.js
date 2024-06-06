import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Information from './Acc-set/information';
// import ChangePass from './Acc-set/changepass';
import reportWebVitals from './reportWebVitals';
// import Sidebar from './Acc-set/sidebar';
// import Booking from './Acc-set/booking';
import Bookings from './Acc-set/historybooking';
import Historybooking from './Acc-set/historybooking';
import UserDashboard from './Acc-set/userdashboar';

ReactDOM.render(
  <React.StrictMode>
    {/* <Information /> */}
    {/* <Sidebar /> */}
    {/* <ChangePass /> */}
    {/* <Booking /> */}
    {/* <Historybooking /> */}
    <UserDashboard />
     
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
