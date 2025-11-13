import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, TrendingUp, Cloud, Users, Lock } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Data Governance",
      skills: ["Enterprise Frameworks", "Data Quality Management", "Metadata Management", "Policy Development", "Stewardship Programs"],
    },
    {
      icon: Lock,
      title: "Privacy & Compliance",
      skills: ["GDPR & CCPA", "Regulatory Alignment", "Risk Management", "Audit & Controls", "Privacy by Design"],
    },
    {
      icon: Database,
      title: "Data Strategy",
      skills: ["Enterprise Architecture", "Data as a Product", "Strategic Roadmaps", "Value Realization", "Business Alignment"],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Modernization",
      skills: ["Platform Transformation", "Advanced Analytics", "Self-Service BI", "ML/AI Integration", "Legacy Migration"],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["Cloud Migration", "Multi-Cloud Strategy", "Data Lakes & Warehouses", "API Development", "Scalable Solutions"],
    },
    {
      icon: Users,
      title: "Leadership & Culture",
      skills: ["Change Management", "Team Building", "Stakeholder Engagement", "Data Literacy", "Executive Communication"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="heading-skills">
          Core Competencies
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across the data ecosystem, from strategy to execution
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-skill-title-${index}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
