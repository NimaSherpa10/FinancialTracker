function ProgressStat() {
  return (
    <div className="stats bg-red-300 text-white sm:me-10 mt-2 sm:mr-36 sm:m-10">
      <div className="stat">
        <div className="text-black">Goal Progress</div>
        <div
          className="radial-progress"
          style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}
          role="progressbar"
        >
          70%
        </div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">Goals</button>
        </div>
      </div>
    </div>
  );
}

export default ProgressStat;
