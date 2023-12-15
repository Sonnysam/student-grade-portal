import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <nav className="px-5 py-3 flex justify-between text-white  shadow-sm">
        <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
          MGRS
        </h1>

        <ul className="flex items-center">
          <li className="mx-3 cursor-pointer">
            <Link href="/help">Help</Link>
          </li>
          <li className="mx-3 px-4 py-2 bg-white text-black rounded-md cursor-pointer">
          <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
