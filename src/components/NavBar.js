import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="bg-white flex flex-1 sm:w-11/12 2xl:w-4/5 mx-auto rounded-full px-6 py-2 justify-between items-center shadow-md fixed top-4 z-50">
      <a className="text-2xl font-bold text-primary xl:text-nowrap" href="#header">Siphosethu Shumani</a>
      <ul className="sm:hidden lg:flex gap-8 font-semibold text-desaturated-blue">
        <li className="hover:text-primary transition-colors"><a href="#skills">Skills</a></li>
        <li className="hover:text-primary transition-colors"><a href="#services">Services</a></li>
        <li className="hover:text-primary transition-colors"><a href="#projects">Projects</a></li>
        <li className="hover:text-primary transition-colors"><a href="#experience">Experience</a></li>
        <li className="hover:text-primary transition-colors"><a href="#education">Education</a></li>
        <li className="hover:text-primary transition-colors"><a href="#contact">Contact</a></li>
      </ul>
      <HiMenu className="size-8 sm:block lg:hidden text-desaturated-blue" />
    </div>
  );
}

export default NavBar;
