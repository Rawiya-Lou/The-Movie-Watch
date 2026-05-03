import type { Movie } from "./Movie";
import type { TVShow } from "./TVShows";

export interface MediaData {
  id: number;
  poster_path: string;
  vote_average: number;
  title?: string;         // Movies
  name?: string;          // TV Shows
  release_date?: string;  // Movies
  first_air_date?: string; // TV Shows
}

export interface MovieResponse {
    results: Movie[] | TVShow[]
    total_pages: number
    total_results: number
}