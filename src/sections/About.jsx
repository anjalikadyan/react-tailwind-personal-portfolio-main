import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug' 23 - Present",
    cgpa: "7.5",
    type: "university"
  },
  {
    degree: "Intermediate (PCM)",
    institution: "Indraprastha Public School",
    location: "Morna, UP",
    period: "Apr' 21 – Mar' 22",
    type: "school"
  },
  {
    degree: "Matriculation",
    institution: "Indraprastha Public School",
    location: "Morna, UP",
    period: "Apr' 20 – Mar' 21",
    type: "school"
  }
];

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
                I am a passionate and results-driven Computer Science and Engineering student at Lovely Professional University, specializing in Full Stack Development. With strong expertise in modern web technologies such as React.js and Node.js, I excel at building seamless connections between complex backend systems and intuitive, user-friendly frontend interfaces.
              </p>

              <p>
                My academic foundation, combined with hands-on experience in developing scalable and efficient web applications, has given me a solid understanding of the complete software development lifecycle. I focus on writing clean, maintainable code while designing solutions that are both performance-oriented and user-centric.
              </p>

              <p>
                Beyond technical skills, I am deeply committed to continuous learning and self-improvement. I actively explore emerging technologies and regularly strengthen my problem-solving abilities through Data Structures and Algorithms, enabling me to tackle complex real-world challenges with confidence.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-12 animate-fade-in animation-delay-300">
            <h3 className="text-2xl font-semibold text-secondary-foreground">Education</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    {edu.type === 'university' && (
                      <span className="px-2 py-1 bg-primary/20 text-[10px] rounded-full text-primary font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-primary mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>

                  <h4 className="font-semibold text-white mb-2 leading-tight">
                    {edu.degree}
                  </h4>

                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Result: ${edu.percentage}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
