import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import processReview from "@/assets/process-review.jpg";
import processAttorney from "@/assets/process-attorney.jpg";
import processClaim from "@/assets/process-claim.jpg";

const steps = [
  {
    number: "01",
    title: "Start Here",
    subtitle: "Quick and easy",
    images: [processReview, processAttorney],
  },
  {
    number: "02",
    title: "Expert Attorney",
    subtitle: "A specialist in your type of claim",
    images: [processAttorney, processReview],
  },
  {
    number: "03",
    title: "File Your Claim",
    subtitle: "You only pay if you win",
    images: [processClaim, processReview],
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Get your free, no-obligation case review today. We serve all states, and you pay only if you win.
            </p>
          </div>
          <Button className="btn-golden mt-6 lg:mt-0">
            Start My Free Case Review
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Process Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="grid grid-cols-3 gap-3 h-48 lg:h-56 mb-4">
                {/* Number Card */}
                <div className={`rounded-xl flex flex-col justify-center px-6 ${
                  index === 2 ? "col-span-2 order-last bg-accent" : "bg-primary"
                }`}>
                  <span className={`text-4xl font-bold mb-2 ${
                    index === 2 ? "text-accent-foreground" : "text-accent"
                  }`}>
                    {step.number}
                  </span>
                  <h3 className={`font-semibold text-lg ${
                    index === 2 ? "text-accent-foreground" : "text-primary-foreground"
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    index === 2 ? "text-accent-foreground/80" : "text-primary-foreground/70"
                  }`}>
                    {step.subtitle}
                  </p>
                </div>
                
                {/* Image Cards */}
                <div className={`rounded-xl overflow-hidden ${index === 2 ? "col-span-1 order-first" : "col-span-2"}`}>
                  <img 
                    src={step.images[0]} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
