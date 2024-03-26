import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const NavLinks = (
    <>
      <nav className="flex gap-5 justify-center items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/listedBooks">Listed Books</NavLink>
        <NavLink to="/pagesToRead">Pages to Read</NavLink>
      </nav>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 work">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content lg:text-lg mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex mr-52">
          <ul className="menu menu-horizontal px-1 lg:text-lg">{NavLinks}</ul>
        </div>
        <div className=" justify-end lg:flex hidden">
          <a className="btn bg-[#23BE0A] text-white mr-4 px-7">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white px-7">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
