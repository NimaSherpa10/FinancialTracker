import { useState } from "react";
import { DataContext } from "./data-context";
import useIncome from "../hooks/useIncome";
import useExpense from "../hooks/useExpense";

// Create a function component that acts as a provider
function DataProvider({ children }) {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  // Load fetched income data
  const { data: fetchedIncomeData, error: incomeError } = useIncome(
    "../../incomeData.json"
  );

  // Load fetched expense data
  const { data: fetchedExpenseData, error: expenseError } = useExpense(
    "../../expenseData.json"
  );

  // Combine fetched data with context data
  const combinedIncomeData = [...(fetchedIncomeData || []), ...incomeData];
  const combinedExpenseData = [...(fetchedExpenseData || []), ...expenseData];

  // Handle errors if necessary
  if (incomeError || expenseError) {
    console.error("Error fetching data:", incomeError, expenseError);
  }

  return (
    <DataContext.Provider
      value={{
        incomeData: combinedIncomeData,
        setIncomeData,
        expenseData: combinedExpenseData,
        setExpenseData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
