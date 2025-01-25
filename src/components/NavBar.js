const NavBar = () => {
  return (
    <div className="flex justify-around py-4 bg-white items-center shadow-md">
      <a href="#header" className="text-2xl font-bold text-bright-blue">Siphosethu Shumani</a>
      <ul className="flex gap-8 font-semibold text-gray-700">
        <li className="hover:text-bright-blue transition-colors"><a href="#skills">Skills</a></li>
        <li className="hover:text-bright-blue transition-colors"><a href="#services">Services</a></li>
        <li className="hover:text-bright-blue transition-colors"><a href="#projects">Projects</a></li>
        <li className="hover:text-bright-blue transition-colors"><a href="#experience">Experience</a></li>
        <li className="hover:text-bright-blue transition-colors"><a href="#education">Education</a></li>
        <li className="hover:text-bright-blue transition-colors"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
