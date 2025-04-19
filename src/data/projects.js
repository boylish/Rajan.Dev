import intelion from "../assets/intelion.png";
import aiReviewer from "../assets/ai-reviewer.png";
import bookstore from "../assets/bookstore.png";
export const projects = [
  {
    id: 5,
    title: "Task Management App",
    description:
      "A comprehensive task management application with features like task creation, assignment, progress tracking, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/boylish/Task_Manager_frontend",
    demo: "https://task-manager-frontend-alpha-beige.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description:
      "Built an AI-powered code reviewer using React . Integrated Google Gemini API for AI-based code analysis and real time code editor with syntax highlighting.",
    image:
    aiReviewer,
    tags: ["React", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/boylish/AI-Code-Reviewer",
    demo: "https://ai-code-reviewer-vins.onrender.com/",
    featured: true,
  },
  {
    id: 1,
    title: "Online Book Store",
    description:
      "A full-featured platform built with React, Node.js, and MongoDB. Includes user authentication, product management, cart functionality.",
    image:
      bookstore,
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/boylish/bookstore",
    demo: "https://bookstore1-seven.vercel.app/",
    featured: true,
  },
  
  {
    id: 3,
    title: "Animated landing page",
    description:
      "An interactive landing page built with smooth animations and modern UI elements.",
    image: intelion ,
    tags: ["JavaScript", "React", "GSAP", "Tailwind CSS"],
    github: "https://github.com/boylish/Intelion-Landing-Page",
    demo: "https://intelion-landing-page-two.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Client Portfolio Website",
    description:
      "A responsive portfolio website showcasing Client's projects, skills, and professional experience.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["HTML", "CSS", "javaScript" , "GSAP"],
    github: "https://github.com/boylish/logo_designer",
    demo: "https://boylish.github.io/logo_designer/",
    featured: false,
  },
  
];
