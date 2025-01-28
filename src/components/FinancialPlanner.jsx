import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import FinancialChart from "./FinancialChart";

const cpfContributionRates = {
  below55: { employee: 0.20, employer: 0.17 },
  above55to60: { employee: 0.13, employer: 0.13 },
  above60to65: { employee: 0.075, employer: 0.075 },
  above65: { employee: 0.05, employer: 0.05 },
};

const calculateCPFContributions = (age, income) => {
  let rates;
  if (age < 55) {
    rates = cpfContributionRates.below55;
  } else if (age >= 55 && age < 60) {
    rates = cpfContributionRates.above55to60;
  } else if (age >= 60 && age < 65) {
    rates = cpfContributionRates.above60to65;
  } else {
    rates = cpfContributionRates.above65;
  }

  const employeeContribution = income * rates.employee;
  const employerContribution = income * rates.employer;
  const totalContribution = employeeContribution + employerContribution;

  return { employeeContribution, employerContribution, totalContribution };
};

const FinancialPlanner = () => {
  const [age, setAge] = useState(30);
  const [income, setIncome] = useState(5000);
  const [savings, setSavings] = useState(30000);
  const [monthlyExpenses, setMonthlyExpenses] = useState({
    food: 500,
    transport: 200,
    groceries: 300,
    phone: 50,
    internet: 40,
    utilities: 150,
    shopping: 200,
    entertainment: 100,
    loans: 300,
    parentsAllowance: 200,
    others: 100,
    insurance: 500,
  });
  const [monthlyInvestments, setMonthlyInvestments] = useState({
    growth: 500,
    dividends: 300,
    iFast: 200,
    endowments: 100,
    others: 50,
  });
  const [investmentGains, setInvestmentGains] = useState({
    growth: 7,
    dividends: 5,
    iFast: 6,
    endowments: 4,
    others: 3,
  });
  const [longTermData, setLongTermData] = useState([]);

  const totalExpenditure = Object.values(monthlyExpenses).reduce((a, b) => a + b, 0);

  const calculatePassiveIncome = (investments, gains) => {
    return Object.keys(investments).reduce((total, key) => {
      return total + (investments[key] * 12 * (gains[key] / 100));
    }, 0);
  };

  const generateLongTermData = () => {
    const data = [];
    let currentIncome = income;
    let currentExpenses = totalExpenditure;
    let currentSavings = savings;
    let currentPassiveIncome = calculatePassiveIncome(monthlyInvestments, investmentGains);

    for (let year = age; year <= 100; year++) {
      const cpfContributions = calculateCPFContributions(year, currentIncome);
      const incomeAfterCPF = currentIncome - cpfContributions.employeeContribution;
      const incomeUsed = incomeAfterCPF - currentSavings;
      const shortfall = currentExpenses > incomeAfterCPF + currentPassiveIncome ? currentExpenses - (incomeAfterCPF + currentPassiveIncome) : 0;

      data.push({
        age: year,
        incomeUsed: incomeUsed,
        shortfall: shortfall,
        savings: currentSavings,
        passiveIncome: currentPassiveIncome,
        cpfContributions: cpfContributions.totalContribution,
      });

      currentIncome += currentIncome * 0.02;
      currentExpenses += currentExpenses * 0.025;
      currentSavings += incomeAfterCPF + currentPassiveIncome - currentExpenses;
      currentPassiveIncome = calculatePassiveIncome(monthlyInvestments, investmentGains);
    }

    setLongTermData(data);
  };

  useEffect(() => {
    generateLongTermData();
  }, [age, income, savings, monthlyExpenses, monthlyInvestments, investmentGains]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Financial Planning</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <InputForm
          age={age} setAge={setAge}
          income={income} setIncome={setIncome}
          savings={savings} setSavings={setSavings}
          monthlyExpenses={monthlyExpenses} setMonthlyExpenses={setMonthlyExpenses}
          monthlyInvestments={monthlyInvestments} setMonthlyInvestments={setMonthlyInvestments}
          investmentGains={investmentGains} setInvestmentGains={setInvestmentGains}
          totalExpenditure={totalExpenditure}
        />
      </div>

      <div className="bg-white/10 p-6 rounded-lg">
        <FinancialChart longTermData={longTermData} />
      </div>
    </div>
  );
};

export default FinancialPlanner;