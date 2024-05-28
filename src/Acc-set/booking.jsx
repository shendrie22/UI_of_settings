import React, { useState } from 'react';

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const upcomingReservations = [
    { area: 'Office Area 2', desk: 'Desk B2', date: 'June 01, 2024', description: 'A desk located on the corner of the room in between two doorways.', image: '/path-to-your-image.png' },
  ];

  const pendingReservations = [
    { area: 'Office Area 2', desk: 'Desk B2', date: 'June 02, 2024', description: 'A desk located on the corner of the room in between two doorways.', image: '/path-to-your-image.png' },
    { area: 'Office Area 2', desk: 'Desk B2', date: 'June 03, 2024', description: 'A desk located on the corner of the room in between two doorways.', image: '/path-to-your-image.png' },
  ];

  const openModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReservation(null);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-48 h-screen bg-white border-r">
        <div className="p-8">
          <img src="./Acc-set/Photos/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="p-4">
          <ul>
            <li className="mb-5">
              <a href="#home" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h7"></path>
                </svg>
                Home
              </a>
            </li>
            <li className="mb-5">
              <a href="#bookings" className="flex items-center text-gray-700 hover:text-gray-900 bg-gray-100 p-2 rounded">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Bookings
              </a>
            </li>
            <li className="mb-5">
              <a href="#reserve" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M4 11h16M4 11a8 8 0 0112 0"></path>
                </svg>
                Reserve
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          {/* Left side - Empty div to balance the layout */}
          <div className="flex-1"></div>

          {/* Right side - User profile and settings icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M16.24 7.76l-4.95 4.95c-.2.2-.51.2-.71 0s-.2-.51 0-.71l4.95-4.95c.2-.2.51-.2.71 0s.2.51 0 .71zM15.12 17.12c-.2.2-.51.2-.71 0s-.2-.51 0-.71l4.95-4.95c.2-.2.51-.2.71 0s.2.51 0 .71l-4.95 4.95z" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
          <div className="mb-8 p-6 border rounded">
            <h2 className="text-xl font-semibold mb-6">Upcoming Reservations</h2>
            <div className="space-y-4">
              {upcomingReservations.map((reservation, index) => (
                <div key={index} className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer" onClick={() => openModal(reservation)}>
                  <h3 className="text-lg font-medium">{reservation.area}</h3>
                  <p className="text-gray-600">{reservation.desk}</p>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm3 4v1H7v2h2v1H7v2h2v1H7v2h2v1H6v-1h2v-1H6v-2h2v-1H6V8h2V7H6V6h3zm7 6v2h-2v-2h2z" clipRule="evenodd" />
                    </svg>
                    {reservation.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 border rounded">
            <h2 className="text-xl font-semibold mb-6">Pending Reservations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingReservations.map((reservation, index) => (
                <div key={index} className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer" onClick={() => openModal(reservation)}>
                  <h3 className="text-lg font-medium">{reservation.area}</h3>
                  <p className="text-gray-600">{reservation.desk}</p>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm3 4v1H7v2h2v1H7v2h2v1H7v2h2v1H6v-1h2v-1H6v-2h2v-1H6V8h2V7H6V6h3zm7 6v2h-2v-2h2z" clipRule="evenodd" />
                    </svg>
                    {reservation.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
    <div className="bg-white p-8 rounded shadow-lg z-50 max-w-lg mx-auto relative flex flex-col">
      <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.707 5.293a1 1 0 00-1.414 1.414L8.586 10 5.293 13.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586 6.707 5.293z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="flex flex-row-reverse">
        <img src={selectedReservation.image} alt="Desk" className="w-1/2 h-auto mb-4" />
        <div>
          <h2 className="text-xl font-semibold mb-4">{selectedReservation.area}</h2>
          <p className="text-gray-700">{selectedReservation.desk}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 mr-2">Booked for:</span>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm3 4v1H7v2h2v1H7v2h2v1H7v2h2v1H6v-1h2v-1H6v-2h2v-1H6V8h2V7H6V6h3zm7 6v2h-2v-2h2z" clipRule="evenodd" />
            </svg>
            <span>{selectedReservation.date}</span>
          </div>
          <p className="text-gray-700 mb-4">{selectedReservation.description}</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Cancel Reservation</button>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Booking;
