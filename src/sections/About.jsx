import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

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
        </div>
      </div>
    </section>
  );
};
