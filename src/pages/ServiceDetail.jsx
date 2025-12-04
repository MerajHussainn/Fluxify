// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

const content = {
  'social-media': {
    title: 'Social Media Management',
    hero: 'Engaging content, smart strategy, and consistent growth across every platform.',
    features: ['Content Calendar', 'Community Management', 'Paid Campaigns', 'Performance Reports'],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  'content-creation': {
    title: 'Creative Content & Video Editing',
    hero: 'High-quality reels, ads, motion graphics, and brand visuals that convert.',
    features: ['Reels & Shorts', 'Motion Graphics', 'Ad Creatives', 'Brand Stories'],
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z'
  },
  'branding': {
    title: 'Branding & Visual Identity',
    hero: 'Logos, brand kits, color palettes, typography — everything your brand needs to look premium.',
    features: ['Logo Design', 'Brand Guidelines', 'Packaging', 'Collaterals'],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    hero: 'Performance ads, SEO, funnels & conversion-focused execution.',
    features: ['Google Ads', 'Meta Ads', 'SEO', 'Funnel Building'],
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = content[slug] || content['social-media'];

  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            {data.hero}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <Link to="/contact" className="px-8 py-4 gradient-bg text-white rounded-full font-semibold hover:scale-105 transition-transform">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card-hover bg-gray-50 p-6 rounded-2xl text-center shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={data.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Strip */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 mb-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center rounded-3xl mx-4 sm:mx-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Start?</h2>
        <p className="text-lg mb-6">Let’s bring your brand to the next level.</p>
        <Link to="/contact" className="px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:scale-105 transition-transform">
          Contact Us
        </Link>
      </motion.section>
    </>
  );
}