import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Enterprise Data Strategy Leader. All rights reserved.
          </p>

          <div className="flex items-center gap-2">śś
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://www.linkedin.com/in/ghanshyam-varindani", "_blank")}
              data-testid="button-footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"ś
              size="icon"
              onClick={() => window.location.href = "mailto:ghanshyamdasvarindani@gmail.com"}
              data-testid="button-footer-email"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              data-testid="button-back-to-top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
