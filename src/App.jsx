import React, { useState, useEffect } from 'react';
import { 
  Globe, Phone, Mail, ChevronRight, Menu, X, 
  MapPin, Award, Users, Heart, ShieldCheck 
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// IMPORT DE TES PAGES
import FormationPage from './FormationPage';
import AboutPage from './AboutPage';
import InstitutionalPage from './InstitutionalPage';
import ContactPage from './ContactPage';
import GalleryPage from './GalleryPage';
import AgriculturePage from './AgriculturePage';

// --- 0. COMPOSANT LOGO MARIS ---
const LogoMaris = () => (
  <div className="flex items-center gap-3">
    {/* Symbole du Logo */}
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Le cercle (Globe) */}
      <div className="absolute inset-0 border-2 border-emerald-900 rounded-full"></div>
      {/* Le soleil (Ambre) */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
      {/* La feuille (Agriculture) */}
      <div className="text-emerald-700">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 11 6"></path>
          <path d="M11 14a4 4 0 0 1 4-4"></path>
          <path d="M11 20l4-4"></path>
        </svg>
      </div>
    </div>

    {/* Texte du Logo */}
    <div className="flex flex-col">
      <span className="text-2xl font-black text-emerald-950 leading-none tracking-tighter">
        MARIS
      </span>
      <span className="text-[9px] font-black text-amber-600 tracking-[0.3em] uppercase">
        Afrique
      </span>
    </div>
  </div>
);

// --- 1. COMPOSANT ACCUEIL ---
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-1000">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-emerald-950/80 to-emerald-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left pt-20">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-8">
             <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
             <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">Fondation maris Afrique</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black text-white uppercase leading-[0.9] tracking-tighter mb-10">
            Former <br/>
            <span className="text-emerald-400">aujourd'hui,</span> <br />
            <span className="text-amber-400 italic font-serif normal-case tracking-normal">Bâtir demain.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button 
              onClick={() => navigate('/formation')} 
              className="group bg-amber-500 text-emerald-950 px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-3 transition-all hover:bg-white uppercase shadow-2xl"
            >
              Découvrir le centre <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <p className="text-emerald-100/50 max-w-xs text-sm font-medium leading-relaxed">
              Une initiative engagée pour l'éducation professionnelle, la paix interreligieuse et la solidarité en Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION STATS */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem number="10+" label="Lieux de culte" />
            <StatItem number="100+" label="Orphelins soutenus" />
            <StatItem number="05" label="Pays d'intervention" />
            <StatItem number="2026" label="Horizon Vision" />
          </div>
        </div>
      </section>

      {/* SECTION PILLIERS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left space-y-4 mb-20">
            <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.4em]">Nos engagements</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none">Agir pour la <br/> <span className="text-emerald-600 italic">communauté.</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={32}/>} 
              title="Paix & Cohésion" 
              text="Promouvoir la coexistence pacifique et le dialogue entre les religions et les peuples."
            />
            <FeatureCard 
              icon={<Award size={32}/>} 
              title="Excellence" 
              text="Transformer la jeunesse africaine en leaders compétents et autonomes par la formation."
            />
            <FeatureCard 
              icon={<Heart size={32}/>} 
              title="Philanthropie" 
              text="Soutenir les veuves, orphelins et personnes vulnérables par des actions concrètes."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- 2. COMPOSANT NAVIGATION ---
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  const isActive = (path) => location.pathname === path;

  const navLinks = ['about', 'agriculture', 'formation', 'gallery', 'institutional', 'contact'];

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-2xl z-50 border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* LOGO MARIS INTEGRÉ ICI */}
          <Link to="/">
            <LogoMaris />
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((path) => (
              <Link 
                key={path}
                to={`/${path}`} 
                className={`text-[10px] font-black uppercase tracking-widest transition-all ${isActive(`/${path}`) ? 'text-emerald-800 underline decoration-amber-500 underline-offset-8 decoration-2' : 'text-slate-400 hover:text-emerald-800'}`}
              >
                {path === 'about' ? 'À propos' : path === 'agriculture' ? 'Agri & Élevage' : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-emerald-900 bg-slate-50 p-3 rounded-xl hover:bg-emerald-50 transition-colors">
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-8 flex flex-col space-y-6 pt-32 text-left animate-in slide-in-from-top duration-500">
            {navLinks.map((path) => (
              <button 
                key={path}
                onClick={() => {navigate(`/${path}`); setIsMenuOpen(false)}} 
                className={`text-3xl font-black uppercase border-b border-slate-50 pb-4 ${isActive(`/${path}`) ? 'text-emerald-600' : 'text-slate-900'}`}
              >
                {path === 'about' ? 'À Propos' : path === 'agriculture' ? 'Agri & Élevage' : path.charAt(0).toUpperCase() + path.slice(1)}
              </button>
            ))}
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 bg-slate-100 p-4 rounded-full text-emerald-900"><X size={28}/></button>
        </div>
      )}
    </>
  );
};

// --- 3. COMPOSANT APP PRINCIPAL ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900 antialiased">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/agriculture" element={<AgriculturePage />} />
            <Route path="/formation" element={<FormationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/institutional" element={<InstitutionalPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
          </Routes>
        </main>

        <footer className="bg-white rounded-3xl shadow-sm border border-slate-100 m-6 overflow-hidden">
            <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
              <span className="text-sm font-bold text-emerald-950 sm:text-center uppercase tracking-tighter">
                © 2026 <Link to="/" className="hover:underline">Fondation Maris Afrique™</Link>. Tous droits réservés.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-[10px] font-black uppercase tracking-widest text-slate-400 sm:mt-0">
                  <li><Link to="/about" className="hover:text-emerald-800 me-4 md:me-6">À Propos</Link></li>
                  <li><Link to="/agriculture" className="hover:text-emerald-800 me-4 md:me-6">Agriculture</Link></li>
                  <li><Link to="/institutional" className="hover:text-emerald-800 me-4 md:me-6">Institutionnel</Link></li>
                  <li><Link to="/contact" className="hover:text-emerald-800">Contact</Link></li>
              </ul>
            </div>
        </footer>
      </div>
    </Router>
  );
}

// --- SOUS-COMPOSANTS ---
const StatItem = ({ number, label }) => (
  <div className="text-left space-y-1">
    <p className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tighter italic leading-none">{number}</p>
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, text }) => (
  <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 text-left group">
    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h4 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter mb-4">{title}</h4>
    <p className="text-slate-500 font-medium leading-relaxed text-sm">{text}</p>
  </div>
); 