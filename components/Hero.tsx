import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barbershop Interior" 
          className="w-full h-full object-cover filter grayscale brightness-50 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
          Est. 2019 &bull; Fuengirola
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight animate-fade-in-up delay-100">
          El Arte del <br/> <span className="italic text-zinc-300">Detalle</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Donde la tradición se encuentra con la vanguardia masculina frente al Mediterráneo.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/30 text-white uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Reservar Cita
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;