
import React, { useRef, useEffect, useState } from 'react';

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  loadingText?: string;
  endMessage?: React.ReactNode;
  className?: string;
  threshold?: number;
  children: React.ReactNode;
}

const InfiniteScroll = ({
  onLoadMore,
  hasMore,
  isLoading,
  loadingText = "Loading more items...",
  endMessage,
  className,
  threshold = 300, // Increased threshold to load earlier
  children
}: InfiniteScrollProps) => {
  const [shouldLoadMore, setShouldLoadMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentLoaderRef = loaderRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          setShouldLoadMore(true);
        }
      },
      {
        root: null,
        rootMargin: `0px 0px ${threshold}px 0px`,
        threshold: 0.1,
      }
    );

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [hasMore, isLoading, threshold]);

  useEffect(() => {
    if (shouldLoadMore && hasMore && !isLoading) {
      onLoadMore();
      setShouldLoadMore(false);
    }
  }, [shouldLoadMore, hasMore, isLoading, onLoadMore]);

  return (
    <div className={className}>
      {children}
      
      <div ref={loaderRef} className="py-2 w-full">
        {isLoading && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">{loadingText}</p>
        )}
        
        {!hasMore && !isLoading && endMessage && (
          <div className="text-center py-2">{endMessage}</div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
