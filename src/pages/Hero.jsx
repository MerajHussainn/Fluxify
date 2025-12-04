import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThreeSection from '../ThreeSection';

export default function Hero() {
  const navigate = useNavigate();

  /* ---- scroll-reveal + counters (existing) ---- */
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  /* ---- counters (instant + observer) ---- */
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      let hasRun = false;
      const updateCounter = () => {
        if (hasRun) return;
        hasRun = true;
        const step = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(step);
          } else {
            counter.textContent = target + (target === 98 ? '%' : '+');
          }
        };
        step();
      };
      if (counter.getBoundingClientRect().top < window.innerHeight - 100) {
        updateCounter();
      } else {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
              updateCounter();
              obs.unobserve(entry.target);
            }
          });
        });
        obs.observe(counter);
      }
    });
  }, []);

  /* ---- router nav ---- */
  const handleNav = (e, path) => {
    e.preventDefault();
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      if (window.location.pathname !== '/') {
        navigate('/#' + path.replace('#', ''));
      } else {
        document.getElementById(path.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /* ---- DATA ---- */
  const services = [
    { title: 'Social Media Management', desc: 'Engaging content, smart strategy, and consistent growth across every platform.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { title: 'Creative Content & Video Editing', desc: 'High-quality reels, ads, motion graphics, and brand visuals that convert.', icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z' },
    { title: 'Digital Marketing & Performance Ads', desc: 'Performance ads, SEO, funnels & conversion-focused execution.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
  ];

  const whyUs = [
    'Clean, modern & impact-driven content',
    'Fast communication',
    'Long-term brand growth mindset',
    'Data-driven marketing',
    'Creative-first approach'
  ];

  const steps = [
    { title: 'Discover', desc: 'Understanding your brand and goals.' },
    { title: 'Create', desc: 'Crafting visuals & content strategies.' },
    { title: 'Execute', desc: 'Publishing, optimizing & scaling.' },
    { title: 'Grow', desc: 'Delivering results that build long-term connection.' }
  ];

  const testimonials = [
    { name: 'Aisha Khan', role: 'Founder, Zeya Fashion', text: 'Fluxify took our Instagram from 2k to 50k in 4 months. Sales doubled!', img: '/src/assets/testi-1.jpg' },
    { name: 'Rohit Sharma', role: 'CEO, TechGear', text: '400% organic traffic growth. These guys deliver what they promise.', img: '/src/assets/testi-2.jpg' },
    { name: 'Priya Desai', role: 'Marketing Head, FitFuel', text: 'Best ROI we’ve ever seen on ads. Highly recommend.', img: '/src/assets/testi-3.jpg' }
  ];

  return (
    <>
      {/* ---------- 1. ORIGINAL HERO SECTION ---------- */}
      <section id="home" className="relative pt-32 pb-20 px-4 mt-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="particles" aria-hidden>
          <div className="particle" style={{ left: '10%', width: 8, height: 8, animationDelay: '0s' }} />
          <div className="particle" style={{ left: '20%', width: 12, height: 12, animationDelay: '2s' }} />
          <div className="particle" style={{ left: '35%', width: 6, height: 6, animationDelay: '4s' }} />
          <div className="particle" style={{ left: '50%', width: 10, height: 10, animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal stagger-1 inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6 shimmer">
                🚀 #1 Digital Marketing Agency
              </div>
              <h1 className="reveal stagger-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight" id="hero-headline">
                Fluxify Your <span className="gradient-text">Digital Impact</span>
              </h1>
              <p className="reveal stagger-3 text-xl text-gray-600 mb-8 leading-relaxed" id="hero-description">
                We help brands grow with creative content, smart marketing & impactful digital strategies.
              </p>

              <div className="reveal stagger-4 flex flex-wrap gap-4">
                <Link to="/contact" onClick={(e) => handleNav(e, '/contact')} className="px-6 py-5 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300 bounce-hover">Start Your Journey</Link>
                <Link to="/services" onClick={(e) => handleNav(e, '/services')} className="px-8 py-5 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 bounce-hover">Explore Services</Link>
              </div>

              <div className="reveal stagger-5 mt-12 flex items-center gap-8">
                <div className="counter-item"><div className="text-3xl font-bold gradient-text counter" data-target="500">0</div><div className="text-gray-600 text-sm">Happy Clients</div></div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="counter-item"><div className="text-3xl font-bold gradient-text counter" data-target="98">0</div><div className="text-gray-600 text-sm">Success Rate</div></div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="counter-item"><div className="text-3xl font-bold gradient-text counter" data-target="10">0</div><div className="text-gray-600 text-sm">Years Experience</div></div>
              </div>
            </div>

            <ThreeSection />
          </div>
        </div>
      </section>

      {/* ---------- 2. SERVICES PREVIEW (3 cards) ---------- */}
      <section id="services-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">What We Do</div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Results-Driven Services</h2>
            <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">Pick what fits your brand — or take them all.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className={`reveal reveal-scale stagger-${i + 1} bg-gray-50 rounded-3xl p-8 shadow hover:shadow-xl transition-shadow`}>
                <div className="w-16 h-16 gradient-animated rounded-2xl flex items-center justify-center mb-6 pulse-soft">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-10">
            <Link to="/services" className="px-8 py-4 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300 hover:scale-105">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* ---------- 3. ABOUT PREVIEW ---------- */}
      <section id="about-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">About Us</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Fluxify Are Digital <span className="gradient-text">Growth Experts</span></h2>
            <p className="text-lg text-gray-600 mb-4">Fluxify Marketing is a modern digital agency delivering growth-focused creative solutions. We blend storytelling, design, and performance marketing to help brands stand out in the digital world.</p>
            <p className="text-lg text-gray-900 font-bold mt-0 mb-4">Our philosophy is simple — <span className="gradient-text">clarity, creativity & consistency</span></p>
            <div className="mt-6">
              <Link to="/about" className="px-6 py-3 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300 hover:scale-105">Know More</Link>
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="gradient-animated rounded-3xl p-8 text-white float"><div className="text-5xl font-extrabold mb-2 counter" data-target="10">0</div><div className="text-purple-100">Years Experience</div></div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white mt-12 float"><div className="text-5xl font-extrabold mb-2 counter" data-target="500">0</div><div className="text-blue-100">Projects Delivered</div></div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-8 text-white float"><div className="text-5xl font-extrabold mb-2 counter" data-target="98">0</div><div className="text-pink-100">Client Satisfaction</div></div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white mt-12 float"><div className="text-5xl font-extrabold mb-2 counter" data-target="50">0</div><div className="text-orange-100">Team Members</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. WHY CHOOSE US ---------- */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Why Choose Us</div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">We Don’t Just Market — We Build Digital Influence</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((point, i) => (
              <div key={i} className={`reveal reveal-scale stagger-${i + 1} flex items-start gap-4`}>
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. OUR PROCESS ---------- */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Our Process</div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Simple. Clear. Result-Driven.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`reveal reveal-scale stagger-${i + 1} text-center`}>
                <div className="w-20 h-20 gradient-animated rounded-full flex items-center justify-center mb-4 mx-auto pulse-soft">
                  <span className="text-2xl font-bold text-white">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6. TESTIMONIALS ---------- */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Client Love</div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Results Speak Louder Than Words</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-scale stagger-${i + 1} bg-gray-50 rounded-3xl p-8 shadow-lg`}>
                <p className="text-gray-700 mb-4 italic">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}