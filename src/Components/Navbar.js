import React from "react";

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
  return (
    <nav className="bg-gray-100  shadow-lg w-full m-0 p-0 fixed z-50">
      <div className="w-full m-0 ">
        <div className="flex items-center justify-between h-20 px-9">
          <div className="flex items-center">
            <a
              href="/#"
              className="flex-shrink-0 text-xl font-bold  "
            >
             Gonzalo<span className="text-sky-600">.Dev</span> 
            </a>
          </div>
          <div className="flex">
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
    </nav>
  );
}

export default Navbar;
