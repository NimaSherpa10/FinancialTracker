import Graph from "../components/graph";
import MainStatCard from "../components/main-stat-card";
import ProgressStat from "../components/progress-stat";
import ErrorBoundary from "../components/error-boundary";
function Dashboard() {
  return (
    <div className="p-4 md:p-8">
      {/* Flex container for the stat cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:space-x-4 lg:space-x-6">
        <ErrorBoundary>
          <MainStatCard />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProgressStat />
        </ErrorBoundary>
      </div>

      {/* Graph container */}
      <div className="mt-6">
        <ErrorBoundary>
          <Graph />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default Dashboard;
