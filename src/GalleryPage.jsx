import React, { useState } from 'react';
import { Play, Maximize2, Camera, Film, ChevronRight, X } from 'lucide-react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('photos'); 
  const [selectedVideo, setSelectedVideo] = useState(null); 

const photos = [
    { id: 1, category: 'formation', url: 'https://i.pinimg.com/1200x/c5/01/7d/c5017d3bb56ea8ea0af68fee8be34055.jpg', title: 'Cours de Numérique' },
    { 
      id: 2, 
      category: 'social', 
      url: 'https://i.pinimg.com/1200x/77/1c/6f/771c6f45491dcdf4af6a296749219fe8.jpg', 
      title: 'Donation Orphelinat' 
    },
    { id: 3, category: 'religion', url: 'https://i.pinimg.com/1200x/1e/50/0a/1e500a30cea7925a3a16728290781f85.jpg', title: 'Rencontre Interreligieuse' },
    { id: 4, category: 'formation', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800', title: 'Atelier Artisanat' },
];
  const videos = [
    { 
        id: 1, 
        category: 'evenement', 
        thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800', 
        title: 'Reportage Forum Paix', 
        duration: '03:45',
        link: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Remplace par tes liens
    },
    { 
        id: 2, 
        category: 'formation', 
        thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800', 
        title: 'Témoignage Étudiant', 
        duration: '02:15',
        link: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-700 font-sans selection:bg-amber-100">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-emerald-950 py-24 px-6 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-amber-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Médiathèque</p>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none italic tracking-tighter">
            Galerie <br/> <span className="text-emerald-400 font-serif normal-case">& Vidéos.</span>
          </h1>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900 rounded-full -mr-32 -mt-32 opacity-20"></div>
      </section>

      {/* --- SÉLECTEUR (PHOTOS / VIDÉOS) --- */}
      <div className="max-w-7xl mx-auto px-6 pt-16 flex items-center gap-8 border-b border-slate-100">
        <button 
          onClick={() => setActiveTab('photos')}
          className={`pb-6 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'photos' ? 'text-emerald-950 border-b-4 border-amber-500' : 'text-slate-400'}`}
        >
          <Camera size={16}/> Photos
        </button>
        <button 
          onClick={() => setActiveTab('videos')}
          className={`pb-6 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'videos' ? 'text-emerald-950 border-b-4 border-amber-500' : 'text-slate-400'}`}
        >
          <Film size={16}/> Vidéos
        </button>
      </div>

      {/* --- CONTENU --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-32 text-left">
        {activeTab === 'photos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-500">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <img src={photo.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={photo.title}/>
                <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-amber-400 font-black uppercase text-[10px] tracking-widest mb-2">{photo.category}</p>
                  <h4 className="text-white text-xl font-black uppercase tracking-tighter">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-500">
            {videos.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setSelectedVideo(video.link)}
                className="group relative h-80 rounded-[3rem] overflow-hidden bg-slate-900 shadow-xl border border-slate-100 cursor-pointer"
              >
                <img src={video.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={video.title}/>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-emerald-950 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play fill="currentColor" size={32} />
                   </div>
                </div>
                <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-left">
                    <p className="text-amber-400 font-black uppercase text-[10px] tracking-widest mb-2">{video.category}</p>
                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter leading-none">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- LECTEUR VIDÉO (MODAL) --- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-emerald-950/95 flex items-center justify-center p-6 animate-in fade-in duration-300">
            <button onClick={() => setSelectedVideo(null)} className="absolute top-10 right-10 text-white bg-white/10 p-4 rounded-full hover:bg-amber-500 transition-colors">
                <X size={24}/>
            </button>
            <div className="w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <iframe src={selectedVideo} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;