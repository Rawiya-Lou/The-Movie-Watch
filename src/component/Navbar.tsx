import { SearchInput } from "./SearchInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Clapperboard } from "lucide-react";
import { useTransition } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  return (
    <header className="relative">
      <nav className="bg-secondary text-text-gray px-8 py-4 fixed w-full top-0 z-50">
       
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/">
            <Clapperboard className="h-8 w-16 text-accent-three" />
          </Link>

    
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-accent-three cursor-pointer" />
          </button>


          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:flex md:order-2 w-full md:w-auto mt-4 md:mt-0`}
          >
          <SearchInput startTransition={startTransition} />
            
           
          </div>
        </div>
        {isPending && <div className="absolute top-18 left-0 h-2 bg-accent-three animate-pulse w-full" />}
      </nav>
    </header>
  );
};

export default Navbar;
