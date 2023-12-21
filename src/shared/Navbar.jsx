import { Link, NavLink } from "react-router-dom";
// import useAuth from "../Hooks/useAuth/useAuth";

const Navbar = () => {
  // const { user, logOut } = useAuth();
  const darkMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  };
  const lightMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) lightMode();
    else darkMode();
  };
  // console.log(user);
  return (
    <div className="w-full px-[25px] flex justify-center items-center py-3">
      <div className="flex-none lg:hidden">
        <label className="">
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
          My<span className="text-yellow-500">Tasks</span>
        </Link>
      </div>
      {/* Navbar menu content here */}
      <div className="hidden flex-1  lg:flex justify-start items-center gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold"
              : "text-gray-700 font-bold hover:text-yellow-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold  whitespace-nowrap"
              : "text-gray-700 font-bold hover:text-yellow-500 whitespace-nowrap"
          }
        >
          Dashboard
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 ">
            <NavLink
              to="/login"
              className="px-4 py-2 bg-yellow-600  hover:border-yellow-600 hover:bg-yellow-700 text-white hover:rounded-lg font-semibold transition-all duration-500 rounded-none"
            >
              Let&apos;s Explore
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
