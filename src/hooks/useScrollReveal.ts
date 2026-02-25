import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    // Add reveal class to element
    element.classList.add('reveal');
    
    // If element has children with stagger, add reveal to them too
    const staggerChildren = element.querySelectorAll('.reveal-item');
    staggerChildren.forEach((child) => {
      child.classList.add('reveal');
      observer.observe(child);
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}

export function useScrollRevealMultiple(
  selector: string,
  options: IntersectionObserverInit = {}
) {
  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, defaultOptions);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, options]);
}
