"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LangContext';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    TR: [
      { name: 'Ürün', href: '/' },
      { name: 'Hakkımızda', href: '/about' },
      { name: 'İletişim', href: '/contact' },
    ],
    EN: [
      { name: 'Product', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ]
  };

  const currentLinks = navLinks[lang];
  const demoText = lang === 'TR' ? 'Demo İndir' : 'Download Demo';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-sm h-[70px] md:h-[80px]' 
          : 'bg-surface border-b border-transparent h-[80px] md:h-[96px]'
      } flex items-center`}
    >
      <div className="container-strict flex items-center justify-between">
        
        {/* Logo - Responsive size */}
        <Link href="/" className="flex items-center gap-2 z-20">
          <div className="flex items-center text-[color:var(--color-brand-dark)]">
            <span className="font-display font-normal text-xl md:text-4xl tracking-wide">FREE</span>
            <span className="font-display font-extrabold text-[color:var(--color-primary)] text-xl md:text-4xl tracking-wide ml-1">PARK</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[40px] z-10">
          {currentLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-semibold transition-colors duration-200 ${
                  isActive ? 'text-[color:var(--color-primary-dark)]' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6 z-20">
          <div className="flex items-center gap-4">
            {/* TR / EN Switcher */}
            <div className="flex items-center gap-1 text-sm font-bold bg-surface-2 p-1 rounded-full border border-border">
              <button 
                onClick={() => setLang('TR')}
                className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'TR' ? 'bg-[color:var(--color-primary)] text-[color:var(--color-brand-dark)]' : 'text-text-muted hover:text-text-main'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLang('EN')}
                className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'EN' ? 'bg-[color:var(--color-primary)] text-[color:var(--color-brand-dark)]' : 'text-text-muted hover:text-text-main'}`}
              >
                EN
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 border border-border text-text-main hover:text-[color:var(--color-primary)] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="btn-primary ml-2 font-bold">
              {demoText}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle - Simplified for small screens */}
        <div className="md:hidden flex items-center z-20">
          <button
            className="text-text-main p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-surface flex flex-col pt-[80px] px-8 z-40"
          >
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto mt-8">
              {currentLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-display font-bold pb-4 border-b border-border ${
                      isActive ? 'text-[color:var(--color-primary-dark)]' : 'text-text-main'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Toggles moved inside mobile menu for better fit */}
              <div className="flex items-center justify-between py-4 mt-4">
                <span className="font-bold text-text-muted">{lang === 'TR' ? 'Dil / Tema' : 'Lang / Theme'}</span>
                <div className="flex items-center gap-4">
                  {/* TR / EN Switcher */}
                  <div className="flex items-center gap-1 text-xs font-bold bg-surface-2 p-1 rounded-full border border-border">
                    <button 
                      onClick={() => setLang('TR')} 
                      className={`px-3 py-1.5 rounded-full ${lang === 'TR' ? 'bg-[color:var(--color-primary)] text-[color:var(--color-brand-dark)]' : 'text-text-muted'}`}
                    >
                      TR
                    </button>
                    <button 
                      onClick={() => setLang('EN')} 
                      className={`px-3 py-1.5 rounded-full ${lang === 'EN' ? 'bg-[color:var(--color-primary)] text-[color:var(--color-brand-dark)]' : 'text-text-muted'}`}
                    >
                      EN
                    </button>
                  </div>
                  {/* Dark Mode Toggle */}
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 border border-border text-text-main"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>

              <button className="btn-primary w-full mt-4 py-4 text-lg font-bold">
                {demoText}
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Close button at bottom for mobile convenience */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-auto mb-12 self-center p-4 rounded-full bg-surface-2 border border-border text-text-muted"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}