import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useMovies } from "../hooks/useMovies";
import { SearchResults } from "./SearchResults";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
   startTransition: React.TransitionStartFunction
}


export const SearchInput = ({startTransition}:Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebounce(searchInput, 500);
  const { data, isLoading } = useMovies(debouncedSearch);

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <form className="order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0 relative">
      <input
        type="text"
        value={searchInput}
        onChange={handelSearch}
        className="w-full md:w-64 bg-primary/60 border-none rounded-full py-2 px-4 pl-10 shadow-[inset_0_0_0_1px_#C5C6C7] focus:ring-2 focus:ring-accent-three outline-none transition-all"
        placeholder="Movie Name.."
      />
      <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-text-gray" />
      {searchInput && (
        <SearchResults
          isLoading={isLoading}
          onSelect={() => setSearchInput("")}
          movies={data?.results || []}
          startTransition={startTransition}
        />
      )}
    </form>
  );
};
