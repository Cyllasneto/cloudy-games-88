import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { TripPlanner } from "./TripPlanner";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            TravelGuide
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/destinations">Destinos</Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link to="/itineraries">
                <MapPin className="h-4 w-4" />
                Roteiros
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Contato</Link>
            </Button>
            <TripPlanner />
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/itineraries">Roteiros</Link>
            <TripPlanner />
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;