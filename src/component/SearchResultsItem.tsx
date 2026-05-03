import { useNavigate } from "react-router-dom";
import type { MediaData} from "../types/MediaData";
import { Star } from "lucide-react";


interface Props {
  data: MediaData;
  onSelect: () => void;
  startTransition: React.TransitionStartFunction
}
export const SearchResultsItem = ({ data , onSelect,  startTransition }: Props) => {
  const navigate = useNavigate();
 const isMovie = data.media_type === "movie";
  const displayTitle = isMovie ? data.title : data.name;
  const dateString = isMovie ? data.release_date : data.first_air_date;
  const year = dateString ? dateString.split("-")[0] : "N/A";
  const rating = data.vote_average?.toFixed(1) || "0.0";

  const handleSelectMedia = () => {
    startTransition(() => {
      // 2. Navigate using the item's specific ID and type
      navigate(`/${data.media_type}/${data.id}`);
      onSelect();
    });
  };

  return (
 
      <li
        key={data.id}
        className="px-4 py-2 cursor-pointer hover:bg-slate-200 hover:text-primary transition-colors border-b-1 border-text-gray"
        onClick={handleSelectMedia}
      >
        <div className="flex gap-1 items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={displayTitle}
            className="rounded-xs w-12"
          />
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-medium text-left">
              {displayTitle}
            </h3>
            <div className="text-xs font-semibold flex justify-between">
              <p>{year}</p>
              <p className="flex gap-1 items-center text-center">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="font-bold">
                  {rating}
                </span>
              </p>
            </div>
          </div>
        </div>
      </li>
   
  );
};
