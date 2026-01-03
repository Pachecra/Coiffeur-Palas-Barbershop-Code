import React from 'react';
import { Award, Clock, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
              alt="Barber working" 
              className="w-full h-auto grayscale object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-white/20"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Artesanía y <span className="text-zinc-500 italic">Atmósfera</span>
            </h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              En Palas Barbershop, no solo cortamos cabello; esculpimos identidad. Situados en el corazón del Paseo Marítimo de Fuengirola, hemos creado un santuario masculino donde el ruido del mundo se desvanece.
            </p>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Nuestro equipo combina técnicas de la vieja escuela con tendencias modernas europeas para ofrecer un resultado impecable que respeta tu fisonomía y estilo personal.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="text-center">
                <Clock className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-serif text-white">5+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Años</div>
              </div>
              <div className="text-center border-l border-white/10">
                <Users className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-serif text-white">2k+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Clientes</div>
              </div>
              <div className="text-center border-l border-white/10">
                <Award className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-2xl font-serif text-white">100%</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Calidad</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;