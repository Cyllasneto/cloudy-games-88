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

interface TripPlannerProps {
  isEditing?: boolean;
  editData?: any;
  onClose?: () => void;
}

export function TripPlanner({ isEditing, editData, onClose }: TripPlannerProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleGenerateItinerary = (formData: any) => {
    const { selectedCountry, date, selectedDays, selectedPreferences } = formData;
    
    const dailyActivities = generateDailyItinerary(selectedCountry, selectedDays, selectedPreferences);

    const itineraryId = editData?.id || crypto.randomUUID();
    const itinerary = {
      id: itineraryId,
      country: selectedCountry,
      days: selectedDays,
      date: date.toISOString(),
      preferences: selectedPreferences,
      dailyActivities: dailyActivities
    };

    const savedItineraries = JSON.parse(localStorage.getItem('myItineraries') || '[]');
    const updatedItineraries = editData 
      ? savedItineraries.map((it: any) => it.id === editData.id ? itinerary : it)
      : [...savedItineraries, itinerary];
    
    localStorage.setItem('myItineraries', JSON.stringify(updatedItineraries));
    window.dispatchEvent(new Event('storage'));

    toast({
      title: editData ? "Roteiro Atualizado!" : "Roteiro Personalizado Gerado!",
      description: `${selectedDays} dias em ${countries[selectedCountry].title}`,
    });

    setOpen(false);
    if (onClose) onClose();
    navigate(`/itinerary/${itineraryId}`);
  };

  return (
    <Dialog open={isEditing ? true : open} onOpenChange={isEditing ? onClose : setOpen}>
      {!isEditing && (
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <CalendarDays className="h-4 w-4" />
            Planejar Viagem
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="w-[95vw] max-w-[425px] p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">{isEditing ? 'Editar Roteiro' : 'Planejar sua Viagem'}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            {isEditing ? 'Atualize os detalhes do seu roteiro.' : 'Crie um roteiro personalizado para sua próxima aventura.'}
          </DialogDescription>
        </DialogHeader>
        <TripPlannerForm onSubmit={handleGenerateItinerary} initialData={editData} />
      </DialogContent>
    </Dialog>
  );
}