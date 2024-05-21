import React from 'react';
import UploadComponent from './components/UploadComponent';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        Image Converter Application
      </header>
      <main className="flex flex-col items-center p-4">
        <UploadComponent />
      </main>
    </div>
  );
};

export default App;
