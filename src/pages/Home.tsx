import { MovieCard } from "../component/MovieCard";
import { TrendingSlider } from "../component/TrendingSlider";
import { useMovies } from "../hooks/useMovies"; 

const Home = () => {
  const { data: movies, isLoading, isError } = useMovies('');
  
  if (isLoading) return <div className="bg-primary min-h-screen animate-pulse" />;

  if(isError) return <div className="text-white text-center pt-12">Error Loading Movies..</div>
  

  const sliderMovies = movies?.results.slice(0, 5) ?? [];

  const gridMovies = movies?.results.slice(5) ?? [];

  return (
    <main className="min-h-screen bg-primary pb-10">

      <section className="h-[70vh] md:h-[600px] w-full pt-18 relative">
     {sliderMovies.length > 0 && <TrendingSlider movies={sliderMovies}/>}
      </section>

      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-accent pl-4">Trending Now</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {gridMovies.map((movie) => (
            <div key={movie.id} className="transition-transform hover:scale-105">
         <MovieCard movie={movie}/>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};



export default Home
