import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observerFade = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observerFade.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const observerPopUp = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-up-visible');
            observerPopUp.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observerFade.observe(el));

    // Observe pop-up elements
    const popUpElements = document.querySelectorAll('.pop-up');
    popUpElements.forEach((el) => observerPopUp.observe(el));

    return () => {
      fadeElements.forEach((el) => observerFade.unobserve(el));
      popUpElements.forEach((el) => observerPopUp.unobserve(el));
    };
  }, []);
};