import { useState, useRef } from "react";
import { ExternalLink, Code, Layers, QrCode } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projectsData = [
  {
    id: 1,
    title: "EasyOps Studio",
    shortDescription: "Business support and digital services platform",
    fullDescription:
      "EasyOps Studio is a comprehensive business support and digital services platform designed to help startups simplify their creative and operational workload. It acts as an extended support team, providing various services to streamline business operations and enhance productivity.",
    technologies: ["HTML", "TypeScript", "Tailwind CSS"],
    icon: Layers,
    gradient: "from-violet-500 to-purple-600",
    liveUrl: "https://easy-ops-studio.vercel.app/",
  },
  {
    id: 2,
    title: "CalCount",
    shortDescription: "Lightweight calorie and nutrition estimation app",
    fullDescription:
      "CalCount is a lightweight calorie and nutrition estimation application focused on simplicity, speed, and clarity. Built with Agentic AI capabilities, it eliminates the need for manual tracking while providing accurate nutritional insights for health-conscious users.",
    technologies: ["N8N", "HTML", "Tailwind CSS", "Agentic AI"],
    icon: Code,
    gradient: "from-emerald-500 to-teal-600",
    liveUrl: "https://cal-count-rho.vercel.app/",
  },
  {
    id: 3,
    title: "Event Attendance System",
    shortDescription: "QR code-based registration and attendance tracking",
    fullDescription:
      "A modern event attendance system that utilizes QR code-based registration for seamless check-ins. Features real-time analytics dashboard for event organizers, providing insights into attendance patterns and participant engagement.",
    technologies: ["TypeScript", "JavaScript", "CSS"],
    icon: QrCode,
    gradient: "from-blue-500 to-cyan-600",
    liveUrl: "https://event-registration-system-4ejh.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: (typeof projectsData)[0];
  index: number;
  onSelect: () => void;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "group cursor-pointer transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        perspective: '1000px',
      }}
    >
      <div
        ref={cardRef}
        className={cn(
          "glass-card h-full overflow-hidden transition-all duration-300",
          "hover:border-primary/30",
          isHovered && "shadow-2xl shadow-primary/20"
        )}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateY(-8px) scale(1.02)' : ''}`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease-out',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onSelect}
      >
        {/* Gradient Top Bar */}
        <div className={cn("h-1.5 w-full bg-gradient-to-r transition-all duration-300", project.gradient, isHovered && "h-2")} />

        {/* Shine Effect */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${(tilt.y + 5) * 10}% ${(tilt.x + 5) * 10}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />

        <div className="relative p-6">
          {/* Icon */}
          <div
            className={cn(
              "mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300",
              project.gradient,
              isHovered && "scale-110 shadow-lg"
            )}
            style={{ 
              boxShadow: isHovered ? `0 10px 30px -10px var(--tw-shadow-color)` : undefined,
              ['--tw-shadow-color' as string]: 'rgba(139, 92, 246, 0.5)',
            }}
          >
            <Icon size={28} />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge
                key={tech}
                variant="secondary"
                className={cn(
                  "bg-secondary/50 text-xs font-normal transition-all duration-300",
                  isHovered && "bg-secondary/80 scale-105"
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* View Details Slide-in */}
          <div 
            className={cn(
              "mt-5 flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300",
              isHovered ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
          >
            <span>View Details</span>
            <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);

  return (
    <section id="projects" className="relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="section-container">
        {/* Section Divider */}
        <div className="section-divider mb-16" />

        <h2
          ref={ref}
          className={cn(
            "section-title transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="glass-card border-white/10 sm:max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                      selectedProject.gradient
                    )}
                  >
                    <selectedProject.icon size={28} />
                  </div>
                  <div>
                    <DialogTitle className="text-xl">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {selectedProject.fullDescription}
              </DialogDescription>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Live Project Button */}
              <div className="pt-2">
                <Button
                  asChild
                  className="btn-glow w-full bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                >
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Live Project
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
