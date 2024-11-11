import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedDestinationProps {
  title: string;
  description: string;
  imageUrl: string;
  country: string;
}

const FeaturedDestination = ({ title, description, imageUrl, country }: FeaturedDestinationProps) => {
  const scrollToDestinations = () => {
    const destinationsSection = document.querySelector('#featured-destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
        <div className="container max-w-6xl mx-auto">
          <span className="text-secondary font-medium mb-2 block text-sm sm:text-base">{country}</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl text-white/90">{description}</p>
          <Button 
            onClick={scrollToDestinations}
            className="bg-secondary text-primary hover:bg-secondary/90 w-full sm:w-auto text-base"
          >
            Explorar <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;