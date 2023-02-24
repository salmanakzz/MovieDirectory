// movie context file

import { createContext, useState } from "react";

export const MovieContext = createContext(null);

export const MovieContextPrivider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [searchItems, setSearchItems] = useState(null);
  return (
    <MovieContext.Provider
      value={{ movies, setMovies, searchItems, setSearchItems }}
    >
      {children}
    </MovieContext.Provider>
  );
};
