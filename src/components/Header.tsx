import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../components/icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#about" className="text-xl font-bold text-gray-900">
            DCRE
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <div className={mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {links.map(({ href, text }) => (
        <a
          key={href}
          href={href}
          onClick={onClick}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {text}
        </a>
      ))}
    </div>
  );
};

export default Header;