import { NavLink, Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] font-semibold bg-transparent px-4 py-2 rounded-lg"
              : "px-4 py-2 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/readList"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] font-semibold bg-transparent px-4 py-2 rounded-lg"
              : "px-4 py-2 font-medium"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pageToRead"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] font-semibold bg-transparent px-4 py-2 rounded-lg"
              : "px-4 py-2 font-medium"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 py-4 ">
      <div className="navbar max-w-6xl mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              {navLinks}
              <div className="flex flex-col gap-2 mt-4 md:hidden">
                <button className="btn bg-[#23BE0A] text-white">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
              </div>
            </ul>
          </div>
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl lg:text-5xl font-extrabold text-[#131313] hover:text-[#23BE0A] transition"
          >
            ShelfStream
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        {/* Action Buttons */}
        <div className="navbar-end gap-3 hidden md:flex">
          <button className="btn bg-[#23BE0A] hover:bg-[#1fa508] text-white px-6 border-none min-h-0 h-12">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] hover:bg-[#4eb1bd] text-white px-6 border-none min-h-0 h-12">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
