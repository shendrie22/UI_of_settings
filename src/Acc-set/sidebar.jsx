import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-48 h-screen bg-white border-r">
      <div className="p-4">
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
  );
};

export default Sidebar;
