import { useState, useContext } from "react";
import { DataContext } from "../context/data-context";
import ActivityTable from "../components/activityTable";
import useIncome from "../hooks/useIncome";
import ErrorBoundary from "../components/error-boundary";

function Income() {
  const { incomeData, setIncomeData } = useContext(DataContext);
  const { data: fetchedData, error } = useIncome("../../incomeData.json");
  const [newIncome, setNewIncome] = useState({
    source: "",
    amount: "",
    category: "",
    date: "", // Add date field
  });

  const handleChange = (e) => {
    setNewIncome({
      ...newIncome,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (
      newIncome.source &&
      newIncome.amount &&
      newIncome.category &&
      newIncome.date
    ) {
      // Update context data instead of local state
      setIncomeData([...incomeData, newIncome]);
      setNewIncome({ source: "", amount: "", category: "", date: "" }); // Reset form fields
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!fetchedData) return <div>Loading...</div>;

  // Combine fetched data and context data
  const combinedData = [...fetchedData, ...incomeData];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Income Management</h1>

        {/* Form to Add Income */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Income Source:</label>
            <input
              type="text"
              name="source"
              value={newIncome.source}
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
              value={newIncome.amount}
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
              value={newIncome.category}
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
              value={newIncome.date}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Income
          </button>
        </form>
      </div>

      <h1 className="text-3xl font-bold mb-6">Income</h1>

      {/* Pass combined data as a prop to ActivityTable */}
      <ErrorBoundary>
        <ActivityTable data={combinedData} />
      </ErrorBoundary>
    </div>
  );
}

export default Income;
