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
  const marriageDataPoint = longTermData.find((d) => d.age === marriageAge);

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

      {/* 💍 Wedding Icon */}
      {includeMarriageCost && marriageAge && marriageDataPoint && (
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
  );
};

export default FinancialChart;
