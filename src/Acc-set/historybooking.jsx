import React, { useState } from 'react';
import { FaMapMarkerAlt, FaTimes, FaCalendarCheck, FaClock, FaHistory, FaBan, FaRegCalendarAlt } from 'react-icons/fa';

const Historybooking = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-bold mb-4">Booked desk today</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left w-1/4">Workspace</th>
                  <th className="border-b py-2 text-left w-1/4">Desk</th>
                  <th className="border-b py-2 text-left w-1/4">Date</th>
                  <th className="border-b py-2 text-left w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">May 29, 2024</td>
                  <td className="border-b py-2">
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-black font-semibold py-1 px-2 rounded"
                        onClick={() => {
                          setImageUrl('/path/to/desk-map-today.png');
                          setShowImage(true);
                        }}
                      >
                        <FaMapMarkerAlt className="mr-2" /> View desk map
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'upcoming':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-bold mb-4">Upcoming reservations</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left w-1/4">Workspace</th>
                  <th className="border-b py-2 text-left w-1/4">Desk</th>
                  <th className="border-b py-2 text-left w-1/4">Date</th>
                  <th className="border-b py-2 text-left w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">June 01, 2024</td>
                  <td className="border-b py-2">
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-black font-semibold py-1 px-2 rounded"
                        onClick={() => {
                          setImageUrl('/path/to/desk-map-upcoming1.png');
                          setShowImage(true);
                        }}
                      >
                        <FaMapMarkerAlt className="mr-2" /> View desk map
                      </button>
                      <button className="text-white text-sm py-0.5 px-0.5 rounded bg-red-500 mr-4"><FaTimes />
                   </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">June 02, 2024</td>
                  <td className="border-b py-2">
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-black font-semibold py-1 px-2 rounded"
                        onClick={() => {
                          setImageUrl('/path/to/desk-map-upcoming2.png');
                          setShowImage(true);
                        }}
                      >
                        <FaMapMarkerAlt className="mr-2" /> View desk map
                      </button>
                      <button className="text-white text-sm py-0.5 px-0.5 rounded bg-red-500 mr-4"><FaTimes />
                   </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'pending':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-bold mb-4">Pending reservations</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left w-1/4">Workspace</th>
                  <th className="border-b py-2 text-left w-1/4">Desk</th>
                  <th className="border-b py-2 text-left w-1/4">Date</th>
                  <th className="border-b py-2 text-left w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2">Office Area C</td>
                  <td className="border-b py-2">Desk C1</td>
                  <td className="border-b py-2">June 05, 2024</td>
                  <td className="border-b py-2">
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-black font-semibold py-1 px-2 rounded"
                        onClick={() => {
                          setImageUrl('/path/to/desk-map-pending1.png');
                          setShowImage(true);
                        }}
                      >
                        <FaMapMarkerAlt className="mr-2" /> View desk map
                      </button>
                      <button className="text-white text-sm py-0.5 px-0.5 rounded bg-red-500 mr-4"><FaTimes />
                   </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">June 02, 2024</td>
                  <td className="border-b py-2">
                    <div className="flex justify-between items-center">
                      <button 
                        className="flex items-center text-black font-semibold py-1 px-2 rounded"
                        onClick={() => {
                          setImageUrl('/path/to/desk-map-pending2.png');
                          setShowImage(true);
                        }}
                      >
                        <FaMapMarkerAlt className="mr-2" /> View desk map
                      </button>
                      <button className="text-white text-sm py-0.5 px-0.5 rounded bg-red-500 mr-4"><FaTimes />
                   </button>
  
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'cancelled':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-bold mb-4">Cancelled reservations</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left w-1/4">Workspace</th>
                  <th className="border-b py-2 text-left w-1/4">Desk</th>
                  <th className="border-b py-2 text-left w-1/4">Date</th>
                  <th className="border-b py-2 text-left w-1/4"></th>
                </tr>
              </thead>
            </table>
          </div>
        );
      case 'history':
        return (
          <div className="border rounded p-4 w-[110%] h-[500px]">
            <h2 className="text-lg font-bold mb-4">History</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left w-1/4">Workspace</th>
                  <th className="border-b py-2 text-left w-1/4">Desk</th>
                  <th className="border-b py-2 text-left w-1/4">Date</th>
                  <th className="border-b py-2 text-left w-1/4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-12">
                  <td className="border-b py-2">Office Area C</td>
                  <td className="border-b py-2">Desk C1</td>
                  <td className="border-b py-2">May 23, 2024</td>
                  <td className="border-b py-2"></td>
                </tr>
                <tr className="h-12">
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">May 15, 2024</td>
                  <td className="border-b py-2"></td>
                </tr>
                <tr className="h-12">
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">May 14, 2024</td>
                  <td className="border-b py-2"></td>
                </tr>
                <tr className="h-12">
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">April 30, 2024</td>
                  <td className="border-b py-2"></td>
                </tr>
                <tr className="h-12">
                  <td className="border-b py-2">Office Area 2</td>
                  <td className="border-b py-2">Desk A3</td>
                  <td className="border-b py-2">April 13, 2024</td>
                  <td className="border-b py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="flex mb-0 border-b">
        <button
          className={`flex-1 py-2 px-4 text-center mr-2 border rounded ${activeTab === 'today' ? 'text-black' : 'text-black'} hover:bg-black hover:text-white`}
          onClick={() => setActiveTab('today')}
        >
          <FaCalendarCheck className="inline mr-2" /> Today
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center mr-2 border rounded ${activeTab === 'upcoming' ? 'text-black' : 'text-black'} hover:bg-black hover:text-white`}
          onClick={() => setActiveTab('upcoming')}
        >
          <FaRegCalendarAlt className="inline mr-2" /> Upcoming
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center mr-2 border rounded ${activeTab === 'pending' ? 'text-black' : 'text-black'} hover:bg-black hover:text-white`}
          onClick={() => setActiveTab('pending')}
        >
          <FaClock className="inline mr-2" /> Pending
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center mr-2 border rounded ${activeTab === 'cancelled' ? 'text-black' : 'text-black'} hover:bg-black hover:text-white`}
          onClick={() => setActiveTab('cancelled')}
        >
          <FaBan className="inline mr-2" /> Cancelled
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center border rounded ${activeTab === 'history' ? 'text-black' : 'text-black'} hover:bg-black hover:text-white`}
          onClick={() => setActiveTab('history')}
        >
          <FaHistory className="inline mr-2" /> History
        </button>
      </div>
      {renderContent()}
      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded relative">
            <img src={imageUrl} alt="Desk Map" className="max-w-full h-auto" />
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setShowImage(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Historybooking;