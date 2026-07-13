import SEO from '../components/SEO';
import { useState } from 'react';
import { Search, ChevronRight, Clock, FileText, Award, BarChart, CheckCircle2, ShieldCheck, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/mockData';

export default function Tryout() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = packages.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO title="Paket Tryout | Bimbel Masuk Unhan" description="Latihan soal sesuai sistem seleksi UNHAN lengkap dengan pembahasan dan nilai." />
    <div className="flex flex-col w-full pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500 gap-2">
            <Link to="/" className="hover:text-blue-700 transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-blue-700 font-medium">Paket Tryout</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-slate-900 pt-12 md:pt-16 pb-16 md:pb-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-[28px] md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">Paket Tryout</h1>
          <p className="text-slate-300 text-[14px] md:text-lg mb-8 md:mb-10 leading-relaxed px-2">
            Latihan soal sesuai sistem seleksi UNHAN lengkap dengan pembahasan dan nilai.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:bg-white focus:text-slate-900 focus:placeholder-slate-500 focus:ring-4 focus:ring-blue-500/30 transition-all shadow-lg backdrop-blur-md"
              placeholder="Cari paket tryout..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 w-full">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredPackages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 relative p-5 md:p-6 flex flex-col justify-end text-white">
                  {pkg.type === 'Gratis' ? (
                     <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                       GRATIS
                     </div>
                  ) : (
                     <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                       PREMIUM
                     </div>
                  )}
                  <div className="flex items-center gap-2 text-blue-100 text-[12px] md:text-sm font-medium">
                    <FileText size={16} /> Tryout CBT
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[18px] md:text-lg text-slate-900 mb-2 leading-tight line-clamp-2">{pkg.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5">
                    <span className="flex items-center gap-1"><FileText size={14} /> {pkg.bank} Soal</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 120 Menit</span>
                  </div>
                  
                  <div className="space-y-2 mb-5 md:mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-[13px] md:text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Nilai Otomatis
                    </div>
                    <div className="flex items-center gap-2 text-[13px] md:text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Pembahasan Lengkap
                    </div>
                    <div className="flex items-center gap-2 text-[13px] md:text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Ranking Nasional
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="https://app.masukunhan.com/auth/register" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 text-white text-[13px] md:text-sm font-semibold h-11 md:h-auto px-4 py-2.5 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                       <LogIn size={18} /> Daftar
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Tryout Tidak Ditemukan</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Belum ada data tryout yang sesuai dengan pencarian Anda. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}

        {filteredPackages.length > 0 && (
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
