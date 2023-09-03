import { NavLink, Route, Routes } from "react-router-dom";
// import styles from "../../../src/RouteApp/RouteApp.module.css";
import styles from "./styles.module.css";
import React, { Suspense } from "react";
import Whale from "./Whale";
import Mermaid from "./Mermaid";
import Loading from "./Loading";
import About from "./About";

const MermaidLazy = React.lazy(() => import("./Mermaid"));
const WhaleLazy = React.lazy(() => import("./Whale"));

function LazyLoadingCustomHooks() {
  return (
    <>
      <h1>Main Page</h1>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/whale"
              className={(props) => {
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Whale
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/mermaid"
              className={(props) => {
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              Mermaid
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/abouts"
              className={(props) => {
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Register a route */}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the routes</h1>}></Route>
          <Route path="/whale" element={<WhaleLazy />}></Route>
          <Route path="/abouts" element={<About />}></Route>
          <Route path="/mermaid" element={<MermaidLazy />}></Route>
        </Routes>
      </Suspense>
    </>
  );

  // Suspense
}

export default LazyLoadingCustomHooks;
