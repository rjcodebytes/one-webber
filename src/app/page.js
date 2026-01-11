import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import About from "../app/components/about";
import Services from "../app/components/services";
import Contact from "../app/components/contact";
import Footer from "../app/components/footer";
import Project from "./components/projects";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <>
    
        <Navbar />
     

      <main>
        <Hero />
        <About />
        <Services />
        <Project />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

