import React from 'react';
import { 
  Users, Heart, Landmark, GraduationCap, 
  CheckCircle2, MessagesSquare, Activity, 
  Scale, Globe, Compass, Target, ShieldCheck,
  Handshake, Milestone, Megaphone, MapPin
} from 'lucide-react';

// Composant pour les Cartes d'Axes d'Intervention
const AxisCard = ({ icon, title, text }) => (
  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group text-left">
    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-black text-emerald-950 uppercase tracking-tighter mb-3 leading-tight">{title}</h4>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{text}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 antialiased font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 px-6 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Impact Social Afrique" className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-amber-500 font-black text-sm uppercase tracking-[0.5em] mb-6 italic">Fondation MARISA Afrique</h2>
          <h1 className="text-6xl md:text-[100px] text-white font-bold uppercase leading-none mb-8 tracking-tighter">
            Vision <span className="text-amber-400">Afrique.</span>
          </h1>
          <p className="text-emerald-50/70 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            "Transformer la foi en actions concrètes pour la paix et le développement."
          </p>
        </div>
      </section>

      {/* 2. PRÉSENTATION GÉNÉRALE (Section 1 du dossier) */}
      <section className="py-32 px-6 text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[3rem] shadow-2xl relative z-10" alt="Présentation" 
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-black text-emerald-950 uppercase tracking-tighter">Présentation <br/> <span className="text-emerald-600">Générale</span></h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              La <span className="text-emerald-800 font-black">Fondation MARISA Afrique</span> est une organisation à vocation humanitaire, interreligieuse et sociale. 
              Elle œuvre pour la paix, le développement et l’harmonie entre les peuples à travers le soutien aux confessions religieuses, 
              la formation des jeunes, l’appui aux orphelins et orphelinats, la sensibilisation à la santé et la construction de lieux de culte.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION (Section 2) */}
      <section className="py-24 px-6 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3rem] space-y-6 text-left">
            <Compass className="text-amber-400" size={40} />
            <h3 className="text-3xl font-black uppercase text-amber-400 tracking-tighter">Notre Vision</h3>
            <p className="text-emerald-50/80 text-xl font-medium leading-relaxed italic">
              "Faire de la religion un levier de développement, de paix et de solidarité sociale en Afrique."
            </p>
          </div>
          <div className="bg-emerald-900/50 border border-emerald-800 p-12 rounded-[3rem] space-y-6 text-left">
            <Target className="text-white" size={40} />
            <h3 className="text-3xl font-black uppercase text-white tracking-tighter">Notre Mission</h3>
            <p className="text-emerald-50/80 text-xl font-medium leading-relaxed italic">
              Promouvoir l’unité interreligieuse, soutenir les populations vulnérables, former la jeunesse et encourager le vivre-ensemble.
            </p>
          </div>
        </div>
      </section>

      {/* 4. AXES D'INTERVENTION (Section 4 du dossier) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.5em] mb-4">Domaines d'action</h2>
          <h3 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase tracking-tighter">Nos Axes <br/> d'Intervention</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AxisCard icon={<Landmark/>} title="Religieux" text="Construction, rénovation et équipement de lieux de culte pour les démunis." />
          <AxisCard icon={<Heart/>} title="Social" text="Soutien aux veuves, orphelins, personnes âgées et vulnérables." />
          <AxisCard icon={<GraduationCap/>} title="Éducation" text="Formation professionnelle gratuite, numérique et alphabétisation." />
          <AxisCard icon={<Activity/>} title="Santé" text="Campagnes de dépistage, dons de sang et assistance aux malades." />
          <AxisCard icon={<Scale/>} title="Paix & Cohésion" text="Séminaires interreligieux, médiation et conférences de paix." />
          <AxisCard icon={<Megaphone/>} title="Communication" text="Visibilité média via MarisaTV et caravanes de sensibilisation." />
        </div>
      </section>

      {/* 5. PUBLIC CIBLE & PARTENAIRES (Section 5 & 6) */}
      <section className="py-32 px-6 bg-emerald-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Public Cible */}
          <div className="space-y-10 text-left">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-amber-400 italic">Public Cible</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {['Communautés religieuses', 'Jeunes défavorisés', 'Orphelinats', 'Femmes et veuves', 'Personnes malades', 'Leaders locaux'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="font-bold text-xs uppercase tracking-widest text-emerald-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Partenaires */}
          <div className="space-y-10 text-left">
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Nos Partenaires</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {['ONG Nationales & Inter', 'Églises & Mosquées', 'États & Ministères', 'Diaspora Africaine', 'Fondations Philanthropiques', 'MarisaTV'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Handshake className="text-amber-500" size={20} />
                  <span className="font-bold text-[10px] uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJETS PRIORITAIRES 2025-2026 (Section 7) */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-left">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h3 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter leading-none mb-6">Projets <br/> <span className="text-emerald-500 italic">Prioritaires</span></h3>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.3em]">Horizon 2025 - 2026</p>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <ProjectRow number="01" text="Construction de 10 lieux de culte dans 5 pays africains." />
            <ProjectRow number="02" text="Lancement officiel du Centre MARISA de Formation à Cotonou." />
            <ProjectRow number="03" text="Programme d'appui direct à 100 orphelins et 10 orphelinats." />
            <ProjectRow number="04" text="Organisation du Forum International Interreligieux pour la Paix." />
          </div>
        </div>
      </section>

      {/* 7. SIÈGE ET COORDINATION (Section 9) */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex p-4 bg-emerald-950 text-white rounded-2xl mb-4 shadow-xl">
             <MapPin size={32}/>
          </div>
          <h3 className="text-3xl font-black text-emerald-950 uppercase italic tracking-tighter leading-none">Siège Mondial</h3>
          <p className="text-xl font-bold text-slate-500 leading-relaxed italic">
            Quartier Fidjrossè, Cotonou, Bénin. <br/>
            <span className="text-emerald-600 text-sm tracking-[0.2em] uppercase font-black not-italic">Des représentations locales dans toute l'Afrique.</span>
          </p>
        </div>
      </section>

    </div> 
  );
};

// Sous-composant pour la liste des projets
const ProjectRow = ({ number, text }) => (
  <div className="flex items-start gap-8 py-8 border-b border-slate-100 group">
    <span className="text-3xl font-black text-slate-200 group-hover:text-amber-500 transition-colors">{number}</span>
    <p className="text-lg font-bold text-emerald-950 group-hover:translate-x-2 transition-transform leading-snug">{text}</p>
  </div>
);

export default AboutPage;