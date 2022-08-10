import React, { useState, createContext } from "react";
import { logInRequest } from "./authentication.service";
import { signInWithEmailAndPassword } from "firebase/auth"; //  Only while testing
import { authentication } from "./firebase.config"; //  Only while testing

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    // Let's do it inside here before refatoring to authentication.service.js
    signInWithEmailAndPassword(authentication, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      setIsLoading(false)
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};