import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Admin from "./components/Admin";
import styles from "../RouteApp/RouteApp.module.css";

// COMPOENNT ....
function AuthApp() {
  return (
    <>
      {/* <h1>I am normal compoentn</h1> */}

      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
              reloadDocument
            >
              ABout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
              end
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="*" element={<h1>asdasdas</h1>}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default AuthApp;
