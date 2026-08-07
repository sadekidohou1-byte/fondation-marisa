import React, { useState, useEffect } from 'react';
import { 
  Globe, Phone, Mail, ChevronRight, Menu, X, 
  MapPin
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// IMPORT DE VOS PAGES
import FormationPage from './FormationPage';
import AboutPage from './AboutPage';
import InstitutionalPage from './InstitutionalPage';
 import ContactPage from './ContactPage'; // Si tu le mets dans un fichier séparé

// --- COMPOSANT ACCUEIL ---
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative pt-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-950/95 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <h1 className="text-7xl md:text-[120px] font-bold text-white uppercase mb-12 leading-none">
            Former <br/>
            <span className="text-emerald-400">aujourd'hui,</span> <br />
            <span className="text-amber-400 block mt-6">Bâtir demain.</span>
          </h1>
          <button onClick={() => navigate('/formation')} className="bg-amber-500 text-emerald-950 px-12 py-6 rounded-2xl font-black text-sm tracking-widest inline-flex items-center gap-3 transition-all hover:bg-white uppercase">
            Découvrir le centre <ChevronRight size={20}/>
          </button>
        </div>
      </section>
    </div>
  );
};

// --- COMPOSANT DE NAVIGATION (MODIFIÉ) ---
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-2xl z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center text-white">
              <Globe size={24} />
            </div>
            <span className="text-2xl font-black text-emerald-950 uppercase tracking-tighter">MARISA</span>
          </Link>
          
         <div className="hidden md:flex space-x-10 items-center">
  <Link 
    to="/about" 
    className={`text-xs font-black uppercase tracking-widest ${isActive('/about') ? 'text-emerald-800 underline decoration-amber-500 underline-offset-8' : 'text-slate-400 hover:text-emerald-800'}`}
  >
    À propos
  </Link>

  <Link 
    to="/formation" 
    className={`text-xs font-black uppercase tracking-widest ${isActive('/formation') ? 'text-emerald-800 underline decoration-amber-500 underline-offset-8' : 'text-slate-400 hover:text-emerald-800'}`}
  >
    Formation
  </Link>

  <Link 
    to="/institutional" 
    className={`text-xs font-black uppercase tracking-widest ${isActive('/institutional') ? 'text-emerald-800 underline decoration-amber-500 underline-offset-8' : 'text-slate-400 hover:text-emerald-800'}`}
  >
    Institutionnel
  </Link>

  {/* LE BOUTON CONTACT EST MAINTENANT UN LIEN CLASSIQUE COMME LES AUTRES */}
  <Link 
    to="/contact" 
    className={`text-xs font-black uppercase tracking-widest ${isActive('/contact') ? 'text-emerald-800 underline decoration-amber-500 underline-offset-8' : 'text-slate-400 hover:text-emerald-800'}`}
  >
    Contact
  </Link>
</div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-emerald-900">
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE (MODIFIÉ) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 flex flex-col space-y-8 pt-32 text-left">
            <button onClick={() => {navigate('/'); setIsMenuOpen(false)}} className="text-2xl font-black uppercase border-b pb-4">Accueil</button>
            <button onClick={() => {navigate('/about'); setIsMenuOpen(false)}} className="text-2xl font-black uppercase border-b pb-4">À Propos</button>
            <button onClick={() => {navigate('/formation'); setIsMenuOpen(false)}} className="text-2xl font-black uppercase border-b pb-4">Formation</button>
            <button onClick={() => {navigate('/institutional'); setIsMenuOpen(false)}} className="text-2xl font-black uppercase border-b pb-4">Institutionnel</button>
            <button onClick={() => {navigate('/contact'); setIsMenuOpen(false)}} className="text-2xl font-black uppercase border-b pb-4 text-emerald-600">Contact</button>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X size={32}/></button>
        </div>
      )}
    </>
  );
};

// --- COMPOSANT APP PRINCIPAL ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/formation" element={<FormationPage />} />
            <Route path="/institutional" element={<InstitutionalPage />} />
            {/* NOUVELLE ROUTE AJOUTÉE ICI */}
            <Route path="/contact" element={<ContactPage />} /> 
          </Routes>
        </main>

        <footer className="py-20 px-6 bg-slate-50 border-t mt-20 text-left">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            <div>
              <span className="text-xl font-black text-emerald-950">MARISA AFRIQUE</span>
              <p className="text-slate-400 mt-4 italic">Fidjrossè, Cotonou, Bénin.</p>
            </div>
            <div>
              <h5 className="font-black uppercase text-xs mb-4">Coordination</h5>
              <p className="text-slate-500 font-bold flex items-center gap-2"><Phone size={14}/> +229 61 57 27 41</p>
              <p className="text-slate-500 font-bold flex items-center gap-2 mt-2"><Mail size={14}/> marisafrique@gmail.com</p>
            </div>
            <div className="bg-emerald-100 p-6 rounded-3xl">
              <p className="font-black text-emerald-900 uppercase">MarisaTV</p>
              <p className="text-xs font-bold text-amber-600">Une lumière pour tous !</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}