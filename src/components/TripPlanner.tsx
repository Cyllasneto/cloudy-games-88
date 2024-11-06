import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TripPlannerForm } from "./trip-planner/TripPlannerForm";
import { CalendarDays } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { generateDailyItinerary } from "./trip-planner/tripPlannerUtils";
import { countries } from "@/data/countries";
import { useNavigate } from "react-router-dom";

export function TripPlanner() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGenerateItinerary = (formData: any) => {
    const { selectedCountry, date, selectedDays, selectedPreferences } = formData;
    
    // Gerar roteiro detalhado
    const dailyActivities = generateDailyItinerary(selectedCountry, selectedDays, selectedPreferences);

    const itineraryId = crypto.randomUUID();
    const itinerary = {
      id: itineraryId,
      country: selectedCountry,
      days: selectedDays,
      date: date.toISOString(),
      preferences: selectedPreferences,
      dailyActivities: dailyActivities
    };

    // Salvar no localStorage
    const savedItineraries = JSON.parse(localStorage.getItem('myItineraries') || '[]');
    savedItineraries.push(itinerary);
    localStorage.setItem('myItineraries', JSON.stringify(savedItineraries));

    // Disparar evento para atualizar MyItineraries
    window.dispatchEvent(new Event('storage'));

    toast({
      title: "Roteiro Personalizado Gerado!",
      description: `${selectedDays} dias em ${countries[selectedCountry].title}`,
    });

    setOpen(false);
    navigate(`/itinerary/${itineraryId}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          Planejar Viagem
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Planeje sua Viagem</DialogTitle>
          <DialogDescription>
            Crie um roteiro personalizado para sua próxima aventura.
          </DialogDescription>
        </DialogHeader>
        <TripPlannerForm onSubmit={handleGenerateItinerary} />
      </DialogContent>
    </Dialog>
  );
}