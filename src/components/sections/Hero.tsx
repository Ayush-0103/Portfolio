import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useEffect, useState } from "react";

// Floating particle component
function Particle({ delay, duration, size, left }: { delay: number; duration: number; size: number; left: number }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-10%',
        animation: `particle-float ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// Generate particles
const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  delay: Math.random() * 20,
  duration: 15 + Math.random() * 10,
  size: 4 + Math.random() * 8,
  left: Math.random() * 100,
}));

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const typedText = useTypingEffect({
    texts: [
      "Computer Science Undergraduate",
      "Software Developer",
      "Problem Solver",
      "Tech Enthusiast",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax values
  const parallaxY = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[100px] animate-orb"
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px] animate-orb-reverse"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />
        <div 
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] animate-orb"
          style={{ animationDelay: '-5s' }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div 
        className="section-container text-center"
        style={{ 
          transform: `translateY(${parallaxY}px)`,
          opacity: opacityFade,
        }}
      >
        <div className="mx-auto max-w-4xl">
          {/* Greeting */}
          <p 
            className={`mb-6 text-lg text-muted-foreground transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1 
            className={`mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 delay-100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="gradient-text">Ayush Saxena</span>
          </h1>

          {/* Typing Effect */}
          <div 
            className={`mb-10 h-12 transition-all duration-700 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="text-xl font-medium text-primary sm:text-2xl md:text-3xl">
              {typedText}
              <span className="ml-1 inline-block w-0.5 h-8 bg-primary animate-pulse" />
            </span>
          </div>

          {/* Summary */}
          <p 
            className={`mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg transition-all duration-700 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            I am a Computer Science undergraduate with a strong foundation in Java, 
            Data Structures and Algorithms, and core computer science principles. 
            I enjoy building clean, efficient, and scalable solutions, with hands-on 
            experience across multiple programming languages and modern development tools.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-[400ms] ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="btn-glow group relative overflow-hidden bg-gradient-to-r from-primary to-accent px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              onClick={() => scrollToSection("projects")}
            >
              <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-glow border-white/20 px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:shadow-xl hover:shadow-primary/20"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={() => scrollToSection("education")}
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to education"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
