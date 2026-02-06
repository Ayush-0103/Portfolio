import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import {
  Code,
  Wrench,
  Database,
  Brain,
  Sparkles,
  Network,
  Box,
  Terminal,
  MessageSquare,
  Rocket,
  GitBranch,
  Github,
} from "lucide-react";
import { useState } from "react";

// Custom icon components for programming languages
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l3.272.75s.358 6.0652-6.7201 6.0652c-7.0792 0-8.4232-5.974-8.4232-9.03 0-3.056 1.522-9.3842 8.4232-9.3842 6.5581 0 6.7201 6.2262 6.7201 6.2262z"/>
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
);

const MySqlIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.063h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.723-1.01 1.086-1.583 1.086-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5z"/>
  </svg>
);

const GcpIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-8.825-6.893zM8.073 19.39a4.387 4.387 0 0 1-2.586-.893 4.615 4.615 0 0 1-.873-6.145 4.627 4.627 0 0 1 1.508-1.388l-.006.007c.067-.04.136-.077.206-.114.066-.036.132-.07.2-.103v.007a6.554 6.554 0 0 1 2.36-1.155 6.524 6.524 0 0 1-.036-3.032 6.57 6.57 0 0 1 1.694-3.057 6.602 6.602 0 0 1 9.262-.5 6.587 6.587 0 0 1 1.694 2.273 6.55 6.55 0 0 1 .603 2.817v.013h-.027c1.04 1.907.816 4.3-.642 5.927a6.05 6.05 0 0 1-3.063 1.84 5.854 5.854 0 0 1-1.82.195H8.073z"/>
  </svg>
);

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code size={20} />,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "Python", icon: <PythonIcon /> },
      { name: "C", icon: <CIcon /> },
      { name: "C++", icon: <CppIcon /> },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: <Wrench size={20} />,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "ReactJS", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Database size={20} />,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Git", icon: <GitBranch size={32} /> },
      { name: "GitHub", icon: <Github size={32} /> },
      { name: "MySQL", icon: <MySqlIcon /> },
      { name: "GCP", icon: <GcpIcon /> },
    ],
  },
  {
    title: "Technical Skills",
    icon: <Brain size={20} />,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "DSA", icon: <Network size={32} /> },
      { name: "OOP", icon: <Box size={32} /> },
      { name: "OS", icon: <Terminal size={32} /> },
      { name: "Gen AI", icon: <Sparkles size={32} /> },
      { name: "Prompting", icon: <MessageSquare size={32} /> },
    ],
  },
  {
    title: "Area of Interest",
    icon: <Sparkles size={20} />,
    gradient: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Software Dev", icon: <Rocket size={32} /> },
    ],
  },
];

function SkillIcon({
  skill,
  index,
  gradient,
}: {
  skill: Skill;
  index: number;
  gradient: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-3 transition-all duration-300",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
          "hover:border-white/20 hover:bg-white/10",
          isHovered && "scale-110 shadow-xl shadow-primary/20 -translate-y-1"
        )}
      >
        {/* Gradient Background on Hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
            gradient,
            isHovered && "opacity-20"
          )}
        />
        
        {/* Icon */}
        <div className="relative z-10 text-foreground/80 transition-all duration-300 group-hover:text-foreground group-hover:scale-105">
          {skill.icon}
        </div>
      </div>

      {/* Label */}
      <span className="text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {skill.name}
      </span>

      {/* Tooltip */}
      <div
        className={cn(
          "absolute -top-12 left-1/2 -translate-x-1/2 rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background shadow-xl transition-all duration-200 whitespace-nowrap",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        {skill.name}
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
      </div>
    </div>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card overflow-hidden transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        index === 4 && "sm:col-span-2 lg:col-span-1",
        isHovered && "border-primary/30 shadow-xl shadow-primary/10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Top Bar */}
      <div className={cn(
        "h-1 w-full bg-gradient-to-r transition-all duration-300",
        category.gradient,
        isHovered && "h-1.5"
      )} />

      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-all duration-300",
              category.gradient,
              isHovered && "scale-110 shadow-lg"
            )}
          >
            {category.icon}
          </div>
          <h3 className="font-semibold text-foreground">{category.title}</h3>
        </div>

        {/* Skills Grid */}
        <div className={cn(
          "grid gap-5",
          category.skills.length <= 2 ? "grid-cols-2 justify-items-center" : "grid-cols-3 sm:grid-cols-4"
        )}>
          {category.skills.map((skill, skillIndex) => (
            <SkillIcon
              key={skill.name}
              skill={skill}
              index={skillIndex}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="relative">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
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
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
