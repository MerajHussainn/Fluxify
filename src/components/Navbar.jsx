import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  /* ---------- scroll-hide navbar (existing) ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current <= 100 || current < lastScrollY);
      setLastScrollY(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* ---------- active link CSS (no state) ---------- */
  const activeClass = ({ isActive }) =>
    `nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive ? 'active' : ''}`;

  return (
    <>
      <style>{`
        @keyframes slide-in-left {
          0%   { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        @keyframes slide-in-right {
          0%   { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0);     opacity: 1; }
        }
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }
        @keyframes shake-hover {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-2px); }
          75%      { transform: translateX(2px); }
        }
        .slide-in-left  { animation: slide-in-left  0.8s ease-out forwards; }
        .slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .pulse-soft     { animation: pulse-soft     2s infinite ease-in-out; }
        .shake-hover:hover { animation: shake-hover 0.3s ease-in-out; }

        .gradient-animated {
          background: linear-gradient(45deg, #8f94fb, #4e54c8, #8f94fb);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-text {
          background: linear-gradient(90deg, #4e54c8, #8f94fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        nav a.active,
  nav .active
  {
    color: #7c3aed;
    border-bottom: 2px solid #7c3aed;
    padding-bottom: 2px;
  }
            
        
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-animated flex items-center justify-center pulse-soft">
                  <img src="/src/assets/Fluxify logo.png" alt="Fluxify logo" className="w-12 h-12" />
                </div>
                <span className="text-2xl font-bold gradient-text">Fluxify Marketing</span>
              </div>
            </div>

            {/* desktop links */}
            <div className="hidden md:flex items-center space-x-8 slide-in-right">
              <NavLink to="/" className={({ isActive }) => `nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive ? 'active' : ''}`}>Home</NavLink>
              <NavLink to="/services" className={({ isActive }) => `nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive ? 'active' : ''}`}>Services</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive ? 'active' : ''}`}>About</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => `nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive ? 'active' : ''}`}>Portfolio</NavLink>
              <Link to="/contact" className="px-6 py-2.5 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300">Let's Talk</Link>
            </div>

            <button className="md:hidden text-gray-700 shake-hover" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-3 space-y-3">
            <NavLink to="/" onClick={toggleMobileMenu} className={({ isActive }) => `block nav-link text-gray-700 hover:text-purple-600 font-medium py-2 ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/services" onClick={toggleMobileMenu} className={({ isActive }) => `block nav-link text-gray-700 hover:text-purple-600 font-medium py-2 ${isActive ? 'active' : ''}`}>Services</NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className={({ isActive }) => `block nav-link text-gray-700 hover:text-purple-600 font-medium py-2 ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/portfolio" onClick={toggleMobileMenu} className={({ isActive }) => `block nav-link text-gray-700 hover:text-purple-600 font-medium py-2 ${isActive ? 'active' : ''}`}>Portfolio</NavLink>
            <Link to="/contact" onClick={toggleMobileMenu} className="block px-6 py-2.5 gradient-bg text-white rounded-full font-semibold">Let's Talk</Link>
          </div>
        </div>
      </nav>
    </>
  );
}