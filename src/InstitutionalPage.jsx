import React from 'react';
import { 
  ShieldCheck, Scale, Landmark, FileText, 
  Award, Banknote, Globe, CheckCircle2, 
  Lock, Zap
} from 'lucide-react';

const InstitutionalPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 antialiased">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Architecture Institutionnelle" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <h2 className="text-amber-500 font-black text-sm uppercase tracking-[0.5em] mb-6">Gouvernance & Structure</h2>
          <h1 className="text-6xl md:text-9xl font-bold uppercase leading-none mb-12">
            Rigueur <br/>
            <span className="text-emerald-500 italic">Patrimoniale.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
            Une fondation internationale structurée pour la pérennité, la transparence et l'impact philanthropique à long terme sur le continent africain.
          </p>
        </div>
      </section>

      {/* --- PILIERS DE GESTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
           <div className="bg-slate-50 p-12 rounded-[3rem] space-y-6 hover:shadow-xl transition-all border border-slate-100">
              <ShieldCheck size={48} className="text-emerald-700"/>
              <h4 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-none">Gestion des <br/>Actifs</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Protection et transmission sécurisée du patrimoine pour financer les missions humanitaires de manière perpétuelle.
              </p>
           </div>

           <div className="bg-slate-50 p-12 rounded-[3rem] space-y-6 hover:shadow-xl transition-all border border-slate-100">
              <Banknote size={48} className="text-emerald-700"/>
              <h4 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-none">Transparence <br/>Financière</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Audit rigoureux des flux et allocation précise des ressources vers les programmes d'éducation et de santé.
              </p>
           </div>

           <div className="bg-emerald-900 p-12 rounded-[3rem] space-y-6 text-white shadow-2xl">
              <Scale size={48} className="text-amber-400"/>
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Normes <br/>Globales</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed font-medium">
                Respect des régimes juridiques et fiscaux internationaux inspirés des meilleures pratiques (Luxembourg, Liechtenstein).
              </p>
           </div>
        </div>
      </section>

      {/* --- STRUCTURE JURIDIQUE --- */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-left">
            <h3 className="text-4xl font-black text-emerald-950 uppercase tracking-tighter">Cadre Opérationnel</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
              "La Fondation Marisa Afrique opère comme une entité pivot, coordonnant les actions sociales entre les donateurs institutionnels et les besoins du terrain."
            </p>
            
            <div className="space-y-6">
              {[
                {t: "Conformité Statutaire", d: "Statuts déposés et reconnus par les autorités compétentes."},
                {t: "Comité d'Éthique", d: "Surveillance indépendante des projets de la fondation."},
                {t: "Rayonnement International", d: "Capacité d'action multi-pays pour une cohésion africaine."}
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-700">
                    <CheckCircle2 size={20}/>
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-xs tracking-widest text-emerald-900 mb-1">{item.t}</h5>
                    <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                <Lock size={32} className="text-amber-500"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sécurité</span>
             </div>
             <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center space-y-4 translate-y-8">
                <Landmark size={32} className="text-amber-500"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Patrimoine</span>
             </div>
             <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center space-y-4">
                <FileText size={32} className="text-amber-500"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rapports</span>
             </div>
             <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center space-y-4 translate-y-8">
                <Zap size={32} className="text-amber-500"/>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Impact</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-emerald-950 p-16 rounded-[4rem] text-white">
          <h4 className="text-3xl font-black uppercase mb-8">Partenariat Institutionnel</h4>
          <p className="text-emerald-100/60 mb-10">Vous souhaitez collaborer sur des projets à grande échelle ?</p>
          <a href="mailto:marisafrique@gmail.com" className="bg-amber-500 text-emerald-950 px-12 py-5 rounded-2xl font-black text-xs tracking-widest uppercase inline-block">
            Contacter le Bureau
          </a>
        </div>
      </section>

    </div>
  );
};

export default InstitutionalPage;