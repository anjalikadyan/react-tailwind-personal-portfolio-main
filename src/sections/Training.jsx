import { Calendar, Award, BookOpen, Download, X } from "lucide-react";
import { useState } from "react";
import cert5 from "../assets/certification/5.png";

const trainingPrograms = [
  {
    title: "Data Analytics Essentials Summer Training",
    institution: "Lovely Professional University",
    period: "Jun' 25 – July' 25",
    description: "Performed data cleaning, preprocessing, and transformation to prepare datasets for accurate analysis and visualization. Conducted exploratory data analysis (EDA) on retail sales data to uncover trends, customer behavior patterns, and business insights. Designed and developed interactive dashboards to support data-driven decision making and improve insight communication.",
    icon: BookOpen,
    skills: ["Data Analysis", "Data Visualization", "EDA", "Dashboard Design"],
    certificateLink: "https://lh3.googleusercontent.com/d/1Q_6UYlphJ1OC0OmboLIZ0FE3-f_PBKgE=s1000",
    image: cert5
  }
];

export const Training = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="training" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <h2
            className="text-4xl md:text-5xl 
          font-bold mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Training
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Comprehensive training programs that have enhanced my technical skills and professional expertise.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {trainingPrograms.map((program, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-3xl glow-border animate-fade-in group"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="relative w-full md:w-48 aspect-video rounded-2xl overflow-hidden shrink-0 border border-primary/20 cursor-pointer" onClick={() => setSelectedImage(program.certificateLink)}>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-primary font-medium">
                      {program.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {program.institution}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Certificate Button */}
                  <button
                    onClick={() => setSelectedImage(program.certificateLink)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-xl transition-all duration-300 border border-primary/30 hover:border-transparent font-medium"
                  >
                    <Award className="w-5 h-5" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          
          <button 
            className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-primary/20 text-white transition-all z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-5xl w-full h-full flex items-center justify-center z-[105]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Training Certificate Full View" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      )}
    </section>
  );
};
