import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { countries } from "@/data/countries";

interface ItineraryHeaderProps {
  country: string;
  date: string;
  onBack: () => void;
}

export const ItineraryHeader = ({ country, date, onBack }: ItineraryHeaderProps) => {
  return (
    <div 
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${countries[country].heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="container max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <Button
            variant="outline"
            className="absolute top-4 left-4 bg-white/90 hover:bg-white"
            onClick={onBack}
          >
            <Clock className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-4xl font-bold text-white mb-2">{countries[country].title}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};