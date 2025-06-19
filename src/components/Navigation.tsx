import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Portfolio',
    href: '/portfolio'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link to="/">
              <img src="/lovable-uploads/469c07a6-1c73-459f-a252-b0818dd04a2f.png" alt="MaroLens Logo" className="h-14 w-auto hover:scale-120 transition-transform duration-300" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <Link key={item.name} to={item.href} className={`transition-all duration-500 font-medium relative group animate-fade-in ${location.pathname === item.href ? 'text-pink-400' : 'text-gray-700 hover:text-pink-400'}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                {location.pathname === item.href && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"></span>}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-pink-400 transition-all duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden w-full mt-2 bg-black/10 backdrop-blur-md rounded-xl animate-slide-in-bottom">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium animate-fade-in ${location.pathname === item.href ? 'text-pink-400 bg-white/10' : 'text-white hover:text-pink-300 hover:bg-white/5'}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;