import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F5F5F0]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight text-black">
              GET HYPED
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-black/80 hover:text-black transition text-sm uppercase tracking-wide">
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[#F5F5F0] z-40 transition-transform duration-500 transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-2xl text-black">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;