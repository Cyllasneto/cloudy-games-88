import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  country: string;
  imageUrl: string;
  description: string;
  highlight?: boolean;
}

const DestinationCard = ({ title, country, imageUrl, description, highlight }: DestinationCardProps) => {
  return (
    <Card className={`overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${
      highlight ? 'ring-2 ring-secondary ring-offset-2' : ''
    }`}>
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {highlight && (
          <div className="absolute top-2 left-2">
            <div className="bg-secondary text-primary px-2 py-1 rounded-full text-xs font-medium">
              Destaque
            </div>
          </div>
        )}
        {highlight && (
          <div className="absolute top-2 right-2">
            {title === "Orlando" ? (
              <img 
                src="https://i.etsystatic.com/37030538/r/il/26ebc3/4843127416/il_1080xN.4843127416_tacl.jpg" 
                alt="Mickey Mouse"
                className="w-8 h-8 object-contain mix-blend-multiply"
              />
            ) : title === "Paris" ? (
              <img 
                src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-delicious-baguette-hand-painted-baguette-cartoon-baguette-nutrition-stick-png-image_3864759.jpg" 
                alt="Baguette"
                className="w-8 h-8 object-contain mix-blend-multiply"
              />
            ) : null}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <MapPin size={16} />
          <span className="text-sm font-medium">{country}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};

export default DestinationCard;