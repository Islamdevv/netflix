import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext } from "react";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
