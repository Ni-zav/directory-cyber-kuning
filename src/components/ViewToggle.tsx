import { LayoutGrid, List } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewChange: (viewMode: 'grid' | 'list') => void;
}

const ViewToggle = ({ viewMode, onViewChange }: ViewToggleProps) => {
  return (
    <ToggleGroup 
      type="single" 
      value={viewMode} 
      onValueChange={(value) => {
        if (value === 'grid' || value === 'list') {
          onViewChange(value);
        }
      }}
      className="bg-muted border rounded-lg p-1"
    >
      <ToggleGroupItem 
        value="grid" 
        aria-label="Grid view"
        className="hover:bg-background data-[state=on]:bg-background data-[state=on]:text-foreground rounded-md px-3 py-2 text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Grid</span>
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem 
        value="list" 
        aria-label="List view"
        className="hover:bg-background data-[state=on]:bg-background data-[state=on]:text-foreground rounded-md px-3 py-2 text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">List</span>
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ViewToggle;
