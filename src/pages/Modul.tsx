import SEO from '../components/SEO';
import { useState } from 'react';
import { Search, ChevronRight, Book, Clock, Star, PlayCircle, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modules } from '../data/mockData';

export default function Modul() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = modules.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO title="Semua Modul | Bimbel Masuk Unhan" description="Pelajari seluruh materi persiapan seleksi UNHAN dengan modul yang disusun secara sistematis dan mudah dipahami." />
    <div className="flex flex-col w-full pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500 gap-2">
            <Link to="/" className="hover:text-blue-700 transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-blue-700 font-medium">Modul Pembelajaran</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-blue-900 pt-12 md:pt-16 pb-16 md:pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[28px] md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">Semua Modul</h1>
          <p className="text-blue-100 text-[14px] md:text-lg mb-8 md:mb-10 leading-relaxed px-2">
            Pelajari seluruh materi persiapan seleksi UNHAN dengan modul yang disusun secara sistematis dan mudah dipahami.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white border-0 rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-4 focus:ring-blue-500/30 transition-shadow shadow-lg"
              placeholder="Cari modul (contoh: TPA, Bahasa Inggris)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 w-full">
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredModules.map((modul, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                <div className="h-40 bg-slate-100 relative overflow-hidden flex items-center justify-center p-6 text-slate-400 group-hover:bg-blue-50 transition-colors">
                  {modul.type === 'Gratis' ? (
                     <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                       GRATIS
                     </div>
                  ) : (
                     <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                       PREMIUM
                     </div>
                  )}
                  <Book size={48} className="text-blue-200 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[18px] md:text-lg text-slate-900 mb-2 leading-tight line-clamp-2">{modul.title}</h3>
                  <div className="flex items-center gap-4 text-[11px] md:text-xs text-slate-500 mb-3 md:mb-4">
                    <span className="flex items-center gap-1"><Book size={14} /> {modul.bank}</span>
                    <span className="flex items-center gap-1"><Star size={14} className="text-amber-400" /> 4.9</span>
                  </div>
                  <p className="text-slate-600 text-[13px] md:text-sm mb-5 md:mb-6 flex-grow line-clamp-3 text-justify">{modul.description}</p>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="https://masuk-unhan.myr.id/ebook/" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 text-white text-[13px] md:text-sm font-semibold h-11 md:h-auto px-4 py-2.5 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                      <LogIn size={18} /> Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm mt-8">
            <div className="w-24 h-24 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Modul Tidak Ditemukan</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Belum ada data modul yang sesuai dengan pencarian Anda. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}

        {filteredModules.length > 0 && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </section>
    </div>
    </>
  );
}
