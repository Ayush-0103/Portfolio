import { Award, Calendar, Building, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const certificationsData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    organization: "Oracle",
    date: "Nov 2025",
    badge: "Professional",
    gradient: "from-red-500 to-orange-500",
    icon: "🏆",
  },
  {
    title: "Evaluation and Light Customization of Large Language Models",
    organization: "NVIDIA",
    date: "May 2025",
    badge: "Completion",
    gradient: "from-green-500 to-emerald-500",
    icon: "🎯",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    organization: "Oracle",
    date: "Dec 2025",
    badge: "Professional",
    gradient: "from-red-500 to-orange-500",
    icon: "🏆",
  },
  {
    title: "Introduction to Generative AI",
    organization: "Simplilearn",
    date: "Jan 2025",
    badge: "Completion",
    gradient: "from-blue-500 to-cyan-500",
    icon: "📜",
  },
];

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certificationsData)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card group overflow-hidden transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        isHovered && "border-primary/30 shadow-xl shadow-primary/10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Bar */}
      <div className={cn(
        "h-1 w-full bg-gradient-to-r transition-all duration-300",
        cert.gradient,
        isHovered && "h-1.5"
      )} />

      {/* Shine effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500",
          isHovered ? "translate-x-full" : "-translate-x-full"
        )}
      />

      <div className="relative p-6">
        {/* Top Row */}
        <div className="mb-4 flex items-start justify-between">
          {/* Icon */}
          <span className={cn(
            "text-3xl transition-transform duration-300",
            isHovered && "scale-110"
          )}>
            {cert.icon}
          </span>

          {/* Badge */}
          <Badge
            className={cn(
              "bg-gradient-to-r text-white shadow-lg transition-all duration-300",
              cert.gradient,
              isHovered && "scale-105"
            )}
          >
            {cert.badge}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
          {cert.title}
        </h3>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
            <Building size={14} className="text-primary/70" />
            {cert.organization}
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
            <Calendar size={14} className="text-primary/70" />
            {cert.date}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
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
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificationsData.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
