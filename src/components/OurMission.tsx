import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lawyerIllustration from "@/assets/lawyer-illustration.png";

export default function OurMission() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Free, confidential case reviews. Serving all 35 states. No fees unless you win. Your Path To Justice Starts Here. C2P connects victims with the legal support they need.
              </p>
              <p>
                We provide tailored connections, empower client voices, and transform legal challenges into clear paths toward resolution.
              </p>
              <p>
                Free, confidential case reviews. Serving all 35 states. No fees unless you win. Your Path To Justice Starts Here. C2P connects victims with the legal support they need. We provide tailored connections, empower client voices.
              </p>
            </div>
            <Button className="btn-golden mt-8">
              About Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Illustration with decorative elements */}
          <div className="relative">
            {/* Yellow decorative rectangles */}
            <div className="absolute top-0 right-0 w-8 h-32 bg-accent rounded-full" />
            <div className="absolute top-16 right-12 w-8 h-24 bg-accent rounded-full" />
            <div className="absolute bottom-0 right-8 w-8 h-40 bg-accent rounded-full" />
            <div className="absolute bottom-20 right-20 w-8 h-28 bg-accent rounded-full" />
            
            <img 
              src={lawyerIllustration}
              alt="Legal professional illustration"
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
