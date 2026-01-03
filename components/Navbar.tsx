import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 border border-white/20 rounded-sm group-hover:border-white/60 transition-colors">
            <Scissors className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-serif font-bold tracking-widest text-white">PALAS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors text-[11px]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Reservar Cita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg font-serif"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black text-center py-3 font-bold uppercase"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;