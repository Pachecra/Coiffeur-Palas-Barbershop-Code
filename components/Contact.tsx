import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="space-y-12">
            <div>
              <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Visítanos</span>
              <h2 className="text-4xl font-serif text-white mt-4 mb-6">Encuéntranos frente al mar</h2>
              <p className="text-zinc-400 text-lg">Paseo Marítimo Rey de España 124, <br/> 29640 Fuengirola, Málaga.</p>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                <Phone className="text-white w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Teléfono</h4>
                  <p className="text-zinc-400">+34 952 000 000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-white w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-zinc-400">citas@palasbarber.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-white w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Horario</h4>
                  <p className="text-zinc-400">Lun - Vie: 10:00 - 20:00</p>
                  <p className="text-zinc-400">Sáb: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-lg overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-zinc-900 animate-pulse z-0"></div>
             {/* Styled Grayscale Map Iframe */}
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.591024623788!2d-4.622547023471025!3d36.54138847930801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd731e0892095555%3A0x6734106560376722!2sP.%C2%BA%20Mar%C3%ADtimo%20Rey%20de%20Espa%C3%B1a%2C%2029640%20Fuengirola%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1715421234567!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 map-grayscale opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;