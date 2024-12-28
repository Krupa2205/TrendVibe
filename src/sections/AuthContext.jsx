import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ isLoggedIn: false, user: null }}>
      {children}
    </AuthContext.Provider>
  );
};
