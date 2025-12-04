// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How long does it take to see results?', a: 'Most clients notice engagement uplift within 2-3 weeks. Ads can show ROI in as little as 7 days.' },
  { q: 'Do you offer custom packages?', a: 'Absolutely. Every brand is unique; we tailor scope and pricing after a free strategy call.' },
  { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, TikTok, LinkedIn, Twitter, YouTube, Pinterest – and we’re always testing new channels.' },
  { q: 'Will I own the creative files?', a: 'Yes. Upon full payment all source files (PSD, AI, PR, AE) are handed over via Google Drive.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-semibold text-gray-900">{f.q}</span>
                <span className="ml-4 text-purple-600 text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-600"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}