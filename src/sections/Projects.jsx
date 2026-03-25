import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";

const projects = [
  {
    title: "Sports Management System",
    description: "Developed a full-stack Sports Management System using React, Node.js, Express, and MongoDB to manage tournaments, teams, matches, and player statistics. Implemented JWT-based authentication and role-based access control (Super Admin, Coach, Player) with secure restful APIs. Designed responsive dashboards and team management features with modern UI/UX and structured MVC architecture for scalability.",
    image: project1,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "http://localhost:5174/",
    github: "https://github.com/anjalikadyan/sports-managment-main",
    period: "Nov' 25 – Dec' 25"
  },
  {
    title: "Tours & Travel Packages App",
    description: "Created a React-based travel booking application with dynamic tour listing, API data fetching, card removal, and smooth UI interactions. Implemented state management, reusable components, and conditional rendering for improved user experience. Increased usability by enabling quick tour browsing and lightweight client-side interaction.",
    image: project2,
    tags: ["React", "API Integration", "State Management"],
    link: "http://localhost:5175/",
    github: "https://github.com/anjalikadyan/tour-and-traveling-website",
    period: "July' 25 – Aug' 25"
  },
  {
    title: "Training Center Management System",
    description: "Developed a full-stack training management platform featuring course catalog, student enrollment, assignment uploads, and role-based dashboards. Integrated secure user authentication and streamlined course/assignment workflows for efficient training operations. Enhanced admin productivity by simplifying course management and reducing manual coordination efforts.",
    image: project3,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "http://localhost:5176/",
    github: "https://github.com/anjalikadyan/training-management-project",
    period: "Apr' 25 – Jun' 25"
  },
  {
    title: "Techpro Website",
    description: "A professional tech services website built with React and Tailwind CSS. Features a clean, modern design with service listings, client testimonials, and a contact form. Focused on performance and responsive design for a seamless user experience across all devices.",
    image: project4,
    tags: ["React", "Tailwind CSS", "SPA", "UI/UX"],
    link: "http://localhost:3000/",
    github: "https://github.com/anjalikadyan/Techpro-website-in-react",
    period: "Jan' 26 – Present"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {project.period}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
