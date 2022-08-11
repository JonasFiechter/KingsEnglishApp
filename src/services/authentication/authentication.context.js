import React, { useState, createContext } from "react";
import { logInRequest } from "./authentication.service";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { authentication } from "./firebase.config"

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorCode, setErrorCode] = useState(null)

  const onLogin = (email, password) => {
    console.log(email)
    setIsLoading(true);
    //  Let's do it inside here before refatoring to authentication.service.js
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      // Signed in
      const entry_user = userCredential.user;
      console.log(user, entry_user)
      setUser(entry_user)
      setIsAuthenticated(true)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      setMessage(errorMessage)
      setIsLoading(false)
    });
  };
  //  Need to check if this update is working!
  const register = (credentials) => {
    if (credentials.password !== credentials.password2) {
      setError("Error: Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(authentication, credentials.email, credentials.password)
    .then((re) => {
      console.log(`REGISTERING... ${credentials.email} ${re}`)
      setUser(credentials.email)
      setMessage(`${credentials.email} Successfully created! You can now log in.`)
    }).catch((re) => {
      setError(re.message)
      setErrorCode(re.code)
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        // First solution that worked to solve passing more than one object to child. NEED TO REMAKE!
        comunicate: [
          message && message.toString(), 
          error && error.toString(), 
          errorCode && errorCode.toString()
        ],
        register,
        isAuthenticated,
        setIsAuthenticated,
        setError,
        setMessage,
        setErrorCode,
        user,
        isLoading,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};