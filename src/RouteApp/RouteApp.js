import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Mentor from "./Mentor";
import NotFound from "./NotFound";
import styles from "./RouteApp.module.css";
import Animals from "./Animal";
import Men from "./Men";
import BottomWear from "./Men/BottomWear";
import TopWear from "./Men/TopWear";
import RandomWear from "./Men/RandomWear";

function RouteApp() {
  return (
    <>
      {/* <h1>Main Page</h1> */}
      {/* <h1>Welcome to the kingdom</h1> */}

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
              to="/mentor"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
              reloadDocument
            >
              Mentor
            </NavLink>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/animals?type=dog">Animals Dog</Link>
          </li>
          <li>
            <Link to="/animals?type=lion">Animals Lion</Link>
          </li>

          <li>
            <NavLink
              to="/men"
              className={(props) => {
                console.log(props, "NavLink");
                const { isActive } = props;

                return isActive ? `${styles.activeLink}` : "";
              }}
              end
            >
              Men collection
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* This is dangerous ->  It is for the paths which are not matching*/}

        <Route path="*" element={<NotFound />}>
          {" "}
        </Route>

        <Route path="/home" element={<>Home</>}>
          {" "}
        </Route>
        <Route path="/" element={<h1>Welcome to the kingdom </h1>}>
          {" "}
        </Route>

        <Route path="/about" element={<About />}>
          {" "}
        </Route>

        <Route path="/contacts" element={<Contacts />}>
          {" "}
        </Route>

        <Route path="/mentor" element={<Mentor />}>
          {" "}
        </Route>

        {/* 2nd phase of learning route  */}

        <Route path="/animals" element={<Animals />}>
          {" "}
        </Route>

        {/* 3rd pahse of learning route */}

        <Route path="/men" element={<Men />}>
          <Route path="bottomwear" element={<BottomWear />}></Route>
          <Route path="topwear" element={<TopWear />}></Route>
          <Route path=":id" element={<RandomWear />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default RouteApp;
