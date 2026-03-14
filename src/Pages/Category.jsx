import Loader from "../Components/Loader";
import MovieCategories from "../Components/MovieCategories";
import MovieDetails from "../Components/MovieDetails";
import ShowMovieQueries from "../Components/ShowMovieQueries";
import { categories } from "../Constants/Category";
import { useMovieContext } from "../Context/MovieContext";
import useCategory from "../CustomHooks/useCategory";
import { motion } from "motion/react";
import useMoviesDetails from "../CustomHooks/useMovieDetails";
function Category() {
  const { data: MovieCategory, isLoading: MovieCategoryLoading } =
    useCategory();
  const { movieId } = useMovieContext();
  const { data, isLoading } = useMoviesDetails();
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

  if (isLoading || MovieCategoryLoading) {
    return <Loader />;
  }

  return (
    <section className="flex-col">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 2xl:grid-cols-10 gap-4 place-items-center justify-center items-center mt-12 ">
        {categories.map((el) => (
          <MovieCategories
            key={el.genreId}
            category={el.name}
            id={el.genreId}
          />
        ))}
      </div>
      <div className="mt-12">
        <ShowMovieQueries moviesArr={MovieCategory?.results} />
      </div>
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

export default Category;
