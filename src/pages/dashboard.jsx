import ActivityTable from "../components/activityTable";
import Graph from "../components/graph";
import MainStatCard from "../components/main-stat-card";
import ProgressStat from "../components/progress-stat";

function Dashboard() {
  return (
    <>
      <div className="flex justify-center sm:justify-between md:justify-between lg:justify-between flex-wrap">
        <MainStatCard />
        <ProgressStat />
      </div>
      <div>
        <Graph />
      </div>
      <div>
        <h1 className="text-black font-bold text-3xl my-2"> Recent Activity</h1>
        <ActivityTable />
      </div>
    </>
  );
}

export default Dashboard;
