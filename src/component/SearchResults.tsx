import { SearchResultsItem } from './SearchResultsItem'
import type { Movie } from '../types/Movie'

interface Props {
    movies: Movie[]
    onSelect: () => void
    isLoading: boolean
}

export const SearchResults = ({movies, isLoading, onSelect}: Props) => {
  return (
        <ul className="absolute z-10 w-full mt-1 bg-primary rounded-xl shadow-sm max-h-60 overflow-auto">
        {isLoading && <li className="p-2 text-text-gray">Searching...</li>}
        {movies.map((movie) => (
          <SearchResultsItem movie={movie} onSelect={onSelect} />
        
        ))}
        {!isLoading && movies.length === 0 && (
          <li className="p-2 text-text-gray text-center">No Movies Found</li>
        )}
      </ul>
  )
}
