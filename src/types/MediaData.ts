import type { Movie } from "./Movie";
import type { TVShow } from "./TVShows";

export type MediaData = Movie| TVShow;

export type MediaDataArray = MediaData[]

export interface MovieResponse {
  page: number
    results: MediaData[]
    total_pages: number
    total_results: number
}