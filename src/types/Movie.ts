export interface Movie {
    id: number;
    media_type: 'movie'; 
    title: string;
    poster_path: string | null;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
    tagline?: string;
    runtime: number;
}

