import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import ServiceCard from "./components/ServiceCard";
import SkillCard from "./components/SkillCard";
import { faServer, faCloud, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const technicalSkills = ["HTML5", "CSS3", "Javascript", "Python", "Java", "SQL", "Git", "Linux"];
const softSkills = ["Team Collaboration", "Critical Thinking", "Problem Solving", "Adaptability"];
const services = [
  {title:"Web Development", description:"Creating responsive and dynamic websites tailored to your business needs.", faIcon:faLaptopCode},
  {title:"Backend Development", description:"Building robust server-side applications and APIs for seamless integration.", faIcon:faServer}, 
  {title:"Database Design", description:"Designing efficient database schemas for optimal data management.", faIcon:faDatabase}, 
  {title:"Cloud Integration", description:"Integrating cloud services to enhance scalability and performance.", faIcon:faCloud}, 
];
const projects = [
  {
    image: "the_odin_project_clone.jpg", 
    title:"The odin project clone", 
    description:"Building robust server-side applications and APIs for seamless integration.",
    viewProject: "https://github.com/siphosethu1998/the_odin_project_clone",
    liveDemo: "https://online-tech-store.onrender.com/products"
  }, 
  {
    image: "online-store.jpg", 
    title:"Online e-commerce store", 
    description:"This is a fictional gadget store selling tech items to customers",
    viewProject: "https://github.com/siphosethu1998/online-store",
    liveDemo: "https://online-tech-store.onrender.com/products"
  },
  {
    image: "some-img", 
    title:"Database Design", 
    description:"Designing efficient database schemas for optimal data management.",
    viewProject: "https://github.com/siphosethu1998/online-store",
    liveDemo: "https://online-tech-store.onrender.com/products"
  }, 
];

const experiences = [
  {
    position:"Cycle Counter",
    period:"Dec 2018 - Feb 2019",
    company: "ShopriteDC",
    description: "Maintained stock and inventory, ensuring accurate record-keeping and efficient operations."
  },
  {
    position:"Tutor",
    period:"Mar 2022 - Present",
    company: "Turtlejar Tutoring",
    description: "Tutoring Math and Science in-person and online, helping students achieve academic success."
  }
];

function App() {
  return (
    <div className="bg-gray-50 flex flex-col items-center gap-36 font-nunito pb-8">
      <NavBar />
      <main className="flex flex-col gap-36 px-80 mt-56">
        {/* hero section */}
        <section className="flex gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-primary"><span className="text-gray-700">Hi, I'm</span> Siphosethu Shumani</h1>
            <p className="w-4/5 text-gray-500">A passionate Full-Stack Developer committed to building efficient and scalable web applications.</p>
            <a href="#contact" className="font-semibold bg-primary hover:bg-secondary transiton-colors text-white w-fit py-3 px-6 rounded-full">Get in touch</a>
          </div>
          <img src="/my_image.jpg" alt="profile-pic" className="size-72 rounded-full shadow-md" />
        </section>
        {/* skills section */}
        <section className="flex flex-col gap-12">
          <h2 
            className="self-center w-fit text-4xl font-bold text-gray-700 pb-6 mb-6 relative before:content-[''] before:absolute before:bg-primary before:transform before:right-1/2 before:translate-x-1/2 before:bottom-0 before:w-16 before:h-1"
          >
            Skills
          </h2>
          <div className="flex">
            <SkillCard title="Technical Skills" skillArray={technicalSkills} />
            <SkillCard title="Soft Skills" skillArray={softSkills} />
          </div>
        </section>
        {/* services section */}
        <section className="flex flex-col gap-12">
          <h2 
            className="self-center w-fit text-4xl font-bold text-gray-700 pb-6 mb-6 relative before:content-[''] before:absolute before:bg-primary before:transform before:right-1/2 before:translate-x-1/2 before:bottom-0 before:w-16 before:h-1"
          >
            Services
          </h2>
          <div className="flex justify-center gap-8">
            {
              services.map((service) => {
                return <ServiceCard title={service.title} description={service.description} faIcon={service.faIcon} />
              })
            }
          </div>
        </section>
        {/* projects section */}
        <section className="flex flex-col gap-12">
          <h2 
            className="self-center w-fit text-4xl font-bold text-gray-700 pb-6 mb-6 relative before:content-[''] before:absolute before:bg-primary before:transform before:right-1/2 before:translate-x-1/2 before:bottom-0 before:w-16 before:h-1"
          >
            Projects
          </h2>
          <div className="flex justify-center gap-8">
            {
              projects.map((project) => {
                return <ProjectCard 
                  image={project.image} title={project.title} description={project.description} viewProject={project.viewProject} liveDemo={project.liveDemo}
                />
              })
            }
          </div>
        </section>
        {/* Experience section */}
        <section className="flex flex-col gap-12">
          <h2 
            className="self-center w-fit text-4xl font-bold text-gray-700 pb-6 mb-6 relative before:content-[''] before:absolute before:bg-primary before:transform before:right-1/2 before:translate-x-1/2 before:bottom-0 before:w-16 before:h-1"
          >
            Experience
          </h2>
          <div className="flex flex-col gap-8 pl-8 relative before:content-[''] before:absolute before:bg-primary before:left-2.5 before:w-1 before:h-full">
            {
              experiences.map((experience) => {
                return (
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-700 before:content-[''] before:absolute before:bg-white before:w-4 before:h-4 before:left-0 before:rounded-full before:border-4 before:p-2 before:border-primary">{ experience.position }</h2>
                    <div className="text-gray-500 flex gap-2 text-sm">
                      <span>{ experience.period }</span>
                      <span className="border border-gray-400"></span>
                      <span>{ experience.company }</span>
                    </div>
                    <p className="text-gray-500">{ experience.description }</p>
                  </div>
                );
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
