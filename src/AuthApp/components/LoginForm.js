import { useState } from "react";

function LoginForm() {
  // USE CONTEXT
  // GET SOMETHING FROM CONTEXT

  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  function onSumbitForm(event) {
    event.preventDefault();
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
            onChange={() => {}}
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
            onChange={() => {}}
            id="password"
          />
        </div>
      </fieldset>

      <button>Login</button>
    </form>
  );
}

export default LoginForm;
