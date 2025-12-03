import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="particles" aria-hidden>
        <div className="particle" style={{left: '10%', width: 8, height: 8, animationDelay: '0s'}}></div>
        <div className="particle" style={{left: '20%', width: 12, height: 12, animationDelay: '2s'}}></div>
        <div className="particle" style={{left: '35%', width: 6, height: 6, animationDelay: '4s'}}></div>
        <div className="particle" style={{left: '50%', width: 10, height: 10, animationDelay: '1s'}}></div>
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
          <p className="reveal stagger-3 text-xl text-gray-600 mb-8 leading-relaxed" id="hero-description">We help brands grow with creative content, smart marketing & impactful digital strategies.</p>
          <div className="reveal stagger-4 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-2.5 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300 bounce-hover"> Start Your Journey </a>
            <a href="#services" className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 bounce-hover"> Explore Services </a>
          </div>
          <div className="reveal stagger-5 mt-12 flex items-center gap-8">
           <div className="counter-item">
            <div className="text-3xl font-bold gradient-text counter" data-target="500">0</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
           </div>
           <div className="w-px h-12 bg-gray-300"></div>
           <div className="counter-item">
            <div className="text-3xl font-bold gradient-text counter" data-target="98">0</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
           </div>
           <div className="w-px h-12 bg-gray-300"></div>
           <div className="counter-item">
            <div className="text-3xl font-bold gradient-text counter" data-target="10">0</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
           </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}
