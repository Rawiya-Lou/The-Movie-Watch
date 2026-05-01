import { SearchInput } from "./SearchInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Clapperboard } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className="bg-secondary text-text-gray px-8 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/">
            <Clapperboard className="h-8 w-16 text-accent-three" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Bars3Icon className="h-6 w-6 text-accent-three cursor-pointer" />
          </button>

          <SearchInput />

          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:flex md:order-3 w-full md:w-auto mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium">
              <li>
                <Link to="/" className="hover:text-accent-three transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-accent-three transition">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
