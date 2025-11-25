import { movieService } from "@/services/movieService"
import type { MovieProps } from "@/types/movie"
import { useQuery } from "@tanstack/react-query"

export const usePopularMovies = () => {
  return useQuery<MovieProps[]>({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const res = await movieService.getPopular()
      return res.data.results
    },
    staleTime: 1000 * 60 * 2,
  })
}
