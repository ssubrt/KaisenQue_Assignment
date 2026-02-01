import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import skylineHandshake from "@/assets/skyline-handshake.jpg";

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${skylineHandshake})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-primary/60" />
      
      <div className="relative container-custom">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Want To Know More?
          </h2>
          <Button className="btn-golden">
            Reach out to us
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
