import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //   {
  //     firstname: "xx",
  //     surname: "xx",
  //     email: "xx",
  //   }
  // );

  function login(firstname, surname, email) {
    const user = { firstname, surname, email };
    setUser(user);
  }

  function signOut() {
    setUser(null);
    // history.push(ROUTES.LOGIN);
  }

  const value = { login, signOut, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
