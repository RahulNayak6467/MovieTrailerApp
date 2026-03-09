import { useState, createContext, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  if (!MovieContext) {
    throw new Error("Context does not exist");
  }

  return useContext(MovieContext);
};

const MovieContextProvider = ({ children }) => {
  const [movieId, setMovieId] = useState(null);
  const [searchMovieQuery, setSearchMovieQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isClicked, setIsClicked] = useState("");

  const handleQuery = (query) => {
    setSearchMovieQuery(query);
  };

  const handleClick = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    const timeDelay = setTimeout(() => {
      setDebouncedQuery(searchMovieQuery);
    }, 300);
    return () => clearTimeout(timeDelay);
  }, [searchMovieQuery]);

  const value = {
    movieId,
    handleClick,
    searchMovieQuery,
    handleQuery,
    debouncedQuery,
    isClicked,
    setIsClicked,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
