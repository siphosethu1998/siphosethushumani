import NavBar from "./components/NavBar";
import ServiceCard from "./components/ServiceCard";
import SkillCard from "./components/SkillCard";
import { faServer, faCloud, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const services = [
  {title:"Web Development", description:"Creating responsive and dynamic websites tailored to your business needs.", faIcon:faLaptopCode},
  {title:"Backend Development", description:"Building robust server-side applications and APIs for seamless integration.", faIcon:faServer}, 
  {title:"Database Design", description:"Designing efficient database schemas for optimal data management.", faIcon:faDatabase}, 
  {title:"Cloud Integration", description:"Integrating cloud services to enhance scalability and performance.", faIcon:faCloud}, 
];
const technicalSkills = ["HTML5", "CSS3", "Javascript", "Python", "Java", "SQL", "Git", "Linux"];
const softSkills = ["Team Collaboration", "Critical Thinking", "Problem Solving", "Adaptability"];

function App() {
  return (
    <div className="bg-gray-50 flex flex-col items-center gap-36 font-nunito pb-8">
      <NavBar />
      <main className="flex flex-col gap-36 px-80">
        {/* hero section */}
        <section className="flex gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-bright-blue"><span className="text-gray-700">Hi, I'm</span> Siphosethu Shumani</h1>
            <p className="w-4/5 text-gray-500">A passionate Full-Stack Developer committed to building efficient and scalable web applications.</p>
            <a href="#contact" className="bg-bright-blue text-white w-fit py-3 px-6 rounded-full">Get in touch</a>
          </div>
          <img src="/my_image.jpg" alt="profile-pic" className="size-72 rounded-full shadow-md" />
        </section>
        {/* skills section */}
        <section className="flex flex-col gap-10">
          <h2 
            className="relative text-center text-4xl font-bold text-gray-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full"
          >
            Skills
          </h2>
          <div className="flex">
            <SkillCard title="Technical Skills" skillArray={technicalSkills} />
            <SkillCard title="Soft Skills" skillArray={softSkills} />
          </div>
        </section>
        {/* services section */}
        <section className="flex flex-col gap-10">
          <h2 
            className="relative text-center text-4xl font-bold text-gray-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full"
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
      </main>
    </div>
  );
}

export default App;
