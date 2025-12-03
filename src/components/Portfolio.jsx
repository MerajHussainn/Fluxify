import React from 'react'

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
       <div className="reveal inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">Success Stories</div>
       <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Real Results, Real Impact</h2>
       <p className="reveal text-xl text-gray-600 max-w-3xl mx-auto">See how we've helped businesses achieve extraordinary growth</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
       <div className="reveal reveal-scale stagger-1 bg-white rounded-3xl p-8 shadow-lg image-hover">
        <div className="w-16 h-16 gradient-animated rounded-2xl flex items-center justify-center mb-6 pulse-soft">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        </div>
        <div className="text-5xl font-extrabold gradient-text mb-2">250%</div>
        <div className="text-gray-900 font-semibold mb-2">ROI Increase</div>
        <p className="text-gray-600 text-sm">E-commerce brand achieved 250% ROI increase through our integrated PPC and SEO strategy.</p>
       </div>
       <div class="reveal reveal-scale stagger-2 bg-white rounded-3xl p-8 shadow-lg image-hover">
      <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 pulse-soft">
       <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
       </svg>
      </div>
      <div class="text-5xl font-extrabold gradient-text mb-2">
       5M+
      </div>
      <div class="text-gray-900 font-semibold mb-2">
       Social Reach
      </div>
      <p class="text-gray-600 text-sm">Built an engaged community of 5M+ followers across platforms for a lifestyle brand.</p>
     </div>
     <div class="reveal reveal-scale stagger-3 bg-white rounded-3xl p-8 shadow-lg image-hover">
      <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 pulse-soft">
       <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
       </svg>
      </div>
      <div class="text-5xl font-extrabold gradient-text mb-2">
       400%
      </div>
      <div class="text-gray-900 font-semibold mb-2">
       Organic Traffic
      </div>
      <p class="text-gray-600 text-sm">Grew organic search traffic by 400% in 12 months for a SaaS company.</p>
     </div>
      </div>
     </div>
    </section>
  )
}
