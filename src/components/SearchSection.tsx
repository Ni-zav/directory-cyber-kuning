
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SearchBar from './SearchBar';
import CategoryChip from './CategoryChip';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  allTags: string[];
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

const SearchSection = ({ onSearch, allTags, selectedTags, onTagClick }: SearchSectionProps) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 10);

  return (
    <section className="px-6 pb-4">
      <div className="max-w-2xl mx-auto mb-6">
        <SearchBar 
          onSearch={onSearch} 
          placeholder="Cari website berdasarkan nama, deskripsi, atau kategori..."
          className="w-full"
        />
      </div>
    
      {/* Filter Tags */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 pb-4">
          {visibleTags.map((tag) => (
            <CategoryChip
              key={tag}
              label={tag}
              active={selectedTags.includes(tag)}
              onClick={() => onTagClick(tag)}
            />
          ))}
        </div>
        
        {allTags.length > 10 && (
          <button 
            onClick={() => setShowAllTags(!showAllTags)}
            className="flex items-center justify-center w-full py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
          >
            {showAllTags ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Tampilkan Lebih Sedikit
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Tampilkan Semua Kategori ({allTags.length})
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
