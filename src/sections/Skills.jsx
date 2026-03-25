import { Code2, Lightbulb, Database, Terminal, Users, Award } from "lucide-react";

const skillsData = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["C++", "Java", "JavaScript", "HTML", "CSS"],
    description: "Core programming languages for logic and web structure."
  },
  {
    title: "Frameworks",
    icon: Code2,
    skills: ["ReactJS", "NodeJS", "Tailwind CSS"],
    description: "Modern tools for building interactive and responsive interfaces."
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    description: "Relational and non-relational data management systems."
  },
  {
    title: "Tools & Tech",
    icon: Lightbulb,
    skills: ["Git", "VS Code", "DSA", "OOP"],
    description: "Essential development tools and technical concepts."
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Continuous Learning", "Adaptability", "Problem-Solving", "Team Player"],
    description: "Professional qualities that enhance collaboration and growth."
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            My technical expertise and professional capabilities in software development and design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="pt-4 border-t border-primary/20">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1 bg-primary/10 text-xs rounded-full border border-primary/30 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
