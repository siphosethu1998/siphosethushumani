const NavBar = () => {
  const navStyling = "hover:text-bright-blue transition-colors";

  return (
    <div className="flex gap-96 w-full py-4 bg-white justify-center items-center shadow-md">
      <a className="text-2xl font-bold text-bright-blue mr-32" href="#header">Siphosethu Shumani</a>
      <ul className="flex gap-8 font-semibold text-gray-700">
        <li className={`${navStyling}`}><a href="#skills">Skills</a></li>
        <li className={`${navStyling}`}><a href="#services">Services</a></li>
        <li className={`${navStyling}`}><a href="#projects">Projects</a></li>
        <li className={`${navStyling}`}><a href="#experience">Experience</a></li>
        <li className={`${navStyling}`}><a href="#education">Education</a></li>
        <li className={`${navStyling}`}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
