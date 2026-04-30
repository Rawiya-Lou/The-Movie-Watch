import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { MovieResponse } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const useMovies =(query: string) => {
    return useQuery({
        queryKey: ['movies', query],
        queryFn: async () => {
            if(!query) return {results: []};

            const { data } = await axios.get<MovieResponse>(`https://api.themoviedb.org/3/search/movie`,

                {
                    params: {
                        api_key: API_KEY,
                        query: query
                    }
                }
            );

            return data

        },
        enabled: !!query,
        staleTime: 1000 * 60 * 5, /* 5 min*/
    });
};