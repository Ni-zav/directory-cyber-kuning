import { cn } from '@/lib/utils';

interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryChip = ({ 
  label, 
  active = false, 
  onClick, 
  className 
}: CategoryChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
        active 
          ? "bg-primary text-primary-foreground shadow-md" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        onClick ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      {label}
    </button>
  );
};

export default CategoryChip;
