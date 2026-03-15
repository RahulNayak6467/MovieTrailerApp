import { Loader, X } from "lucide-react";
import useTrailerVideo from "../CustomHooks/useTrailerVideo";
import { useMovieContext } from "../Context/MovieContext";
import { motion } from "motion/react";

function TrailerVideo() {
  const { data, isLoading } = useTrailerVideo();
  const { handleClick } = useMovieContext();

  if (isLoading) {
    return <Loader />;
  }

  const trailerData = data?.results?.find((video) => video.type === "Trailer");

  //   console.log(trailerData);

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
    <motion.div
      variants={animation}
      initial="initial"
      animate="final"
      className="bg-card z-999 w-full max-w-5xl mx-auto relative border-2 border-border rounded-2xl shadow-[0_10px_25px_rgba(99,102,241,0.35)]"
    >
      <div className="relative w-full aspect-video mx-auto p-2">
        <button
          onClick={() => handleClick(null)}
          className="absolute top-4 right-4 border border-border rounded-full p-1 bg-card hover:bg-secondary cursor-pointer z-10"
        >
          <X size={18} className="text-white" />
        </button>
        {trailerData ? (
          <iframe
            className="w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${trailerData.key}`}
            title="Movie Trailer"
            allowFullScreen
          />
        ) : (
          <div className="text-center mt-40 ">
            <p className="text-lg font-semibold text-primary">
              🎬 Trailer unavailable
            </p>
            <p className="text-sm text-slate-500 ">
              This movie does not have a trailer yet.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default TrailerVideo;
