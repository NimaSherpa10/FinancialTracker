import { useContext } from "react";
import { GoalsContext } from "../context/goal-context";

function ProgressStat() {
  const { goals } = useContext(GoalsContext);

  // Calculate total target and progress
  const totalTarget = goals.reduce(
    (sum, goal) => sum + Number(goal.targetAmount),
    0
  );
  const totalProgress = goals.reduce(
    (sum, goal) =>
      sum + (Number(goal.progress) / 100) * Number(goal.targetAmount),
    0
  );

  // Calculate overall progress percentage
  const progressPercentage =
    totalTarget === 0 ? 0 : (totalProgress / totalTarget) * 100;

  return (
    <div className="stats bg-red-300 text-white mt-2 mr-16">
      <div className="stat">
        <div className="text-black">Goal Progress</div>
        <div
          className="radial-progress"
          style={{
            "--value": progressPercentage,
            "--size": "12rem",
            "--thickness": "2px",
          }}
          role="progressbar"
        >
          {progressPercentage.toFixed(0)}%
        </div>
      </div>
    </div>
  );
}

export default ProgressStat;
