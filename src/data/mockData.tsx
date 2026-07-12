import { Book, LayoutDashboard, MonitorPlay, MessageCircle, BarChart3, Clock, ShieldCheck, CheckCircle2, ChevronDown, Facebook, Twitter, Instagram, Mail, Phone, LogIn } from 'lucide-react';

export const features = [
  {
    icon: <Book className="w-6 h-6 text-blue-700" />,
    title: "Materi Terstruktur",
    description: "Materi disusun sistematis agar belajar memiliki alur yang jelas, bertahap, dan lebih mudah diikuti. Materi disusun berdasarkan tes tahun sebelumnya dan FR dari peserta seleksi"
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-blue-700" />,
    title: "Simulasi Tryout",
    description: "Waktu dan aturan dibuat mendekati ujian asli untuk melatih teknik, fokus, serta mental menghadapi seleksi."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-700" />,
    title: "Pembahasan Interaktif",
    description: "Pembahasan dibuat lebih jelas dan runtut agar peserta cepat paham dan tidak mengulang kesalahan yang sama."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-700" />,
    title: "Kelas Online",
    description: "Kelas bersama mentor mahasiswa dan alumni Unhan yang berpengalaman mengenai seleksi masuk UNHAN"
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-700" />,
    title: "Akses Fleksibel",
    description: "Belajar bisa dilakukan kapan saja sehingga cocok untuk pelajar kelas 11, kelas 12, gapyears dan mahasiswa, maupun peserta yang sudah bekerja."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
    title: "Privasi & Keamanan",
    description: "Data peserta dikelola dengan kontrol akses yang baik agar pengalaman belajar tetap aman dan nyaman."
  }
];

export const packages = [
  {
    type: "BUNDLING",
    bank: "PER PAKET",
    title: "PAKET TRYOUT TKD UNHAN 2027",
    description: "Simulasi CAT, pembahasan, dan analisis nilai untuk membantu kamu meningkatkan performa belajar...",
    price: "Rp20.000",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900"
  },
  {
    type: "BUNDLING",
    bank: "PER PAKET",
    title: "PAKET TRYOUT PSIKOLOGI UNHAN 2027 - S1/D3",
    description: "Simulasi CAT, pembahasan, dan analisis nilai untuk membantu kamu meningkatkan performa belajar...",
    price: "Rp45.000",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900"
  },
  {
    type: "BUNDLING",
    bank: "PER PAKET",
    title: "PAKET TRYOUT TKBI ENGLISHSCORE UNHAN 2027 - S1/D3",
    description: "Simulasi tryout sama dengan asli di englishscore dilengkapi dengan pembahasan setiap soalnya...",
    price: "Rp55.000",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900"
  },
];

export const modules = [
  {
    title: "Modul Tes Kompetensi Dasar (TKD) UNHAN",
    description: "Materi lengkap TWK, TIU, dan TKP sesuai kisi-kisi terbaru. Materi berdasarkan pengalaman peserta tes tahun sebelumnya.",
    icon: <Book className="w-8 h-8 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900",
    type: "MODUL",
    bank: "LENGKAP",
    price: "Rp25.000"
  },
  {
    title: "Modul Tes Pemeriksaan Psikologi (RIKPSI) UNHAN",
    description: "Kumpulan materi dan latihan soal psikotes Universitas Pertahanan. Materi berdasarkan pengalaman peserta tes tahun sebelumnya.",
    icon: <Book className="w-8 h-8 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900",
    type: "MODUL",
    bank: "LENGKAP",
    price: "Rp20.000"
  },
  {
    title: "Tes Kamampuan Bahasa Inggris (TKBI) - Englishscore",
    description: "Materi dan latihan soal sesuai dengan standart British Council English Score serta dilengkapi dengan tips dan trik menjawab soal.",
    icon: <Book className="w-8 h-8 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    gradient: "from-blue-700 to-blue-900",
    type: "MODUL",
    bank: "PANDUAN",
    price: "Rp15.000"
  }
];

export const classes = [
  {
    tag: "KELAS ONLINE",
    title: "KELAS PRIVATE 1 TUTOR 1 SISWA",
    description: "BIMBINGAN INTENSIF 3 BULAN MENUJU TES MASUK UNHAN 2027. BELAJAR SEMUA MATERI TES UNHAN DAN DAPAT SEMUA BENEFIT BIMBEL SERTA JADWAL FLEKSIBEL MENGIKUTI PESERTA.",
    status: "Tersedia"
  },
  {
    tag: "KELAS ONLINE",
    title: "KELAS INTENSIF PERSIAPAN MASUK UNHAN 2027",
    description: "BIMBINGAN INTENSIF 2 BULAN MENUJU TES MASUK UNHAN 2027. BELAJAR MATERI TKD DAN PSIKOLOGI UNHAN TERARAH, MATERI LENGKA DAN TRYOUT BERKALA.",
    status: "Tersedia"
  },
  {
    tag: "KELAS ONLINE",
    title: "KELAS EXPRESS PERSIAPAN MASUK UNHAN 2027",
    description: "BIMBINGAN EXPRESS 15 PERTEMUAN MENUJU TES MASUK UNHAN 2027. BELAJAR MATERI TKD DAN PSIKOLOGI UNHAN TERARAH, MATERI LENGKAP DAN TRYOUT BERKALA.",
    status: "Tersedia"
  }
];

export const faqs = [
  {
    question: "Apa itu Bimbel Masuk Unhan?",
    answer: "Bimbel Masuk Unhan adalah platform belajar online dan tryout yang difokuskan untuk persiapan seleksi masuk Universitas Pertahanan."
  },
  {
    question: "Bagaimana cara daftar?",
    answer: "Anda dapat mendaftar dengan mengklik tombol 'Daftar' di pojok kanan atas, kemudian mengisi formulir pendaftaran yang disediakan."
  },
  {
    question: "Apakah tersedia paket gratis dan premium?",
    answer: "Ya, kami menyediakan paket tryout gratis secara berkala dan juga paket premium yang lebih lengkap dan intensif."
  }
];
