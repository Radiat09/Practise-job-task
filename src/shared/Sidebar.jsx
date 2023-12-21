import PropTypes from "prop-types";
const Sidebar = ({ setShowSidebar, showSideBar }) => {
  return (
    <div
      className={`w-72 lg:hidden fixed min-h-screen h-full bg-gray-500 text-white transition-all duration-500 ${
        showSideBar == true ? "ml-0" : "-ml-80"
      }`}
    >
      <p onClick={() => setShowSidebar(!showSideBar)}>close</p>
      <h1>Sidebar</h1>
    </div>
  );
};

Sidebar.propTypes = {
  setShowSidebar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
export default Sidebar;
