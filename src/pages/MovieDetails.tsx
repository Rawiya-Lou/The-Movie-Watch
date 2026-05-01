import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMoviesDetails";
import { GoBackButton } from "../component/GoBackButton";
import { Star, Calendar, Clock } from "lucide-react";
import MovieDetailsSkeleton from "../component/MovieDetailsSkeleton";

export const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovieDetails(id);

  if (isLoading) return (
    <div className="bg-primary min-h-screen">
        
        <MovieDetailsSkeleton />
    </div>
  );
  if (error) return <div>Error loding movie</div>;
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  return (
  
     
      <main className="min-h-screen max-auto p-4 md:p-8 relative  bg-cover bg-center flex flex-col justify-center" style={{
            backgroundImage: `linear-gradient(to right, rgba(11, 12, 16, 1) 20%, rgba(11, 12, 16, 0.4) 100%), url(${imgUrl})`
          }}>

          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-0" />
          <div className="relative z-10 container mz-auto">

        <GoBackButton />
        <section
          className="grid grid-cols-1 md:grid-cols-[400px_2fr] overflow-hidden gap-8 mx-6 my-3 z-10">
          <div className="w-full">
            <img
              src={imgUrl}
              alt={movie?.title}
              className="w-full h-full object-cover shadow-2xl rounded-xl"
            />
          </div>

          {movie && (
            <div className="p-6 md:p-10 flex flex-col gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl text-accent-three mb-2 font-bold">
                  {movie?.title}
                </h1>
                <p className="text-text-gray italic text-lg">{movie?.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-4 items-center text-sm font-semibold">
                <div className="flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-accent-three">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span>{Math.floor(movie?.vote_average)}</span>
                </div>

                <div className="flex items-center gap-1 text-text-gray">
                  <Calendar className="w-4 h-4 text-text-gray" />
                  <span>{movie.release_date.split("-")[0]}</span>
                </div>

                <div className="flex items-center gap-1 text-text-gray">
                  <Clock className="w-4 h-4" />
                  <span>{movie.runtime} min</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-accent-three mb-2 underline decoration-accent-three underline-offset-8">
                  Overview
                </h2>
                <p className="text-text-gray loading-relaxed text-lg">
                  {movie.overview}
                </p>
              </div>
              <button className="mt-auto w-fit bg-accent-three hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                Watch Trailer
              </button>
            </div>
          )}
        </section>

          </div>

      </main>
   
  );
};
