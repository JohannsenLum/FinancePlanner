import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const FinancialChart = ({ longTermData, showSavingsLine }) => {
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
      <Bar dataKey="cashUsed" stackId="a" fill="#ff8042" />
      {showSavingsLine && (
        <Line type="monotone" dataKey="savings" stroke="#82ca9d" />
      )}
    </ComposedChart>
  );
};

export default FinancialChart;