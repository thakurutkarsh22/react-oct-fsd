import { createContext } from "react";

// ACT LIKE GLOBAL STORAGE...

const UserContext = createContext({
  userName: "utkarsh",
  hasUserLoginError: false,

  login: () => {},
  logout: () => {},
});

export default UserContext;

// PROVIDER ....

// CONSUMER ...
