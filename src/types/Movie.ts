export interface Movie {
    id: number
    title: string
    poster_path: string | null
    release_date: string
    vote_average: number
    overview: string
    tagline: string
    runtime: number
    backdrop_path: string
}

export interface MovieResponse {
    results: Movie[]
    total_pages: number
    total_results: number
}