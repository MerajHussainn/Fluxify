import React, { useEffect } from 'react';

export default function About() {
  /* ---- scroll-reveal + counters (existing) ---- */
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  useEffect(() => {
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
  }, []);

  /* ---- DATA ---- */
  const whyUs = [
    'Clean, modern & impact-driven content',
    'Fast communication',
    'Long-term brand growth mindset',
    'Data-driven marketing',
    'Creative-first approach'
  ];

  const story = [
    { year: '2018', title: 'Founded', desc: 'Started with a laptop and a vision to make brands unforgettable.' },
    { year: '2020', title: 'First 100 Clients', desc: 'Hit century mark by delivering creative that actually converts.' },
    { year: '2022', title: 'Team Expansion', desc: 'Built a squad of designers, strategists & performance marketers.' },
    { year: '2024', title: '500+ Brands Served', desc: 'From startups to giants — trusted across industries.' }
  ];

  const team = [
    { name: 'Aisha Khan', role: 'Founder & CEO', img: '/src/assets/team-1.jpg' },
    { name: 'Rohit Sharma', role: 'Creative Director', img: '/src/assets/team-2.jpg' },
    { name: 'Priya Desai', role: 'Growth Lead', img: '/src/assets/team-3.jpg' }
  ];

  const steps = [
    { title: 'Discover', desc: 'Understanding your brand and goals.' },
    { title: 'Create', desc: 'Crafting visuals & content strategies.' },
    { title: 'Execute', desc: 'Publishing, optimizing & scaling.' },
    { title: 'Grow', desc: 'Delivering results that build long-term connection.' }
  ];

  return (
    <div className="bg-white">
      {/* ---------- 1. ABOUT US (existing) ---------- */}
      <section id="about-us" className="py-20 px-4 mt-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">About Us</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Fluxify Are Digital <span className="gradient-text">Growth Experts</span></h2>
            <p className="text-lg text-gray-600 mb-4">Fluxify Marketing is a modern digital agency delivering growth-focused creative solutions. We blend storytelling, design, and performance marketing to help brands stand out in the digital world.</p>
            <p className="text-lg text-gray-900 font-bold mt-0 mb-4">Our philosophy is simple — <span className="gradient-text">clarity, creativity & consistency</span></p>
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

      {/* ---------- 2. WHY CHOOSE US ---------- */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      {/* ---------- 3. OUR STORY (timeline) ---------- */}
      <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Our Story</div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">From Laptop to Legacy</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
            {story.map((item, i) => (
              <div key={i} className={`reveal flex items-center mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 text-right"></div>
                <div className="z-10 w-12 h-12 gradient-animated rounded-full flex items-center justify-center text-white font-bold">
                  {item.year}
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. MEET THE TEAM ---------- */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Meet the Team</div>
          <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">Behind the Magic</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div key={i} className={`reveal reveal-scale stagger-${i + 1} bg-white rounded-3xl p-6 shadow-lg text-center`}>
                <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-purple-600 font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. OUR PROCESS ---------- */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
    </div>
  );
}