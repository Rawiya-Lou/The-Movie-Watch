import { SearchResultsItem } from './SearchResultsItem'
import type {  MediaData } from '../types/MediaData'


interface Props {
    data: MediaData[]
    onSelect: () => void
    isLoading: boolean
     startTransition: React.TransitionStartFunction
}

export const SearchResults = ({data, isLoading, onSelect, startTransition}: Props) => {
  return (
        <ul className="absolute z-10 w-full mt-1 bg-primary rounded-xl shadow-sm max-h-60 overflow-auto">
        {isLoading && <li className="p-2 text-text-gray">Searching...</li>}
        {data.map((d) => (
          <SearchResultsItem data={d} onSelect={onSelect} startTransition={startTransition} />
        
        ))}
        {!isLoading && data.length === 0 && (
          <li className="p-2 text-text-gray text-center">No Movies Found</li>
        )}
      </ul>
  )
}
