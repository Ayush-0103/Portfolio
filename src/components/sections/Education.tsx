import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const educationData = [
  {
    institution: "SRM IST - Kattankulathur",
    degree: "B.Tech Computer Science and Engineering",
    location: "Chennai",
    year: "2024 - 2028",
    score: "CGPA: 9.81",
    current: true,
  },
  {
    institution: "Nutan Vidya Mandir Sr. Sec School",
    degree: "Class XII (CBSE)",
    location: "New Delhi",
    year: "2024",
    score: "89%",
    current: false,
  },
  {
    institution: "Nutan Vidya Mandir",
    degree: "Class X (CBSE)",
    location: "New Delhi",
    year: "2022",
    score: "92.6%",
    current: false,
  },
];

function EducationCard({
  item,
  index,
  isLast,
}: {
  item: (typeof educationData)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-500",
            item.current
              ? "border-primary bg-primary/20 text-primary shadow-lg shadow-primary/20"
              : "border-white/20 bg-white/5 text-muted-foreground",
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          )}
        >
          <GraduationCap size={24} />
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-0.5 flex-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </div>

      {/* Card Content */}
      <div
        className={cn(
          "glass-card card-hover mb-10 flex-1 p-6 transition-all duration-500",
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-8 opacity-0",
          item.current && "border-primary/30"
        )}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Gradient accent for current */}
        {item.current && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />
        )}

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.institution}
              </h3>
              <p className="text-primary">{item.degree}</p>
            </div>
            {item.current && (
              <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-primary shadow-sm">
                Current
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
              <MapPin size={14} className="text-primary/70" />
              {item.location}
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
              <Calendar size={14} className="text-primary/70" />
              {item.year}
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
              <Award size={14} className="text-primary/70" />
              {item.score}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
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
          <span className="gradient-text">Education</span>
        </h2>

        <div className="mx-auto max-w-2xl">
          {educationData.map((item, index) => (
            <EducationCard
              key={item.institution}
              item={item}
              index={index}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
