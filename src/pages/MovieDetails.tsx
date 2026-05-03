import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMoviesDetails";
import { GoBackButton } from "../component/GoBackButton";
import { Star, Calendar} from "lucide-react";
import MovieDetailsSkeleton from "../component/MovieDetailsSkeleton";
import { displayRunTime } from "../utils/displayRunTime";
import type { TVShow } from "../types/TVShows";
import type { Movie } from "../types/Movie";

export const MovieDetails = () => {
  const { id, type } = useParams<{id: string,type: 'movie'|'tv'}>();

  const { data , isLoading, error } = useMovieDetails(id, type);
  const mediaType = location.pathname.includes('/tv/') ? 'tv': 'movie'
  const movieData = (data as Movie);
  const tvData = (data as TVShow)

  const displayTitle = mediaType === 'movie' ?  movieData?.title : tvData?.name;
  const dateString = mediaType === 'movie' ? movieData?.release_date : tvData?.first_air_date;
  const year = dateString ? dateString.split('-')[0] : 'N/A';

  
 

  if (isLoading) return (
    <div className="bg-primary min-h-screen">
        
        <MovieDetailsSkeleton />
    </div>
  );
  if (error) return <div>Error loding movie</div>;
  const imgUrl = `https://image.tmdb.org/t/p/w500${data?.poster_path}`;
  return (
  
     
      <main className="min-h-screen mt-20 md:mt-0 max-auto p-4 md:p-8 relative bg-cover bg-center flex flex-col justify-center" style={{
            backgroundImage: `linear-gradient(to right, rgba(11, 12, 16, 1) 20%, rgba(11, 12, 16, 0.4) 100%), url(${imgUrl})`
          }}>

          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-0" />
          <div className="relative z-10 container mz-auto py-10">

        <GoBackButton />
        <section
          className="grid grid-cols-1 md:grid-cols-[400px_2fr] overflow-hidden gap-8 mx-6 my-10 z-10 ">
          <div className="w-full">
            <img
              src={imgUrl}
              alt={displayTitle}
              className="w-full h-full object-cover shadow-2xl rounded-xl"
            />
          </div>

          {data && (
            <div className="p-6 md:p-10 flex flex-col gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl text-accent-three mb-2 font-bold">
                  {displayTitle}
                </h1>
                <p className="text-text-gray italic text-lg">{data.tagline}</p>
              </div>

              
         

              <div className="flex flex-wrap gap-4 items-center text-sm font-semibold">
                <div className="flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-accent-three">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span>{Math.floor(data.vote_average)}</span>
                </div>

                <div className="flex items-center gap-1 text-text-gray">
                  <Calendar className="w-5 h-5 text-text-gray" />
                  
                  <span className="text-xl text-text-gray">{year}</span>

               
                </div>

                <div className="flex items-center gap-1 text-text-gray">
                  { data &&
                  displayRunTime(data, mediaType)
                  }
                  
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-accent-three mb-2 underline decoration-accent-three underline-offset-8">
                  Overview
                </h2>
                <p className="text-text-gray loading-relaxed text-lg">
                  {data.overview}
                </p>
              </div>
              <button className="mt-auto w-fit bg-accent-three hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 cursor-pointer flex gap-1.5 items-center">
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Trailer
              </button>
            </div>
          )}
        </section>

          </div>

      </main>
   
  );
};
