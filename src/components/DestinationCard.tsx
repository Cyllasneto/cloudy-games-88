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
      highlight ? 'ring-4 ring-secondary ring-offset-2' : ''
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {highlight && (
          <div className="absolute top-2 right-2">
            {title === "Orlando" ? (
              <img 
                src="https://e7.pngegg.com/pngimages/298/450/png-clipart-mickey-mouse-minnie-mouse-silhouette-mickey-mouse-heroes-monochrome.png" 
                alt="Mickey Mouse"
                className="w-8 h-8 object-contain"
              />
            ) : (
              <div className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                Destaque
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-primary mb-2">
          <MapPin size={16} />
          <span className="text-sm font-medium">{country}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};

export default DestinationCard;