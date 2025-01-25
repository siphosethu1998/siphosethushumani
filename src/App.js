import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col font-nunito h-screen">
      <NavBar />
      <main className="px-80">
        {/* hero section */}
        <section className="flex gap-24 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-bright-blue"><span className="text-gray-700">Hi, I'm</span> Siphosethu Shumani</h1>
            <p className="w-4/5 text-gray-500">A passionate Full-Stack Developer committed to building efficient and scalable web applications.</p>
            <a href="#contact" className="bg-bright-blue text-white w-fit py-3 px-6 rounded-full">Get in touch</a>
          </div>
          <img src="/my_image.jpg" alt="profile-pic" className="size-72 rounded-full shadow-md"/>
        </section>
      </main>
    </div>
  );
}

export default App;
