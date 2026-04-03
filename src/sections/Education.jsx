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

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-8 mb-16">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
                Education
              </h1>
            </div>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              My academic journey and qualifications that have shaped my knowledge and perspective.
            </p>
          </div>

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
    </section>
  );
};
