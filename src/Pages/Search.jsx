import { motion } from "motion/react";
import useMoviesDetails from "../CustomHooks/useMovieDetails";
import { useMovieContext } from "../Context/MovieContext";
import { useEffect } from "react";
import useSearchQuery from "../CustomHooks/useSearchQuery";
import MovieDetails from "../Components/MovieDetails";
import ShowMovieQueries from "../Components/ShowMovieQueries";

function Search() {
  const { searchMovieQuery, handleQuery, isClicked, movieId, setIsClicked } =
    useMovieContext();
  const { data, isLoading } = useMoviesDetails();
  const { data: searchData, isLoading: searchMovieLoading } = useSearchQuery();

  useEffect(() => {
    window.addEventListener("load", function () {
      return <Loader />;
    });
  }, []);

  useEffect(() => {
    const keyEnter = (e) => {
      if (e.key === "Enter") {
        setIsClicked(false);
      }
    };
    window.addEventListener("keydown", keyEnter);
    return () => window.removeEventListener("keydown", keyEnter);
  }, [setIsClicked]);

  if (isLoading || searchMovieLoading) {
    return <Loader />;
  }

  const animation = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center items-center">
        <input
          onClick={() => setIsClicked(true)}
          onChange={(e) => handleQuery(e.target.value)}
          value={searchMovieQuery}
          type="text"
          placeholder="Enter a movie Name"
          className={
            isClicked
              ? "border-2 border-border text-primary bg-card py-4 w-200 px-4 h-fit rounded-full mt-20 relative z-999 hover:scale-110 transition-all max-[1000px]:w-[90%]"
              : "border-2 border-border text-primary bg-card py-4 w-200 px-4 h-fit rounded-full mt-20 max-[1000px]:w-[90%]"
          }
        />
      </div>
      {isClicked ? (
        <div className="fixed inset-0 black/60 backdrop-blur-xs z-50"></div>
      ) : (
        ""
      )}
      {searchMovieQuery ? (
        <div className="mt-12">
          <ShowMovieQueries moviesArr={searchData?.results} />
        </div>
      ) : (
        ""
      )}
      {movieId ? (
        <>
          <div className="fixed inset-0 backdrop-blur-xs bg-black/10 z-50"></div>
          <motion.div
            variants={animation}
            initial="initial"
            animate="final"
            className="w-full flex justify-center absolute top-[10%]"
          >
            <MovieDetails
              movieData={data.movieDetail}
              castData={data.castDetail}
              similarMovies={data.similarMovies}
            />
          </motion.div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
