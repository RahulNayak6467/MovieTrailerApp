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
  const [genreId, setGenreId] = useState(28);

  const handleQuery = (query) => {
    setSearchMovieQuery(query);
  };

  const handleClick = (id) => {
    setMovieId(id);
  };

  const handleGenre = (id) => {
    setGenreId(id);
  };

  useEffect(() => {
    const timeDelay = setTimeout(() => {
      setDebouncedQuery(searchMovieQuery);
    }, 500);
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
    genreId,
    handleGenre,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
