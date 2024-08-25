import { FaHouse, FaQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 sticky top-0 z-10 py-10 lg:py-5 text-3xl font-bold text-white font-outfit">
      <ul className="flex justify-around items-center max-w-5xl lg:max-w-xl mx-auto">
        <li className="sm:hidden">
          <Link to={"/"} className="underline">
            Home
          </Link>
        </li>
        <li>
          <p className="text-center text-xl lg:text-xl flex flex-wrap items-end justify-center lg:flex-col lg:items-center">
            <span>Generate</span>{" "}
            <span className="text-4xl lg:text-4xl text-pink-200">Your</span>
            <span className="w-full">Stuff</span>
          </p>
        </li>
        <li className="sm:hidden">
          <Link
            to={"https://youtu.be/dQw4w9WgXcQ?si=8GxU_ddjg-fhIrVw"}
            className="underline"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="fixed hidden sm:grid grid-rows-2 gap-7 bg-[#1a1a1a] py-7 px-3 rounded-md top-3/4 right-0">
        <button>
          <Link to={"https://youtu.be/dQw4w9WgXcQ?si=8GxU_ddjg-fhIrVw"}>
            <FaQuestion color="#5a5a5a" />
          </Link>
        </button>
        <button>
          <Link to={"/"}>
            <FaHouse color="#5a5a5a" />
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
