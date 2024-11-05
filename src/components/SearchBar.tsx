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
  const [suggestions, setSuggestions] = useState<Array<{ title: string; type: 'country' | 'city'; countryId: string }>>([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults: Array<{ title: string; type: 'country' | 'city'; countryId: string }> = [];
      const searchTerm = searchQuery.toLowerCase();
      
      // Busca por países
      Object.entries(countries).forEach(([countryId, country]) => {
        if (country.title.toLowerCase().includes(searchTerm)) {
          searchResults.push({ title: country.title, type: 'country', countryId });
        }
      });

      // Busca por cidades
      Object.entries(countries).forEach(([countryId, country]) => {
        country.tips.forEach(tip => {
          if (tip.title.toLowerCase().includes(searchTerm)) {
            if (!searchResults.some(result => result.title === tip.title)) {
              searchResults.push({ title: tip.title, type: 'city', countryId });
            }
          }
        });
      });
      
      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleResultClick = (result: { title: string; type: 'country' | 'city'; countryId: string }) => {
    setSearchQuery("");
    setSuggestions([]);
    setIsFocused(false);
    if (onClose) onClose();
    navigate(`/country/${result.countryId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleResultClick(suggestions[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Pesquisar países ou cidades..."
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
              onClick={() => handleResultClick(result)}
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