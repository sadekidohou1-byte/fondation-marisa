import React from 'react';
import { Sprout, Beef, ShieldCheck } from 'lucide-react';

const AgriculturePage = () => {
    return (
        <div className="pt-24 animate-in fade-in duration-700">
            
            {/* --- NOUVELLE HERO SECTION (STYLE VISION AFRIQUE) --- */}
            <section className="relative py-32 px-6 overflow-hidden bg-emerald-950">
               

                <div className="max-w-7xl mx-auto relative z-10 text-center pt-10">
                    <h2 className="text-amber-500 font-black text-sm uppercase tracking-[0.5em] mb-6 italic">
                        Fondation maris Afrique
                    </h2>
                    <h1 className="text-6xl md:text-[100px] text-white font-bold uppercase leading-none mb-8 tracking-tighter">
                        Agri & <span className="text-amber-400">Élevage.</span>
                    </h1>
                    <p className="text-emerald-50/70 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        "Moderniser nos terres pour nourrir l'avenir du Bénin et bâtir une autonomie durable par le savoir-faire."
                    </p>
                </div>
            </section>

            {/* --- SECTION AGRICULTURE (PÔLE VÉGÉTAL) --- */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Pôle Végétal</h2>
                        <h3 className="text-4xl font-black text-emerald-950 uppercase mb-6">Une agriculture <br />diversifiée et durable</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Le Bénin regorge de richesses. Nous travaillons sur la valorisation de filières clés :
                            l'ananas pain de sucre, la noix de cajou, et les cultures maraîchères bio pour les marchés locaux.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-emerald-500">
                                <p className="font-black text-emerald-950 text-sm uppercase">Cultures de rente</p>
                                <p className="text-xs text-slate-500">Cajou, Coton, Karité</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-amber-500">
                                <p className="font-black text-emerald-950 text-sm uppercase">Maraîchage</p>
                                <p className="text-xs text-slate-500">Produits 100% Organiques</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
                        <img
                            src="https://i.pinimg.com/originals/d2/31/3b/d2313bf47264e5aad16515bc9070ef32.jpg"
                            alt="Agriculture Bénin"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000";
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* --- SECTION ÉLEVAGE (PÔLE ANIMAL) --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <div className="order-2 md:order-1 rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
                        <img
                            src="https://i.pinimg.com/originals/8b/91/4d/8b914dd4bc589af1243f44f84374c1db.jpg"
                            alt="Élevage Bénin"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-xs font-black text-amber-600 uppercase tracking-[0.4em] mb-4">Pôle Animal</h2>
                        <h3 className="text-4xl font-black text-emerald-950 uppercase mb-6">Élevage moderne <br />et respectueux</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            De l'élevage bovin dans le Nord à l'aviculture dans le Sud, nous formons les jeunes
                            aux techniques de production de viande et d'œufs pour réduire les importations au Bénin.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-bold text-emerald-950"><ShieldCheck className="text-emerald-500" /> Amélioration des races locales</li>
                            <li className="flex items-center gap-3 font-bold text-emerald-950"><ShieldCheck className="text-emerald-500" /> Santé animale et biosécurité</li>
                            <li className="flex items-center gap-3 font-bold text-emerald-950"><ShieldCheck className="text-emerald-500" /> Transformation laitière</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgriculturePage;