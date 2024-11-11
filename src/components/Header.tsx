import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Menu, LogOut } from "lucide-react";
import { TripPlanner } from "./TripPlanner";
import { MyItineraries } from "./MyItineraries";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      const { error } = await supabase.auth.signOut({
        scope: 'local'
      });

      if (error) {
        console.error("Error logging out:", error);
        toast({
          title: "Erro ao sair",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Logout realizado com sucesso",
          description: "Até logo!",
        });
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast({
        title: "Erro ao sair",
        description: "Ocorreu um erro inesperado ao tentar sair.",
        variant: "destructive",
      });
    } finally {
      navigate("/login");
    }
  };

  return (
    <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg md:text-2xl font-bold flex items-center gap-2">
            <Cloud className="h-5 w-5 md:h-7 md:w-7" />
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
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <TripPlanner />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
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
                  <Button variant="outline" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
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