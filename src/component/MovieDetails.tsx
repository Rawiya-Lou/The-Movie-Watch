import { useParams, useNavigate } from "react-router-dom"
import { useMovieDetails } from "../hooks/useMoviesDetails"

export const MovieDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const {data: movie, isLoading, error} = useMovieDetails(id)

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error loding movie</div>
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div>
        <button onClick={()=> navigate(-1)} className="mb-4">⬅Back</button>
        <div className="flex flex-col md:flex-row gap-8">
            <img src={imgUrl} alt={movie.title} className="w-full md:w-80 rounded-lg shadow-xl" />
            <div>
                <h1 className="text-4xl font-bold-mb-2">{movie.title}</h1>
                <p>{movie.release_date} * {movie.runtime} min</p>
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="text-lg leading-relaxed text-gray-700">{movie.overview}</p>
            <button className="border rounded-xl text-xl font-semibold bg-gray-800 text-white px-4 py-3 mt-6 hover:bg-gray-500 cursor-pointer focus:ring-2 focus:ring-blue-500">Watch now ▶</button>
            </div>
        </div>
    </div>
  )
}
