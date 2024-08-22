import React from "react";

function ActivityTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Source</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((income, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{income.source}</td>
              <td>${income.amount}</td>
              <td>{income.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;
