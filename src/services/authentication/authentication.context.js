import React, { useState, createContext } from "react";
import { logInRequest } from "./authentication.service";
import { signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from "./firebase.config"

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    console.log(email, password)
    setIsLoading(true);
    //  Let's do it inside here before refatoring to authentication.service.js
    signInWithEmailAndPassword(authentication, email, password).then((userCredential) => {
      console.log('inside .then')
      // Signed in
      const entry_user = userCredential.user;
      console.log(user, entry_user)
      setUser(entry_user)
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      setIsLoading(false)
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
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