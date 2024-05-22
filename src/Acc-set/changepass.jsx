import React from 'react';

const ChangePass = () => {
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
        <div className="flex-1 p-6 ml-4">
          <div className="max-w-sm"> 
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                  Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  name="new-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  name="current-password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Current Password"
                />
              </div>
              <div className="mb-4">
                <a href="#" className="text-black text-sm font-semibold">
                  Can't remember your current password?{' '}
                  <span className="text-blue-500 hover:text-blue-800 font-semibold">Reset your password.</span> 
                </a>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-black text-white rounded-md"
                >
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
