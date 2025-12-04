import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

export default function App() {
  const [toast, setToast] = useState(null);
  const location = useLocation();

  /* ---- global scroll-reveal + counter (already correct) ---- */
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) reveals[i].classList.add('active');
      }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // first paint

    // smooth anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const mobileMenu = document.getElementById('mobile-menu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
        }
      });
    });

    /* ---- global counters ---- */
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target === 98 ? '%' : '+');
        }
      };
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            obs.unobserve(entry.target);
          }
        });
      });
      obs.observe(counter);
    });

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  /* ---- toast helper ---- */
  useEffect(() => {
    window.showAppToast = (msg) => {
      setToast(msg);
      setTimeout(() => setToast(null), 3500);
    };
  }, []);

  /* ---- scroll to top on route change ---- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />          {/* ← HOME */}
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />

      {/* toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}