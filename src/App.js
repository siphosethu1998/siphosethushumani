import NavBar from "./components/NavBar";

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
          <div className="flex ">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-700">Techincal skills</h3>
              <div className="flex gap-4 flex-1 flex-wrap">
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">HTML5</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">CSS3</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">JavaScript</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Python</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Java</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">SQL</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Git</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Linux</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-700">Soft Skills</h3>
              <div className="flex gap-4 flex-1 flex-wrap">
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Team collaboration</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Critical Thinking</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Problem Solving</span>
                <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">Adaptability</span>
              </div>
            </div>
          </div>
        </section>
        {/* skills section */}
        <section>
          <h2 
            className="relative text-center text-4xl font-bold text-gray-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full"
          >
            Services
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
