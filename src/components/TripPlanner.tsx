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
import { supabase } from "@/integrations/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Database } from "@/integrations/supabase/types";

type Itinerary = Database['public']['Tables']['itineraries']['Row']

interface TripPlannerProps {
  isEditing?: boolean;
  editData?: Itinerary;
  onClose?: () => void;
}

export function TripPlanner({ isEditing, editData, onClose }: TripPlannerProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const saveItineraryMutation = useMutation({
    mutationFn: async (itinerary: Omit<Database['public']['Tables']['itineraries']['Insert'], 'id' | 'user_id'>) => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('User not authenticated')

      if (editData?.id) {
        const { error } = await supabase
          .from('itineraries')
          .update({
            country: itinerary.country,
            days: itinerary.days,
            date: itinerary.date,
            preferences: itinerary.preferences,
            daily_activities: itinerary.daily_activities,
            updated_at: new Date().toISOString()
          })
          .eq('id', editData.id)

        if (error) throw error
        return editData.id
      } else {
        const { data, error } = await supabase
          .from('itineraries')
          .insert({
            user_id: user.id,
            country: itinerary.country,
            days: itinerary.days,
            date: itinerary.date,
            preferences: itinerary.preferences,
            daily_activities: itinerary.daily_activities
          })
          .select()
          .single()

        if (error) throw error
        return data.id
      }
    },
    onSuccess: (itineraryId) => {
      queryClient.invalidateQueries({ queryKey: ['itineraries'] })
      toast({
        title: editData ? "Roteiro Atualizado!" : "Roteiro Personalizado Gerado!",
        description: "Seu roteiro foi salvo com sucesso.",
      })
      setOpen(false)
      if (onClose) onClose()
      navigate(`/itinerary/${itineraryId}`)
    },
    onError: () => {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar o roteiro. Tente novamente.",
        variant: "destructive",
      })
    }
  })

  const handleGenerateItinerary = async (formData: any) => {
    const { selectedCountry, date, selectedDays, selectedPreferences } = formData;
    
    const dailyActivities = generateDailyItinerary(selectedCountry, selectedDays, selectedPreferences);

    const itinerary = {
      country: selectedCountry,
      days: selectedDays,
      date: date.toISOString(),
      preferences: selectedPreferences,
      daily_activities: dailyActivities
    };

    saveItineraryMutation.mutate(itinerary)
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
      <DialogContent className="w-[95vw] max-w-[425px] p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
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