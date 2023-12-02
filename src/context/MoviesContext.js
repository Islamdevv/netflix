import React, { createContext, useContext } from "react";

const moviesContext = createContext();
export const useMoviesContext = () => useContext(moviesContext);

const MoviesContext = ({ children }) => {
  const values = {};
  return (
    <moviesContext.Provider value={values}>{children}</moviesContext.Provider>
  );
};

export default MoviesContext;
