import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Servify",
      role: "Vice President - Data Engineering, AI & Analytics",
      period: "Jan 2021 - Present",
      achievements: [
        "Architected Servify's enterprise Data Warehouse consolidating siloed data assets into centralized platform with 99% data accuracy",
        "Designed and operationalized global Databricks Lakehouse on AWS across 70 OEMs in 32 countries, achieving 3× analytics performance improvement",
        "Led deployment of AI/ML fraud management system generating $5M+ yearly savings with real-time claims detection",
        "Developed multimodal AI platform transforming CV-based POC into production video diagnostics, boosting aftermarket sales by $3M+ annually",
        "Architected Databricks GENIE (NLP-to-SQL assistant) accelerating operational efficiency by 90% and enabling self-service analytics",
      ],
    },
    {
      company: "AirAsia Berhad",
      role: "Manager, Data & Analytics",
      period: "Mar 2020 - Dec 2020",
      achievements: [
        "Led enterprise analytics modernization, deploying Tableau BI dashboards for C-level executives and operational teams",
        "Built GCP-powered engineering data platform integrating operational, crew, and flight data for cross-functional analytics",
        "Implemented ML pipelines for flight tracking, fuel optimization, and crew planning with real-time insights",
        "Designed carbon footprint dashboards supporting enterprise-wide sustainability analytics adoption",
      ],
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Delivery Head, Data & Insights",
      period: "Oct 2004 - Feb 2020",
      achievements: [
        "Scaled and led Global Capability Center (GCC) with 150+ member team for GE Healthcare in Ahmedabad",
        "Built and coached cross-functional teams across US, UK, and India fostering innovation and operational excellence",
        "Designed enterprise GL-to-Subledger financial data product integrating SAP and PeopleSoft ERP systems",
        "Implemented enterprise data solutions for Order Management, Progress Billing, and Accounts Receivable with Oracle R12",
        "Led BI migration projects ensuring data integrity and compliance during Oracle system modernizations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" data-testid="heading-experience">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Two decades of progressive leadership in enterprise data strategy
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                data-testid={`card-experience-${index}`}
              >
                <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                  <Card className="p-6 hover-elevate">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1" data-testid={`text-role-${index}`}>
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium" data-testid={`text-company-${index}`}>
                          {exp.company}
                        </p>
                        <Badge variant="secondary" className="mt-2" data-testid={`text-period-${index}`}>
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          data-testid={`text-achievement-${index}-${achIndex}`}
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
