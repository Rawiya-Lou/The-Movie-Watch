import type { MediaData } from '../types/MediaData';
import { Link } from 'react-router-dom';



interface MediaCardProps {
  data: MediaData;
  type: 'movie' | 'tv';
}


export const MediaCard = ({data, type}: MediaCardProps) => {
  const rating = data.vote_average.toFixed(1);
  const displayTitle = data.media_type === 'movie' ?  data.title : data.name;
  const dateString = data.media_type === 'movie'? data.release_date : data.first_air_date
  const year = dateString ? dateString.split('-')[0] : 'N/A'

  return (
    <div className="transition-transform hover:scale-105"
                >
    <Link 
      to={`/${type}/${data.id}`} 
      className="group relative block rounded-lg overflow-hidden bg-gray-900 transition-all duration-300 hover:scale-105 hover:z-10 shadow-lg"
    >
      {/* Image Container with 2:3 Aspect Ratio */}
      <div className="aspect-[2/3] w-full relative">
        <img 
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} 
          alt={displayTitle}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
          loading="lazy"
        />
        
        
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">

          <div className="flex items-center gap-2 mb-1">
            <span className="bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded">
              ★ {rating}
            </span>
            <span className="text-white text-xs">
              {year}
            </span>
          </div>
         <h3 className="text-white text-sm font-bold truncate">
            {displayTitle}
          </h3>
        </div>
      </div>
    </Link>
    </div>
  );
};
