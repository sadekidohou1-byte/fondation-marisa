import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-24 bg-white min-h-screen animate-in fade-in duration-700">
      <section className="bg-emerald-950 py-24 px-6 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-amber-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Parlons Ensemble</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-none italic tracking-tighter">Entrez en <span className="text-emerald-400 font-serif normal-case tracking-normal">Contact.</span></h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 text-left">
        <div className="space-y-12">
           <h3 className="text-3xl font-black text-emerald-950 uppercase italic underline decoration-emerald-100 underline-offset-8 decoration-8">Nos Bureaux</h3>
           <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all"><MapPin size={28}/></div>
                <div><p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Adresse</p><p className="font-bold text-slate-700 text-xl tracking-tight leading-tight">Fidjrossè, Cotonou, Bénin</p></div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all"><Phone size={28}/></div>
                <div><p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Téléphone</p><p className="font-bold text-slate-700 text-xl tracking-tight leading-tight">+229 xx xx xx xx</p></div>
              </div>
           </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
           <form className="space-y-6">
              <input type="text" placeholder="Nom Complet" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300" />
              <input type="email" placeholder="Email" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300" />
              <textarea placeholder="Votre Message" rows="4" className="w-full p-5 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none font-bold text-emerald-950 transition-all placeholder:text-slate-300"></textarea>
              <button type="submit" className="w-full bg-emerald-950 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl flex items-center justify-center gap-3">Envoyer <Send size={18}/></button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;