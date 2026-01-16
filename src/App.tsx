
import { ThemeProvider } from "./context/ThemeContext";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Hero section */}
      <Hero />
      <Education/>

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
