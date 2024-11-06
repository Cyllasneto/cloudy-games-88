import { Clock, MapPin, Info, Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ActivityDetail {
  time?: string;
  title: string;
  description: string;
  location?: string;
  address?: string;
  duration?: string;
  tips?: string[];
  links?: Array<{ title: string; url: string }>;
  price?: string;
  rating?: number;
  website?: string;
}

interface ActivityCardProps {
  activity: ActivityDetail;
  period: string;
}

export const ActivityCard = ({ activity, period }: ActivityCardProps) => {
  if (!activity?.title) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-primary mb-4">{period}</h4>
        <p className="text-gray-500">Nenhuma atividade planejada</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h4 className="font-medium text-primary mb-4">{period}</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activity.time && (
              <>
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{activity.time}</span>
              </>
            )}
          </div>
          {activity.rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{activity.rating}</span>
            </div>
          )}
        </div>

        <h4 className="text-lg font-semibold">{activity.title}</h4>
        <p className="text-gray-600">{activity.description}</p>

        {(activity.location || activity.address) && (
          <div className="flex items-start gap-2 text-gray-600">
            <MapPin className="h-4 w-4 mt-1 shrink-0" />
            <div className="flex flex-col">
              {activity.location && <span>{activity.location}</span>}
              {activity.address && (
                <span className="text-sm text-gray-500">{activity.address}</span>
              )}
            </div>
          </div>
        )}

        {activity.duration && (
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Duração: {activity.duration}</span>
          </div>
        )}

        {activity.tips && activity.tips.length > 0 && (
          <div className="mt-4 space-y-2">
            <h5 className="font-medium flex items-center gap-2">
              <Info className="h-4 w-4" />
              Dicas Importantes
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {activity.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {activity.links && activity.links.length > 0 && (
          <div className="mt-4 space-y-2">
            <h5 className="font-medium">Links Úteis</h5>
            <div className="space-y-2">
              {activity.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};