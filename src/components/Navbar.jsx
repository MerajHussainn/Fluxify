import React from 'react'

export default function Navbar(){
  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu')
    if (menu) menu.classList.toggle('hidden')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-500">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
       <div className="flex items-center slide-in-left">
        <div className="flex items-center gap-3">
         <div className="w-12 h-12 rounded-xl gradient-animated flex items-center justify-center pulse-soft">
          <img src="/src/assets/Fluxify logo.png" alt="Fluxify logo" className="w-15 h-15"/>
         </div>
         <span className="text-2xl font-bold gradient-text" id="nav-brand">Fluxify Marketing</span>
        </div>
       </div>
       <div className="hidden md:flex items-center space-x-8 slide-in-right">
         <a href="#home" className="nav-link text-gray-700 hover:text-purple-600 font-medium">Home</a>
         <a href="#services" className="nav-link text-gray-700 hover:text-purple-600 font-medium">Services</a>
         <a href="#about" className="nav-link text-gray-700 hover:text-purple-600 font-medium">About</a>
         <a href="#portfolio" className="nav-link text-gray-700 hover:text-purple-600 font-medium">Portfolio</a>
         <a href="#contact" className="px-6 py-2.5 gradient-bg text-white rounded-full font-semibold ripple glow transition-all duration-300">Let's Talk</a>
       </div>
       <button className="md:hidden text-gray-700 shake-hover" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
       </button>
      </div>
     </div>
     <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
      <div className="px-4 py-3 space-y-3">
       <a href="#home" className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-all duration-300">Home</a>
       <a href="#services" className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-all duration-300">Services</a>
       <a href="#about" className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-all duration-300">About</a>
       <a href="#portfolio" className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-all duration-300">Portfolio</a>
       <a href="#contact" className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-all duration-300">Contact</a>
      </div>
     </div>
    </nav>
  )
}
