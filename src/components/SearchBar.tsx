import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Cari website...", 
  className
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div 
      className={cn(
        "relative group transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div 
        className={cn(
          "flex items-center bg-background border rounded-xl overflow-hidden transition-all duration-300",
          isFocused 
            ? "border-primary shadow-md ring-2 ring-primary/20" 
            : "border-input hover:border-input/80"
        )}
      >
        <div className="flex-shrink-0 pl-3 pr-2">
          <Search className="w-5 h-5 text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="w-full py-3 px-2 text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={handleClear}
            className="flex-shrink-0 p-2 mr-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
