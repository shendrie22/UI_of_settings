import React from 'react';

const ChangePass = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-white w-1/4 border-r border-gray-300 p-6">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <ul>
          <li className="text-black">Account Settings</li> 
        </ul>
      </div>

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
  );
};

export default ChangePass;
