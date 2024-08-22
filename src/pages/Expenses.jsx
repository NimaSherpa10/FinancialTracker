import { useContext, useState } from "react";
import { DataContext } from "../context/data-context";
import ActivityTable from "../components/activityTable";
import useExpense from "../hooks/useExpense";

function Expense() {
  const { expenseData, setExpenseData } = useContext(DataContext);
  const { data: fetchedData, error } = useExpense("../../expenseData.json");
  const [newExpense, setNewExpense] = useState({
    source: "",
    amount: "",
    category: "",
    date: "", // Add date field
  });

  const handleChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (
      newExpense.source &&
      newExpense.amount &&
      newExpense.category &&
      newExpense.date
    ) {
      // Update context data instead of local state
      setExpenseData([...expenseData, newExpense]);
      setNewExpense({ source: "", amount: "", category: "", date: "" }); // Reset form fields
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!fetchedData) return <div>Loading...</div>;

  // Combine fetched data and context data
  const combinedData = [...fetchedData, ...expenseData];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Expense Management</h1>

        {/* Form to Add Expense */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Expense Source:</label>
            <input
              type="text"
              name="source"
              value={newExpense.source}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Amount:</label>
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Category:</label>
            <input
              type="text"
              name="category"
              value={newExpense.category}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Date:</label>
            <input
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Expense
          </button>
        </form>
      </div>
      <h1 className="text-3xl font-bold mb-6">Expenses</h1>

      {/* Pass combined data as a prop to ActivityTable */}
      <ActivityTable data={combinedData} />
    </div>
  );
}

export default Expense;
