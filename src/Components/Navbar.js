import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function NavItem({ to, children, onClick }) {
  return (
    <div
      className="px-3 py-2 text-bold  text-lg  font-medium text-gray-800  hover:text-gray-900  focus:outline-none focus:text-gray-900  transition duration-150 ease-in-out cursor-pointer"
      onClick={(e) => onClick(e, to)}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  function handleNavItemClick(e, to) {
    e.preventDefault();
    setShowMenu(false);
    document.querySelector(`${to}`).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="bg-gray-100  shadow-lg  m-0 p-0  z-50 w-full fixed">
      <div className=" m-0 ">
        <div className="flex items-center justify-between h-20 px-9">
          <div className="flex items-center">
            <a href="/#" className="flex-shrink-0 text-xl font-bold  ">
              Gonzalo<span className="text-sky-600">.Dev</span>
            </a>
          </div>
          <button className="md:hidden ml-auto" onClick={handleMenuToggle}>
            <RiMenu4Fill color="#292929" fontSize="2em" />
          </button>

          <div className="flex">
            <div
              className={`md:flex md:items-center md:justify-between ${
                showMenu ? "nav-menu-show" : "nav-menu"
              }`}
            >
              {showMenu ? (
                <button
                  className="absolute top-0 right-0 mt-8 mr-9 md:hidden ml-auto"
                  onClick={handleMenuToggle}
                >
                  <IoCloseSharp color="#292929" fontSize="2em" />
                </button>
              ) : (
                ""
              )}

              <div className="  hidden md:flex">
                <NavItem
                  to="#about"
                  onClick={handleNavItemClick}
                  className="cursor-pointer"
                >
                  Acerca de
                </NavItem>
                <NavItem
                  to="#projects"
                  onClick={handleNavItemClick}
                  className="cursor-pointer"
                >
                  Proyectos
                </NavItem>
                <NavItem
                  to="#contact"
                  onClick={handleNavItemClick}
                  className="cursor-pointer"
                >
                  Contacto
                </NavItem>
              </div>

              <AnimatePresence className="md:hidden">
                {showMenu && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={variants}
                  >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  md:block">
                      <NavItem to="#about" onClick={handleNavItemClick}>
                        Acerca de
                      </NavItem>
                      <NavItem to="#projects" onClick={handleNavItemClick}>
                        Proyectos
                      </NavItem>
                      <NavItem to="#contact" onClick={handleNavItemClick}>
                        Contacto
                      </NavItem>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
