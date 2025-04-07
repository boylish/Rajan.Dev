import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const cardsRef = useRef([]);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'other', name: 'Tools & Others' },
    { id: 'Animation', name: 'Animation' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reset',
            },
          }
        );
      }
    });
  }, [filteredSkills]);

  return (
    <section id="skills" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container mx-auto pt-6 pb-6 px-4">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-block">
            <h2
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: '#38bdf8' }}
            >
              Skills
            </h2>
            <div
              className="h-1 w-12 mt-1 mx-auto"
              style={{ backgroundColor: '#38bdf8' }}
            ></div>
          </div>
          <h3
            className="mt-4 mb-4"
            style={{
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            Technical Expertise
          </h3>
          <p className="text-center" style={{ color: '#334155' }}>
            I've worked with a variety of technologies in the web development
            world. Here's an overview of my technical skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#38bdf8] text-white'
                  : 'bg-white text-[#334155]'
              }`}
              onClick={() => setActiveCategory(category.id)}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id)
                  e.currentTarget.style.backgroundColor = '#e2e8f0';
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id)
                  e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: '#ffffff' }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h4 className="font-medium mb-2" style={{ color: '#0f172a' }}>
                {skill.name}
              </h4>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        i < skill.level ? '#38bdf8' : '#e2e8f0',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
