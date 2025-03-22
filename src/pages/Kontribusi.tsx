import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, Terminal, FileText, ExternalLink, Copy, Check, ChevronDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import HeroSection from '@/components/HeroSection';
import CodeBlock from '@/components/CodeBlock';

const Kontribusi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        icon={Github}
        title="Kontribusi"
        accent="Direktori Cyber Kuning"
        subtitle="Bantu kami memperkaya direktori dengan menambahkan website lokal Indonesia yang berkualitas"
      />
      
      <main className="pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground rounded-xl shadow-lg border">
            {/* Header accent line */}
            <div className="h-2 bg-gradient-to-r from-primary to-primary/80"></div>
            
            <div className="p-4 md:p-6 lg:p-8">
              <Tabs defaultValue="cara-kontribusi">
                <TabsList className="w-full mb-6 flex flex-wrap overflow-x-auto">
                  <TabsTrigger value="cara-kontribusi" className="flex-1">Cara Kontribusi</TabsTrigger>
                  <TabsTrigger value="panduan-format" className="flex-1">Panduan Format</TabsTrigger>
                  <TabsTrigger value="formulir" className="flex-1">Formulir Pengajuan</TabsTrigger>
                  <TabsTrigger value="faq" className="flex-1">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="cara-kontribusi" className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Langkah Kontribusi
                    </h2>
                    
                    <ol className="space-y-6 mb-8">
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Fork Repository</h3>
                          <p className="text-muted-foreground mb-3">
                            Fork repositori GitHub kami ke akun GitHub Anda untuk mulai berkontribusi.
                          </p>
                          <a 
                            href="https://github.com/ni-zav/direktori-cyber-kuning" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary/90 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Repository GitHub
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </li>
                      
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Clone Repository</h3>
                          <p className="text-muted-foreground mb-3">
                            Clone repository hasil fork ke komputer lokal Anda.
                          </p>
                          <CodeBlock code={"git clone https://github.com/ni-zav/direktori-cyber-kuning.git"} />
                        </div>
                      </li>

                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Setup Development Environment</h3>
                          <p className="text-muted-foreground mb-3">
                            Install dependensi dan jalankan aplikasi di localhost.
                          </p>
                          <CodeBlock code={"# Masuk ke direktori proyek\ncd direktori-cyber-kuning\n\n# Install semua dependensi\nnpm install\n\n# Jalankan aplikasi di mode development\nnpm run dev"} />
                          <p className="text-muted-foreground mt-3">
                            Setelah menjalankan perintah terakhir, aplikasi akan tersedia di <code className="bg-muted px-2 py-1 rounded text-sm">http://localhost:5173</code>
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Buat Branch Baru</h3>
                          <p className="text-muted-foreground mb-3">
                            Buat branch baru untuk kontribusi Anda. Beri nama yang deskriptif terkait perubahan yang akan dibuat.
                          </p>
                          <CodeBlock code={"# Pastikan Anda berada di branch main\ngit checkout main\n\n# Buat branch baru\ngit checkout -b tambah-website-baru\n\n# Atau jika ingin memperbaiki bug\ngit checkout -b fix-typo-homepage"} />
                        </div>
                      </li>
                      
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">5</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Edit File Data</h3>
                          <p className="text-muted-foreground mb-3">
                            Tambahkan website ke file <code className="bg-muted px-2 py-1 rounded text-sm">data/websites.ts</code> mengikuti format yang ditentukan.
                          </p>
                          <p className="text-muted-foreground mb-3">
                            Pastikan perubahan Anda mengikuti struktur kode yang sudah ada, dan memenuhi semua validasi tipe data TypeScript.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">6</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Commit & Push Perubahan</h3>
                          <p className="text-muted-foreground mb-3">
                            Commit perubahan Anda dan push ke repository fork Anda.
                          </p>
                          <CodeBlock code={"# Tambahkan file yang diubah\ngit add data/websites.ts\n\n# Commit perubahan dengan pesan yang jelas\ngit commit -m \"Tambah website: nama-website\"\n\n# Push ke repository Anda (branch yang baru dibuat)\ngit push origin tambah-website-baru"} />
                        </div>
                      </li>

                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">7</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Buat Pull Request</h3>
                          <p className="text-muted-foreground mb-3">
                            Buat Pull Request (PR) dari branch Anda ke repository utama. Berikan judul dan deskripsi yang jelas.
                          </p>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-3">
                            <li>Kunjungi repository fork di GitHub</li>
                            <li>Klik tombol "Pull Request"</li>
                            <li>Pilih branch Anda sebagai "compare" dan repository utama sebagai "base"</li>
                            <li>Berikan judul yang deskriptif dan jelaskan perubahan yang Anda buat</li>
                            <li>Klik "Create Pull Request"</li>
                          </ul>
                        </div>
                      </li>
                      
                      <li className="flex flex-col md:flex-row">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 mb-2 md:mb-0">
                          <span className="text-primary font-bold">8</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Review Process</h3>
                          <p className="text-muted-foreground mb-3">
                            Maintainer akan mereview PR Anda. Mungkin akan ada diskusi atau permintaan perubahan. Ketika semuanya siap, PR Anda akan di-merge.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </TabsContent>
                
                <TabsContent value="panduan-format" className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Format Data Website
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      Setiap entri website harus mengikuti format berikut:
                    </p>
                    
                    <CodeBlock code={`{
  id: "id-unik-untuk-website",
  name: "Nama Website",
  url: "https://website.com",
  description: "Deskripsi singkat tentang website dan fungsinya.",
  category: ["Kategori1", "Kategori2"],
  logo: "https://example.com/logo.png", // opsional
  createdAt: "2023-08-15T00:00:00.000Z",
  updatedAt: "2023-08-15T00:00:00.000Z"
}`} />
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Tips Format</h3>
                      <ul className="list-disc pl-5 text-blue-700 dark:text-blue-400 space-y-1">
                        <li>ID harus unik dan tanpa spasi (gunakan kebab-case)</li>
                        <li>Deskripsi sebaiknya 100-200 karakter</li>
                        <li>Tambahkan minimal 1-3 kategori yang relevan</li>
                        <li>Pastikan URL lengkap dengan https://</li>
                        <li>Logo bersifat opsional, tapi disarankan menyertakan URL logo</li>
                        <li>Format tanggal menggunakan ISO 8601</li>
                      </ul>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      Anda juga dapat mengusulkan kategori baru jika relevan.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="formulir" className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                      Formulir Pengajuan Website
                    </h2>
                    
                    <form className="space-y-4 md:space-y-6 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="websiteName" className="block text-sm font-medium text-foreground mb-1">
                            Nama Website *
                          </label>
                          <input 
                            type="text" 
                            id="websiteName" 
                            placeholder="Contoh: Nama Website" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="websiteUrl" className="block text-sm font-medium text-foreground mb-1">
                            URL Website *
                          </label>
                          <input 
                            type="url" 
                            id="websiteUrl" 
                            placeholder="https://www.example.com" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="websiteDescription" className="block text-sm font-medium text-foreground mb-1">
                            Deskripsi *
                          </label>
                          <textarea 
                            id="websiteDescription" 
                            rows={4}
                            placeholder="Penjelasan singkat tentang website (100-200 karakter)" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          ></textarea>
                        </div>
                        
                        <div>
                          <label htmlFor="websiteCategory" className="block text-sm font-medium text-foreground mb-1">
                            Kategori *
                          </label>
                          <input 
                            type="text" 
                            id="websiteCategory" 
                            placeholder="Kategori1, Kategori2, Kategori3" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Pisahkan dengan koma untuk beberapa kategori
                          </p>
                        </div>
                        
                        <div>
                          <label htmlFor="websiteLogo" className="block text-sm font-medium text-foreground mb-1">
                            URL Logo (Opsional)
                          </label>
                          <input 
                            type="url" 
                            id="websiteLogo" 
                            placeholder="https://www.example.com/logo.png" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="submitterName" className="block text-sm font-medium text-foreground mb-1">
                            Nama Pengaju *
                          </label>
                          <input 
                            type="text" 
                            id="submitterName" 
                            placeholder="Nama Anda" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="submitterEmail" className="block text-sm font-medium text-foreground mb-1">
                            Email Pengaju *
                          </label>
                          <input 
                            type="email" 
                            id="submitterEmail" 
                            placeholder="email@example.com" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary dark:bg-muted dark:text-foreground"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button 
                          type="submit"
                          className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200"
                        >
                          Ajukan Website
                        </button>
                      </div>
                    </form>
                    
                    <div className="bg-muted p-4 rounded-lg border">
                      <p className="text-sm text-muted-foreground">
                        Website yang diajukan akan direview oleh tim kami sebelum ditambahkan ke direktori.
                        Kami akan menghubungi Anda melalui email jika ada pertanyaan atau ketika website telah ditambahkan.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                    Pertanyaan Umum
                  </h2>
                  
                  <div className="space-y-4">
                    <Collapsible className="border rounded-lg overflow-hidden">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-muted transition-colors">
                        Kriteria apa yang digunakan untuk menerima website?
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 pt-0 text-muted-foreground border-t">
                        Website harus dari Indonesia, memiliki konten yang legal dan tidak melanggar hukum, aktif (tidak mati), 
                        dan memberikan nilai bagi pengguna. Kami mengutamakan kualitas di atas kuantitas.
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible className="border rounded-lg overflow-hidden">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-muted transition-colors">
                        Berapa lama review pull request saya?
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 pt-0 text-muted-foreground border-t">
                        Saya biasanya mereview pull request dalam 1-3 hari kerja. Jika ada perubahan yang perlu dilakukan, 
                        saya akan memberi komentar pada PR Anda.
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible className="border rounded-lg overflow-hidden">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium text-foreground hover:bg-muted transition-colors">
                        Apakah saya bisa mengusulkan perbaikan atau fitur baru?
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 pt-0 text-muted-foreground border-t">
                        Tentu! Saya sangat menghargai kontribusi untuk perbaikan UI, fitur baru, atau 
                        peningkatan kinerja. Anda dapat membuat issue di GitHub untuk mendiskusikan ide Anda sebelum 
                        memulai pekerjaan.
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontribusi;
