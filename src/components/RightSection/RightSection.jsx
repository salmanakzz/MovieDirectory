import React from "react";
import { MovieList, Search } from "../";

export const RightSection = () => {
  return (
    <div className="right-section">
      <Search />
      <MovieList />
    </div>
  );
};
