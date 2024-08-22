import { useContext, useState } from "react";
import { GoalsContext } from "../context/goal-context";

function Goals() {
  const { goals, addGoal } = useContext(GoalsContext);
  const [newGoal, setNewGoal] = useState({
    title: "",
    targetAmount: 0,
    progress: 0,
  });

  const handleChange = (e) => {
    setNewGoal({
      ...newGoal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGoal.title && newGoal.targetAmount) {
      // Convert targetAmount to number if it's a string
      addGoal({
        ...newGoal,
        targetAmount: Number(newGoal.targetAmount),
      });
      setNewGoal({ title: "", targetAmount: 0, progress: 0 });
    }
  };

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Savings Goals</h1>
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div>
          <label className="block text-gray-700 mb-2">Goal Title:</label>
          <input
            type="text"
            name="title"
            value={newGoal.title}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Target Amount:</label>
          <input
            type="number"
            name="targetAmount"
            value={newGoal.targetAmount}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Current Progress:</label>
          <input
            type="number"
            name="progress"
            value={newGoal.progress}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Goal
        </button>
      </form>

      {/* Display list of goals as a table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Target Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress (%)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {goal.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${Number(goal.targetAmount).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {goal.progress}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Goals;
