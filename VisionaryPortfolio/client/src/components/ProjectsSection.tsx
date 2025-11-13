import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import analyticsImage from "@assets/generated_images/Analytics_dashboard_project_a37d4c9e.png";
import governanceImage from "@assets/generated_images/Data_governance_framework_93552278.png";
import cloudImage from "@assets/generated_images/Cloud_migration_project_6a5b89a8.png";
import complianceImage from "@assets/generated_images/Compliance_framework_project_6ac01a2a.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise Data Warehouse Modernization",
      description: "Architected Servify's inaugural enterprise Data Warehouse by consolidating siloed data assets into a centralized platform with GDPR-aligned governance and SLI/SLO/SLA standards.",
      image: analyticsImage,
      tags: ["Data Warehouse", "GDPR", "Data Governance", "SLA Standards"],
      impact: "99% data accuracy",
    },
    {
      title: "Global Databricks Lakehouse on AWS",
      description: "Designed and operationalized global Databricks Lakehouse integrating data lake, warehouse, and analytics capabilities across 70 OEMs in 32 countries.",
      image: governanceImage,
      tags: ["Databricks", "AWS", "Lakehouse", "Global Scale"],
      impact: "3× performance improvement",
    },
    {
      title: "Real-Time AI/ML Fraud Management",
      description: "Led design and deployment of fraud management system with real-time claims detection and entity-based transaction scoring, materially lowering false-positive rates worldwide.",
      image: cloudImage,
      tags: ["Machine Learning", "Fraud Detection", "Real-Time", "Risk Management"],
      impact: "$5M+ yearly savings",
    },
    {
      title: "Multimodal AI Video Diagnostics Platform",
      description: "Developed and scaled multimodal AI system transforming CV-based POC into production-ready video diagnostic platform, integrating Gen AI workflows to enhance fraud detection.",
      image: complianceImage,
      tags: ["Gen AI", "Computer Vision", "Multimodal AI", "Production ML"],
      impact: "$3M+ annual revenue",
    },
    {
      title: "Databricks GENIE (Agentic AI Platform)",
      description: "Architected and launched Databricks GENIE NLP-to-SQL assistant built on deep research in data systems and applied AI, enabling self-service analytics across global business units.",
      image: analyticsImage,
      tags: ["Agentic AI", "NLP", "Self-Service", "Databricks"],
      impact: "90% efficiency gain",
    },
    {
      title: "Enterprise BI Modernization with AI",
      description: "Directed enterprise-wide modernization of 200+ Tableau dashboards to AI-powered BI systems, advancing data literacy and scaling self-service analytics within a Data-First culture.",
      image: governanceImage,
      tags: ["Business Intelligence", "Tableau", "AI-Powered", "Data Culture"],
      impact: "75% faster time-to-market",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="heading-projects">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transformative data initiatives delivering measurable business impact
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary" data-testid={`text-impact-${index}`}>
                    {project.impact}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => console.log(`View details for project ${index}`)}
                    data-testid={`button-view-details-${index}`}
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
