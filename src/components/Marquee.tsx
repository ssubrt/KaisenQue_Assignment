import { Star } from "lucide-react";

const messages = [
  "Fast, Private Claim Assessments",
  "Connect2Attorney Links People With Premier Lawyers",
  "Offering Committed Advocacy And Tailored Legal Solutions",
];

export default function Marquee() {
  return (
    <div className="bg-primary py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...messages, ...messages, ...messages].map((message, index) => (
          <div key={index} className="flex items-center mx-8">
            <Star className="w-4 h-4 text-accent fill-accent mr-2" />
            <span className="text-primary-foreground text-sm font-medium">{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
