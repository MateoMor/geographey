import React from 'react';

function Default() {
  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#008FCB' }}>
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <a
          href="/"
          className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go back to home
        </a>
      </div>
    </div>
  );
}

export default Default;
