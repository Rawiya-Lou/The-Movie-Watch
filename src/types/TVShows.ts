export interface TVShow {
   id: number;
    media_type: 'tv'; 
    name: string;
    poster_path: string | null;
    backdrop_path: string;
    first_air_date: string;
    vote_average: number;
    overview: string;
    tagline?: string;
    episode_run_time: number[];
    number_of_seasons: number;
    number_of_episodes: number;
}