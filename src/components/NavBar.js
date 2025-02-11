import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleHideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="bg-white flex flex-1 xs:w-11/12 2xl:w-4/5 mx-auto rounded-full px-6 py-2 justify-between items-center shadow-md fixed top-4 z-50">
      <a
        className="text-2xl font-bold text-primary xl:text-nowrap"
        href="#header"
      >
        Siphosethu Shumani
      </a>
      <ul className="ml-auto xs:hidden lg:flex gap-8 font-semibold text-desaturated-blue">
        <li className="hover:text-primary transition-colors">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-primary transition-colors">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-primary transition-colors">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-primary transition-colors">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-primary transition-colors">
          <a href="#education">Education</a>
        </li>
        <li className="hover:text-primary transition-colors">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button onClick={handleShowMenu}>
        <HiMenu className="size-8 xs:block lg:hidden text-desaturated-blue" />
      </button>
      <ul
        className={`fixed right-0 bottom-0 top-0 bg-white xs:flex xs:flex-col xs:items-center xs:px-20 xs:gap-8 sm:gap-12 sm:px-28 xs:py-12 md:px-40 md:py-12 lg:hidden 
          font-semibold text-desaturated-blue transform transition-transform duration-300 ease-in-out ${ showMenu ? "translate-x-0" : "translate-x-full" }`}
      >
        <button onClick={handleHideMenu}>
          <MdClose className="fixed xs:right-12 xs:block md:right-14 lg:hidden top-6 size-8 text-desaturated-blue" />
        </button>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#header">About</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#education">Education</a>
        </li>
        <li className="hover:text-primary transition-colors text-2xl">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
