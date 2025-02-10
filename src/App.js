import NavBar from "./components/NavBar";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import { FaServer, FaCloud, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { FaArrowRightLong } from 'react-icons/fa6';
import Button from "./components/Button";

/* array with information for all the section on the page */
const technicalSkills = ["HTML5", "CSS3", "Javascript", "Python", "Java", "SQL", "GitHub", "Linux", "MongoDB"];
const softSkills = ["Team Collaboration", "Critical Thinking", "Problem Solving", "Adaptability"];
const services = [
  {title:"Web Development", description:"Creating responsive and dynamic websites tailored to your business needs.", faIcon:FaLaptopCode},
  {title:"Backend Development", description:"Building robust server-side applications and APIs for seamless integration.", faIcon:FaServer}, 
  {title:"Database Design", description:"Designing efficient database schemas for optimal data management.", faIcon:FaDatabase}, 
  {title:"Cloud Integration", description:"Integrating cloud services to enhance scalability and performance.", faIcon:FaCloud}, 
];
const projects = [
  {
    image: "personal_website.jpg", 
    title:"Personal Website", 
    description:"This is my personal website where I showcase my skills, services, projects that I have worked on and so on...",
    viewProject: "https://github.com/siphosethu1998/siphosethushumani",
    liveDemo: "https://siphosethushumani.onrender.com"
  }, 
  {
    image: "the_odin_project_clone.jpg", 
    title:"The Odin Project clone", 
    description:"This is a clone of theodinproject landing page.",
    viewProject: "https://github.com/siphosethu1998/the_odin_project_clone",
    liveDemo: "https://the-odin-project-clone.onrender.com"
  }, 
  {
    image: "online-store.jpg", 
    title:"Online E-commerce store", 
    description:"This is a fictional gadget store selling tech items to customers.",
    viewProject: "https://github.com/siphosethu1998/online-store",
    liveDemo: "https://online-tech-store.onrender.com/"
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
    description: "Tutoring Math, Science and Computer Science in-person and online, helping students achieve academic success."
  }
];

const schools = [
  {
    certificate: "Bachelor's",
    name: "Wallacedene Secondary",
    period:"Jan 2012 - Dec 2016",
    description: "Focused on Math and Science related subjects."
  },
  {
    certificate: "Bsc - Computer Science",
    name: "University of Cape Town",
    period:"Jan 2017 - Dec 2022",
    description: "Focused on Math, Science, software development, algorithms, and data structures."
  },
  {
    certificate: "Fullstack Web Development",
    name: "HyperionDev",
    period:"Nov 2024 - Present",
    description: "Focused Full stack web development, Frontend, Backend and Database technologies."
  },
];

      //<main className="flex flex-col gap-32 mx-auto items-enter">
      //</main>

function App() {
  return (
    <div className="bg-gray-50 flex flex-col items-center gap-28 font-nunito">
      <NavBar />
      {/* hero section */}
      <header id="header" className="px-4 flex sm:flex-col sm:gap-4 sm:w-11/12 lg:flex-row pt-48">
        <div className="mx-auto flex sm:gap-10 sm:flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex flex-col gap-5 sm:w-full lg:w-11/12 2xl:w-3/4">
            <h1 className="lg:w-4/5 xl:w-full sm:text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-primary">Siphosethu Shumani</span>
            </h1>
            <p className="text-lg text-desaturated-blue lg:w-11/12">
              A passionate Full-Stack Developer committed to building efficient and scalable web applications.
            </p>
            <div className="flex gap-4">
            <Button href="#contact" addedStyles="bg-primary hover:bg-secondary text-white">
                  Get in touch  <FaArrowRightLong />
              </Button>
              <Button href="CV_DYL_1.docx" addedStyles="border border-desaturated-blue hover:bg-blue-50 text-desaturated-blue">
                  Download CV  <HiDownload className="size-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 text-center">
            <img
              src="/my_image.jpg"
              alt="A professional portrait of Siphosethu Shumani"
              className="size-72 mx-auto rounded-full shadow-lg"
            />
          </div>
        </div>
      </header>
      {/* skills section */}
      <section id="skills" className="px-4 flex flex-col gap-12 sm:w-11/12 2xl:w-4/5">
        <SectionHeading heading="Skills" />
        <div className="flex sm:flex-col sm:gap-8 lg:flex-row lg:gap-2">
          <SkillCard title="Technical Skills" skillArray={technicalSkills} />
          <SkillCard title="Soft Skills" skillArray={softSkills} />
        </div>
      </section>
      {/* services section */}
      <section id="services" className="px-4 flex flex-col gap-12">
        <SectionHeading heading="Services" />
        <div className="flex sm:flex-col lg:flex-row justify-center gap-8 flex-wrap">
          {
            services.map((service) => {
              // service card
              return (
                <div className="sm:mx-auto sm:w-11/12 lg:mx-0 lg:w-64 flex flex-col gap-4 text-center items-center bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2.5 hover:duration-300 ease-in-out duration-300" >
                  <service.faIcon className='w-14 h-12 text-primary' />
                  <h3 className="text-gray-700 text-2xl font-bold">{ service.title }</h3>
                  <p className="text-gray-500">{ service.description }</p>
                </div>
              )
            })
          }
        </div>
      </section>
      {/* projects section */}
      <section id="projects" className="px-4 flex flex-col gap-12">
        <SectionHeading heading="Projects" />
        <div className="flex flex-wrap justify-center sm:gap-8 xl:gap-5">
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
      <section id="experience" className="px-4 sm:w-11/12 2xl:w-4/5 flex flex-col gap-12">
        <SectionHeading heading="Experience" />
        <div className="self-start flex flex-col gap-8 pl-10 relative before:content-[''] before:absolute before:bg-primary before:left-2.5 before:w-1 before:h-full">
          {
            experiences.map((experience) => {
              return (
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-desaturated-blue before:content-[''] before:absolute before:bg-white before:w-4 before:h-4 before:left-0 before:rounded-full before:border-4 before:p-2 before:border-primary">{ experience.position }</h2>
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
      {/* Education section */}
      <section id="education" className="px-4 sm:w-11/12 2xl:w-4/5 flex flex-col gap-12">
        <SectionHeading heading="Education" />
        <div className="flex flex-col gap-8 pl-10 relative before:content-[''] before:absolute before:bg-primary before:left-2.5 before:w-1 before:h-full">
          {
            schools.map((school) => {
              return (
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-desaturated-blue before:content-[''] before:absolute before:bg-white before:w-4 before:h-4 before:left-0 before:rounded-full before:border-4 before:p-2 before:border-primary">{ school.certificate }</h2>
                  <div className="text-gray-500 flex gap-2 text-sm">
                    <span>{ school.period }</span>
                    <span className="border border-gray-400"></span>
                    <span>{ school.name }</span>
                  </div>
                  <p className="text-gray-500 mt-2">{ school.description }</p>
                </div>
              );
            })
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;