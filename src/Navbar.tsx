const Navbar = () => {
  return (
    <nav className="bg-blue-950 py-10 text-3xl font-bold text-white font-outfit">
      <ul className="flex justify-around items-center max-w-5xl mx-auto">
        <li>
          <a className="underline" href="/">
            Home
          </a>
        </li>
        <li>
          <p className="text-center text-xl">
            Generate <span className="text-4xl text-pink-200">Your</span> <br />{" "}
            Stuff
          </p>
        </li>
        <li>
          <a className="underline" href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
