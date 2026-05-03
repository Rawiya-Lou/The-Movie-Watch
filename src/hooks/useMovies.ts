import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { MovieResponse } from "../types/MediaData";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL ='https://api.themoviedb.org/3'
// for the home page grid and search dropdown 
export const useMovies = (query: string) => {
  return useQuery<MovieResponse>({
    queryKey: ['media', query || 'trending'],
    queryFn: async () => {

  const endpoint = query 
  ? `${BASE_URL}/search/multi}` 
  : `${BASE_URL}/trending/all/day`;

      const { data } = await axios.get<MovieResponse>(endpoint, {
        params: {
          api_key: API_KEY,
          ...(query && { query: encodeURIComponent(query) })
        }
      });

      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
