import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../LangContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: t.nav_home,     href: '#hero'     },
    { label: t.nav_about,    href: '#about'    },
    { label: t.nav_products, href: '#products' },
    { label: t.nav_contact,  href: '#contact'  },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'products', 'contact'];
    const observers = [];

    const titles = {
      hero:     'Uychi Nuts — Bosh Sahifa',
      about:    'Uychi Nuts — Biz Haqimizda',
      products: 'Uychi Nuts — Mahsulotlar',
      contact:  'Uychi Nuts — Aloqa',
    };

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            document.title = titles[id];
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#1e3a2f]/70 backdrop-blur-md shadow-md py-2"
            : "bg-[#1e3a2f]/75 backdrop-blur-sm py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="flex items-center group"
          >
            <img
              src={logo}
              alt="Uychi Nuts"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Nav links + lang */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`text-sm font-semibold transition-colors duration-200 relative pb-0.5
                      ${isActive
                        ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full'
                        : 'text-white/60 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 border-l border-white/20 pl-6 text-xs font-bold text-white/60">
              {["UZ", "RU", "EN"].map((l, i, arr) => (
                <span key={l} className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLang(l)}
                    className={`hover:text-white transition-colors uppercase ${lang === l ? "text-white underline underline-offset-4" : ""}`}
                  >
                    {l}
                  </button>
                  {i < arr.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-md"
            >
              {t.nav_order}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-lg text-white/80 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e3a2f] border-t border-white/10 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`block text-sm font-bold py-1 transition-colors
                  ${isActive ? 'text-white border-l-2 border-white pl-2' : 'text-white/60 hover:text-white'}`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <div className="flex gap-3 text-xs font-bold text-white/60">
              {["UZ", "RU", "EN"].map((l) => (
                <span
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setMenuOpen(false);
                  }}
                  className={`cursor-pointer ${lang === l ? "text-white underline underline-offset-4" : ""}`}
                >
                  {l}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm shadow-md text-center w-full"
            >
              {t.nav_order}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
