import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" /> {/* Update the src path to your logo */}
        
      </div>
      <div className="flex items-center justify-center flex-grow"> {/* Center the text */}
        <span className="font-bold">Image Converter Application</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded">Task Options</button>
        <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded">User Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
