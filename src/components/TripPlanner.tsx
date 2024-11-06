import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { countries } from "@/data/countries";

const preferences = [
  { id: "cultural", label: "Cultural" },
  { id: "adventure", label: "Aventura" },
  { id: "romantic", label: "Romântico" },
  { id: "family", label: "Familiar" },
  { id: "gastronomy", label: "Gastronômico" },
  { id: "shopping", label: "Compras" },
];

export function TripPlanner() {
  const [selectedDays, setSelectedDays] = useState(3);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const { toast } = useToast();

  const handlePreferenceToggle = (prefId: string) => {
    setSelectedPreferences((current) =>
      current.includes(prefId)
        ? current.filter((id) => id !== prefId)
        : [...current, prefId]
    );
  };

  const generateItinerary = () => {
    if (!date) {
      toast({
        title: "Selecione uma data",
        description: "Por favor, escolha quando você pretende viajar.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedCountry) {
      toast({
        title: "Selecione um país",
        description: "Por favor, escolha um país para seu roteiro.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPreferences.length === 0) {
      toast({
        title: "Selecione suas preferências",
        description: "Escolha pelo menos um tipo de atividade.",
        variant: "destructive",
      });
      return;
    }

    const itinerary = {
      country: selectedCountry,
      days: selectedDays,
      date: date,
      preferences: selectedPreferences,
    };

    // Salvar no localStorage
    const savedItineraries = JSON.parse(localStorage.getItem('myItineraries') || '[]');
    savedItineraries.push(itinerary);
    localStorage.setItem('myItineraries', JSON.stringify(savedItineraries));

    toast({
      title: "Roteiro Personalizado Gerado!",
      description: `${selectedDays} dias em ${countries[selectedCountry].title} com foco em ${selectedPreferences.join(", ")}`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          Planejar Viagem
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Planeje sua Viagem</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Para qual país você quer ir?</h4>
            <Select onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um país" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(countries).map(([id, country]) => (
                  <SelectItem key={id} value={id}>
                    {country.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Quando você pretende viajar?</h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Quantos dias?</h4>
            <div className="flex items-center gap-4">
              <Slider
                value={[selectedDays]}
                onValueChange={([days]) => setSelectedDays(days)}
                max={15}
                min={1}
                step={1}
                className="flex-1"
              />
              <span className="w-12 text-center">{selectedDays}d</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">O que você gosta?</h4>
            <div className="flex flex-wrap gap-2">
              {preferences.map((pref) => (
                <Badge
                  key={pref.id}
                  variant={selectedPreferences.includes(pref.id) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handlePreferenceToggle(pref.id)}
                >
                  {pref.label}
                </Badge>
              ))}
            </div>
          </div>

          <Button onClick={generateItinerary} className="w-full">
            Gerar Roteiro
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}