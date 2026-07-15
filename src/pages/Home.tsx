import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Book, MonitorPlay, MessageCircle, BarChart3, Clock, CheckCircle2, ChevronDown, Facebook, Twitter, Instagram, Mail, Phone, LogIn, Menu, X, ArrowRight } from 'lucide-react';
import { features, packages, classes, faqs, modules } from '../data/mockData';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Bimbel Masuk Unhan",
    "url": "https://bmu.app",
    "logo": "https://bmu.app/logo.png",
    "description": "Bimbingan belajar masuk Universitas Pertahanan RI dengan kelas online, modul lengkap, tryout, pembahasan soal, dan mentor berpengalaman.",
    "sameAs": [
      "https://instagram.com/masukunhan"
    ]
  };

  return (
    <>
      <SEO 
        title="Bimbel Masuk UNHAN | Bimbingan Intensif Seleksi Universitas Pertahanan" 
        description="Bimbingan belajar masuk Universitas Pertahanan RI dengan kelas online, modul lengkap, tryout, pembahasan soal, dan mentor berpengalaman." 
        url="/"
        schema={homeSchema}
      />
    <div className="flex flex-col w-full">

      {/* Information Ticker */}
      <section className="w-full px-4 py-2 md:py-3 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center bg-white border border-blue-100 rounded-xl shadow-sm h-9 md:h-12 overflow-hidden relative pause-on-hover">
            {/* Fixed Badge */}
            <div className="z-10 bg-blue-700 text-white font-bold text-[11px] md:text-sm px-3 md:px-5 h-full flex items-center shrink-0 relative shadow-[4px_0_15px_rgba(0,0,0,0.1)]">
              <span className="mr-1.5">📢</span> INFORMASI
            </div>
            {/* Scrolling Text */}
            <div className="flex-1 overflow-hidden flex items-center h-full text-blue-900 bg-blue-50/30">
              <div className="animate-ticker pl-[100%] text-[13px] md:text-[15px] font-bold">
                Selamat kepada 40+ peserta alumni Bimbel Masuk Unhan (BMU) telah lolos masuk Universitas Pertahanan Tahun 2026 (Cohort 7) 🎉
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-2 md:pt-10 pb-5 md:pb-12 px-4 relative overflow-hidden bg-gradient-to-b from-transparent to-slate-50">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-5 md:p-12 shadow-xl shadow-blue-900/5 text-center border border-blue-50">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] md:text-sm font-bold mb-3 md:mb-4">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-600"></span>
              BIMBEL TERBESAR MASUK UNHAN
            </div>

            <h1 className="text-[22px] sm:text-[28px] md:text-5xl lg:text-6xl font-extrabold text-blue-900 tracking-tight mb-3 md:mb-4 uppercase leading-snug md:leading-tight">
              Selamat Datang Di<br/>Bimbel Masuk Unhan
            </h1>
            
            <p className="text-slate-600 text-[13px] sm:text-[15px] md:text-lg max-w-3xl mx-auto mb-5 md:mb-8 leading-relaxed text-center">
              Program belajar intensif & interaktif persiapan seleksi D3, S1 & S2 Unhan RI. Tersedia kelas private, kelas intensif, tryout berkala, dan modul lengkap dengan bimbingan mahasiswa & alumni berpengalaman
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a href="https://wa.me/6285156574081?text=Hello,%20*BMU*%0ASaya%20ingin%20konsultasi%20mengenai%20Bimbel%20Masuk%20Unhan.%20Mohon%20informasi%20lebih%20lanjut.%20Terimakasih" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white text-sm md:text-base font-semibold h-11 md:h-12 px-6 md:px-8 py-2 md:py-3 rounded-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                <MessageCircle size={20} />
                Konsultasi
              </a>
              <button onClick={() => document.getElementById('modul')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white border-2 border-slate-200 text-slate-700 text-sm md:text-base font-semibold h-11 md:h-12 px-6 md:px-8 py-2 md:py-3 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                <Book size={20} />
                Lihat Paket
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 shadow-sm border border-slate-100 text-center md:text-left">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shrink-0">
                <Book className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="font-bold text-[16px] md:text-2xl text-blue-900 leading-tight">10</div>
                <div className="text-slate-500 text-[10px] md:text-sm font-medium leading-tight">Paket</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 shadow-sm border border-slate-100 text-center md:text-left">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shrink-0">
                <MonitorPlay className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="font-bold text-[16px] md:text-2xl text-blue-900 leading-tight">3</div>
                <div className="text-slate-500 text-[10px] md:text-sm font-medium leading-tight">Kelas</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 shadow-sm border border-slate-100 text-center md:text-left">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="font-bold text-[16px] md:text-2xl text-blue-900 leading-tight">12</div>
                <div className="text-slate-500 text-[10px] md:text-sm font-medium leading-tight">Modul</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section id="fitur" className="py-5 md:py-12 bg-blue-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="text-[22px] md:text-4xl font-bold text-white mb-2 md:mb-3">Fitur Unggulan</h2>
            <p className="text-blue-100 text-[14px] md:text-base max-w-4xl mx-auto text-center">
              Bimbel online fokus persiapan Masuk Universitas Pertahanan dengan sistem terarah, materi lengkap, dan pengajar alumni Unhan berpengalaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-4 md:p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] md:text-xl font-bold text-blue-900 mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[13px] md:text-sm text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-5 md:py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="text-[22px] md:text-4xl font-bold text-blue-900 mb-2 md:mb-3">Tentang Kami</h2>
            <p className="text-slate-600 text-[14px] md:text-base max-w-5xl mx-auto text-center">
              Lebih dari 1000+ peserta sudah mendaftar di Bimbingan Belajar Masuk Unhan. Belajar efektif bareng kami bersama alumni Unhan dan mentor profesional. Bimbel Masuk Unhan by Prodtech menyediakan layanan bimbingan program Vokasi (D3), Sarjana (S1) dan magister (S2) yang dirancang khusus untuk membantu siswa lolos seleksi/tes Universitas Pertahanan RI (Unhan). Kami hadir dengan pendekatan online interaktif, intensif, dan komprehensif.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden shadow-xl shadow-blue-900/5 border border-blue-50 flex items-center justify-center min-h-[250px] md:min-h-0 md:h-[400px] lg:h-full relative group">
              <img src="/lulus-unhan.png" alt="40+ Peserta Alumni Lolos Unhan" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-5 md:p-8 shadow-xl shadow-blue-900/5 border border-blue-50">
              <h3 className="text-[20px] md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Mengapa Memilih Kami?</h3>
              <p className="text-slate-600 text-[14px] md:text-base mb-2 md:mb-3 text-justify font-bold">
                Belajar Dengan Yang Terbaik, Lolos Dengan Pasti
              </p>
              <p className="text-slate-600 text-[13px] md:text-sm mb-5 md:mb-6 text-justify">
                Masuk Unhan bukan perkara mudah — tapi bukan berarti mustahil. Di Bimbel Masuk Unhan (BMU), kami hadir bukan hanya sebagai tempat belajar, tapi sebagai tim pendampingmu sampai lolos. Kami membantu peserta mempersiapkan seleksi Universitas Pertahanan melalui modul pembelajaran, kelas online, tryout terstruktur dan pembahasan berkualitas, serta pengalaman simulasi yang mendekati ujian asli.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Kurikulum terstruktur berbasis pengalaman nyata",
                  "Simulasi mendekati pengalaman ujian asli",
                  "Pembahasan membantu memahami pola soal",
                  "Rekaman kelas bisa diakses ulang"
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="text-blue-700 shrink-0" size={20} />
                    <span className="text-sm font-medium text-blue-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modul Pembelajaran */}
      <section id="modul" className="py-5 md:py-12 bg-blue-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 md:mb-8">
            <div className="text-left">
              <h2 className="text-[22px] md:text-4xl font-bold text-white mb-2 md:mb-3">Modul Pembelajaran</h2>
              <p className="text-blue-100 text-[14px] md:text-base max-w-2xl text-justify sm:text-left">
                Berbagai modul untuk membantu persiapan seleksimu.
              </p>
            </div>
            <Link to="/modul" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap h-11 md:h-12 w-full sm:w-auto">
              Lihat Semua <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {modules.map((modul, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                {/* Card Header/Banner */}
                <div className={`h-32 relative bg-gradient-to-br ${modul.gradient}`}>
                  <img src={modul.image} alt={modul.title} loading="lazy" width="400" height="200" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Book size={12} /> {modul.type}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <BarChart3 size={12} /> {modul.bank}
                    </span>
                  </div>
                  <div className="absolute bottom-3 inset-x-0 text-center">
                    <span className="text-white/80 font-bold tracking-wider text-xs">MODUL PEMBELAJARAN</span>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[16px] md:text-lg text-blue-900 mb-1 leading-tight">{modul.title}</h3>
                  <div className="text-[11px] md:text-xs text-slate-500 mb-2 md:mb-3">MODUL • MATERI • SOAL • PEMBAHASAN</div>
                  <p className="text-slate-600 text-[12px] md:text-sm mb-4 md:mb-5 flex-grow text-justify">{modul.description}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 mt-auto pt-3 md:pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-[12px] md:text-sm font-bold rounded-full border border-emerald-100">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Tersedia
                    </div>
                    <a href="https://masuk-unhan.myr.id/ebook/" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 text-[13px] md:text-sm font-semibold px-4 h-10 flex items-center justify-center rounded-lg hover:bg-blue-100 transition-colors gap-2">
                      <LogIn size={16} /> Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paket Tryout */}
      <section id="paket" className="py-5 md:py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 md:mb-8">
            <div className="text-left">
              <h2 className="text-[22px] md:text-4xl font-bold text-blue-900 mb-2 md:mb-3">Paket Tryout</h2>
              <p className="text-slate-600 text-[14px] md:text-base max-w-2xl text-justify sm:text-left">
                Berikut paket yang tersedia di sistem. Semua konten di bawah ini diambil langsung dari database.
              </p>
            </div>
            <Link to="/tryout" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl hover:bg-blue-200 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap h-11 md:h-12 w-full sm:w-auto">
              Lihat Semua <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                {/* Card Header/Banner */}
                <div className={`h-32 relative bg-gradient-to-br ${pkg.gradient}`}>
                  <img src={pkg.image} alt={pkg.title} loading="lazy" width="400" height="200" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Book size={12} /> {pkg.type}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <BarChart3 size={12} /> {pkg.bank}
                    </span>
                  </div>
                  <div className="absolute bottom-3 inset-x-0 text-center">
                    <span className="text-white/80 font-bold tracking-wider text-xs">TRYOUT PACKAGE</span>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[16px] md:text-lg text-blue-900 mb-1 leading-tight">{pkg.title}</h3>
                  <div className="text-[11px] md:text-xs text-slate-500 mb-2 md:mb-3">{pkg.type} • {pkg.bank} Soal</div>
                  <p className="text-slate-600 text-[12px] md:text-sm mb-4 md:mb-5 flex-grow text-justify">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 mt-auto pt-3 md:pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-[12px] md:text-sm font-bold rounded-full border border-emerald-100">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Tersedia
                    </div>
                    <a href="https://app.masukunhan.com/auth/register" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 text-[13px] md:text-sm font-semibold px-4 h-10 flex items-center justify-center rounded-lg hover:bg-blue-100 transition-colors gap-2">
                      <LogIn size={16} /> Daftar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kelas Online */}
      <section id="kelas" className="py-5 md:py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 md:mb-8">
            <div className="text-left">
              <h2 className="text-[22px] md:text-4xl font-bold text-blue-900 mb-2 md:mb-3">Kelas Online</h2>
              <p className="text-slate-600 text-[14px] md:text-base max-w-2xl text-justify sm:text-left">
                Kelas yang tersedia di sistem akan tampil otomatis di bawah ini sesuai data database.
              </p>
            </div>
            <Link to="/kelas-online" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-xl hover:bg-blue-200 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap h-11 md:h-12 w-full sm:w-auto">
              Lihat Semua <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {classes.map((cls, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-5 md:p-6 border border-blue-100 shadow-sm flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3 self-start">
                  <MonitorPlay size={14} />
                  {cls.tag}
                </div>
                
                <h3 className="font-bold text-[18px] md:text-xl text-blue-900 mb-2 md:mb-3 leading-tight">{cls.title}</h3>
                <p className="text-slate-600 text-[13px] md:text-sm mb-5 md:mb-6 text-justify flex-grow">{cls.description}</p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 md:pt-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-[12px] md:text-sm font-bold rounded-full border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {cls.status}
                  </div>
                  <a href="https://masuk-unhan.myr.id/bootcamp/" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 text-[13px] md:text-sm font-semibold px-4 md:px-6 h-10 md:h-11 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                    <LogIn size={16} className="md:w-[18px] md:h-[18px]" /> Daftar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-5 md:py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-5 md:mb-8">
            <h2 className="text-[22px] md:text-4xl font-bold text-blue-900 mb-2 md:mb-3">FAQ — Pertanyaan Umum</h2>
            <p className="text-slate-600 text-[14px] md:text-base text-center max-w-2xl mx-auto">
              Beberapa pertanyaan dasar yang sering ditanyakan oleh calon pengguna.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
                <button
                  className="w-full px-5 md:px-6 py-4 text-left font-bold text-[15px] md:text-base text-blue-900 hover:bg-blue-50/50 flex items-center justify-between transition-colors gap-4"
                  onClick={() => toggleFaq(idx)}
                >
                  {faq.question}
                  <ChevronDown size={20} className={`shrink-0 transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 md:px-6 pb-4 pt-1 text-[13px] md:text-sm text-slate-600 border-slate-100 text-justify">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
    </>
  );
}
