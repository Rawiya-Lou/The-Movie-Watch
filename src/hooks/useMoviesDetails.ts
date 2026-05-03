import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import type { MediaData } from "../types/MediaData"

const api_key = import.meta.env.VITE_TMDB_API_KEY
//  Fetches the full details for one specific movie or tvshow using its ID.
export const useMovieDetails = (id: string | undefined, type: 'movie'| 'tv'= 'movie') => {
    return useQuery({
        queryKey: [type, id],
        queryFn: async () => {
            if(!id) throw new Error('Movie ID is required')
            const {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
        params: {
            api_key: api_key
        }
       
        })
            return data as MediaData
        },
        placeholderData: (previousData) => previousData,
        enabled: !!id
    })

}