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

function applyWeddingCost(data, weddingAge, weddingCost) {
  return data.map(entry => {
    if (entry.age === weddingAge) {
      return {
        ...entry,
        savings: entry.savings - weddingCost,
      };
    }
    return entry;
  });
}

const FinancialPlanner = () => {
  const [age, setAge] = useState(20);
  const [income, setIncome] = useState(5000);
  const [savings, setSavings] = useState(30000);
  const [includeMarriageCost, setIncludeMarriageCost] = useState(true);

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
  const [currentInvestments, setCurrentInvestments] = useState(20000);
  
  const [longTermData, setLongTermData] = useState([]);
  const [monthlyMarriageSavings, setMonthlyMarriageSavings] = useState(0);

  // Load saved financial data
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("financialPlanningData"));
    if (savedData) {
      setAge(savedData.age);
      setIncome(savedData.income);
      setSavings(savedData.savings);
      setMonthlyExpenses(savedData.monthlyExpenses);
      setMonthlyInvestments(savedData.monthlyInvestments);
      setInvestmentGains(savedData.investmentGains);
      setCurrentInvestments(savedData.currentInvestments); // Load investment data
    }
  }, []);
  

  // Load Marriage Planning Data
  useEffect(() => {
    const marriageData = JSON.parse(localStorage.getItem("marriagePlanningData"));
    if (marriageData && marriageData.marriageAge > age) {
      const yearsToMarriage = marriageData.marriageAge - age;
      const monthlySavingsNeeded = marriageData.totalCost / (yearsToMarriage * 12);
      setMonthlyMarriageSavings(monthlySavingsNeeded);
    }
  }, [age]);

  const totalExpenditure = Object.values(monthlyExpenses).reduce((a, b) => a + b, 0) + monthlyMarriageSavings;

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
    let currentInvestedAmount = currentInvestments;
  
    const marriageData = JSON.parse(localStorage.getItem("marriagePlanningData"));

    for (let year = age; year <= 100; year++) {
      const cpfContributions = calculateCPFContributions(year, currentIncome);
      const incomeAfterCPF = currentIncome - cpfContributions.employeeContribution;
      const incomeUsed = incomeAfterCPF - currentSavings;
      const shortfall = currentExpenses > incomeAfterCPF + currentPassiveIncome ? currentExpenses - (incomeAfterCPF + currentPassiveIncome) : 0;
  
      let adjustedSavings = currentSavings;
      if (includeMarriageCost && marriageData && year === marriageData.marriageAge) {
        adjustedSavings -= marriageData.totalCost;
      }

      data.push({
        age: year,
        incomeUsed: incomeUsed,
        shortfall: shortfall,
        savings: adjustedSavings,
        passiveIncome: currentPassiveIncome,
        cpfContributions: cpfContributions.totalContribution,
        investments: currentInvestedAmount, // New field
      });
  
      // Simulate investment growth
      const investmentGrowth = currentInvestedAmount * 0.05; // Assume 5% return
      currentInvestedAmount += investmentGrowth + Object.values(monthlyInvestments).reduce((a, b) => a + b, 0);
  
      // Adjust values for the next year
      currentIncome += currentIncome * 0.02; // Income grows by 2%
      currentExpenses += currentExpenses * 0.025; // Expenses grow by 2.5%
      currentSavings += incomeAfterCPF + currentPassiveIncome - currentExpenses;
      currentPassiveIncome = calculatePassiveIncome(monthlyInvestments, investmentGains);
    }
  
    setLongTermData(data);
  };
  

  useEffect(() => {
    generateLongTermData();
  }, [age, income, savings, monthlyExpenses, monthlyInvestments, investmentGains, monthlyMarriageSavings, includeMarriageCost]);

  // Save Financial Plan
  const saveFinancialPlan = () => {
    const financialData = {
      age,
      income,
      savings,
      monthlyExpenses,
      monthlyInvestments,
      investmentGains,
    };
    localStorage.setItem("financialPlanningData", JSON.stringify(financialData));
    alert("Financial plan saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Financial Planning</h1>

      <div className="bg-white/10 p-6 rounded-lg text-white mb-8">
        <h2 className="text-xl font-bold">Marriage Budget Consideration</h2>
        <p>Estimated Monthly Savings Needed for Marriage: ${monthlyMarriageSavings.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-8">
      <InputForm
        age={age} setAge={setAge}
        income={income} setIncome={setIncome}
        savings={savings} setSavings={setSavings}
        monthlyExpenses={monthlyExpenses} setMonthlyExpenses={setMonthlyExpenses}
        monthlyInvestments={monthlyInvestments} setMonthlyInvestments={setMonthlyInvestments}
        investmentGains={investmentGains} setInvestmentGains={setInvestmentGains}
        totalExpenditure={totalExpenditure}
        currentInvestments={currentInvestments} setCurrentInvestments={setCurrentInvestments}
      />
      </div>

      <button 
        onClick={saveFinancialPlan}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Save Plan
      </button>

      <div className="mb-4 text white">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={includeMarriageCost}
            onChange={() => setIncludeMarriageCost(!includeMarriageCost)}
          />
          <span className="ml-2 text-white">Include Marriage Cost</span>
        </label>
      </div>

      <div className="bg-white/10 p-6 rounded-lg">
        <FinancialChart longTermData={longTermData} 
          includeMarriageCost={includeMarriageCost}
          marriageAge={JSON.parse(localStorage.getItem("marriagePlanningData"))?.marriageAge}
        />
      </div>
    </div>
  );
};

export default FinancialPlanner;
