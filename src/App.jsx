import { motion } from "motion/react";
import { useEffect } from "react";
import MovieDisplay from "./Components/MovieDisplay";
import MovieGrid from "./Components/MovieGrid";
import { routes } from "./Routing/Routes";
import useMoviesDetails from "./CustomHooks/useMovieDetails";
import useSearchQuery from "./CustomHooks/useSearchQuery";
import { RouterProvider } from "react-router-dom";
import Loader from "./Components/Loader";

function App() {
  const { isLoading } = useMoviesDetails();
  const { isLoading: searchMovieLoading } = useSearchQuery();
  useEffect(() => {
    window.addEventListener("load", function () {
      return <Loader />;
    });
  }, []);

  if (isLoading || searchMovieLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen flex-col bg-background pb-20 overflow-x-hidden">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
