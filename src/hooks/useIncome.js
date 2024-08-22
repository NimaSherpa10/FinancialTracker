import { useEffect, useState } from "react";
import incomeData from "../../incomeData.json";

function useIncome() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      // Simulate fetching by setting data directly
      setData(incomeData);
    } catch (error) {
      setError(error);
    }
  }, []);

  return { data, error };
}

export default useIncome;
