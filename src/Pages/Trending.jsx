import { motion } from "motion/react";
import useMoviesDetails from "../CustomHooks/useMovieDetails";
import { useMovieContext } from "../Context/MovieContext";
import MovieGrid from "../Components/MovieGrid";
import MovieDetails from "../Components/MovieDetails";
const animation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  final: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function Trending() {
  const { data, isLoading } = useMoviesDetails();
  const { movieId } = useMovieContext();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="mt-12">
      <MovieGrid />

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
    </section>
  );
}

export default Trending;
