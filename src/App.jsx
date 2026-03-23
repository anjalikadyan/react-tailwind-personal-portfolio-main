import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";
import { Education } from "@/sections/Education";
import { Training } from "@/sections/Training";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Education />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
