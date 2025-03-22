
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full w-9 h-9 p-0"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-gray-700 transition-transform duration-300 transform hover:rotate-45" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 transform hover:rotate-45" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{theme === "light" ? "Aktifkan dark mode" : "Aktifkan light mode"}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
