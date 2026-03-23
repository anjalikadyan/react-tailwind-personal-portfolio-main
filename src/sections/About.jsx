import { Code2, Lightbulb, Rocket, Users, Database, Palette, Terminal } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Clean Code",
//     description: "Writing maintainable, scalable code that stands test of time.",
//   },
//   {
//     icon: Rocket,
//     title: "Performance",
//     description: "Optimizing for speed and delivering lightning-fast user experiences.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description: "Working closely with teams to bring ideas to life.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description: "Staying ahead with the latest technologies and best practices.",
//   },
// ];

const skills = {
  languages: ["C++", "Java", "JavaScript", "HTML", "CSS"],
  frameworks: ["ReactJS", "NodeJS", "Tailwind CSS"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "VS Code"],
  technical: ["Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOP)"],
  soft: ["Continuous Learning", "Consistency", "Adaptability", "Problem-Solving Skills", "Team Player"]
};

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-8 mb-16">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
                About Me
              </h1>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed text-justify md:text-center">
              <p>
                I am a results-driven Computer Science and Engineering student at Lovely Professional University, specializing in Full Stack Development and UI/UX Design. With a strong command of modern web technologies like React.js and Node.js, I bridge the gap between complex backend logic and intuitive frontend experiences.
              </p>
              <p>
                My academic background, combined with hands-on experience in building scalable applications, has equipped me with a comprehensive understanding of the software development lifecycle. I am passionate about solving real-world problems through innovative code, consistently maintaining high standards for clean architecture and user-centric design.
              </p>
              <p>
                Beyond technical development, I am committed to continuous learning and professional growth, frequently engaging with new technologies and refining my problem-solving skills through complex data structures and algorithms challenges.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-12 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold text-secondary-foreground">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full border border-primary/10 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full border border-primary/10 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full border border-primary/10 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Tools & Tech</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full border border-primary/10 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                  {skills.technical.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full border border-primary/10 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Professional Qualities</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-xs rounded-full border border-primary/30 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
