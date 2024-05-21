import React from 'react';
import Navbar from './components/Navbar';
import UploadComponent from './components/UploadComponent';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <main className="flex flex-col items-center p-4">
          <UploadComponent />
        </main>
      </div>
    </div>
  );
};

export default App;
