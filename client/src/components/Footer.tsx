import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { about } = resumeData;
  
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">{about.name}</h3>
            <p className="text-white/60 mt-1">{about.title}</p>
          </div>
          
          <div className="flex space-x-6">
            {about.email && (
              <a 
                href={`mailto:${about.email}`} 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
            
            {about.github && (
              <a 
                href={about.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            
            {about.linkedin && (
              <a 
                href={about.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 text-center md:text-left">
          <p className="text-white/60 text-sm">
            © {currentYear} {about.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
