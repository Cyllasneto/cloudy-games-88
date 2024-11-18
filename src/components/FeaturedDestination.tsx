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
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
        <div className="container max-w-6xl mx-auto">
          <span className="text-secondary font-medium mb-1 sm:mb-2 block text-sm sm:text-base">{country}</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">{title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 max-w-2xl text-white/90">{description}</p>
          <Button 
            onClick={scrollToDestinations}
            className="bg-secondary text-primary hover:bg-secondary/90 w-full sm:w-auto text-sm sm:text-base"
          >
            Explorar <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;