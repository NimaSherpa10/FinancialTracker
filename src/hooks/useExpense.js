import { useEffect, useState } from "react";
import expenseData from "../../expenseData.json";

function useExpense() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      // Simulate fetching by setting data directly
      setData(expenseData);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { data, error };
}

export default useExpense;
