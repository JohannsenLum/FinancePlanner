const InputForm = ({ income, setIncome, expenses, setExpenses, age, setAge, inflationRate, setInflationRate, salaryIncrementRate, setSalaryIncrementRate }) => {
    return (
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
    );
  };
  
  export default InputForm;