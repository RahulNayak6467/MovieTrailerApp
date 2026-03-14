import MovieDisplay from "./MovieDisplay";

function ShowMovieQueries({ moviesArr }) {
  console.log(moviesArr);
  return (
    <div className="max-w-[90%] grid min-[1600px]:grid-cols-4 min-[1800px]:grid-cols-5 min-[930px]:grid-cols-3 min-[600px]:grid-cols-2 max-[599px]:grid-cols-1 place-items-center  gap-x-12 items-stretch gap-y-8  mx-auto border-2  pb-20 ">
      {moviesArr?.map((movie) => (
        <MovieDisplay moviesData={movie} />
      ))}
    </div>
  );
}

export default ShowMovieQueries;
