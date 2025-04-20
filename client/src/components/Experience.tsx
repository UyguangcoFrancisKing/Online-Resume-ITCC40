import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Experience() {
  const { experience } = resumeData;
  
  return (
    <section id="experience" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="self-start md:self-auto flex items-center space-x-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center text-muted-foreground space-y-1 md:space-y-0 md:space-x-6 mt-2">
                    <div className="text-sm font-medium">{exp.company}</div>
                    {exp.location && (
                      <div className="flex items-center text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.description && (
                    <p className="mb-4 text-sm">{exp.description}</p>
                  )}
                  
                  {exp.responsibilities && (
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-sm">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.achievements && (
                    <div className="mt-4 space-y-1">
                      <h4 className="font-medium text-sm mb-2">Achievements:</h4>
                      <ul className="space-y-1 text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
