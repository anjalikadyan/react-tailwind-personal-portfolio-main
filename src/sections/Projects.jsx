import { ArrowUpRight, Github, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// Import your custom project images (these will be used as fallbacks if repo doesn't have an image)
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";

const fallbackImages = [project1, project2, project3, project4];

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setIsLoading(true);
        // Replace 'anjalikadyan' with your actual GitHub username if different
        const response = await fetch("https://api.github.com/users/anjalikadyan/repos?sort=updated&per_page=12");
        if (!response.ok) throw new Error("Failed to fetch repositories");
        
        const repos = await response.json();
        
        // Transform GitHub repo data to match our project structure
        const transformedProjects = repos
          .filter(repo => !repo.fork) // Exclude forks
          .map((repo) => ({
            title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
            description: repo.description || "A project built with passion and modern technologies. Check out the code to see the implementation details.",
            image: `https://opengraph.githubassets.com/1/anjalikadyan/${repo.name}`, // Dynamic OG image for repo
            tags: repo.topics && repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : ["GitHub Repo"]),
            link: repo.homepage || repo.html_url,
            github: repo.html_url,
            period: new Date(repo.created_at).toLocaleDateString("en-US", { month: "short", year: "2-digit" }) + " – " + 
                    (repo.pushed_at ? new Date(repo.pushed_at).toLocaleDateString("en-US", { month: "short", year: "2-digit" }) : "Present")
          }));

        setProjects(transformedProjects);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError("Unable to load projects from GitHub.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A dynamic showcase of my latest work directly from my GitHub, ranging from full-stack applications to specialized tools.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Fetching latest repositories...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-muted-foreground animate-fade-in">
            <p>{error}</p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${(idx % 4 + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = fallbackImages[idx % fallbackImages.length]; // Use a fallback if OG image fails
                    }}
                  />
                  <div
                    className="absolute inset-0 
                  bg-linear-to-t from-card via-card/50
                  to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2 line-clamp-1 capitalize">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {project.period}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 transition-all shrink-0"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full bg-surface text-[10px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/anjalikadyan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All on GitHub
              <Github className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
