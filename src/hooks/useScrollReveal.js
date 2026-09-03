import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.remove('hidden');

    // Only add hiding class if JS is running (progressive enhancement)
    el.classList.add('hidden');

    // Check if already in viewport immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      // Small delay so CSS transition plays
      setTimeout(show, 80);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px', ...options }
    );
    observer.observe(el);

    // Hard fallback: always show after 1.5s
    const t = setTimeout(show, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(t);
      el.classList.remove('hidden');
    };
  }, []);

  return ref;
}
