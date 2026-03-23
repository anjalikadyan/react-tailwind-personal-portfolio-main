import { Award, Calendar, ExternalLink } from "lucide-react";
import cert1 from "../assets/certification/1.png";
import cert2 from "../assets/certification/2.png";
import cert3 from "../assets/certification/3.png";
import cert4 from "../assets/certification/4.png";

const certificates = [
  {
    title: "ChatGPT Made Easy: AI Essentials for Beginners",
    issuer: "Udemy",
    date: "Aug' 25",
    credential: "Certificate",
    link: "https://drive.google.com/file/d/1wmeT0ksdrWDxW8ocmIgI72IVgEfxgH8a/view?usp=sharing",
    image: cert1
  },
  {
    title: "Indexing Design in MongoDB",
    issuer: "MongoDB University",
    date: "Jun' 25",
    credential: "Certificate",
    link: "https://drive.google.com/file/d/1rC1X5HopXvSN5FJTMAaOvSt-oUi52HzL/view?usp=sharing",
    
    image: cert2
  },
  {
    title: "Java (Basics)",
    issuer: "Iamneo",
    date: "May' 25",
    credential: "Certificate",
    link: "https://drive.google.com/file/d/1vBKP5-MOMRY-uNepainozvegzQpKYkaT/view?usp=sharing",

    image: cert3
  },
  {
    title: "DSA with C",
    issuer: "CSE Pathshala",
    date: "Mar' 24",
    credential: "Certificate",
    link: "https://drive.google.com/file/d/1AqEg-vRmtaB4KrNL6MhqglKHthZ2fw_D/view?usp=sharing",

    image: cert4
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certificates
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            Professional certifications and achievements that validate my technical expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-full sm:w-24 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 border border-primary/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-primary font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-muted-foreground mb-3">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-primary/20">
                      {cert.credential}
                    </span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl border border-primary/30 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">DSA Problem Solving</h4>
              </div>
              <p className="text-muted-foreground">
                Solved 130+ DSA Problems on Geeks for Geeks
              </p>
            </div>

            <div className="glass p-6 rounded-2xl border border-primary/30 animate-fade-in" style={{ animationDelay: '750ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">LeetCode Excellence</h4>
              </div>
              <p className="text-muted-foreground">
                150+ LeetCode problems solved, improving coding fundamentals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
