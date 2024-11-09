import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/data/countries";
import { preferences } from "./tripPlannerUtils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TripPlannerFormProps {
  onSubmit: (formData: any) => void;
  initialData?: any;
}

export function TripPlannerForm({ onSubmit, initialData }: TripPlannerFormProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    initialData?.country || ""
  );
  const [date, setDate] = useState<Date | undefined>(
    initialData?.date ? new Date(initialData.date) : undefined
  );
  const [selectedDays, setSelectedDays] = useState<number>(
    initialData?.days || 3
  );
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(
    initialData?.preferences || []
  );

  const handlePreferenceToggle = (prefId: string) => {
    setSelectedPreferences((current) =>
      current.includes(prefId)
        ? current.filter((id) => id !== prefId)
        : current.length < 5
        ? [...current, prefId]
        : current
    );
  };

  const handleSubmit = () => {
    if (!selectedCountry || !date) return;

    onSubmit({
      selectedCountry,
      date,
      selectedDays,
      selectedPreferences,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">País</label>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um país" />
          </SelectTrigger>
          <SelectContent>
            <ScrollArea className="h-[200px]">
              {Object.entries(countries).map(([id, country]) => (
                <SelectItem key={id} value={id}>
                  {country.title}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Data da Viagem</label>
        <div className="border rounded-lg p-2 sm:p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
            disabled={(date) => date < new Date()}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Duração (dias)</label>
        <div className="flex items-center gap-4">
          <Slider
            value={[selectedDays]}
            onValueChange={([days]) => setSelectedDays(days)}
            max={20}
            min={1}
            step={1}
            className="flex-1"
          />
          <span className="w-12 text-center text-sm">{selectedDays}d</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Preferências (máx. 5)</label>
        <div className="flex flex-wrap gap-2">
          {preferences.map((pref) => (
            <Badge
              key={pref.id}
              variant={selectedPreferences.includes(pref.id) ? "default" : "outline"}
              className="cursor-pointer text-xs sm:text-sm"
              onClick={() => handlePreferenceToggle(pref.id)}
            >
              {pref.label}
            </Badge>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="w-full"
        disabled={!selectedCountry || !date}
      >
        {initialData ? "Atualizar Roteiro" : "Gerar Roteiro"}
      </Button>
    </div>
  );
}