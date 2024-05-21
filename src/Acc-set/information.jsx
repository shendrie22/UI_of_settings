import React, { useState } from 'react';

const Information = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('************');

  const handleResetPassword = () => {
    alert('Reset Password Clicked');
  };

  const handleUploadPhoto = (event) => {
    alert('Photo uploaded');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-48 h-screen bg-white border-r">
        <div className="p-10">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Settings</h2>
          <ul>
            <li className="mb-2">
              <a href="#account-settings" className="flex items-center text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4z"></path>
                </svg>
                Account Settings
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

        {/* Main Content */}
        <div className="flex-1 p-7 ml-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
            <div className="flex items-center space-x-8 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <span className="text-4xl text-gray-500">JD</span>
                </div>
                <button
                  onClick={handleUploadPhoto}
                  className="px-1 py-1 bg-gray-200 text-black text-xs rounded-md"
                >
                  Upload Photo
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{firstName} {lastName}</h2>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
            <div className="p-4 border rounded-md shadow-sm bg-white">
              <h3 className="text-lg font-medium mb-4">General Info</h3>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    readOnly
                    className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    onClick={handleResetPassword}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-md"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
