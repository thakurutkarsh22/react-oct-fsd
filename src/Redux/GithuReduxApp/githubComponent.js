import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function GithubComponent() {
  console.log("asdasdas github debug");

  const userName = useSelector((store) => {
    console.log(store, "store debug");
    return store.user;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.github+json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.github.com/users/thakurutkarsh22", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: "SET_USER", payload: result.login });
      })
      .catch((error) => console.log("error", error));
  }, []);

  return <>Git hub component {userName}</>;
}

export default GithubComponent;
