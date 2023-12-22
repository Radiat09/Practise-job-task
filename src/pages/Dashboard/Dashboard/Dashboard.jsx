import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../Sidebar/SideBar";

const Dashboard = () => {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <div>
        <SideBar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
        <div>
          <NavBar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
