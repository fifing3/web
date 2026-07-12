import { useState } from 'react';
import { ShieldCheck, ChevronDown, Facebook, Twitter, Instagram, Mail, Phone, Menu, X } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 shadow-sm top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                <ShieldCheck size={24} />
              </div>
              <div className="font-bold flex flex-col">
                <span className="text-lg leading-tight text-blue-900 uppercase">BIMBEL MASUK</span>
                <span className="text-sm text-slate-500 leading-tight">UNIVERSITAS PERTAHANAN</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-sm">
              <Link to="/" className="text-slate-900 hover:text-blue-700">Home</Link>
              <a href="/#fitur" className="text-slate-600 hover:text-blue-700">Fitur</a>
              <a href="/#tentang" className="text-slate-600 hover:text-blue-700">Tentang</a>
              <Link to="/modul" className="text-slate-600 hover:text-blue-700">Modul</Link>
              <Link to="/tryout" className="text-slate-600 hover:text-blue-700">Paket</Link>
              <Link to="/kelas-online" className="text-slate-600 hover:text-blue-700">Kelas</Link>
              <a href="/#faq" className="text-slate-600 hover:text-blue-700">FAQ</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-700 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 shadow-lg">
            <div className="flex flex-col space-y-4 font-medium text-base">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 hover:text-blue-700 block py-2 border-b border-slate-50">Home</Link>
              <a href="/#fitur" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">Fitur</a>
              <a href="/#tentang" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">Tentang</a>
              <Link to="/modul" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">Modul</Link>
              <Link to="/tryout" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">Paket</Link>
              <Link to="/kelas-online" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">Kelas</Link>
              <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-700 block py-2 border-b border-slate-50">FAQ</a>
              
              <div className="flex gap-4 pt-4">
                <button className="flex-1 text-blue-700 font-semibold px-4 py-2 hover:bg-blue-50 border border-blue-200 rounded-lg transition-colors">
                  Login
                </button>
                <button className="flex-1 bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-12 pb-6 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-6">
              <div className="bg-blue-800 rounded-2xl p-6 border border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-900">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="font-bold flex flex-col">
                    <span className="text-lg leading-tight text-white">Bimbel Masuk</span>
                    <span className="text-sm text-blue-200 leading-tight">UNIVERSITAS PERTAHANAN</span>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed text-justify">
                  Platform latihan dan pembelajaran online yang dirancang untuk membantu peserta seleksi belajar lebih terstruktur, terukur, dan siap menghadapi ujian sesungguhnya.
                </p>
              </div>
            </div>

            {/* Hubungi Kami Column */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
              
              <a href="#" className="flex items-center gap-4 bg-blue-800 p-4 rounded-xl hover:bg-blue-700 border border-blue-700 transition-colors group">
                <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-white">
                  <Phone size={20} />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-sm">WhatsApp Business</div>
                  <div className="text-blue-200 text-sm">0813-1399-584</div>
                </div>
                <ChevronDown className="transform -rotate-90 text-blue-300 group-hover:text-white transition-colors" size={20} />
              </a>
              <a href="#" className="flex items-center gap-4 bg-blue-800 p-4 rounded-xl hover:bg-blue-700 border border-blue-700 transition-colors group">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                  <Mail size={20} />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-sm">Email</div>
                  <div className="text-blue-200 text-sm">bimbelunhan@gmail.com</div>
                </div>
                <ChevronDown className="transform -rotate-90 text-blue-300 group-hover:text-white transition-colors" size={20} />
              </a>
              <a href="#" className="flex items-center gap-4 bg-blue-800 p-4 rounded-xl hover:bg-blue-700 border border-blue-700 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  <Instagram size={20} />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-sm">Instagram</div>
                  <div className="text-blue-200 text-sm">@bimbelmasukunhan</div>
                </div>
                <ChevronDown className="transform -rotate-90 text-blue-300 group-hover:text-white transition-colors" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm font-medium">
            © 2026 Bimbel Masuk Unhan — Semua Hak Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
