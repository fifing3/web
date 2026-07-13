import SEO from '../components/SEO';
import { useState } from 'react';
import { Search, ChevronRight, Video, Calendar, Users, MonitorPlay, CheckCircle2, ShieldCheck, Clock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { classes } from '../data/mockData';

export default function KelasOnline() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = classes.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO title="Kelas Online | Bimbel Masuk Unhan" description="Belajar langsung bersama mentor berpengalaman untuk menghadapi seleksi UNHAN." />
    <div className="flex flex-col w-full pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500 gap-2">
            <Link to="/" className="hover:text-blue-700 transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-blue-700 font-medium">Kelas Online</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-blue-50 pt-12 md:pt-16 pb-16 md:pb-24 px-4 text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[28px] md:text-5xl font-bold text-blue-900 mb-4 md:mb-6 tracking-tight">Kelas Online</h1>
          <p className="text-slate-600 text-[14px] md:text-lg mb-8 md:mb-10 leading-relaxed px-2">
            Belajar langsung bersama mentor berpengalaman untuk menghadapi seleksi UNHAN.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-4 focus:ring-blue-500/30 transition-shadow shadow-sm"
              placeholder="Cari kelas (contoh: TPA Intensif)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 w-full">
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredClasses.map((cls, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                <div className="h-32 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-700 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <MonitorPlay size={12} /> {cls.tag}
                  </div>
                  {cls.status === 'Tersedia' ? (
                     <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                       <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                     </div>
                  ) : (
                     <div className="absolute top-4 right-4 bg-slate-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                       RECORDING
                     </div>
                  )}
                  <div className="w-full h-full flex items-center justify-center">
                    <Video size={40} className="text-blue-200 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[18px] md:text-lg text-slate-900 mb-2 leading-tight line-clamp-2">{cls.title}</h3>
                  <p className="text-[13px] md:text-sm text-slate-500 mb-3 md:mb-4 line-clamp-2">{cls.description}</p>
                  
                  <div className="space-y-3 mb-5 md:mb-6 flex-grow">
                    <div className="flex items-center gap-3 text-[13px] md:text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <ShieldCheck size={16} className="text-blue-600 shrink-0" /> 
                      <span className="font-medium">Mentor Alumni UNHAN</span>
                    </div>
                    <div className="flex items-center gap-3 text-[13px] md:text-sm text-slate-600">
                      <Calendar size={16} className="text-slate-400 shrink-0" /> Setiap Sabtu & Minggu
                    </div>
                    <div className="flex items-center justify-between text-[13px] md:text-sm text-slate-600">
                      <span className="flex items-center gap-3"><Clock size={16} className="text-slate-400 shrink-0" /> 90 Menit</span>
                      <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md text-[11px] md:text-xs"><Users size={12} /> 25/30</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <a href="https://masuk-unhan.myr.id/bootcamp/" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 text-white text-[13px] md:text-sm font-semibold h-11 md:h-auto px-4 py-2.5 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Kelas Tidak Ditemukan</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Belum ada data kelas yang sesuai dengan pencarian Anda. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}

        {filteredClasses.length > 0 && (
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
