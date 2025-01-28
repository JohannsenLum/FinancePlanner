const InputForm = ({
  age, setAge,
  income, setIncome,
  savings, setSavings,
  monthlyExpenses, setMonthlyExpenses,
  monthlyInvestments, setMonthlyInvestments,
  investmentGains, setInvestmentGains,
  totalExpenditure,
}) => {
  return (
    <div className="space-y-4">
      {/* Personal Details */}
      <div className="bg-white/10 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Personal Details</h2>
        <label className="block text-white">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block text-white mt-4">
          Income:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block text-white mt-4">
          Savings:
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Monthly Expenses */}
      <div className="bg-white/10 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Monthly Expenses</h2>
        {Object.keys(monthlyExpenses).map((key) => (
          <label key={key} className="block text-white">
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input
              type="number"
              value={monthlyExpenses[key]}
              onChange={(e) => setMonthlyExpenses({ ...monthlyExpenses, [key]: Number(e.target.value) })}
              className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        ))}
        <p className="text-white mt-4">Total Expenditure: ${totalExpenditure}</p>
      </div>

      {/* Investments */}
      <div className="bg-white/10 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Investments</h2>
        {Object.keys(monthlyInvestments).map((key) => (
          <div key={key} className="block text-white">
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              <input
                type="number"
                value={monthlyInvestments[key]}
                onChange={(e) => setMonthlyInvestments({ ...monthlyInvestments, [key]: Number(e.target.value) })}
                className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block mt-2">
              Annual Gain (%):
              <input
                type="number"
                value={investmentGains[key]}
                onChange={(e) => setInvestmentGains({ ...investmentGains, [key]: Number(e.target.value) })}
                className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputForm;