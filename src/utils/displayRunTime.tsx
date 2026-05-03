import type { MediaData } from "../types/MediaData";
import type { Movie } from "../types/Movie";
import type { TVShow } from "../types/TVShows";
import { Clock, Tv } from "lucide-react";

export const displayRunTime = (data: MediaData, type: 'movie' | 'tv') => {
  if (type === 'movie') {
  
    const movie = data as Movie;

    return movie.runtime ? (
      <div className="flex items-center gap-1.5">
        <Clock className="w-5 h-5 text-accent-three" />
        <span className="text-xl text-text-gray">{movie.runtime} min</span>
      </div>
    ) : (
      'N/A'
    );
  } else {
    
    const tv = data as TVShow;
    
    const seasons = tv.number_of_seasons || 0;
    const episodes = tv.number_of_episodes || 0;

    return (
      <div className="flex items-center gap-1.5">
        <Tv className="w-5 h-5 text-accent-three" />
        <span className="text-xl text-text-gray">
          {seasons} {seasons === 1 ? 'Season' : 'Seasons'}, {episodes} Episodes
        </span>
      </div>
    );
  }
};
