import { ArrowRight, FileCheck, MapPin, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroLandscape from "@/assets/hero-landscape.jpg";

const stats = [
  { icon: FileCheck, label: "Free case Review" },
  { icon: MapPin, label: "Serving Nationwide" },
  { icon: Scale, label: "No Win, No Fee" },
];

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroLandscape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-accent">Empowering</span><br />
              Justice,<br />
              Starting Now
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
              Talk to an experienced attorney. Available in all states. We only get paid if you win.
            </p>
            <Button className="btn-golden text-base">
              Check if You Qualify
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - Case Summary Card */}
          <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Asbestos Exposure Claims</span>
              </div>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                Urgent
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-muted-foreground">Settlement Success:</span>
              <span className="font-serif text-4xl font-bold text-primary">2,45,200</span>
            </div>

            <div className="text-sm text-muted-foreground mb-4">Case Summary</div>
            
            {/* Progress Bars */}
            <div className="space-y-3 mb-6">
              {[85, 72, 65, 90].map((value, i) => (
                <div key={i} className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${value}%` }}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div>
                <div className="text-sm text-muted-foreground">Average Settlement</div>
                <div className="font-semibold text-primary">$100K - $1M</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time to Receive Settlement</div>
                <div className="font-semibold text-primary">8-30 Months</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time in Court if not settled</div>
                <div className="font-semibold text-primary">4-5 Weeks</div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="flex items-center justify-between pt-6 border-t">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-5 right-8 hidden lg:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium">Scroll Down</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
