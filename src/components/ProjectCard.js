
const ProjectCard = ({image, title, description, viewProject, liveDemo }) => {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-lg w-96">
      <img src={image} alt="project thumbnail" className="rounded-t-lg h-[220px]" />
      <div className="flex flex-col gap-3 p-8">
        <h4 className="text-gray-700 text-xl font-bold">{ title }</h4>
        <p className="text-gray-500">{ description }</p>
        <div className="flex justify-between">
          <a href={ viewProject } className="font-semibold bg-primary hover:bg-secondary transiton-colors w-fit py-2 px-5 text-white rounded-full">View project</a>
          <a href={ liveDemo } className="font-semibold border border-primary text-primary transition-colors hover:bg-blue-50 w-fit py-2 px-5 rounded-full">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;