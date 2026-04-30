import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useMovies } from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebounce(searchInput, 500);
  const { data, isLoading } = useMovies(debouncedSearch);
  const navigate = useNavigate();

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="max-w-md relative text-gray-700 w-full">
      <label className="text-xl">Search for A movie:</label>
      <input
        type="search"
        value={searchInput}
        onChange={handelSearch}
        className="text-gray-600 border border-black py-2 ps-4 rounded-xl text-xl m-4 focus:outline-none"
        placeholder="Movie Name.."
      />
      
      <ul className="absolute z-10 w-full mt-1 bg-white border rounded-xl shadow-sm max-h-60 overflow-auto">
        {isLoading && <li className="p-2 text-gray-500">Searching...</li>}
        {data?.results.map(movie => (
            <li key={movie.id} className="px-4 py-2 cursor-pointer hover:bg-blue-50 transition-colors"
            onClick={() => {
                navigate(`/movie/${movie.id}`)
                setSearchInput('')
            }}>
                <div className="font-medium">{movie.title}</div>
                <div className="text-xs text-gray-400">{movie.release_date?.split('-')[0]}</div>
            </li>
        ))}
        {!isLoading && data?.results.length === 0 && (
            <li className="p-2 text-gray-500 text-center">No Movies Found</li>
        )}

      </ul>
     
      <div className="grid grid-cols-4 gap-6"></div>
    </div>
  );
};
