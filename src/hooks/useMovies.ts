import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Movie } from "../types/Movie";
import type { MovieResponse } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL ='https://api.themoviedb.org/3'

export const useMovies = (query: string) => {
  return useQuery<{ results: Movie[] }>({
    queryKey: ['movies', query || 'trending'],
    queryFn: async () => {

  const endpoint = query 
  ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}` 
  : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

      const { data } = await axios.get<MovieResponse>(endpoint, {
        params: {
          api_key: API_KEY,
          ...(query && { query })
        }
      });

      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
