import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { Cloud, Menu, X } from "lucide-react"
import { useState } from "react"
import LanguageSelector from "./LanguageSelector"
import { useTranslations } from "@/hooks/useTranslations"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary hover:scale-105 transition-transform duration-200"
          >
            <Cloud className="w-6 h-6 md:w-8 md:h-8" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.cloudyTrip}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-sm font-medium hover:text-primary">{t.home}</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="text-sm font-medium hover:text-primary ml-6">{t.contact}</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/privacy" className="text-sm font-medium hover:text-primary ml-6">{t.privacy}</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </Link>
              <Link 
                to="/privacy" 
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.privacy}
              </Link>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;