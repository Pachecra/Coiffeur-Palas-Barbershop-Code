import React from 'react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const hairServices: ServiceItem[] = [
    { name: "Fade Cut & Style", price: "25€", description: "Degradado perfecto con navaja y peinado con producto premium." },
    { name: "Corte Clásico", price: "22€", description: "Tijera sobre peine, acabado natural y elegante." },
    { name: "Lavado Premium", price: "10€", description: "Masaje craneal y productos revitalizantes." }
  ];

  const beardServices: ServiceItem[] = [
    { name: "Afeitado Clásico", price: "20€", description: "Toalla caliente, aceites esenciales y navaja." },
    { name: "Perfilado Barba", price: "15€", description: "Definición de líneas y rebajado de volumen." },
    { name: "Tratamiento Barba", price: "18€", description: "Hidratación profunda con aceites orgánicos." }
  ];

  const extraServices: ServiceItem[] = [
    { name: "Black Mask", price: "12€", description: "Limpieza facial profunda." },
    { name: "Coloración (Camo)", price: "25€", description: "Disimula canas de forma natural en 5 minutos." },
    { name: "Ritual Completo", price: "55€", description: "Corte + Barba + Masaje + Bebida." }
  ];

  const ServiceCard = ({ title, items }: { title: string, items: ServiceItem[] }) => (
    <div className="glass-panel p-8 md:p-10 hover:border-white/20 transition-all duration-500 group">
      <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4 inline-block pr-10">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-baseline group/item">
            <div className="flex-1 pr-4">
              <h4 className="text-zinc-200 font-medium group-hover/item:text-white transition-colors">{item.name}</h4>
              <p className="text-xs text-zinc-500 mt-1">{item.description}</p>
            </div>
            <span className="text-white font-serif text-lg">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Nuestra Carta</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Servicios & Precios</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Cabello" items={hairServices} />
          <ServiceCard title="Barba" items={beardServices} />
          <ServiceCard title="Extras" items={extraServices} />
        </div>
      </div>
    </section>
  );
};

export default Services;