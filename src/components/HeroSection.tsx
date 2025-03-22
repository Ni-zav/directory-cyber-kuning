import { LucideIcon } from 'lucide-react';

interface HeroSectionProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
}

const HeroSection = ({ 
  icon: Icon,
  title, 
  subtitle,
  accent,
  className = ""
}: HeroSectionProps) => {
  return (
    <div className={`pt-32 pb-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {Icon && (
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 bg-yellow-400 dark:bg-yellow-400/20 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <Icon className="w-8 h-8 text-yellow-950 dark:text-yellow-400" />
            </div>
          </div>
        )}
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {accent ? (
            <>
              {title} <span className="text-yellow-500">{accent}</span>
            </>
          ) : (
            title
          )}
        </h1>
        
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
