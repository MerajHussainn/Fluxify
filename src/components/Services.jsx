import React, { useEffect } from 'react';

// The main application component
export default function App() {
  // Intersection Observer logic for reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('is-visible');

            // Apply stagger delay
            const staggerClass = Array.from(element.classList).find(cls => cls.startsWith('stagger-'));
            if (staggerClass) {
              const delayUnit = 150; // Delay in milliseconds
              const staggerIndex = parseInt(staggerClass.split('-')[1], 10);
              element.style.transitionDelay = `${staggerIndex * delayUnit}ms`;
            }

            obs.unobserve(element);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const customStyles = `
    /* Inter Font Import */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    /* Base Styling */
    body {
        font-family: 'Inter', sans-serif;
    }

    /* 1. Reveal Animation (for scroll effects) */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out, background-color 0.3s, box-shadow 0.3s;
      will-change: opacity, transform;
    }
    .reveal-scale {
      transform: scale(0.95);
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* 2. Card Hover Effect */
    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: transparent !important; /* Hide default border if present */
      z-index: 10;
    }

    /* 3. Icon Spin */
    @keyframes icon-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .card-hover:hover .icon-spin {
      animation: icon-spin 1s linear infinite;
    }

    /* 4. Shimmer Effect (for the tag) */
    @keyframes shimmer {
      0% { opacity: 0.8; }
      50% { opacity: 1; }
      100% { opacity: 0.8; }
    }
    .shimmer {
      animation: shimmer 2s infinite ease-in-out;
    }

    /* 5. Gradient Animation (for the SEO icon) */
    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .gradient-animated {
        background: linear-gradient(135deg, #8b5cf6, #ec4899, #10b981);
        background-size: 200% 200%;
        animation: gradient-shift 5s ease infinite;
    }

    /* 6. Border Gradient (subtle pseudo-element border) - Applied to the first card only for demo */
    .border-gradient {
        position: relative;
        overflow: hidden;
    }
    .border-gradient:hover:before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #a855f7, #ec4899, #10b981, #3b82f6);
        background-size: 400%;
        z-index: -1;
        border-radius: 1.5rem; /* Matches rounded-3xl */
        opacity: 1;
        animation: border-animate 4s linear infinite;
    }

    @keyframes border-animate {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
  `;

  return (
    <>
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <section id="services" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Reveal/Shimmer effects for header elements */}
            <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">
              Our Expertise
            </div>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" id="services-heading">
              Fluxify Marketing Services.
            </h2>
            <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to amplify your brand and accelerate growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* SEO Service */}
            <div className="reveal reveal-scale stagger-1 card-hover bg-white p-8 rounded-3xl shadow-lg border-gradient">
              <div className="icon-spin w-16 h-16 gradient-animated rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">
                Dominate search rankings with strategic SEO that brings organic traffic and qualified leads to your website.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Keyword Research &amp; Strategy
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> On-Page &amp; Technical SEO
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Link Building &amp; Authority
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Social Media Marketing */}
            <div className="reveal reveal-scale stagger-2 card-hover bg-white p-8 rounded-3xl shadow-lg">
              <div className="icon-spin w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build engaged communities and convert followers into customers with data-driven social strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Content Strategy &amp; Creation
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Community Management
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Paid Social Campaigns
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* PPC Advertising */}
            <div className="reveal reveal-scale stagger-3 card-hover bg-white p-8 rounded-3xl shadow-lg">
              <div className="icon-spin w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">
                Maximize ROI with precision-targeted ad campaigns on Google, Facebook, and beyond.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Google Ads Management
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Conversion Optimization
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Remarketing Strategies
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Content Marketing */}
            <div className="reveal reveal-scale stagger-4 card-hover bg-white p-8 rounded-3xl shadow-lg">
              <div className="icon-spin w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Captivate your audience with compelling content that educates, entertains, and converts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Blog &amp; Article Writing
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Video Production
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Infographics &amp; Design
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Email Marketing */}
            <div className="reveal reveal-scale stagger-5 card-hover bg-white p-8 rounded-3xl shadow-lg">
              <div className="icon-spin w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Nurture leads and drive sales with personalized email campaigns that deliver results.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Campaign Strategy
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Automation &amp; Sequences
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> A/B Testing &amp; Analytics
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Web Design */}
            <div className="reveal reveal-scale stagger-6 card-hover bg-white p-8 rounded-3xl shadow-lg">
              <div className="icon-spin w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Design &amp; Development</h3>
              <p className="text-gray-600 mb-4">
                Create stunning, high-converting websites that deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> Responsive Design
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> E-commerce Solutions
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg> UX/UI Optimization
                </li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}