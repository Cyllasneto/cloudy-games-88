import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
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
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Contato</Link>
            </Button>
            <MyItineraries />
            <TripPlanner />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <TripPlanner />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;