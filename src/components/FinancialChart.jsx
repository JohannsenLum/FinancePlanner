import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceDot,
} from "recharts";

import React, { useState } from "react";

const FinancialChart = ({ longTermData, includeMarriageCost, marriageAge, showCpf}) => {
  const [yearRange, setYearRange] = useState(20); // Default to show 20 years
  const marriageDataPoint = longTermData.find((d) => d.age === marriageAge);
  
  // Filter data based on selected year range
  const filteredData = longTermData.filter((item, index) => index < yearRange);

  return (
    <div>
      <div className="mb-4">
        <label className="block text-white mb-2">Years to display:</label>
        <select 
          className="bg-white rounded px-3 py-1"
          value={yearRange}
          onChange={(e) => setYearRange(Number(e.target.value))}
        >
          <option value={10}>10 Years</option>
          <option value={20}>20 Years</option>
          <option value={30}>30 Years</option>
          <option value={40}>40 Years</option>
          <option value={longTermData.length}>All Years</option>
        </select>
      </div>
      
      <ComposedChart
        width={800}
        height={400}
        data={filteredData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="age" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="incomeUsed" stackId="a" fill="#ff8042" name="Income Used" />
        <Line
          type="monotone"
          dataKey="savings"
          stroke="#82ca9d"
          name="Savings"
        />
        {showCpf && (
          <Line
            type="monotone"
            dataKey="cpfContributions"
            stroke="#ffc658"
            name="CPF Contributions"
          />
        )}

        {includeMarriageCost && marriageAge && marriageDataPoint && filteredData.some(d => d.age === marriageAge) && (
          <ReferenceDot
            x={marriageAge}
            y={marriageDataPoint.savings}
            r={5}
            fill="white"
            stroke="red"
            isFront={true}
            label={{
              position: "top",
              offset: 50,
              value: "💍",
              fontSize: 20,
            }}
          />
        )}
      </ComposedChart>
    </div>
  );
};

export default FinancialChart;
