import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const FinancialChart = () => {
  const [income, setIncome] = useState(5000); // Default income
  const [expenses, setExpenses] = useState(3000); // Default expenses
  const [age, setAge] = useState(30); // Default age
  const [inflationRate, setInflationRate] = useState(2); // Default inflation rate
  const [salaryIncrementRate, setSalaryIncrementRate] = useState(3); // Default salary increment rate
  const [longTermData, setLongTermData] = useState([]); // Long-term data for the chart
  const [showSavingsLine, setShowSavingsLine] = useState(true); // Toggle savings line

  // Function to generate yearly data
  const generateLongTermData = () => {
    const data = [];
    let currentIncome = income;
    let currentExpenses = expenses;
    let currentSavings = currentIncome - currentExpenses;

    for (let year = age; year <= 100; year++) {
      data.push({
        age: year,
        cashUsed: currentExpenses,
        savings: currentSavings > 0 ? currentSavings : 0,
      });

      // Update income and expenses for the next year
      currentIncome += currentIncome * (salaryIncrementRate / 100);
      currentExpenses += currentExpenses * (inflationRate / 100);

      // Calculate new savings
      currentSavings = currentIncome - currentExpenses;
    }

    setLongTermData(data);
  };

  // Recalculate data whenever inputs change
  useEffect(() => {
    generateLongTermData();
  }, [income, expenses, age, inflationRate, salaryIncrementRate]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Financial Planning Chart</h2>

      {/* Input fields for user data */}
      <div className="flex flex-col gap-4 mb-4">
        <label>
          Income:
          <input
            type="number"
            placeholder="Income"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <label>
          Expenses:
          <input
            type="number"
            placeholder="Expenses"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <label>
          Current Age:
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <label>
          Inflation Rate (%):
          <input
            type="number"
            placeholder="Inflation Rate"
            value={inflationRate}
            onChange={(e) => setInflationRate(Number(e.target.value))}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <label>
          Salary Increment Rate (%):
          <input
            type="number"
            placeholder="Salary Increment Rate"
            value={salaryIncrementRate}
            onChange={(e) => setSalaryIncrementRate(Number(e.target.value))}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
      </div>

      {/* Toggle button for savings line */}
      <button
        onClick={() => setShowSavingsLine(!showSavingsLine)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Savings Line
      </button>

      {/* Chart */}
      <ComposedChart
        width={800}
        height={400}
        data={longTermData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="age" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cashUsed" stackId="a" fill="#ff8042" />
        {showSavingsLine && (
          <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
        )}
      </ComposedChart>
    </div>
  );
};

export default FinancialChart;