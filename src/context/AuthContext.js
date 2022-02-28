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
  // Wurde genutzt zum Anwendung testen, samit man sich nicht jedes mal anmelden musste

  function login(firstname, surname, email) {
    const user = { firstname, surname, email };
    setUser(user);
  }

  function signOut() {
    setUser(null);
  }

  const value = { login, signOut, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
