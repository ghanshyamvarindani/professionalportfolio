import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import headshotImage from "@assets/generated_images/Professional_executive_headshot_b01d3004.jpg";

export default function AboutSection() {
  const stats = [
    { value: "21+", label: "Years Experience" },
    { value: "Global", label: "Organizations" },
    { value: "Enterprise", label: "Scale" },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-about">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="flex justify-center">
            <Avatar className="h-64 w-64 md:h-80 md:w-80">
              <AvatarImage src={headshotImage} alt="Professional headshot" />
              <AvatarFallback className="text-4xl">DS</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-intro">
              Visionary enterprise leader with 21 years of expertise architecting and executing Enterprise Data Strategy across global organizations. Renowned for advancing Data Governance, Data Privacy and Compliance standards, delivering robust frameworks that ensure operational resilience and regulatory alignment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven track record in cultivating data culture and championing data modernization initiatives that transform legacy systems into unified analytics platforms. Pioneer of Data as a Product approaches, enabling seamless integration of data lakes, warehouses, and analytics to drive actionable insights and business acceleration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Adept at productionizing advanced Gen AI solutions—from proof-of-concept to deployment—while leading real-time AI/ML fraud management programs that mitigate risk and enhance service reliability. Trusted advisor to C-level stakeholders, with a history of steering large-scale transformations, establishing high-performing teams, and delivering measurable impact across Fortune 500s, aviation and multinational OEMs.
            </p>
            <Card className="p-6 bg-card">
              <p className="text-xl font-semibold italic text-card-foreground">
                "Transforming data from a byproduct into a strategic asset that drives business value and innovation."
              </p>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-stat-${index}`}>
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
