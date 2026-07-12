import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Modul from './pages/Modul';
import Tryout from './pages/Tryout';
import KelasOnline from './pages/KelasOnline';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="modul" element={<Modul />} />
          <Route path="tryout" element={<Tryout />} />
          <Route path="kelas-online" element={<KelasOnline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
