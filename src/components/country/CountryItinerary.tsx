import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  name: string;
  coordinates: [number, number];
  description: string;
}

interface DayItinerary {
  day: number;
  locations: Location[];
  description: string;
}

interface CountryItineraryProps {
  itinerary: DayItinerary[];
  center: [number, number];
  zoom: number;
}

const CountryItinerary = ({ itinerary, center, zoom }: CountryItineraryProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold">Roteiro Sugerido</h2>
      
      <div className="h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden mb-4 sm:mb-6">
        <MapContainer 
          className="h-full w-full"
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {itinerary.map(day => 
            day.locations.map((location, index) => (
              <Marker 
                key={`${day.day}-${index}`}
                position={location.coordinates}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-sm sm:text-base">{location.name}</h3>
                    <p className="text-xs sm:text-sm">{location.description}</p>
                    <p className="text-xs mt-1">Dia {day.day}</p>
                  </div>
                </Popup>
              </Marker>
            ))
          )}
        </MapContainer>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {itinerary.map((day) => (
          <Card key={day.day} className="p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Dia {day.day}</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">{day.description}</p>
            <div className="space-y-2 sm:space-y-3">
              {day.locations.map((location, index) => (
                <div key={index} className="pl-3 sm:pl-4 border-l-2 border-primary">
                  <h4 className="font-medium text-sm sm:text-base">{location.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{location.description}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountryItinerary;