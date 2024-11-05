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
  const [suggestions, setSuggestions] = useState<Array<{ title: string; countryId: string }>>([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults: Array<{ title: string; countryId: string }> = [];
      const searchTerm = searchQuery.toLowerCase();
      
      // Busca apenas por países
      Object.entries(countries).forEach(([countryId, country]) => {
        if (country.title.toLowerCase().includes(searchTerm)) {
          searchResults.push({ 
            title: country.title,
            countryId 
          });
        }
      });
      
      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleResultClick = (countryId: string) => {
    setSearchQuery("");
    setSuggestions([]);
    setIsFocused(false);
    if (onClose) onClose();
    navigate(`/country/${countryId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleResultClick(suggestions[0].countryId);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Pesquisar países..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => setIsFocused(false), 200);
          }}
          className="w-full pr-10"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
      
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg">
          {suggestions.map((result, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              onClick={() => handleResultClick(result.countryId)}
              type="button"
            >
              {result.title}
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;