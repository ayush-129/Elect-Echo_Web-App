import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h3 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">ElectEcho</span>
          </h3>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 text-white hover:text-gray-700">
              Home
            </Link>
            <Link
              to={"/aboutus"}
              className="mr-5 text-white hover:text-gray-700"
            >
              About
            </Link>
            <Link
              to={"/contactus"}
              className="mr-5 text-white hover:text-gray-700"
            >
              Contact-us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

