import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";

function LoginForm() {
  // USE CONTEXT
  // GET SOMETHING FROM CONTEXT

  const userContex = useContext(UserContext);

  const loginFunction = userContex.login;

  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  function onSumbitForm(event) {
    event.preventDefault();

    loginFunction({ userName, password });
  }

  return (
    <form onSubmit={onSumbitForm}>
      <h1>Please login</h1>

      <fieldset>
        <legend>Enter details</legend>

        <div>
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            value={userName}
            placeholder="admin"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
          />
        </div>
      </fieldset>

      <button>Login</button>
    </form>
  );
}

export default LoginForm;
