import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Car CRUD App</h1>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/cars" className="hover:text-blue-300">
            Cars
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
