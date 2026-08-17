import React from 'react';
import { 
  Camera, Laptop, Lightbulb, GraduationCap, 
  ChevronRight, Zap, BookOpen, Rocket, CheckCircle2 
} from 'lucide-react';

const FormationPage = ({ onContactClick }) => {
  return (
    <div className="animate-in fade-in duration-700 text-left">
      {/* --- HERO ACADÉMIE --- */}
      <section className="relative pt-24 min-h-[80vh] flex items-center overflow-hidden bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-amber-400 font-black text-sm uppercase tracking-[0.5em] mb-6">Académie d'Excellence</h2>
            <h1 className="font-black text-6xl md:text-[110px] uppercase leading-[0.9] tracking-tighter mb-12">
              L'Avenir par le <br/>
              <span className="italic text-amber-400 normal-case font-serif tracking-normal">Savoir-Faire.</span>
            </h1>
            <p className="text-emerald-100/70 text-xl max-w-2xl font-medium leading-relaxed mb-12">
              Le Centre Maris de Formation transforme les talents bruts en experts certifiés. 
              Des cursus intensifs, gratuits et orientés vers le marché de l'emploi.
            </p>
           
          </div>
        </div>
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
      </section>

      {/* --- GRILLE DES PROGRAMMES --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
           <h3 className="text-xs font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Nos pôles d'apprentissage</h3>
           <h4 className="text-4xl md:text-5xl font-black text-emerald-950 uppercase tracking-tighter">Des filières tournées <br/><span className="text-emerald-600">vers l'avenir.</span></h4>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProgramCard 
            img="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
            title="Audiovisuel & Media"
            icon={<Camera/>}
            list={['Réalisation & Cadrage','Montage Vidéo Pro','Photographie','Gestion de marisTV']}
          />
          <ProgramCard 
            img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
            title="Numérique & TIC"
            icon={<Laptop/>}
            list={['Développement Web','Maintenance Système','Cybersécurité','Réseaux Informatiques']}
          />
          <ProgramCard 
            img="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            title="Leadership & Projets"
            icon={<Lightbulb/>}
            list={['Entrepreneuriat','Gestion de Projets','Leadership Social','Prise de parole']}
          />
          <ProgramCard 
            img="https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800"
            title="Artisanat Créatif"
            icon={<GraduationCap/>}
            list={['Métiers d\'Art','Design Local','Création de produits','Autonomie manuelle']}
          />
        </div>
      </section>

      {/* --- MÉTHODOLOGIE --- */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-sm font-black text-amber-500 uppercase tracking-[0.5em] mb-4">La Méthode maris</h3>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Feature icon={<Zap/>} title="Pratique (80%)" text="Apprentissage par l'action. Chaque cours débouche sur un projet réel." />
            <Feature icon={<BookOpen/>} title="Zéro Frais" text="Formation entièrement gratuite pour les jeunes et femmes sélectionnés." />
            <Feature icon={<Rocket/>} title="Incubation" text="Accompagnement après la formation pour créer votre propre entreprise." />
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SOUS-COMPOSANTS ---
const ProgramCard = ({ img, title, icon, list }) => (
  <div className="group relative h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 text-left">
    <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-90" />
    <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-xl p-5 rounded-2xl text-white transform group-hover:rotate-6 transition-all">{icon}</div>
    <div className="absolute bottom-0 p-12 w-full">
      <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{title}</h4>
      <ul className="space-y-3">
         {list.map((item, i)=>(
            <li key={i} className="flex items-center gap-3 text-white/80 text-[10px] font-black uppercase tracking-widest">
               <CheckCircle2 size={14} className="text-amber-400"/> {item}
            </li>
         ))}
      </ul>
    </div>
  </div>
);

const Feature = ({ icon, title, text }) => (
  <div className="space-y-6 p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-slate-50">
    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mx-auto">{icon}</div>
    <h5 className="text-xl font-black text-emerald-950 uppercase tracking-tighter">{title}</h5>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{text}</p>
  </div>
);

export default FormationPage;