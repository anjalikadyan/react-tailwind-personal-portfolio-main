import { Award, Calendar, ExternalLink, Loader2, X, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// Static certificates as a baseline with direct viewing links
export const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    const fetchDynamicCertificates = async () => {
      try {
        setIsLoading(true);
        const backendResponse = await fetch("./certificates.json");
        if (backendResponse.ok) {
          const data = await backendResponse.json();
          const formatted = data.map(file => ({
            title: file.name,
            file: `https://drive.google.com/file/d/${file.id}/preview`,
            type: file.mimeType === "application/pdf" ? "pdf" : "image"
          }));
          setCertificates(formatted);
        }
      } catch (err) {
        console.error("Error fetching certificates:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDynamicCertificates();
  }, []);
  // 2. Fallback: Node.js backend (Google Drive sync)
  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certificates
          </h2>
          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            Click on any certificate to view it in full detail directly on the website.
          </p>
        </div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Updating certificates...</p>
          </div>
        ) : (
          /* Certificates Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="glass rounded-xl border border-primary/30 p-2 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                onClick={() => setSelectedImage(cert)}
              >
                <div className="relative h-32 overflow-hidden">
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {cert.type === "pdf" ? (
                      <div className="flex items-center justify-center w-full h-full bg-primary/5">
                        <span className="text-xs">📄 PDF</span>
                      </div>
                    ) : (
                      <img
                        src={cert.file}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    <div className="hidden absolute inset-0 items-center justify-center bg-primary/5">
                      <Award className="w-12 h-12 text-primary/40 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-primary text-white shadow-xl">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2 text-center capitalize">
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 animate-fade-in"
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
              {selectedImage?.type === "pdf" ? (
                <iframe
                  src={selectedImage.file}
                  className="max-w-full max-h-full w-full h-[80vh] rounded-xl"
                  title="Certificate PDF"
                />
              ) : (
                <img
                  src={selectedImage.file}
                  alt="Certificate Full View"
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        )}
        {/* Achievements Section */}
        <div className="mt-24">
        <h3 className="text-sm font-medium text-center line-clamp-2">Additional Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl border border-primary/30 animate-fade-in hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/10" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">DSA Problem Solving</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Solved 130+ DSA Problems on Geeks for Geeks, focusing on algorithmic efficiency and data structures.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl border border-primary/30 animate-fade-in hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/10" style={{ animationDelay: '750ms' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">LeetCode Excellence</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                150+ LeetCode problems solved, improving coding fundamentals and problem-solving speed.
              </p>
            </div>
          </div>
        </div>
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://drive.google.com/drive/folders/1T_R51WkHR2FxV9okGMpRXBd6q9xNx_ez?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Certificates
              <ExternalLink className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
