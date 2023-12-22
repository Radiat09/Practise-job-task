import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Sidebar = ({ setShowSidebar, showSideBar }) => {
  const { user } = useAuth();
  return (
    <div
      className={`w-72 lg:hidden fixed min-h-screen h-full bg-white text-emerald-500 transition-all duration-500 ${
        showSideBar == true ? "ml-0" : "-ml-80"
      }`}
    >
      <div className="h-full flex flex-col justify-start items-center gap-12 mt-8">
        <div className="text-4xl font-extrabold">
          <Link to="/">
            My<span className="text-neutral-600">Tasks</span>
          </Link>
        </div>

        {/* Navbar menu content here */}
        <div className="flex flex-col justify-start items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-bold transition-colors duration-500"
                : "text-gray-700 font-bold hover:text-emerald-700 transition-colors duration-500"
            }
          >
            Home
          </NavLink>

          {user ? (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-500 font-bold  whitespace-nowrap transition-colors duration-500"
                  : "text-gray-700 font-bold hover:text-emerald-500 whitespace-nowrap transition-colors duration-500"
              }
            >
              Dashboard
            </NavLink>
          ) : (
            ""
          )}
        </div>
        <p
          className="font-bold text-xl -mb-1"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          Close
        </p>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setShowSidebar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
export default Sidebar;
