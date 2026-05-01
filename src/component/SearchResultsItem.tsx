import { useNavigate } from "react-router-dom";
import type { Movie } from "../types/Movie";
import { Star } from "lucide-react";

interface Props {
  movie: Movie;
  onSelect: () => void;
}
export const SearchResultsItem = ({ movie, onSelect }: Props) => {
  const navigate = useNavigate();
  return (
    <li
      key={movie.id}
      className="px-4 py-2 cursor-pointer hover:bg-slate-200 hover:text-primary transition-colors border-b-1 border-text-gray"
      onClick={() => {
        navigate(`/movie/${movie.id}`);
        onSelect();
      }}
    >
      <div className="flex gap-1 items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xs w-12"
        />
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-medium text-left">{movie.title}</h3>
          <div className="text-xs font-semibold flex justify-between">
            <p>{movie.release_date?.split("-")[0]}</p>
            <p className="flex gap-1 items-center text-center">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="font-bold">
                {Math.floor(movie.vote_average)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
