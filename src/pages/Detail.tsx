import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, ExternalLink, Tag, Clock } from 'lucide-react';
import { getWebsiteById, getWebsitesByTag } from '@/data/websites';
import Navbar from '@/components/Navbar';
import WebsiteCard from '@/components/WebsiteCard';
import CategoryChip from '@/components/CategoryChip';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const website = getWebsiteById(id || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [relatedWebsites, setRelatedWebsites] = useState<any[]>([]);

  useEffect(() => {
    if (!website) {
      navigate('/not-found');
      return;
    }

    // Animate in
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Get related websites
    if (website && website.category.length > 0) {
      const mainTag = website.category[0];
      const related = getWebsitesByTag(mainTag)
        .filter(w => w.id !== website.id)
        .slice(0, 3);
      
      setRelatedWebsites(related);
    }

    return () => clearTimeout(timer);
  }, [website, navigate]);

  if (!website) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Kembali ke Direktori
          </Link>
          
          {/* Website Details Card */}
          <div 
            className={`bg-card text-card-foreground rounded-xl shadow-lg border ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Header */}
            <div className="h-3 bg-gradient-to-r from-primary to-primary/80"></div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-5">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      {website.name}
                    </h1>
                    <a 
                      href={website.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {website.url.replace(/^https?:\/\//, '')}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <a 
                  href={website.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-md inline-flex items-center justify-center"
                >
                  <Globe className="mr-2 w-5 h-5" />
                  Kunjungi Website
                </a>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Deskripsi
                </h2>
                <p className="leading-relaxed">
                  {website.description}
                </p>
              </div>
              
              {/* Tags */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Tag className="mr-2 w-5 h-5 text-primary" />
                  Kategori
                </h2>
                <div className="flex flex-wrap gap-2">
                  {website.category.map((tag, index) => (
                    <CategoryChip 
                      key={index} 
                      label={tag} 
                    />
                  ))}
                </div>
              </div>
              
              {/* Technical Details */}
              <div className="p-6 bg-muted/20 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="mr-2 w-5 h-5 text-primary" />
                  Detail
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b">
                    <span className="font-medium">URL</span>
                    <a 
                      href={website.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-mono text-primary hover:text-primary/90 transition-colors duration-200"
                    >
                      {website.url}
                    </a>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b">
                    <span className="font-medium">Ditambahkan</span>
                    <span className="flex items-center">
                      {new Date(website.createdAt).toLocaleDateString('id-ID', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-medium">Diperbarui</span>
                    <span className="flex items-center">
                      {new Date(website.updatedAt).toLocaleDateString('id-ID', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Websites */}
          {relatedWebsites.length > 0 && (
            <div className={`mt-16 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-2xl font-bold mb-6">
                Website Terkait
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedWebsites.map((relatedWebsite) => (
                  <WebsiteCard 
                    key={relatedWebsite.id} 
                    website={relatedWebsite} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-card text-card-foreground border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Direktori Cyber Kuning</h3>
          <p className="mb-6">
            Database website Indonesia terlengkap
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Direktori Cyber Kuning. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Detail;
