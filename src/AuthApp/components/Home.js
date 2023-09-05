import { useContext } from "react";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const userContex = useContext(UserContext); // get all the state from the GLOBAL like context...

  console.log("userContex debug", userContex);

  if (!userContex.userName) {
    return (
      <>
        <h1>PLEASE LOGIN</h1>
        <button onClick={() => navigate("/login")}>Login Form</button>
      </>
    );
  }

  //   can i ask 1 question in here AM i Logged in ? yes

  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

export default Home;
