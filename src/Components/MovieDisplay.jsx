import useMoviesDetails from "../CustomHooks/useMovieDetails";
import { useMovieContext } from "../Context/MovieContext";
import { Star, User } from "lucide-react";
import { easeIn, motion } from "motion/react";

function MovieDisplay({ moviesData }) {
  const { movieId, handleClick } = useMovieContext();
  const { isLoading: movieLoading } = useMoviesDetails(movieId);

  if (movieLoading) {
    return <h1>Loading...</h1>;
  }

  const animation = {
    initial: {},
    final: {
      skewY: 5,
      skewX: -2,
      transition: {
        duration: 0.2,
      },
      easeIn,
    },
  };

  return (
    <motion.div
      variants={animation}
      whileHover={"final"}
      onClick={() => handleClick(moviesData.id)}
      className="border cursor-pointer border-border p-6 bg-card w-80 h-full rounded-2xl hover:scale-105 transition-all hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)]  hover:border-primary "
    >
      <div>
        <img
          className="h-40 w-full object-cover border border-zinc-500 rounded-2xl hover:scale-105 transition-all  "
          src={`https://image.tmdb.org/t/p/w500${moviesData.poster_path}`}
          alt={moviesData.title}
        />
      </div>
      <div>
        <h3 className="text-2xl text-primary font-inter  font-bold mt-4  line-clamp-1">
          {moviesData.title}
        </h3>
        <p className="text-secondary font-inter  text-sm font-semibold mt-2 line-clamp-3">
          {moviesData.overview}
        </p>
      </div>
      <div className="flex-col">
        <div className="flex justify-between items-center mt-2 mb-2">
          <div className="flex items-center gap-2 bg-secondary rounded-2xl px-2">
            <Star size={18} className="text-yellow-300 fill-yellow-300 " />
            <span className=" text-white -mb-1">
              {moviesData.vote_average.toFixed(1)}
            </span>
          </div>
          <div className="flex gap-2">
            <User className="text-white" />
            <span className="text-white">{moviesData.vote_count}</span>
          </div>
        </div>
        <span className="text-white ">{moviesData.release_date}</span>
      </div>
    </motion.div>
  );
}

export default MovieDisplay;
