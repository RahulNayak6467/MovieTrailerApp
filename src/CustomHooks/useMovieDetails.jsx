import { useQuery } from "@tanstack/react-query";
import { useMovieContext } from "../Context/MovieContext";

function useMoviesDetails() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { movieId } = useMovieContext();

  const fetchMovieDetails = async () => {
    const url1 = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const url2 = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    const url3 = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;
    try {
      const response = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
      ]);

      response.forEach((res) => {
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
      });

      const data = await Promise.all(response.map((res) => res.json()));

      const movieDetail = data[0];
      const castDetail = data[1];
      const similarMovies = data[2];

      return { movieDetail, castDetail, similarMovies };
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["IndividualMovieDetails", movieId],
    queryFn: () => fetchMovieDetails(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!movieId,
  });

  return { data, isLoading };
}

export default useMoviesDetails;
