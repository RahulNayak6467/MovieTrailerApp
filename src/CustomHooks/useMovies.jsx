import { useQuery } from "@tanstack/react-query";

function useMovies() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
      );

      if (!response.ok) {
        console.log("An error occured", response.status);
        return;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["GetMovies"],
    queryFn: () => fetchMovies(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
  });

  return { data, isLoading };
}

export default useMovies;
