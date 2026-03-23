
import {
  ChevronDown,
  Download
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import cvFile from "../assets/AnjaliCV-new.pdf";
import profilePhoto from "../assets/add.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer 
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hi, I'm <span className="text-primary glow-text">Anjali Kadyan</span>
                <br />
                Full Stack Developer.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                B.Tech CSE student at Lovely Professional University with a passion for building modern web applications and solving complex problems through code.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <AnimatedBorderButton href={cvFile} download="Anjali_Kadyan_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profilePhoto}
                  alt="Anjali Kadyan"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                
              </div>
            </div>
          </div>
        </div>

        </div>
    </section>
  );
};
