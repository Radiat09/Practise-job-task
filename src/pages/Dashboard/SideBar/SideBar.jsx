import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const SideBar = ({ setShowSidebar, showSideBar }) => {
  const { user } = useAuth();
  return (
    <div
      className={`w-72 hidden lg:block lg:fixed lg:h-screen h-full bg-emerald-600 lg:ml-0 transition-all duration-500 ${
        showSideBar == true ? "ml-0 h-screen" : "-ml-80"
      } `}
    >
      <div className="h-full flex flex-col justify-start items-center gap-12 mt-8">
        <div className="text-4xl font-extrabold">
          <Link to="/">
            My<span className="text-white">Tasks</span>
          </Link>
        </div>

        {/* Navbar menu content here */}
        <div className="flex flex-col justify-start items-center gap-3 w-full ">
          <NavLink
            to="/dashboard/createTask"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 font-bold transition-colors duration-500"
                : "text-white font-bold hover:text-gray-300 transition-colors duration-500"
            }
          >
            Create Task
          </NavLink>

          {user ? (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 font-bold  whitespace-nowrap transition-colors duration-500"
                  : "text-white font-bold hover:text-gray-300 whitespace-nowrap transition-colors duration-500"
              }
            >
              Dashboard
            </NavLink>
          ) : (
            ""
          )}
        </div>
        <p
          className="font-bold text-xl lg:hidden"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          Close
        </p>
      </div>
    </div>
  );
};
SideBar.propTypes = {
  setShowSidebar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
export default SideBar;
