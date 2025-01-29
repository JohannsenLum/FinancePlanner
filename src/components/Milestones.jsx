// Milestones.js
import React, { useState } from 'react';
import MarriagePlanning from './MarriagePlanning'; // Import the new component

const Milestones = ({ monthlyBudget }) => {
  const [activeSection, setActiveSection] = useState('marriage');

  const renderSection = () => {
    switch (activeSection) {
      case 'marriage':
        return <MarriagePlanning monthlyBudget={monthlyBudget} />; // Pass monthlyBudget as a prop
      case 'hdb':
        return <MarriagePlanning />;
      case 'car':
        return <MarriagePlanning />;
      case 'condominium':
        return <MarriagePlanning />;
      case 'baby':
        return <MarriagePlanning />;
      case 'renovation':
        return <MarriagePlanning />;
      default:
        return <MarriagePlanning monthlyBudget={monthlyBudget} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Milestones Planning</h1>
      
      <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <button
          onClick={() => setActiveSection('marriage')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Marriage Planning
        </button>
        <button
          onClick={() => setActiveSection('hdb')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          HDB Planning
        </button>
        <button
          onClick={() => setActiveSection('car')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Car Planning
        </button>
        <button
          onClick={() => setActiveSection('condominium')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Condominium Planning
        </button>
        <button
          onClick={() => setActiveSection('baby')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Baby/Children Planning
        </button>
        <button
          onClick={() => setActiveSection('renovation')}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Renovation Planning
        </button>
      </nav>

      <div className="bg-white/10 p-6 rounded-lg">
        {renderSection()}
      </div>
    </div>
  );
};

export default Milestones;