import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";
import { useState } from "react";
import Footer from "../shared/Footer";

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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
