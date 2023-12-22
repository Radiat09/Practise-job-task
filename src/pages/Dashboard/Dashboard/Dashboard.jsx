import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../Sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-72">
        <SideBar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
        <div>
          <NavBar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
        </div>
      </div>
      <div className="flex-1 mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
