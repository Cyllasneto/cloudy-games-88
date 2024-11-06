import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Box, Cloud, Home, MapPin, Mail } from "lucide-react";
import { TripPlanner } from "./TripPlanner";
import { MyItineraries } from "./MyItineraries";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <Cloud className="h-7 w-7" />
            <span>Cloudy <span className="text-[#E8C547]">Trip</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Box className="p-2 border rounded-lg flex items-center">
              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span>🏠 Home</span>
                </Link>
              </Button>
            </Box>

            <Box className="p-2 border rounded-lg flex items-center">
              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link to="/destinations">
                  <MapPin className="h-4 w-4" />
                  <span>🌎 Destinos</span>
                </Link>
              </Button>
            </Box>

            <Box className="p-2 border rounded-lg flex items-center">
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link to="/itineraries">
                  <MapPin className="h-4 w-4" />
                  <span>📍 Roteiros</span>
                </Link>
              </Button>
            </Box>

            <Box className="p-2 border rounded-lg flex items-center">
              <Button variant="ghost" asChild className="flex items-center gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  <span>✉️ Contato</span>
                </Link>
              </Button>
            </Box>

            <Box className="p-2 border rounded-lg flex items-center">
              <MyItineraries />
            </Box>

            <Box className="p-2 border rounded-lg flex items-center">
              <TripPlanner />
            </Box>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/itineraries">📍 Roteiros</Link>
            <TripPlanner />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;