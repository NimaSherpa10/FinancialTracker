function MainStatCard() {
  return (
    <div className="stats bg-red-300 text-white justify-center min-w-[300px] mx-auto overflow-x-hidden sm:ml-36 sm:m-10">
      <div className="stat">
        <div className="text-black">Account balance</div>
        <div className="stat-value text-black">$89,400</div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">Add Income</button>
        </div>
      </div>

      <div className="stat">
        <div className="text-black">Total Expenses</div>
        <div className="text-black stat-value">$89,400</div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">Add expenses</button>
        </div>
      </div>
    </div>
  );
}

export default MainStatCard;
