import React from 'react';
import FinancialChart from './components/FinancialChart';

const App = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Financial Planning Chart</h1>
    <FinancialChart />
  </div>
);

export default App;
