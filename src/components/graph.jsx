import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { useContext, useMemo } from "react";
import { DataContext } from "../context/data-context";

function Graph() {
  const { incomeData, expenseData } = useContext(DataContext);

  // Combine and format the data for the chart
  const data = useMemo(() => {
    const mergedData = {};

    // Combine income data
    incomeData.forEach((income) => {
      const month = income.date.slice(0, 3); // Assuming date is in the format like "Apr 2024"
      if (!mergedData[month])
        mergedData[month] = { name: month, income: 0, expenses: 0 };
      mergedData[month].income += Number(income.amount);
    });

    // Combine expense data
    expenseData.forEach((expense) => {
      const month = expense.date.slice(0, 3);
      if (!mergedData[month])
        mergedData[month] = { name: month, income: 0, expenses: 0 };
      mergedData[month].expenses += Number(expense.amount);
    });

    // Convert the merged data object into an array
    return Object.values(mergedData);
  }, [incomeData, expenseData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Finance Overview
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#e91e63"
            fill="#e91e63"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#3f51b5"
            fill="#3f51b5"
            fillOpacity={0.2}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#e91e63"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#3f51b5"
            strokeWidth={2}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
