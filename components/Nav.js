

const Nav = () => {
  return (
    <div>
      <nav className="px-5 py-3 flex justify-between text-white  shadow-sm">
        <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
          MGRS
        </h1>

        <ul className="flex items-center">
          <li className="mx-3 cursor-pointer">Help</li>
          <li className="mx-3 px-4 py-2 bg-white text-black rounded-md cursor-pointer">Login</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
