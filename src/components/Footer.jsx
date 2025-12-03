import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
       <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
         <div className="w-10 h-10 rounded-xl gradient-animated flex items-center justify-center pulse-soft">
          <img src="/src/assets/Fluxify logo.png" alt="Fluxify logo" className="w-15 h-15"/>
         </div>
         <span className="text-xl font-bold">Fluxify Marketing.</span>
        </div>
        <p className="text-gray-400 mb-4 max-w-md">We help brands grow with creative content, smart marketing & impactful digital strategies.</p>
       </div>
       <div>
        <h4 className="font-semibold mb-4">Quick links</h4>
        <ul className="space-y-2 text-gray-400">
       <li><a href="#home" class="hover:text-white transition-colors duration-300">Home</a></li>
       <li><a href="#services" class="hover:text-white transition-colors duration-300">Services</a></li>
       <li><a href="#about" class="hover:text-white transition-colors duration-300">About Us</a></li>
       <li><a href="#portfolio" class="hover:text-white transition-colors duration-300">Portfolio</a></li>
        </ul>
       </div>
       <div>
      
       <h4 class="font-bold text-lg mb-4">Services</h4>
      <ul class="space-y-2 text-gray-400">
       <li class="hover:text-white transition-colors duration-300 cursor-pointer">SEO Optimization</li>
       <li class="hover:text-white transition-colors duration-300 cursor-pointer">Social Media</li>
       <li class="hover:text-white transition-colors duration-300 cursor-pointer">PPC Advertising</li>
       <li class="hover:text-white transition-colors duration-300 cursor-pointer">Content Marketing</li>
       <li class="hover:text-white transition-colors duration-300 cursor-pointer">Web Design</li>
      </ul>
       </div>
      </div>
      <div className="text-center text-gray-500"> <p id="footer-copyright">© 2025 Fluxify Marketing — Creative Digital Growth Agency.</p>
                                 <p>All rights reserved.</p>
     <p id="footer-copyright">Made with ❣ INTERNSHIP CATALYST.</p></div>
     </div>
    </footer>
  )
}
