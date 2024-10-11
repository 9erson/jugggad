import React from 'react';
import { Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Jugggad</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Zap className="text-yellow-500 mr-2" size={24} />
          <h2 className="text-2xl font-semibold text-gray-700">Automate with Ease</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Jugggad is your powerful automation assistant. With our API and intelligent web interaction capabilities, you can streamline your workflows and save valuable time.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Automated web interactions</li>
          <li>Secure authentication handling</li>
          <li>Customizable CSS selectors</li>
          <li>Error handling and logging</li>
          <li>Easy-to-use API endpoint</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;