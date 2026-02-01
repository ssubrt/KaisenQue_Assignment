import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import resourcesBg from "@/assets/resources-bg.jpg";
import supportAgent from "@/assets/support-agent.jpg";

export default function Resources() {
  return (
    <section id="resources" className="py-16 lg:py-24 bg-primary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-4 lg:mb-0">
            Resources
          </h2>
          <Button variant="outline" className="btn-outline-golden self-start lg:self-auto">
            See All Blogs
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img 
              src={resourcesBg}
              alt="Legal resources blog"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-accent text-sm font-medium">Legal Tips</span>
              <h3 className="text-primary-foreground text-xl font-semibold mt-2">
                Understanding Your Rights in Mass Tort Litigation
              </h3>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img 
              src={supportAgent}
              alt="Support resources"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-accent text-sm font-medium">Client Support</span>
              <h3 className="text-primary-foreground text-xl font-semibold mt-2">
                How to Prepare for Your Free Case Review
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
