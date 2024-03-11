import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface Data {
  letter: string;
  amount: number;
}

interface Props {
  displayData: Data[];
}

const LetterChart: React.FC<Props> = ({ displayData }) => {
  return (
    <div>
      <h1>Letteralyzer</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={500} height={300} data={displayData}>
          <XAxis dataKey="letter" />
          <YAxis dataKey="amount" allowDecimals={false} />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LetterChart;
