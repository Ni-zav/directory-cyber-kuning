import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out px-4 py-2",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group transition-all duration-200"
        >
          <div className="relative w-8 h-8 bg-yellow-400 dark:bg-yellow-400/20 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-200">
            <Globe className="w-4 h-4 text-yellow-950 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:translate-x-0.5 transition-all duration-200">
              Direktori Cyber
            </span>
            <span className="text-xs uppercase tracking-widest text-yellow-500 dark:text-yellow-400 font-semibold group-hover:translate-x-0.5 transition-all duration-200 delay-75">
              Kuning
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Beranda
          </Link>
          <Link 
            to="/tentang" 
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Tentang
          </Link>
          <Link 
            to="/kontribusi" 
            className="text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
          >
            Kontribusi
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center p-1.5 rounded-md hover:bg-muted transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg py-3 px-4 flex flex-col space-y-3 animate-fade-in">
          <Link 
            to="/" 
            className="text-sm text-foreground hover:text-primary transition-colors duration-200 py-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            to="/tentang" 
            className="text-sm text-foreground hover:text-primary transition-colors duration-200 py-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link 
            to="/kontribusi" 
            className="text-sm text-foreground hover:text-primary transition-colors duration-200 py-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontribusi
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
