export interface TVShow {
    id: number
    name: string
    first_air_date: string
    overview: string
    poster_path: string
    backdrop_path: string
    vote_average: number
    media_type: 'tv'
    tagline?: string
    runtime: number[]
}