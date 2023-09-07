import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";

function ProtectedComponent(props) {
  const navigate = useNavigate();

  const userContex = useContext(UserContext); // get all the state from the GLOBAL like context...

  console.log("userContex debug", userContex);

  if (!userContex.userName) {
    return <>Login First</>;
  }

  const { component: children } = props;
  return <>{children}</>;
}

export default ProtectedComponent;
