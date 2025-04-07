import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    }

    // Cards animation
    cardRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-block">
            <h2
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: "#38bdf8" }}
            >
              Projects
            </h2>
            <div
              className="h-1 w-12 mt-1 mx-auto"
              style={{ backgroundColor: "#38bdf8" }}
            ></div>
          </div>
          <h3 className="text-3xl font-bold mt-4 mb-4">My Recent Work</h3>
          <p style={{ color: "#4b5563" }}>
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
