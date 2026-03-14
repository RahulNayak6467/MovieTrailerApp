import { useQuery } from "@tanstack/react-query";
import { useMovieContext } from "../Context/MovieContext";

const apiKey = import.meta.env.VITE_API_KEY;
function useCategory() {
  const { genreId } = useMovieContext();
  const getMovieByCategories = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`,
      );

      if (!response.ok) {
        throw new Error("An error occured");
      }

      const data = await response.json();

      console.log(data);

      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["MovieCategories", genreId],
    queryFn: () => getMovieByCategories(),
    staleTime: Infinity,
    gcTime: 60 * 60 * 1000,
    enabled: !!genreId,
  });

  return { data, isLoading };
}

export default useCategory;
