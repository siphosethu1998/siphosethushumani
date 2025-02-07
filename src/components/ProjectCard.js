import Button from "./Button";
import { FaGithub } from 'react-icons/fa';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const ProjectCard = ({image, title, description, viewProject, liveDemo }) => {
  return (
    <div className="bg-white flex flex-col gap-3 rounded-lg shadow-lg w-96">
      <img src={image} alt="project thumbnail" className="rounded-t-lg h-[220px]" />
      <div className="flex flex-col gap-3 px-8 mt-2">
        <h4 className="text-gray-700 text-xl font-bold">{ title }</h4>
        <p className="text-gray-500">{ description }</p>
      </div>
      <div className="flex justify-between px-8 pb-8 mt-auto">
        <Button href={viewProject} addedStyles="bg-primary hover:bg-secondary text-white">
            <FaGithub className="size-5"/> View Project 
        </Button>
        <Button href={liveDemo} addedStyles="border border-primary hover:bg-blue-50 text-primary">
            Live Demo <HiMiniArrowUpRight className="size-5"/>  
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;