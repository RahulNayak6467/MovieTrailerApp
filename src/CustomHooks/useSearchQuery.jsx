import { useQuery } from "@tanstack/react-query";
import { useMovieContext } from "../Context/MovieContext";

function useSearchQuery() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { debouncedQuery, setIsClicked } = useMovieContext();

  const fetchSearchQuery = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedQuery}`,
      );

      if (!response.ok) {
        throw new Error("An error occured", response.status);
      }

      const data = await response.json();

      setIsClicked(false);

      console.log(data);

      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["searchQuery", debouncedQuery],
    queryFn: () => fetchSearchQuery(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!debouncedQuery,
  });

  return { data, isLoading };
}

export default useSearchQuery;
