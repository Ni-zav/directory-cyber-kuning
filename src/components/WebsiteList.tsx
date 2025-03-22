import { X } from 'lucide-react';
import { Website } from '@/data/websites';
import WebsiteCard from './WebsiteCard';
import ViewToggle from './ViewToggle';
import InfiniteScroll from './InfiniteScroll';
import { Skeleton } from '@/components/ui/skeleton';

interface WebsiteListProps {
  websites: Website[];
  totalItems: number;
  hasMore: boolean;
  isLoading: boolean;
  initialLoad: boolean;
  viewMode: 'grid' | 'list';
  selectedTags: string[];
  searchQuery: string;
  onLoadMore: () => void;
  onViewChange: (mode: 'grid' | 'list') => void;
  onClearFilter: (tag?: string) => void;
  onClearAllFilters: () => void;
}

const WebsiteList = ({
  websites,
  totalItems,
  hasMore,
  isLoading,
  initialLoad,
  viewMode,
  selectedTags,
  searchQuery,
  onLoadMore,
  onViewChange,
  onClearFilter,
  onClearAllFilters
}: WebsiteListProps) => {
  
  // Skeleton loader for website cards
  const WebsiteCardSkeleton = ({ viewMode }: { viewMode: 'grid' | 'list' }) => {
    if (viewMode === 'list') {
      return (
        <div className="w-full rounded-xl border border-gray-100 dark:border-gray-700/50">
          <div className="p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/3 flex items-center space-x-3 mb-3 md:mb-0">
                <Skeleton className="w-9 h-9 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="md:w-1/3 mb-3 md:mb-0 md:px-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="md:w-1/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-6 w-20 rounded-full" />
                  ))}
                </div>
                <div className="flex justify-between items-center w-full mt-2 pt-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-16 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-gray-100 dark:border-gray-700/50">
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
          <div className="flex justify-between items-center pt-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-16 rounded" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <main id="content-top" className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex-grow">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold text-foreground">
                {totalItems} Websites
              </h2>
              {(searchQuery || selectedTags.length > 0) && (
                <button 
                  onClick={() => onClearAllFilters()}
                  className="ml-4 text-sm text-muted-foreground hover:text-primary flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Reset Filter
                </button>
              )}
            </div>
            
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-sm text-muted-foreground">Filter:</span>
                {selectedTags.map(tag => (
                  <div key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                    {tag}
                    <button onClick={() => onClearFilter(tag)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Hide view toggle on mobile */}
          <div className="hidden sm:block">
            <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
          </div>
        </div>

        {/* Force grid view on mobile */}
        {initialLoad ? (
          <div className={`grid grid-cols-1 ${viewMode === 'list' ? 'sm:block' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {Array.from({ length: 9 }).map((_, index) => (
              <WebsiteCardSkeleton key={index} viewMode={viewMode} />
            ))}
          </div>
        ) : websites.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Tidak ada hasil yang ditemukan. Coba kata kunci lain.
            </p>
          </div>
        ) : (
          <InfiniteScroll
            onLoadMore={onLoadMore}
            hasMore={hasMore}
            isLoading={isLoading}
            loadingText="Memuat lebih banyak website..."
            endMessage={
              <p className="text-center text-gray-500 dark:text-gray-400 py-4 mt-4">
                ✓ Semua website telah ditampilkan
              </p>
            }
            className={`grid grid-cols-1 ${viewMode === 'list' ? 'sm:block space-y-4' : 'sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}
          >
            {websites.map((website) => (
              <WebsiteCard 
                key={website.id} 
                website={website} 
                viewMode={viewMode}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </main>
  );
};

export default WebsiteList;
