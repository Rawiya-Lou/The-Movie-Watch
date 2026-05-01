import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 py-2 px-4 rounded bg-secondary hover:bg-accent-three text-text-gray transition-all my-2 mx-6 cursor-pointer hover:text-secondary [clip-path:polygon(20%_0%,_100%_0%,_100%_100%,_20%_100%,_0%_50%)]"
    >
      <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-tansform" />
      <span className="hidden md:block md:font-medium">Back</span>
    </button>
  );
};
