import Graph from "../components/graph";
import MainStatCard from "../components/main-stat-card";
import ProgressStat from "../components/progress-stat";

function Dashboard() {
  return (
    <div className="p-4 md:p-8">
      {/* Flex container for the stat cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:space-x-4 lg:space-x-6">
        <MainStatCard />
        <ProgressStat />
      </div>

      {/* Graph container */}
      <div className="mt-6">
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
