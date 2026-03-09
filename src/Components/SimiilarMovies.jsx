function SimilarMovies({ similarMovies }) {
  return (
    <div className="border-2 border-border bg-card p-2 rounded-2xl hover:scale-110 transition-all cursor-pointer hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)]  hover:border-primary">
      <img
        className="h-50 object-cover w-full"
        src={`https://image.tmdb.org/t/p/w500${similarMovies.poster_path}`}
        alt=""
      />
      <p className="text-white opacity-60 cursor-pointer text-xs hover:opacity-100 mt-2 p-2">
        {similarMovies.original_title}
      </p>
    </div>
  );
}

export default SimilarMovies;
