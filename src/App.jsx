import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [toast, setToast] = useState(null)

  useEffect(() => {
    // reveal
    function reveal() {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 100
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active')
        }
      }
    }
    window.addEventListener('scroll', reveal)
    reveal()

    // counters using IntersectionObserver
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0
      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.ceil(current)
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target + (target === 98 ? '%' : '+')
        }
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter()
            observer.unobserve(entry.target)
          }
        })
      })
      observer.observe(counter)
    })

    // smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          const mobileMenu = document.getElementById('mobile-menu')
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden')
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [])

  // toast helper used by Contact component via window.showAppToast
  useEffect(() => {
    window.showAppToast = (message) => {
      setToast(message)
      setTimeout(() => setToast(null), 3500)
    }
  }, [])

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl z-50">
          {toast}
        </div>
      )}
    </div>
  )
}
