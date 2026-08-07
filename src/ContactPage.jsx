import React from 'react';
import { MapPin, Phone, Mail, Send, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      
      {/* --- SECTION HERO (Identique au style de ton Accueil) --- */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Image professionnelle représentant l'entraide / communauté */}
          <img 
            src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Contact Hero" 
          />
          {/* Overlay dégradé émeraude identique à ton App.js */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <p className="text-amber-400 font-black uppercase tracking-[0.3em] text-xs mb-4">Contactez la fondation</p>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none italic">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          
          {/* Breadcrumbs pour faire pro */}
          <nav className="flex items-center gap-3 mt-8 text-[10px] font-black uppercase tracking-widest text-emerald-200/60">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <span className="text-amber-500">Contact</span>
          </nav>
        </div>
      </section>

      {/* --- SECTION CONTENU --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
        
        {/* COLONNE GAUCHE : INFOS DE CONTACT */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-black text-emerald-950 uppercase mb-6 tracking-tighter text-left">Nos coordonnées</h2>
            <div className="space-y-10">
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <MapPin size={28}/>
                </div>
                <div className="text-left pt-1">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Localisation</p>
                  <p className="font-bold text-slate-700 text-xl tracking-tight leading-tight">
                    Quartier Fidjrossè, <br /> Cotonou, Bénin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <Phone size={28}/>
                </div>
                <div className="text-left pt-1">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="font-bold text-slate-700 text-xl tracking-tight">+229 61 57 27 41</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0 border border-emerald-100">
                  <Mail size={28}/>
                </div>
                <div className="text-left pt-1">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="font-bold text-slate-700 text-xl tracking-tight">marisafrique@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 shadow-sm relative overflow-hidden text-left">
          <form className="relative z-10 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Nom complet</label>
              <input type="text" placeholder="Ex: Jean Dupont" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Prénom</label>
              <input type="text" placeholder="Ex: Jean Dupont" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300" />
            </div>
            

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Email</label>
              <input type="email" placeholder="votre@email.com" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Message</label>
              <textarea placeholder="Comment pouvons-nous vous aider ?" rows="4" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300"></textarea>
            </div>

            <button type="submit" className="w-full bg-emerald-950 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3">
              Envoyer <Send size={18}/>
            </button>
          </form>
        </div>
      </div>

      {/* --- SECTION CARTE (MAPS) --- */}
      <div className="w-full h-[500px] bg-slate-100 grayscale contrast-125 border-t border-slate-200">
        <iframe 
          title="Map Marisa Afrique"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.231!2d2.34!3d6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023559194294f9d%3A0xc3415ba245464197!2zRmlkanJvc3PDqSwgQ290b25vdQ!5e0!3m2!1sfr!2sbj!4v1625000000000" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;