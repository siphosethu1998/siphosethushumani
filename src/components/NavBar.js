const NavBar = () => {
  const navStyling = "hover:text-primary transition-colors";

  return (
    <div className="border border-red-500 bg-white flex flex-1 xl:w-3/4 2xl:4/5 rounded-full px-6 py-2 justify-between items-center shadow-md fixed top-4 z-50">
      <a className="text-2xl font-bold text-primary xl:text-nowrap" href="#header">Siphosethu Shumani</a>
      <ul className="flex gap-8 font-semibold text-desaturated-blue">
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
