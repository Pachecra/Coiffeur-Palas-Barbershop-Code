import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <p className="text-zinc-600 text-sm">
        &copy; {new Date().getFullYear()} Coiffeur Palas & Barbershop. Fuengirola. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;