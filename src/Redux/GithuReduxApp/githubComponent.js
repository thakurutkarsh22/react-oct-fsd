import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USER, SET_USER_ACTION } from "./actions/actions";

function GithubComponent() {
  console.log("asdasdas github debug");

  //   THis is how You connect to store ....
  const userName = useSelector((store) => {
    console.log(store, "store debug");
    return store.user;
  });

  const loadingState = useSelector((store) => {
    return store.loading;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCH_USER());
  }, []);

  return (
    <>
      {loadingState && <h1>LOADING.....</h1>}
      {!loadingState && <div>Github component {userName}</div>}
    </>
  );
}

export default GithubComponent;

// ----------- API CALLING IN THE COMPONENT --------

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Accept", "application/vnd.github+json");

//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch("https://api.github.com/users/thakurutkarsh22", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         dispatch(SET_USER_ACTION(result.login)); // this is the line where you are setting USER inside the REDUX STORE
//       })
//       .catch((error) => console.log("error", error));
//   }, []);
