import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Menu, X } from "lucide-react";
import { TripPlanner } from "./TripPlanner";
import { MyItineraries } from "./MyItineraries";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <Cloud className="h-6 w-6 md:h-7 md:w-7" />
            <span>Cloudy <span className="text-[#E8C547]">Trip</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Contato</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/privacy">Políticas de Privacidade</Link>
            </Button>
            <MyItineraries />
            <TripPlanner />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <TripPlanner />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/">Home</Link>
                  </Button>
                  <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Contato</Link>
                  </Button>
                  <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/privacy">Políticas de Privacidade</Link>
                  </Button>
                  <MyItineraries />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;