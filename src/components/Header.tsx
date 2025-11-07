import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="h-[10vh] shadow-md flex items-center justify-between px-20">
      <strong>Logo</strong>
      <nav className="flex gap-5 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/login">
          <button className="bg-gray-500 text-white py-2 px-3 rounded-xl cursor-pointer">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
