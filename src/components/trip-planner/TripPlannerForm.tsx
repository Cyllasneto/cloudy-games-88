import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/data/countries";
import { preferences } from "./tripPlannerUtils";

interface TripPlannerFormProps {
  onSubmit: (formData: any) => void;
}

export function TripPlannerForm({ onSubmit }: TripPlannerFormProps) {
  const [selectedDays, setSelectedDays] = useState(3);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [selectedCountry, setSelectedCountry] = useState<string>();

  const handlePreferenceToggle = (prefId: string) => {
    setSelectedPreferences((current) =>
      current.includes(prefId)
        ? current.filter((id) => id !== prefId)
        : [...current, prefId]
    );
  };

  const handleSubmit = () => {
    onSubmit({
      selectedCountry,
      date,
      selectedDays,
      selectedPreferences
    });
  };

  return (
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

      <Button onClick={handleSubmit} className="w-full">
        Gerar Roteiro
      </Button>
    </div>
  );
}