import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <>
      <div>
        <Sidebar
          setShowSidebar={setShowSidebar}
          showSideBar={showSideBar}
        ></Sidebar>
        <div>
          <Navbar setShowSidebar={setShowSidebar} showSideBar={showSideBar} />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
