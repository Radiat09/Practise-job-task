import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = ({ setShowSidebar, showSideBar }) => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  // const darkMode = () => {
  //   document.documentElement.setAttribute("data-theme", "light");
  // };
  // const lightMode = () => {
  //   document.documentElement.setAttribute("data-theme", "dark");
  // };
  // const toggleTheme = (e) => {
  //   if (e.target.checked) lightMode();
  //   else darkMode();
  // };
  // console.log(user);
  const handleLogout = () => {
    const toastId = toast.loading("Logging Out...");
    logOut().then(() => {
      navigate("/");
      toast.success("Logged out!", { id: toastId });
    });
  };
  return (
    <div className="w-full px-[25px] flex justify-center items-center border-b py-3">
      <div className="flex-none lg:hidden">
        <label onClick={() => setShowSidebar(!showSideBar)} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 text-4xl font-extrabold">
        <Link to="/">
          My<span className="text-emerald-500">Tasks</span>
        </Link>
      </div>
      {/* Navbar menu content here */}
      <div className="hidden flex-1  lg:flex justify-start items-center gap-3">
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
      <div className="hidden lg:block">
        <div className="flex justify-between items-center gap-4">
          <div className="">
            {user ? (
              <div className="flex justify-start items-center gap-3">
                {user?.photoURL ? (
                  <img
                    className="w-12 rounded-full border border-emerald-500 cursor-pointer"
                    src={user?.photoURL}
                    alt={"image of " + user.displayName}
                  />
                ) : (
                  <img
                    className="w-12 rounded-full border border-emerald-500 cursor-pointer"
                    src="https://i.ibb.co/5L7LVhK/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
                    alt={"image of " + user.displayName}
                  />
                )}
                <button
                  className="px-4 py-2 bg-emerald-600  hover:border-emerald-600 hover:bg-emerald-700 text-white hover:rounded-lg font-semibold transition-all duration-500 rounded-none"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 bg-emerald-600  hover:border-emerald-600 hover:bg-emerald-700 text-white hover:rounded-lg font-semibold transition-all duration-500 rounded-none"
              >
                Let&apos;s Explore
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowSidebar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
export default Navbar;
