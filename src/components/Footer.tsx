import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  exploreMore: {
    title: "EXPLORE MORE",
    links: ["Homepage", "Company Info", "Reach Out", "Toxic Exposure", "Group Litigation", "Wound and Accident"],
  },
  exposure: {
    title: "EXPOSURE",
    links: ["Semaglutide Info", "Asbestos Cancer", "Glyphosate Cases", "Baby Powder Claim", "Birth Control Harm"],
  },
  litigation: {
    title: "LITIGATION",
    links: ["Taxi Assault Cases", "Pelvic Mesh Complications", "Digital Overuse Harm", "Gaming Disorder Help"],
  },
  woundAccident: {
    title: "WOUND AND ACCIDENT",
    links: ["Abuse and Assault", "Vehicle Collisions", "Premises Liability", "Trucking Accidents"],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">C2A</h3>
            <p className="text-muted-foreground text-sm mb-6">
              We link those harmed with premier U.S. attorneys specializing in mass tort, class action, and injury claims for redress.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="text-accent font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Connect2Attorney. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
