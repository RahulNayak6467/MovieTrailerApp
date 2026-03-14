import MovieDisplay from "./Components/MovieDisplay";
import MovieGrid from "./Components/MovieGrid";
import useMovies from "./CustomHooks/useMovies";
import MovieDetails from "./Components/MovieDetails";
import useMoviesDetails from "./CustomHooks/useMovieDetails";
import { useMovieContext } from "./Context/MovieContext";
import Loader from "./Components/Loader";
import useSearchQuery from "./CustomHooks/useSearchQuery";
import ShowMovieQueries from "./Components/ShowMovieQueries";
import { motion } from "motion/react";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  RouterContextProvider,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Pages/Layout";
import Trending from "./Components/Pages/Trending";
import Search from "./Components/Pages/Search";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Trending />,
        },
        {
          path: "Search",
          element: <Search />,
        },
      ],
    },
  ]);

  const { searchMovieQuery, handleQuery, isClicked, movieId, setIsClicked } =
    useMovieContext();

  const { data, isLoading } = useMoviesDetails();
  const { data: searchData, isLoading: searchMovieLoading } = useSearchQuery();
  useEffect(() => {
    window.addEventListener("load", function () {
      return <Loader />;
    });
  }, []);

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
    //  <div className="min-h-screen flex-col bg-background pb-20 overflow-x-hidden">
    //   <div className="flex justify-center">
    //     <input
    //       onClick={() => setIsClicked(true)}
    //       onChange={(e) => handleQuery(e.target.value)}
    //       value={searchMovieQuery}
    //       type="text"
    //       placeholder="Enter a movie Name"
    //       className={
    //         isClicked
    //           ? "border-2 border-border text-primary bg-card py-4 w-200 px-4 h-fit rounded-full mt-20 relative z-999 hover:scale-110 transition-all max-[1000px]:w-[90%]"
    //           : "border-2 border-border text-primary bg-card py-4 w-200 px-4 h-fit rounded-full mt-20 max-[1000px]:w-[90%]"
    //       }
    //     />
    //     {isClicked ? (
    //       <div className="fixed inset-0 backdrop-blur-xs bg-black/10 z-50"></div>
    //     ) : (
    //       ""
    //     )}
    //   </div>
    //   {searchMovieQuery ? (
    //     <div className="mt-12">
    //       <ShowMovieQueries moviesArr={searchData?.results} />
    //     </div>
    //   ) : (
    //     <div className="mt-12">
    //       <MovieGrid />
    //     </div>
    //   )}
    //   {movieId ? (
    //     <>
    //       <div className="fixed inset-0 backdrop-blur-xs bg-black/10 z-50"></div>
    //       <motion.div
    //         variants={animation}
    //         initial="initial"
    //         animate="final"
    //         className="w-full flex justify-center absolute top-[10%]"
    //       >
    //         <MovieDetails
    //           movieData={data.movieDetail}
    //           castData={data.castDetail}
    //           similarMovies={data.similarMovies}
    //         />
    //       </motion.div>
    //     </>
    //   ) : (
    //     ""
    //   )}
    // </div>
    <>
      <div className="min-h-screen flex-col bg-background pb-20 overflow-x-hidden">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
