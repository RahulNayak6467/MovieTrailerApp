import { useMovieContext } from "../Context/MovieContext";

function MovieCategories({ category, id }) {
  const { handleGenre } = useMovieContext();
  return (
    <div
      onClick={() => handleGenre(id)}
      className="p-2 bg-card border-2 border-border hover:scale-110 transition-all cursor-pointer hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)]  hover:border-primary rounded-xl w-fit"
    >
      <p className="text-secondary w-30 text-center font-inter text-md ">
        {category}
      </p>
    </div>
  );
}

export default MovieCategories;
