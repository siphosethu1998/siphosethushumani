const Button = ({href, buttonText, addedStyles}) => {
  return (
    <a 
      href={href}
      className={`font-semibold transiton-colors w-fit px-5 rounded-full ${addedStyles}`}
      >
        { buttonText }
    </a>
  );
}

export default Button;