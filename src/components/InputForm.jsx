import SectionCard from "./SectionCard";

const InputForm = ({
  age, setAge,
  startWorkDate, setStartWorkDate,
  income, setIncome,
  savings, setSavings,
  cpf, setCpf,
  bonuses, setBonuses,
  basicIncomeIncrement, setBasicIncomeIncrement,
  allowanceIncrement, setAllowanceIncrement,
  monthlyExpenses, setMonthlyExpenses,
  insurancePremiums, setInsurancePremiums,
  monthlyInvestments, setMonthlyInvestments
}) => {
  return (
    <div className="space-y-6">
      {/* Personal Details */}
      <SectionCard title="Personal Details">
        <label className="block">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Start Work Date:
          <input
            type="date"
            value={startWorkDate}
            onChange={(e) => setStartWorkDate(e.target.value)}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Income:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Savings:
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          CPF:
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </SectionCard>

      {/* Monthly Expenses */}
      <SectionCard title="Monthly Expenses">
        <label className="block">
          Food:
          <input
            type="number"
            value={monthlyExpenses.food}
            onChange={(e) => setMonthlyExpenses({ ...monthlyExpenses, food: Number(e.target.value) })}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Transport:
          <input
            type="number"
            value={monthlyExpenses.transport}
            onChange={(e) => setMonthlyExpenses({ ...monthlyExpenses, transport: Number(e.target.value) })}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        {/* Add more expense fields as needed */}
      </SectionCard>

      {/* Sources of Income */}
      <SectionCard title="Sources of Income">
        <label className="block">
          Salary:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Bonuses:
          <input
            type="number"
            value={bonuses}
            onChange={(e) => setBonuses(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        {/* Add more income fields as needed */}
      </SectionCard>

      {/* Insurance */}
      <SectionCard title="Insurance">
        <label className="block">
          Life Insurance Premiums:
          <input
            type="number"
            value={insurancePremiums.life}
            onChange={(e) => setInsurancePremiums({ ...insurancePremiums, life: Number(e.target.value) })}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        {/* Add more insurance fields as needed */}
      </SectionCard>

      {/* Investments */}
      <SectionCard title="Investments">
        <label className="block">
          Monthly Investments:
          <input
            type="number"
            value={monthlyInvestments}
            onChange={(e) => setMonthlyInvestments(Number(e.target.value))}
            className="w-full px-4 py-2 mt-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        {/* Add more investment fields as needed */}
      </SectionCard>
    </div>
  );
};

export default InputForm;