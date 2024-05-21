import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      {/* Left side - Empty div to balance the layout */}
      <div className="flex-1">
      </div>
      
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
  );
};

export default Header;
