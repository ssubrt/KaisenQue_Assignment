import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import lawsuitCancer from "@/assets/lawsuit-cancer.jpg";
import lawsuitParaquat from "@/assets/lawsuit-paraquat.jpg";
import lawsuitHernia from "@/assets/lawsuit-hernia.jpg";
import lawsuitIvc from "@/assets/lawsuit-ivc.jpg";

const categories = ["Toxic Exposure", "Group Litigation", "Wound"];

const lawsuits = [
  {
    title: "Pantac Cancer Lawsuit",
    image: lawsuitCancer,
    category: "Toxic Exposure",
  },
  {
    title: "Faraquat Lawsuit",
    image: lawsuitParaquat,
    category: "Toxic Exposure",
  },
  {
    title: "Hernia Mesh Lawsuit",
    image: lawsuitHernia,
    category: "Wound",
  },
  {
    title: "IVC Filter Lawsuit",
    image: lawsuitIvc,
    category: "Wound",
  },
];

export default function LegalSolutions() {
  const [activeCategory, setActiveCategory] = useState("Toxic Exposure");

  const filteredLawsuits = lawsuits.filter(
    (lawsuit) => lawsuit.category === activeCategory || activeCategory === "Group Litigation"
  );

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8">
          Legal Solutions
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lawsuit Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {(activeCategory === "Group Litigation" ? lawsuits : filteredLawsuits).map((lawsuit, index) => (
            <div
              key={index}
              className="card-lawsuit group aspect-[3/4]"
            >
              <img
                src={lawsuit.image}
                alt={lawsuit.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="card-lawsuit-overlay" />
              
              {/* Arrow Button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
              </button>
              
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-primary-foreground font-semibold text-lg">
                  {lawsuit.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
