import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { resumeData } from "@/data/resumeData";

export default function Skills() {
  const { skills } = resumeData;
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <section id="skills" className="section-container bg-secondary/50">
      <div id="skills-section" className="animate-on-scroll">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <Tabs defaultValue={categories[0]}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category, index) => (
              <TabsTrigger key={index} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category, tabIndex) => (
            <TabsContent key={tabIndex} value={category} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <Card className="card-hover">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{skill.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Proficiency</span>
                                <span>{skill.level}%</span>
                              </div>
                              <div className="skill-bar">
                                <div 
                                  className="skill-progress" 
                                  style={{ width: isInView ? `${skill.level}%` : "0%" }}
                                ></div>
                              </div>
                            </div>
                            
                            {skill.keywords && skill.keywords.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {skill.keywords.map((keyword, i) => (
                                  <Badge key={i} variant="secondary">{keyword}</Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
