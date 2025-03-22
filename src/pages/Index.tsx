import { useState, useEffect, useCallback } from 'react';
import { getLazyLoadedWebsites, getAllTags } from '@/data/websites';
import { Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import WebsiteList from '@/components/WebsiteList';
import Footer from '@/components/Footer';

const WEBSITES_PER_PAGE = 9;

const Index = () => {
  // State for lazy loading and filtering
  const [websites, setWebsites] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const allTags = getAllTags();

  // Function to load more websites
  const loadMoreWebsites = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate network delay for demonstration purposes
    setTimeout(() => {
      const result = getLazyLoadedWebsites(
        offset,
        WEBSITES_PER_PAGE,
        searchQuery,
        selectedTags
      );
      
      setWebsites(prevWebsites => [...prevWebsites, ...result.websites]);
      setTotalItems(result.totalItems);
      setHasMore(result.hasMore);
      setOffset(prevOffset => prevOffset + WEBSITES_PER_PAGE);
      setIsLoading(false);
    }, 300);
  }, [offset, searchQuery, selectedTags, isLoading, hasMore]);

  // Load initial websites
  useEffect(() => {
    setIsLoading(true);
    setWebsites([]);
    setOffset(0);
    setHasMore(true);
    
    setTimeout(() => {
      const result = getLazyLoadedWebsites(
        0,
        WEBSITES_PER_PAGE,
        searchQuery,
        selectedTags
      );
      
      setWebsites(result.websites);
      setTotalItems(result.totalItems);
      setHasMore(result.hasMore);
      setOffset(WEBSITES_PER_PAGE);
      setIsLoading(false);
      setInitialLoad(false);
    }, 300);
  }, [searchQuery, selectedTags]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagClick = (tag: string) => {
    let newSelectedTags: string[];
    
    if (selectedTags.includes(tag)) {
      newSelectedTags = selectedTags.filter(t => t !== tag);
    } else {
      newSelectedTags = [...selectedTags, tag];
    }
    
    setSelectedTags(newSelectedTags);
  };

  const clearTagFilter = (tag: string) => {
    const newSelectedTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newSelectedTags);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        icon={Globe}
        title="Direktori"
        accent="Cyber Kuning"
        subtitle="Database website Indonesia terlengkap dan terorganisir"
      />
      
      <SearchSection 
        onSearch={handleSearch}
        allTags={allTags}
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
      />
      
      <WebsiteList 
        websites={websites}
        totalItems={totalItems}
        hasMore={hasMore}
        isLoading={isLoading}
        initialLoad={initialLoad}
        viewMode={viewMode}
        selectedTags={selectedTags}
        searchQuery={searchQuery}
        onLoadMore={loadMoreWebsites}
        onViewChange={setViewMode}
        onClearFilter={clearTagFilter}
        onClearAllFilters={clearAllFilters}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
