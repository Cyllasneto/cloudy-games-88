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
import { TripPlannerActions } from "./trip-planner/TripPlannerActions";
import { CalendarDays } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { generateDailyItinerary } from "./trip-planner/tripPlannerUtils";
import { countries } from "@/data/countries";

export function TripPlanner() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerateItinerary = (formData: any) => {
    const { selectedCountry, date, selectedDays, selectedPreferences } = formData;
    
    // Gerar roteiro detalhado
    const dailyActivities = generateDailyItinerary(selectedCountry, selectedDays, selectedPreferences);

    const itinerary = {
      id: crypto.randomUUID(), // Garantir que cada roteiro tenha um ID único
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