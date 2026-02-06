import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  ExternalLink,
  Download,
  Send,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const contactInfo = {
  email: "saxenaayush0103@gmail.com",
  phone: "9315596499",
  address: "D-714, Maple Apartments, Zirakpur, Chandigarh, Punjab, India",
  linkedin: "https://www.linkedin.com/in/ayush-saxena-ab36a432a/",
  github: "https://github.com/Ayush-0103",
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 rounded-lg p-2 text-muted-foreground transition-all duration-300 hover:bg-white/10 hover:text-foreground hover:scale-110"
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
    </button>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  displayValue,
  gradient,
  copyable = false,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  displayValue?: string;
  gradient: string;
  copyable?: boolean;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card group flex items-center gap-4 p-5 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        isHovered && "border-primary/30 shadow-lg shadow-primary/10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-all duration-300",
          gradient,
          isHovered && "scale-110 shadow-lg"
        )}
      >
        <Icon size={22} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-foreground">
          {displayValue || value}
        </p>
      </div>
      {copyable && <CopyButton text={value} label={label} />}
    </div>
  );
}

export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
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
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="mx-auto max-w-3xl">
          {/* Contact Cards Grid */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <ContactCard
              icon={Mail}
              label="Email"
              value={contactInfo.email}
              gradient="from-primary to-accent"
              copyable
              delay={0}
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={contactInfo.phone}
              displayValue={`+91 ${contactInfo.phone}`}
              gradient="from-green-500 to-emerald-500"
              copyable
              delay={100}
            />
          </div>

          {/* Address */}
          <ContactCard
            icon={MapPin}
            label="Address"
            value={contactInfo.address}
            gradient="from-orange-500 to-red-500"
            delay={200}
          />

          {/* Action Buttons */}
          <div 
            className={cn(
              "mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            {/* Resume Button */}
            <Button
              asChild
              size="lg"
              className="btn-glow group relative overflow-hidden bg-gradient-to-r from-primary to-accent px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              <a 
                href="https://drive.google.com/file/d/1moF9h-qdz7LiQMlB_Qe3QJOC_G7aYXIZ/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-2 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              asChild
              size="lg"
              className="btn-glow bg-[#0077B5] px-6 py-6 text-base transition-all duration-300 hover:scale-105 hover:bg-[#0077B5]/90 hover:shadow-xl hover:shadow-[#0077B5]/30"
            >
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
                <ExternalLink size={14} className="ml-2 opacity-70" />
              </a>
            </Button>

            {/* GitHub */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-glow border-white/20 px-6 py-6 text-base transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10 hover:shadow-xl"
            >
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" />
                GitHub
                <ExternalLink size={14} className="ml-2 opacity-70" />
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayush Saxena. Built with passion and code.
          </p>
        </footer>
      </div>
    </section>
  );
}
