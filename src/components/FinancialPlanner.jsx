import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import FinancialChart from "./FinancialChart";
import ToggleButton from "./ToggleButton";

const FinancialPlanner = () => {
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState(3000);
  const [age, setAge] = useState(30);
  const [inflationRate, setInflationRate] = useState(2);
  const [salaryIncrementRate, setSalaryIncrementRate] = useState(3);
  const [longTermData, setLongTermData] = useState([]);
  const [showSavingsLine, setShowSavingsLine] = useState(true);

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

      currentIncome += currentIncome * (salaryIncrementRate / 100);
      currentExpenses += currentExpenses * (inflationRate / 100);
      currentSavings = currentIncome - currentExpenses;
    }

    setLongTermData(data);
  };

  useEffect(() => {
    generateLongTermData();
  }, [income, expenses, age, inflationRate, salaryIncrementRate]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Financial Planning Chart</h2>
      <InputForm
        income={income}
        setIncome={setIncome}
        expenses={expenses}
        setExpenses={setExpenses}
        age={age}
        setAge={setAge}
        inflationRate={inflationRate}
        setInflationRate={setInflationRate}
        salaryIncrementRate={salaryIncrementRate}
        setSalaryIncrementRate={setSalaryIncrementRate}
      />
      <ToggleButton
        showSavingsLine={showSavingsLine}
        setShowSavingsLine={setShowSavingsLine}
      />
      <FinancialChart longTermData={longTermData} showSavingsLine={showSavingsLine} />
    </div>
  );
};

export default FinancialPlanner;