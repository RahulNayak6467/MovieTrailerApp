import { useQuery } from "@tanstack/react-query";
import { useMovieContext } from "../Context/MovieContext";

function useTrailerVideo() {
  const { movieId } = useMovieContext();
  const apiKey = import.meta.env.VITE_API_KEY;

  const getTrailerVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error("An error occured", response.status);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["fetchMovieTrailer", movieId],
    queryFn: () => getTrailerVideo(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!movieId,
  });

  return { data, isLoading };
}

export default useTrailerVideo;
