import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../pages/ContactPage";
import Experience from "../components/Experience";
import Education from "../components/Education";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Contact />

    </div>
  );
};

export default Home;
