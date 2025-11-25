import { requester } from "@/api/requester"

export const movieService = {
  getPopular: () => requester.get("/movie/popular"),
}
