import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
       <div className="reveal-left">
        <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-4 shimmer">About Us</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Fluxify Are Digital <span className="gradient-text">Growth Experts</span></h2>
        <p className="text-lg text-gray-600 mb-6">Fluxify Marketing is a modern digital agency delivering growth-focused creative solutions. We blend storytelling, design, and performance marketing to help brands stand out in the digital world.</p>
       </div>
       <div className="relative reveal-right">
        <div className="grid grid-cols-2 gap-6">
         <div className="gradient-animated rounded-3xl p-8 text-white float">
          <div className="text-5xl font-extrabold mb-2 counter" data-target="10">0</div>
          <div className="text-purple-100">Years Experience</div>
         </div>
         <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white mt-12 float">
          <div className="text-5xl font-extrabold mb-2 counter" data-target="500">0</div>
          <div className="text-blue-100">Projects Delivered</div>
         </div>
         <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-8 text-white float">
          <div className="text-5xl font-extrabold mb-2 counter" data-target="98">0</div>
          <div className="text-pink-100">Client Satisfaction</div>
         </div>
         <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white mt-12 float">
          <div className="text-5xl font-extrabold mb-2 counter" data-target="50">0</div>
          <div className="text-orange-100">Team Members</div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
  )
}
