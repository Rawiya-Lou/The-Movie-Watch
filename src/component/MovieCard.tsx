import type { Movie } from '../types/Movie';
import { Link } from 'react-router-dom';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  // Pre-formatted rating (e.g., 7.5)
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className="group relative block rounded-lg overflow-hidden bg-gray-900 transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg"
    >
      {/* Image Container with 2:3 Aspect Ratio */}
      <div className="aspect-[2/3] w-full relative">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} 
          alt={movie.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
          loading="lazy"
        />
        
        {/* Hover Overlay: Rating & Year */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded">
              ★ {rating}
            </span>
            <span className="text-white text-xs">
              {movie.release_date.split('-')[0]}
            </span>
          </div>
          <h3 className="text-white text-sm font-bold truncate">
            {movie.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
