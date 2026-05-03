import { MediaCard } from "../component/MediaCard";
import { TrendingSlider } from "../component/TrendingSlider";
import { useMovies } from "../hooks/useMovies";
import type { MediaData } from "../types/MediaData";
import type { Movie } from "../types/Movie";
import type { TVShow } from "../types/TVShows";
import { useState } from "react";

const Home = () => {
  const [activeType, setActiveType] = useState<"movie" | "tv">("movie");
  const { data: media, isLoading, isError } = useMovies("");

  if (isLoading)
    return <div className="bg-primary min-h-screen animate-pulse" />;

  if (isError)
    return (
      <div className="text-white text-center pt-12">Error Loading Movies..</div>
    );

  const moviesData = media?.results.filter(
    (movie) => movie.media_type === "movie",
  ) as Movie[];
  const tvShowData = media?.results.filter(
    (show) => show.media_type === "tv",
  ) as TVShow[];

  const sliderMovies = moviesData.slice(0, 5) ?? [];

  const gridMovies = moviesData.slice(5) ?? [];
  const gridShows = tvShowData ?? [];

  const items = activeType === 'movie'? gridMovies : gridShows;

  const baseStyles = "text-xl px-2 h-10 flex items center mb-7 text-text-gray font-semibold transition-all duration-300 cursor-pointer";

const activeStyles = "text-2xl !text-accent-three pb-1 pl-4 border-b-3 cursor-pointer border-accent-three shadow-[0_12px_10px_-10px_var(--color-accent-three)] text-center";


  return (
    <main className="min-h-screen bg-primary pb-10">
      <section className="h-[70vh] md:h-[600px] w-full pt-18 relative">
        {sliderMovies.length > 0 && <TrendingSlider movies={sliderMovies} />}
      </section>

      <section className="container mx-auto px-4 mt-12">
        <div className="flex gap-4 itmes-end md:flex-nowrap flex-wrap">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-accent pl-4">
            Trending Now
          </h2>
          <button
            onClick={() => setActiveType("tv")}
            className={`${baseStyles}${activeType === 'tv' ? activeStyles: baseStyles }`}
          >
            TvShow
          </button>

          <button
            onClick={() => setActiveType("movie")}
            className={`${baseStyles}${activeType === 'movie' ? activeStyles: baseStyles }`}
          >
            Movies
          </button>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
  {items.map((item) => (
    <MediaCard 
      key={item.id} 
      data={item as MediaData} 
      type={activeType} 
    />
  ))}
</div>

          {/* {activeType === "movie"
            ? gridMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="transition-transform hover:scale-105"
                >
                  <MovieCard movie={movie} />
                </div>
              ))
            : gridShows.map((show) => (
                <div
                  key={show.id}
                  className="transition-transform hover:scale-105"
                >
                  <TVShowCard show={show} />
                </div>
              ))} */}

      </section>
    </main>
  );
};

export default Home;
