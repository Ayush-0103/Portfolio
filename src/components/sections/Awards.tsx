import { Trophy, Calendar, Building, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function Awards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="awards" className="relative">
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
          <span className="gradient-text">Awards</span>
        </h2>

        <div className="mx-auto max-w-xl">
          <div
            className={cn(
              "glass-card relative overflow-hidden p-8 text-center transition-all duration-700",
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            )}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" />
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[60px]" />
            </div>

            {/* Decorative Stars */}
            <div className="absolute left-4 top-4 text-yellow-500/30">
              <Star size={16} fill="currentColor" />
            </div>
            <div className="absolute right-4 top-4 text-yellow-500/30">
              <Star size={16} fill="currentColor" />
            </div>
            <div className="absolute bottom-4 left-8 text-yellow-500/20">
              <Star size={12} fill="currentColor" />
            </div>
            <div className="absolute bottom-4 right-8 text-yellow-500/20">
              <Star size={12} fill="currentColor" />
            </div>

            {/* Trophy Icon */}
            <div className="mb-6 flex justify-center">
              <div 
                className={cn(
                  "flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-2xl transition-all duration-500",
                  isVisible && "animate-glow-pulse"
                )}
                style={{
                  boxShadow: '0 20px 50px -15px rgba(251, 191, 36, 0.4)',
                }}
              >
                <Trophy size={48} />
              </div>
            </div>

            {/* Award Title */}
            <h3 className="mb-3 text-3xl font-bold text-foreground">
              Top Achiever
            </h3>

            {/* Subtitle */}
            <p className="mb-6 text-xl font-medium bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              First Year B.Tech CSE (2024–2025)
            </p>

            {/* Details */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                <Building size={14} className="text-yellow-500/70" />
                Department of Computing Technologies, SRMIST
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                <Calendar size={14} className="text-yellow-500/70" />
                Jul 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
