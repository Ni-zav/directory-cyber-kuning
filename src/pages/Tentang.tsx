import { Globe, CircleCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Tentang = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        icon={Globe}
        title="Tentang"
        accent="Direktori Cyber Kuning"
        subtitle="Membangun database website Indonesia yang terorganisir dan mudah diakses"
      />
      
      <main className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border">
            {/* Change yellow accent to white in dark mode */}
            <div className="h-2 bg-gradient-to-r from-primary to-primary/80"></div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Misi Proyek
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Direktori Cyber Kuning adalah proyek personal yang bertujuan mengumpulkan dan mendokumentasikan 
                website-website Indonesia. Sebagai pengembang web dengan ketertarikan pada infrastruktur internet lokal, 
                saya memulai proyek ini untuk memudahkan diri sendiri dan orang lain menemukan situs-situs 
                lokal yang mungkin belum banyak diketahui.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Apa Yang Saya Tawarkan
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-muted-foreground">
                    <strong className="font-medium text-foreground">Kurasi Sederhana</strong> - 
                    Setiap website dalam direktori telah saya verifikasi keberadaannya dan pastikan relevan untuk pengguna internet Indonesia.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-muted-foreground">
                    <strong className="font-medium text-foreground">Kategori Dasar</strong> - 
                    Pengelompokan website berdasarkan kategori untuk memudahkan pencarian sesuai kebutuhan.
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">✓</span>
                  </div>
                  <div className="text-muted-foreground">
                    <strong className="font-medium text-foreground">Open Source</strong> - 
                    Proyek ini bersifat open source dan menerima kontribusi dari siapa saja yang ingin membantu memperkaya direktori.
                  </div>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Cerita di Balik Proyek Ini
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Proyek ini dimulai sebagai hobi pribadi saya untuk mengeksplorasi dan memetakan lanskap digital Indonesia. 
                Saat browsing internet, saya sering menemukan website-website lokal yang menarik namun kurang terekspos. 
                Direktori ini adalah upaya sederhana untuk mengumpulkan temuan tersebut dalam satu tempat yang mudah diakses.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">
                Rencana Pengembangan
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Meski masih dalam tahap awal, saya memiliki beberapa rencana pengembangan untuk direktori ini:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Update IP menjadi Dynamic IP dengan DNS Lookup
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Tambah fitur uptime monitoring untuk memastikan website masih aktif
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Implementasi fitur pencarian yang lebih canggih
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Tambah visualisasi data untuk memperlihatkan peta infrastruktur web Indonesia
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Implementasi sistem rating dan ulasan dari komunitas
                  </span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Ingin Berkontribusi?</h3>
                <p className="text-muted-foreground mb-3">
                  Jika Anda memiliki ide atau menemukan website lokal yang menarik, saya sangat menghargai kontribusi Anda untuk 
                  mengembangkan direktori ini.
                </p>
                <a 
                  href="/kontribusi" 
                  className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
                >
                  Pelajari cara berkontribusi →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-card text-card-foreground border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-gray-800" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Direktori Cyber Kuning</h3>
          <p className="text-muted-foreground mb-6">
            Database website Indonesia terlengkap
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Direktori Cyber Kuning. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Tentang;
