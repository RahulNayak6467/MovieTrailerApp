import useMovies from "../CustomHooks/useMovies";
import MovieDisplay from "./MovieDisplay";
function MovieGrid() {
  const { data, isLoading } = useMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const moviesArr = data.results;

  return (
    <div className="max-w-[90%] grid min-[1600px]:grid-cols-4 min-[1800px]:grid-cols-5 min-[1050px]:grid-cols-3 min-[700px]:grid-cols-2 max-[599px]:grid-cols-1 place-items-center  gap-x-12 items-stretch gap-y-8  mx-auto border-2  pb-20 ">
      {moviesArr?.map((movie) => (
        <MovieDisplay moviesData={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
