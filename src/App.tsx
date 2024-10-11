import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Settings, Terminal } from 'lucide-react';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import ConsolePage from './components/ConsolePage';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Jugggad</h1>
          </div>
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <Home size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/console" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
                <Terminal size={20} />
                <span>Console</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/console" element={<ConsolePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;