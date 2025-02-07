const Button = ({href, addedStyles, children}) => {
  return (
    <a 
      href={href}
      className={`flex items-center gap-2 transition-colors font-medium transiton-colors w-fit px-5 rounded-full py-2 ${addedStyles}`}
      >
        { children }
    </a>
  );
}

export default Button;