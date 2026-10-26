import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import useActiveSection from '@/utils/useActiveSection';

// Order must match the order of the sections on the page (used for the active-link highlight)
const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#features', label: 'What You Learn' },
  { href: '#how-it-works', label: 'How It Works' },
  // { href: '#testimonials', label: 'Our Approach' },
  // { href: '#pricing', label: 'Learning Tracks' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us'}
];
const sectionIds = [...links.map((l) => l.href.slice(1)), 'contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (href: string) =>
    `nav-link transition-colors ${active === href.slice(1) ? 'text-shasti-purple is-active' : 'text-gray-300 hover:text-white'}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-shasti-blue/80 backdrop-blur-md py-2 shadow-lg' : 'py-4'}`}>
      {/* scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-shasti-purple to-shasti-light-purple transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo-emblem.png" alt="Shasti Profits logo" className="h-12 w-auto mix-blend-screen" />
          <span className="leading-tight">
            <span className="block text-xl font-bold text-white">Shasti Profits</span>
            <span className="block text-[10px] tracking-[0.3em] text-shasti-purple uppercase">Future Wealth</span>
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden xl:flex items-center space-x-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center space-x-4">
          <a href="#contact">
            <Button className="btn-glow bg-shasti-purple hover:bg-shasti-dark-purple text-white">Contact Us</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="xl:hidden text-white" aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-shasti-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`${linkClass(l.href)} block py-2`} onClick={() => setIsMobileMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-shasti-purple hover:bg-shasti-dark-purple text-white w-full">Contact Us</Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
