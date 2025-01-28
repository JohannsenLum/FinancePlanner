import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import FinancialChart from "./FinancialChart";
import ToggleButton from "./ToggleButton";

const FinancialPlanner = () => {
  const [age, setAge] = useState(30);
  const [startWorkDate, setStartWorkDate] = useState("2023-01-01");
  const [income, setIncome] = useState(5000);
  const [savings, setSavings] = useState(30000);
  const [cpf, setCpf] = useState(10000);
  const [bonuses, setBonuses] = useState(1000);
  const [basicIncomeIncrement, setBasicIncomeIncrement] = useState(2);
  const [allowanceIncrement, setAllowanceIncrement] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState({ food: 500, transport: 200 });
  const [insurancePremiums, setInsurancePremiums] = useState({ life: 200 });
  const [monthlyInvestments, setMonthlyInvestments] = useState(1000);
  const [longTermData, setLongTermData] = useState([]);
  const [showSavingsLine, setShowSavingsLine] = useState(true);

  const generateLongTermData = () => {
    const data = [];
    let currentIncome = income;
    let currentExpenses = Object.values(monthlyExpenses).reduce((a, b) => a + b, 0);
    let currentSavings = currentIncome - currentExpenses;

    for (let year = age; year <= 100; year++) {
      data.push({
        age: year,
        cashUsed: currentExpenses,
        savings: currentSavings > 0 ? currentSavings : 0,
      });

      currentIncome += currentIncome * (basicIncomeIncrement / 100);
      currentExpenses += currentExpenses * 0.025; // Inflation rate
      currentSavings = currentIncome - currentExpenses;
    }

    setLongTermData(data);
  };

  useEffect(() => {
    generateLongTermData();
  }, [age, income, monthlyExpenses, basicIncomeIncrement]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Financial Planning</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <InputForm
            age={age} setAge={setAge}
            startWorkDate={startWorkDate} setStartWorkDate={setStartWorkDate}
            income={income} setIncome={setIncome}
            savings={savings} setSavings={setSavings}
            cpf={cpf} setCpf={setCpf}
            bonuses={bonuses} setBonuses={setBonuses}
            basicIncomeIncrement={basicIncomeIncrement} setBasicIncomeIncrement={setBasicIncomeIncrement}
            allowanceIncrement={allowanceIncrement} setAllowanceIncrement={setAllowanceIncrement}
            monthlyExpenses={monthlyExpenses} setMonthlyExpenses={setMonthlyExpenses}
            insurancePremiums={insurancePremiums} setInsurancePremiums={setInsurancePremiums}
            monthlyInvestments={monthlyInvestments} setMonthlyInvestments={setMonthlyInvestments}
          />
        </div>
        <div>
          <FinancialChart longTermData={longTermData} showSavingsLine={showSavingsLine} />
          <ToggleButton
            showSavingsLine={showSavingsLine}
            setShowSavingsLine={setShowSavingsLine}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanner;