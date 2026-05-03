export interface Movie {
    id: number
    title: string
    poster_path: string | null
    backdrop_path: string
    release_date: string
    vote_average: number
    overview: string
    media_type: 'movie'
    tagline?: string
    runtime: number
}

