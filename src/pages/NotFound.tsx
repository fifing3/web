import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 Halaman Tidak Ditemukan | Bimbel Masuk Unhan" 
        description="Maaf, halaman yang Anda cari tidak ditemukan. Kembali ke halaman utama Bimbel Masuk Unhan." 
        url="/404"
      />
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="w-24 h-24 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
          <ArrowLeft size={18} /> Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
