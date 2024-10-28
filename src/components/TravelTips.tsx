import { Card } from "@/components/ui/card";
import { Hotel, Map, Utensils } from "lucide-react";

interface Tip {
  type: "hotel" | "activity" | "restaurant";
  title: string;
  description: string;
  price?: string;
}

interface TravelTipsProps {
  tips: Tip[];
}

const TravelTips = ({ tips }: TravelTipsProps) => {
  const getIcon = (type: Tip["type"]) => {
    switch (type) {
      case "hotel":
        return <Hotel className="w-5 h-5" />;
      case "activity":
        return <Map className="w-5 h-5" />;
      case "restaurant":
        return <Utensils className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tips.map((tip, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-primary">{getIcon(tip.type)}</div>
            <h3 className="font-semibold text-lg">{tip.title}</h3>
          </div>
          <p className="text-gray-600 mb-3">{tip.description}</p>
          {tip.price && (
            <span className="text-sm font-medium text-primary">{tip.price}</span>
          )}
        </Card>
      ))}
    </div>
  );
};

export default TravelTips;