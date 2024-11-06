import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";
import { countries } from "@/data/countries";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Itinerary {
  country: string;
  days: number;
  date: string;
  preferences: string[];
}

export function MyItineraries() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const savedItineraries = JSON.parse(localStorage.getItem('myItineraries') || '[]');
    setItineraries(savedItineraries);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <MapPin className="h-4 w-4" />
          Meus Roteiros
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Meus Roteiros</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          {itineraries.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Você ainda não tem roteiros salvos.
            </p>
          ) : (
            <div className="space-y-4">
              {itineraries.map((itinerary, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-accent transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">
                      {countries[itinerary.country]?.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {format(new Date(itinerary.date), "dd 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {itinerary.days} dias de viagem
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {itinerary.preferences.map((pref) => (
                      <span
                        key={pref}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}