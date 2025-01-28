import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const FinancialChart = ({ longTermData }) => {
  return (
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
      <Bar dataKey="incomeUsed" stackId="a" fill="#ff8042" name="Income Used" />
      <Bar dataKey="shortfall" stackId="a" fill="#ff0000" name="Shortfall" />
      <Line
        type="monotone"
        dataKey="savings"
        stroke="#82ca9d"
        strokeDasharray="5 5"
        name="Savings"
      />
      <Line
        type="monotone"
        dataKey="passiveIncome"
        stroke="#8884d8"
        name="Passive Income"
      />
      <Line
        type="monotone"
        dataKey="cpfContributions"
        stroke="#ffc658"
        name="CPF Contributions"
      />
    </ComposedChart>
  );
};

export default FinancialChart;