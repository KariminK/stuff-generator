const Navbar = () => {
  return (
    <nav className="bg-blue-950 sticky top-0 z-10 py-10 lg:py-5 text-3xl font-bold text-white font-outfit">
      <ul className="flex justify-around items-center max-w-5xl lg:max-w-xl mx-auto">
        <li>
          <a className="underline" href="/">
            Home
          </a>
        </li>
        <li>
          <p className="text-center text-xl lg:text-2xl flex flex-wrap items-end justify-center lg:flex-col lg:items-center">
            <span>Generate</span>{" "}
            <span className="text-4xl lg:text-4xl text-pink-200">Your</span>
            <span className="w-full">Stuff</span>
          </p>
        </li>
        <li>
          <a
            className="underline"
            href="https://youtu.be/dQw4w9WgXcQ?si=8GxU_ddjg-fhIrVw"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
