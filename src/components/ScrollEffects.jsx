import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    
    // Reveal elements
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal");

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    // Counter animation
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
      const target = Number(counter.dataset.target);
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        counter.innerText = Math.floor(progress * target);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const startCountersWhenVisible = () => {
      counters.forEach((counter) => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !counter.classList.contains("started")) {
          counter.classList.add("started");
          animateCounter(counter);
        }
      });
    };

    // Run on scroll + initial load
    window.addEventListener("scroll", () => {
      revealOnScroll();
      startCountersWhenVisible();
    });

    revealOnScroll();
    startCountersWhenVisible();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("scroll", startCountersWhenVisible);
    };

  }, []);

  return null;
}