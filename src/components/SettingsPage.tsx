import React, { useState } from 'react';
import { Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    website: '',
    inputSelector: '',
    submitSelector: '',
    responseSelector: '',
    loginFormSelector: '',
    usernameSelector: '',
    passwordSelector: '',
    loginButtonSelector: '',
    verificationSelector: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save settings to electron-store or similar
    console.log('Settings saved:', settings);
    // Implement actual saving logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Target Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={settings.website}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="inputSelector" className="block text-sm font-medium text-gray-700">Input Box Selector</label>
            <input
              type="text"
              id="inputSelector"
              name="inputSelector"
              value={settings.inputSelector}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          {/* Add more input fields for other selectors */}
        </div>
        <button
          type="submit"
          className="mt-6 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Save className="mr-2" size={18} />
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;