
const SectionHeading = ({heading}) => {
  return (
    <h2 
      className="self-center pt-24 w-fit text-3xl font-bold text-desaturated-blue pb-6 mb-4 relative before:content-[''] before:absolute before:bg-primary before:transform before:right-1/2 before:translate-x-1/2 before:bottom-0 before:w-14 before:h-1"
    >
      { heading }
    </h2>
  );
}

export default SectionHeading;