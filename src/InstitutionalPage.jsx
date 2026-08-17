import React from 'react';
import { 
  ShieldCheck, Scale, Landmark, FileText, 
  Banknote, CheckCircle2, Lock, Zap, ChevronRight
} from 'lucide-react';

const InstitutionalPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 animate-in fade-in duration-1000 font-sans selection:bg-amber-100">
      
      {/* --- 1. HERO SECTION (Identité Visuelle Forte) --- */}
      <section className="relative py-32 px-6 bg-emerald-950 text-white overflow-hidden text-left">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Architecture Institutionnelle" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-8">
             <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
             <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">Gouvernance & Structure</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-black uppercase leading-[0.9] tracking-tighter mb-12">
            Rigueur <br/>
            <span className="text-emerald-400 italic font-serif normal-case tracking-normal">Patrimoniale.</span>
          </h1>
          <p className="text-emerald-100/60 text-xl max-w-2xl font-medium leading-relaxed italic">
            "Une fondation internationale structurée pour la pérennité, la transparence et l'impact philanthropique à long terme."
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
      </section>

      {/* --- 2. PILIERS DE GESTION (Cartes Premium) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
           <ManagementCard 
              icon={<ShieldCheck size={40}/>} 
              title="Gestion des Actifs" 
              text="Protection et transmission sécurisée du patrimoine pour financer les missions humanitaires de manière perpétuelle." 
           />
           <ManagementCard 
              icon={<Banknote size={40}/>} 
              title="Transparence" 
              text="Audit rigoureux des flux et allocation précise des ressources vers les programmes d'éducation et de santé." 
           />
           <div className="bg-emerald-900 p-12 rounded-[3.5rem] space-y-6 text-white shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left">
              <Scale size={40} className="text-amber-400"/>
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Normes <br/>Globales</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed font-medium">
                Respect des régimes juridiques internationaux inspirés des meilleures pratiques (Luxembourg, Liechtenstein).
              </p>
           </div>
        </div>
      </section>

      {/* --- 3. CADRE OPÉRATIONNEL (Style Template Moderne) --- */}
      <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-left">
            <div>
              <h3 className="text-xs font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Structure juridique</h3>
              <h4 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none">Cadre <br/> <span className="text-emerald-600 italic">Opérationnel.</span></h4>
            </div>
            
            <div className="space-y-8">
              <CheckItem title="Conformité Statutaire" desc="Statuts déposés et reconnus par les autorités compétentes." />
              <CheckItem title="Comité d'Éthique" desc="Surveillance indépendante des projets de la fondation." />
              <CheckItem title="Rayonnement International" desc="Capacité d'action multi-pays pour une cohésion africaine." />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="absolute -inset-10 bg-emerald-500/5 blur-[100px] -z-10"></div>
             <SmallMetricBox icon={<Lock size={24}/>} label="Sécurité" delay="delay-0" />
             <SmallMetricBox icon={<Landmark size={24}/>} label="Patrimoine" delay="delay-100" translate />
             <SmallMetricBox icon={<FileText size={24}/>} label="Rapports" delay="delay-200" />
             <SmallMetricBox icon={<Zap size={24}/>} label="Impact" delay="delay-300" translate />
          </div>
        </div>
      </section>

      {/* --- 4. CALL TO ACTION (Fin de page Prestige) --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-emerald-950 p-16 md:p-24 rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h4 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">Partenariat Institutionnel</h4>
            <p className="text-emerald-100/60 text-lg font-medium">Vous souhaitez collaborer sur des projets à grande échelle ou devenir un partenaire stratégique ?</p>
            <div className="pt-4">
              <a 
                href="mailto:marisfrique@gmail.com" 
                className="bg-amber-500 text-emerald-950 px-12 py-6 rounded-2xl font-black text-xs tracking-widest uppercase inline-flex items-center gap-4 hover:bg-white transition-all shadow-xl"
              >
                Contacter le Secrétariat <ChevronRight size={18}/>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// --- SOUS-COMPOSANTS ---

const ManagementCard = ({ icon, title, text }) => (
  <div className="bg-white p-12 rounded-[3.5rem] space-y-6 hover:shadow-2xl transition-all duration-500 border border-slate-100 text-left group">
    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 group-hover:bg-amber-500 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-none">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{text}</p>
  </div>
);

const CheckItem = ({ title, desc }) => (
  <div className="flex gap-6 items-start group">
    <div className="mt-1 bg-emerald-100 p-2 rounded-xl text-emerald-700 group-hover:bg-amber-500 group-hover:text-white transition-all">
      <CheckCircle2 size={20}/>
    </div>
    <div>
      <h5 className="font-black uppercase text-xs tracking-[0.2em] text-emerald-900 mb-1">{title}</h5>
      <p className="text-slate-400 text-sm font-medium">{desc}</p>
    </div>
  </div>
);

const SmallMetricBox = ({ icon, label, translate = false }) => (
  <div className={`bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center justify-center text-center space-y-4 border border-slate-50 hover:shadow-xl transition-all duration-500 ${translate ? 'lg:translate-y-12' : ''}`}>
    <div className="text-amber-500">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{label}</span>
  </div>
);

export default InstitutionalPage;