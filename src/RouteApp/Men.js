import { NavLink, Outlet } from "react-router-dom";
import styles from "./RouteApp.module.css";

function Men() {
  return (
    <>
      <h1>Men ware list</h1>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/men/bottomwear"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Bottom wear
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/men/topwear"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Top wear
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/men/1"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Random wear
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Men;
