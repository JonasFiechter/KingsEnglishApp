import React, { useState, createContext, useContext } from "react";

export const AuthenticationContext = createContext();

// The initial idea to make this work is to use the context to give all the CRUD functionalities
// throughout the application. This will require an service that can grab the user informations
// from the database server and store it or simply by providing the request functions to be executed 
// right way when needed. 

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <UserContext.Provider
      value={{
      }}
    >
      {children}
    </UserContext.Provider>
  );
};