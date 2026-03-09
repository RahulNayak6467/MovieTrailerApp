import { Loader, X } from "lucide-react";
import useTrailerVideo from "../CustomHooks/useTrailerVideo";
import { useMovieContext } from "../Context/MovieContext";
import { easeIn, motion, scale } from "motion/react";

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
      className=" bg-card w-fit z-999 relative border-2 border-border rounded-2xl shadow-[0_10px_25px_rgba(99,102,241,0.35)]  border-primary "
    >
      <div className="flex justify-center w-7xl  aspect-video mx-auto p-2 border-border relative">
        <button
          onClick={() => handleClick(null)}
          className="absolute top-4 right-4 border border-border rounded-full p-1 bg-card hover:bg-secondary cursor-pointer z-10"
        >
          <X size={18} className="text-white" />
        </button>
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${trailerData.key}`}
          title="Movie Trailer"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export default TrailerVideo;
