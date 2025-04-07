
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className='pl-4 pr-4'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
