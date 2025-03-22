import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Website } from '@/data/websites';
import CategoryChip from './CategoryChip';

interface WebsiteCardProps {
  website: Website;
  className?: string;
  style?: React.CSSProperties;
  viewMode?: 'grid' | 'list';
}

const WebsiteCard = ({ website, className, style, viewMode = 'grid' }: WebsiteCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a loading effect with faster animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100 + Math.random() * 200); // Reduced timing for faster appearance
    
    return () => clearTimeout(timer);
  }, []);

  if (viewMode === 'list') {
    return (
      <div 
        className={cn(
          "relative overflow-hidden transition-all duration-150 hover:shadow-md hover:translate-y-[-1px] rounded-lg bg-card text-card-foreground border",
          isLoaded ? "opacity-100" : "opacity-0 translate-y-2",
          className
        )}
        style={style}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80"></div>
        
        <div className="p-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Website Info */}
            <div className="flex items-start space-x-3 lg:w-1/3">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md mt-1">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1 truncate">
                  {website.name}
                </h3>
                <a 
                  href={website.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center"
                >
                  <span className="truncate">{website.url.replace(/^https?:\/\//, '')}</span>
                  <ExternalLink className="ml-1 w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>
            
            {/* Description */}
            <div className="lg:w-1/3 lg:px-4">
              <p className="text-xs text-muted-foreground line-clamp-2">
                {website.description}
              </p>
            </div>
            
            {/* Categories and Action */}
            <div className="flex flex-col lg:w-1/3">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {website.category.slice(0, 3).map((tag, index) => (
                  <CategoryChip 
                    key={index} 
                    label={tag} 
                    className="text-xs px-2 py-0.5"
                  />
                ))}
                {website.category.length > 3 && (
                  <span className="text-xs text-muted-foreground self-center">
                    +{website.category.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex justify-end mt-auto pt-2 border-t">
                <Link 
                  to={`/detail/${website.id}`}
                  className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div 
      className={cn(
        "relative overflow-hidden transition-all duration-150 hover:shadow-md hover:translate-y-[-1px] rounded-lg bg-card text-card-foreground border h-full flex flex-col",
        isLoaded ? "opacity-100" : "opacity-0 translate-y-2",
        className
      )}
      style={style}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80"></div>
      
      <div className="p-4 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-3">
          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md mt-1">
            <Globe className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground mb-1 truncate">
              {website.name}
            </h3>
            <a 
              href={website.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center"
            >
              <span className="truncate">{website.url.replace(/^https?:\/\//, '')}</span>
              <ExternalLink className="ml-1 w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
          {website.description}
        </p>
        
        {/* Footer */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {website.category.slice(0, 3).map((tag, index) => (
              <CategoryChip 
                key={index} 
                label={tag} 
                className="text-xs px-2 py-0.5"
              />
            ))}
            {website.category.length > 3 && (
              <span className="text-xs text-muted-foreground self-center">
                +{website.category.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex justify-end pt-2 border-t">
            <Link 
              to={`/detail/${website.id}`}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
