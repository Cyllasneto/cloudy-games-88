import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedDestinationProps {
  title: string;
  description: string;
  imageUrl: string;
  country: string;
}

const FeaturedDestination = ({ title, description, imageUrl, country }: FeaturedDestinationProps) => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container max-w-6xl mx-auto">
          <span className="text-secondary font-medium mb-2 block">{country}</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">{description}</p>
          <Button className="bg-secondary text-primary hover:bg-secondary/90">
            Explorar <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;