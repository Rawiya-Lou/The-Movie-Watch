import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { Movie } from "../types/Movie"

const api_key = import.meta.env.VITE_TMDB_API_KEY

export const useMovieDetails = (id: string | undefined) => {
    return useQuery({
        queryKey: ['movie', id],
        queryFn: async () => {
            if(!id) throw new Error('Movie ID is required')
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
            api_key: api_key
        }
       
        })
            return data as Movie
        },
        placeholderData: (previousData) => previousData,
        enabled: !!id
    })

}