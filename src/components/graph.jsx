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

const data = [
  { name: "Apr", income: 100, expenses: 50 },
  { name: "May", income: 200, expenses: 100 },
  { name: "Jun", income: 300, expenses: 40 },
  { name: "Jul", income: 150, expenses: 200 },
  { name: "Aug", income: 250, expenses: 130 },
  { name: "Sep", income: 400, expenses: 180 },
  { name: "Oct", income: 300, expenses: 100 },
  { name: "Nov", income: 350, expenses: 90 },
  { name: "Dec", income: 500, expenses: 300 },
];

function Graph() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Finance Overiview
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">4% more in 2021</p>
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
