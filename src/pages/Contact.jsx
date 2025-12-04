import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  /* ---- scroll-reveal (same as before) ---- */
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
      });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // first paint
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  /* ---- simple form handler ---- */
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // dummy 1.5 sec delay → show toast
    setTimeout(() => {
      setLoading(false);
      window.showAppToast?.('Message sent! We’ll get back soon.');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 mt-6 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">
            Let's Connect
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" id="contact-heading">
            Ready To Grow Your Business?
          </h2>
          <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for a free consultation and discover how we can help you achieve your goals
          </p>
        </div>

        {/* content grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* left - info */}
          <div className="reveal-left">
            <div className="gradient-animated rounded-3xl p-12 text-white mb-8 shimmer">
              <h3 className="text-3xl font-bold mb-6">Let's Start Something Great Together</h3>
              <div className="space-y-6">
                {/* email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <div className="text-purple-100">contact@digitalmarketingking.com</div>
                  </div>
                </div>

                {/* phone */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <div className="text-purple-100">+1 (555) 123-4567</div>
                  </div>
                </div>

                {/* address */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <div className="text-purple-100">123 Marketing Street, Digital City, DC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            {/* social icons */}
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((s) => (
                <a
                  key={s}
                  href={`https://${s}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 bounce-hover"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {s === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                    {s === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />}
                    {s === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                    {s === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* right - form */}
          <div className="reveal-right bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                <select id="service" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="content-creation">Creative Content & Video Editing</option>
                  <option value="branding">Branding & Visual Identity</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea id="message" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 gradient-animated text-white rounded-xl font-semibold ripple glow transition-all duration-300 bounce-hover ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}