import useMovies from "../CustomHooks/useMovies";
import MovieDisplay from "./MovieDisplay";
function MovieGrid() {
  const { data, isLoading } = useMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const moviesArr = data.results;

  return (
    <div className="w-[90%] grid grid-cols-5 gap-x-12 items-stretch gap-y-8  mx-auto border-2  pb-20 ">
      {moviesArr?.map((movie) => (
        <MovieDisplay moviesData={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
