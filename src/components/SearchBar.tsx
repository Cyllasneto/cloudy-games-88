import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { countries } from "@/data/countries";

interface SearchBarProps {
  className?: string;
  onClose?: () => void;
}

const SearchBar = ({ className = "", onClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const matchingCountries = Object.entries(countries)
        .filter(([_, country]) =>
          country.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(([_, country]) => country.title);
      setSuggestions(matchingCountries);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleCountryClick = (countryName: string) => {
    const countryId = Object.entries(countries).find(
      ([_, country]) => country.title === countryName
    )?.[0];
    
    if (countryId) {
      setSearchQuery("");
      setSuggestions([]);
      if (onClose) onClose();
      navigate(`/country/${countryId}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleCountryClick(suggestions[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Pesquisar destinos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pr-10"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
          {suggestions.map((country, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              onClick={() => handleCountryClick(country)}
              type="button"
            >
              {country}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;