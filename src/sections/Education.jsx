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
    percentage: "65%",
    type: "school"
  },
  {
    degree: "Matriculation",
    institution: "Indraprastha Public School",
    location: "Morna, UP",
    period: "Apr' 20 – Mar' 21",
    percentage: "74%",
    type: "school"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            My academic foundation that has shaped my technical skills and professional growth in computer science and engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                {edu.type === 'university' && (
                  <span className="px-2 py-1 bg-primary/20 text-xs rounded-full text-primary">
                    Current
                  </span>
                )}
              </div>

              {/* Period */}
              <div className="flex items-center gap-2 text-sm text-primary mb-3">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>

              {/* Degree */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-muted-foreground mb-3">
                {edu.institution}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{edu.location}</span>
              </div>

              {/* Performance */}
              <div className="pt-4 border-t border-primary/20">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
