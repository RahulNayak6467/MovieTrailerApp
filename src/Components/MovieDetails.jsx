import { useState } from "react";
import { Calendar, Play, Star, Timer, User, X } from "lucide-react";
import { useMovieContext } from "../Context/MovieContext";
import Genres from "./Genres";
import TopCast from "./TopCast";
import SimilarMovies from "./SimiilarMovies";
import TrailerVideo from "./TrailerVideo";

function MovieDetails({ movieData, castData, similarMovies }) {
  const { handleClick } = useMovieContext();
  const [showTrailer, SetShowTrailer] = useState(false);

  const handleTrailer = (bool) => {
    SetShowTrailer(bool);
  };

  return (
    <>
      <section className="border-4 border-border bg-card w-full max-w-7xl mx-auto rounded-2xl mt-10 relative z-70 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-4 right-4 z-10">
          <button className="border border-border rounded-full p-1 bg-card hover:bg-secondary cursor-pointer">
            <X
              onClick={() => handleClick(null)}
              size={18}
              className="text-white"
            />
          </button>
        </div>
        <div className="w-full mx-auto flex flex-col md:flex-row gap-6 border-b-2 rounded-2xl border-border">
          <div className="md:w-5/12">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                  : '"https://via.placeholder.com/500x750?text=No+Poster"'
              }
              alt={movieData?.title || "Movie poster"}
            />
          </div>
          <div className="md:w-7/12 p-4">
            <div>
              <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left ">
                {movieData?.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <div className="flex gap-1 items-center min-w-fit">
                <Calendar size={15} className="text-white -mt-0.5" />
                <span className="text-white">{movieData.release_date}</span>
              </div>
              <div className="flex gap-1 items-center min-w-fit">
                <Star
                  size={15}
                  className="text-yellow-300 fill-yellow-300 -mt-0.5"
                />
                <span className="text-white">
                  {movieData.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="flex gap-1 items-center min-w-fit">
                <Timer size={15} className="text-white -mt-0.5" />
                <span className="text-white">{movieData.runtime}min</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <p className="font-inter text-secondary">Genres: </p>
              {movieData?.genres.map((movie) => (
                <Genres key={movie.imdb_id} movieData={movie.name} />
              ))}
            </div>
            <div className="mt-4">
              <p className="text-secondary text-lg">{movieData.overview}</p>
              <div className="mt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-1 min-w-fit">
                  <User size={18} className="text-white -mt-0.5" />
                  <span className="text-white">
                    {movieData.vote_count.toFixed(0)}
                  </span>
                </div>
                <span className="text-white min-w-fit">
                  Popularity: {movieData.popularity.toFixed(0)}
                </span>
              </div>
            </div>
            <div className="mt-4 border-2 border-border bg-card p-2 rounded-2xl">
              <p className="text-2xl text-primary font-inter font-bold mb-2 ">
                Top Cast
              </p>
              <div className="h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 mt-3 gap-y-4">
                {castData?.cast.slice(0, 10).map((cast) => (
                  <TopCast key={cast.id} castData={cast} />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="mt-4 w-full bg-primary rounded-2xl py-2 hover:bg-secondary cursor-pointer mx-auto"
              aria-label={`Watch trailer for ${movieData?.title || "this movie"}`}
            >
              <div
                onClick={() => handleTrailer(true)}
                className="w-full flex gap-2 justify-center items-center"
              >
                <Play size={20} className="text-white" />
                <p className="text-lg font-inter font-bold text-white">
                  Watch Trailer
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
      {showTrailer ? (
        <>
          <div className="fixed inset-0 backdrop-blur-xs bg-black/10 z-100"></div>
          <div className="w-[90%] flex mx-auto justify-center absolute top-[10%]">
            <TrailerVideo />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default MovieDetails;
