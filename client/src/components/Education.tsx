import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Education() {
  const { education } = resumeData;
  
  return (
    <section id="education" className="section-container bg-secondary/50">
      <div className="animate-on-scroll">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{edu.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                    
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold flex items-center mb-2">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Achievements
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.courses.map((course, i) => (
                          <Badge key={i} variant="outline">{course}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
