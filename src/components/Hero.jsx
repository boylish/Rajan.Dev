import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import mine from "../assets/mine.jpg";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const imageRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;

      const xRotation = ((clientY - innerHeight / 4) / innerHeight) * 0;
      const yRotation = ((clientX - innerWidth / 4) / innerWidth) * 0;

      gsap.to(imageRef.current, {
        rotateX: -xRotation,
        rotateY: yRotation,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 pt-20 sm:pt-0"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-15 items-center">
          {/* Left Side */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col items-center md:items-start text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
          >
            <motion.p
              className="text-blue-light font-medium mb-3 text-lg sm:text-xl"
              variants={fadeUp}
              custom={0.2}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-2xl sm:text-4xl text-cyan-600 mb-4"
              variants={fadeUp}
              custom={0.4}
            >
              Rajan Verma
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-4xl md:text-5xl text-slate-700 font-medium mb-6"
              variants={fadeUp}
              custom={0.6}
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "MERN Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h2>
            <motion.p
              className="body-lg mb-8 max-w-lg text-sm sm:text-base"
              variants={fadeUp}
              custom={0.8}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating products that are intuitive, inclusive, and impactful.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={fadeUp}
              custom={1}
            >
              <a
                href="#projects"
                className="btn-primary bg-[#38bdf8] pt-1 pb-1 pl-4 pr-4 text-white rounded-3xl hover:bg-blue-500 transition-all text-base sm:text-lg flex items-center"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="btn-secondary bg-[#38bdf8] pt-1 pb-1 pl-3 pr-3 text-white rounded-4xl hover:bg-blue-500 transition-all text-base sm:text-lg"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex space-x-5 mt-8"
              variants={fadeUp}
              custom={1.2}
            >
              <a
                href="https://github.com/boylish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-cyan-500 hover:scale-110 transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajan-verma-10363124a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-cyan-500 hover:scale-110 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/boylish_rajan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-cyan-500 hover:scale-110 transition-all"
              >
                <Instagram size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2 mb-10 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <div
              ref={imageRef}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 0 30px #38bdf8" }}
            >
              <img
                src={mine}
                alt="Rajan Verma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce Button */}
      <a
        href="#about"
        className="hidden lg:flex items-center justify-center absolute bottom-6 left-1/2 transform -translate-x-1/2 text-cyan-500 hover:text-cyan-600 text-3xl animate-bounce"
      >
        <ChevronDown size={45} />
      </a>
    </section>
  );
};

export default Hero;
