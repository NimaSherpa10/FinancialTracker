import { useContext } from "react";
import { DataContext } from "../context/data-context";

function MainStatCard() {
  const { incomeData, expenseData } = useContext(DataContext);

  // Calculate total income and expenses
  const totalIncome = incomeData.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  const totalExpenses = expenseData.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  const accountBalance = totalIncome - totalExpenses;

  return (
    <div className="stats bg-red-300 text-white justify-center min-w-[300px] mx-auto overflow-x-hidden sm:ml-36 sm:m-10 flex-wrap flex">
      <div className="stat">
        <div className="text-black">Account balance</div>
        <div className="stat-value text-black">
          ${accountBalance.toFixed(2)}
        </div>
      </div>
      <div className="stat">
        <div className="text-black">Total Income</div>
        <div className="text-black stat-value">${totalIncome.toFixed(2)}</div>
      </div>
      <div className="stat">
        <div className="text-black">Total Expenses</div>
        <div className="text-black stat-value">${totalExpenses.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default MainStatCard;
