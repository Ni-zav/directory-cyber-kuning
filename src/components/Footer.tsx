import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-yellow-400 dark:bg-yellow-400/20 rounded-full flex items-center justify-center">
            <Globe className="w-6 h-6 text-yellow-950 dark:text-yellow-400" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Direktori Cyber Kuning</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Database website Indonesia terlengkap
        </p>
        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} Direktori Cyber Kuning. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
