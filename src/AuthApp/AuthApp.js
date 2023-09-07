import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Admin from "./components/Admin";
import styles from "../RouteApp/RouteApp.module.css";
import UserContext from "./contexts/userContext";
import { useState } from "react";
import ProtectedComponent from "./ProtectedComponent/ProtectedComponents";

// COMPOENNT ....
function AuthApp() {
  const [user, setUser] = useState("");

  function loginHandler(data) {
    const { userName, password } = data;
    // can i call database YEs
    // can i verify YES

    // fake verification (DB)

    if (password === "password") {
      setUser(userName);
    }

    console.log("login handler debug", data);
  }

  function logOuthandler() {
    setUser("");
  }

  return (
    <>
      {/* <h1>I am normal compoentn</h1>
       */}

      <button onClick={logOuthandler}>logOut</button>

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

          <li>
            <NavLink
              to="/admin"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
              end
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>

      <UserContext.Provider
        value={{ userName: user, login: loginHandler, logout: logOuthandler }}
      >
        <Routes>
          <Route path="*" element={<h1>asdasdas</h1>}></Route>

          <Route path="/" element={<Home />}></Route>
          <Route
            path="/home"
            element={<ProtectedComponent component={<Home />} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route
            path="/admin"
            element={<ProtectedComponent component={<Admin />} />}
          ></Route>
          {/* <Route path="/admin" element={<Admin />}></Route> */}
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default AuthApp;
