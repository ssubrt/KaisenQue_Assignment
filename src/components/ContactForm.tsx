import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import supportAgent from "@/assets/support-agent.jpg";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with badge */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg z-10">
              No Win,<br />No Fees
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={supportAgent}
                alt="Legal support representative"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Begin Your Journey
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-background border-border h-12"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-background border-border h-12"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background border-border h-12"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="bg-background border-border h-12"
                />
              </div>
              <Textarea 
                placeholder="How can we help?" 
                className="bg-background border-border min-h-[120px]"
              />
              <Button type="submit" className="w-full btn-golden h-12">
                Get started
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
