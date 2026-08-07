import React from 'react';
import { 
  Users, Heart, Landmark, GraduationCap, 
  CheckCircle2, MessagesSquare, Activity, 
  Scale, Globe, Compass, Target, ShieldCheck
} from 'lucide-react';

// Composant pour les Objectifs Stratégiques
const ObjectiveItem = ({ icon, title, text }) => (
  <div className="space-y-4 p-8 border border-slate-50 hover:border-slate-200 transition-all rounded-[2.5rem] group text-left bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all text-emerald-700">
      {icon}
    </div>
    <h4 className="text-xl font-black text-emerald-950 uppercase tracking-tighter leading-tight">{title}</h4>
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
            alt="Impact Social Afrique" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-amber-500 font-black text-sm uppercase tracking-[0.5em] mb-6">Notre Identité</h2>
          <h1 className="text-6xl md:text-[100px] text-white font-bold uppercase leading-none mb-8">
            Une Vision <br/>
            <span className="text-amber-400">pour l'Afrique.</span>
          </h1>
          <p className="text-emerald-50/70 text-xl max-w-2xl mx-auto font-medium leading-relaxed italic">
            "Faire de la religion un levier de développement, de paix et de solidarité sociale."
          </p>
        </div>
      </section>

      {/* 2. PRÉSENTATION GÉNÉRALE */}
      <section className="py-32 px-6 text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-[3.5rem] blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[3rem] shadow-2xl relative z-10" 
              alt="Présentation Marisa" 
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-black text-emerald-950 uppercase tracking-tighter">Présentation <br/> <span className="text-emerald-600">Générale</span></h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              La <span className="text-emerald-800 font-black text-xl">Fondation MARISA Afrique</span> est une organisation à vocation humanitaire, interreligieuse et sociale. 
              Elle œuvre pour la paix, le développement et l’harmonie entre les peuples à travers le soutien aux confessions religieuses, 
              la formation des jeunes, l’appui aux orphelins et orphelinats, la sensibilisation à la santé et la construction de lieux de culte dans les zones démunies.
            </p>
            <div className="flex gap-4">
               <div className="bg-amber-500 text-emerald-950 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest">Humanitaire</div>
               <div className="bg-emerald-950 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest">Interreligieux</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION (Nouvelle Section) */}
      <section className="py-24 px-6 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          
          {/* Carte Vision */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-emerald-950">
              <Compass size={32} />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-amber-400">Notre Vision</h3>
            <p className="text-emerald-50/80 text-xl font-medium leading-relaxed">
              Faire de la religion un levier de développement, de paix et de solidarité sociale en Afrique.
            </p>
          </div>

          {/* Carte Mission */}
          <div className="bg-emerald-900/50 border border-emerald-800 p-12 rounded-[3rem] space-y-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-white">Notre Mission</h3>
            <p className="text-emerald-50/80 text-xl font-medium leading-relaxed">
              Promouvoir l’unité interreligieuse, soutenir les populations vulnérables, former la jeunesse et encourager le vivre-ensemble.
            </p>
          </div>

        </div>
      </section>

      {/* 4. OBJECTIFS STRATÉGIQUES */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.5em] mb-4">Plan d'action</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none">Nos Objectifs <br className="md:hidden"/> Stratégiques</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ObjectiveItem 
              icon={<Landmark/>} 
              title="Lieux de Culte" 
              text="Appuyer la construction de lieux de culte pour les communautés sans moyens." 
            />
            <ObjectiveItem 
              icon={<Globe/>} 
              title="Coexistence" 
              text="Promouvoir la coexistence pacifique entre religions (islam, christianisme, animisme)." 
            />
            <ObjectiveItem 
              icon={<GraduationCap/>} 
              title="Formation Jeunes" 
              text="Organiser des formations gratuites (artisanat, numérique, leadership, entrepreneuriat)." 
            />
            <ObjectiveItem 
              icon={<Heart/>} 
              title="Soutien Orphelins" 
              text="Soutenir les orphelinats et les enfants abandonnés par des actions concrètes." 
            />
            <ObjectiveItem 
              icon={<Activity/>} 
              title="Santé Communautaire" 
              text="Organiser des campagnes de sensibilisation sur la santé au sein des communautés." 
            />
            <ObjectiveItem 
              icon={<MessagesSquare/>} 
              title="Dialogue Public" 
              text="Favoriser le dialogue constructif entre les populations et les autorités publiques." 
            />
            <div className="md:col-span-2 lg:col-span-1">
                <ObjectiveItem 
                icon={<Scale/>} 
                title="Médiation & Paix" 
                text="Créer des centres de médiation interreligieuse et de paix à travers l'Afrique." 
                />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
           <ShieldCheck size={60} className="mx-auto text-amber-500" />
           <h4 className="text-emerald-950 text-4xl md:text-6xl font-black uppercase italic leading-tight">
             Engagés pour un futur <br/> <span className="text-emerald-600 underline decoration-amber-500">solidaire.</span>
           </h4>
        </div>
      </section>

    </div> 
  );
};

export default AboutPage;