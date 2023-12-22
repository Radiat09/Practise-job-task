import PropTypes from "prop-types";
const SideBar = ({ setShowSidebar, showSideBar }) => {
  return (
    <div
      className={`w-80 lg:h-screen bg-gray-600 lg:ml-0 ${
        showSideBar == true ? "ml-0 h-screen" : "-ml-80"
      } `}
    >
      <h1>SideBar</h1>
      <p onClick={() => setShowSidebar(!showSideBar)}>close</p>
    </div>
  );
};
SideBar.propTypes = {
  setShowSidebar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
export default SideBar;
