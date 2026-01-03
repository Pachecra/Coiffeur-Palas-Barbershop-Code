import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1599351431202-6e0000a40bc2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593702295094-aea8c5c13d7b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1635273051937-9384d72e7e78?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
           <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Portfolio</span>
           <h2 className="text-4xl font-serif text-white mt-2">Nuestros Trabajos</h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <Instagram size={20} />
          <span className="text-sm uppercase tracking-wider">@palas_fuengirola</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {images.map((src, i) => (
          <div key={i} className="relative group overflow-hidden aspect-square cursor-pointer">
            <img 
              src={src} 
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;