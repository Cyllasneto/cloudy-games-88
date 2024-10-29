import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  country: string;
  imageUrl: string;
  description: string;
  highlight?: boolean;
  highlightIcon?: string;
}

const DestinationCard = ({ title, country, imageUrl, description, highlight, highlightIcon }: DestinationCardProps) => {
  return (
    <Card className={`overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${
      highlight ? 'ring-4 ring-[#F4C430] ring-offset-2 bg-gradient-to-r from-[#E6E6FA] to-[#F0F8FF]' : ''
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {highlight && highlightIcon && (
          <div className="absolute top-2 right-2 w-12 h-12 rounded-full overflow-hidden border-4 border-[#F4C430] bg-white p-1">
            <img
              src={highlightIcon}
              alt="Destaque"
              className="w-full h-full object-cover"
            />
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