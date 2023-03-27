import React, { useState } from "react";

function NavItem({ to, children }) {
  return (
    <a
      href={to}
      className="px-3 py-2 text-bold  text-lg  font-medium text-gray-800  hover:text-gray-900  focus:outline-none focus:text-gray-900  transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="bg-gray-100  shadow-lg w-full m-0 p-0 fixed z-50">
        <div className="w-full m-0 ">
          <div className="flex items-center justify-between h-20 px-9">
            <div className="flex items-center">
              <a href="/#" className="flex-shrink-0 text-xl font-bold  ">
                Gonzalo<span className="text-sky-600">.Dev</span>
              </a>
            </div>
            <button className="md:hidden ml-auto" onClick={handleMenuToggle}>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>

            <div className="flex">
              <div
                className={`md:flex md:items-center md:justify-between ${
                  showMenu ? "nav-menu-show" : "nav-menu"
                }`}
              >
                {showMenu ? (
                  <svg
                    className="w-6 h-6  text-black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  ""
                )}

                <NavItem
                  to="/about"
                  className="text-gray-900  hover:text-gray-700 "
                >
                  Acerca de
                </NavItem>
                <NavItem
                  to="/projects"
                  className="ml-8 text-gray-900  hover:text-gray-700 "
                >
                  Proyectos
                </NavItem>
                <NavItem
                  to="/contact"
                  className="ml-8 text-gray-900  hover:text-gray-700 "
                >
                  Contacto
                </NavItem>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
