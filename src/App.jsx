import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
}

export default App;
