import { useState } from "react";
import { GoalsContext } from "./goal-context";

// Create a function component that acts as a provider
function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now() }]); // Assign a unique ID to each goal
  };

  const updateGoalProgress = (goalId, progress) => {
    setGoals(
      goals.map((goal) => (goal.id === goalId ? { ...goal, progress } : goal))
    );
  };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, updateGoalProgress }}>
      {children}
    </GoalsContext.Provider>
  );
}

export default GoalsProvider;
