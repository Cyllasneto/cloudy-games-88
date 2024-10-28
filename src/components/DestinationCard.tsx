import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  title: string;
  country: string;
  imageUrl: string;
  description: string;
}

const DestinationCard = ({ title, country, imageUrl, description }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
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