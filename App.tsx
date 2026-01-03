import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import HexagonBackground from './components/HexagonBackground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="relative bg-[#0a0a0a] min-h-screen text-white overflow-hidden selection:bg-white selection:text-black">
      <HexagonBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default App;