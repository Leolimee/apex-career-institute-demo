import { useState, useEffect, useRef } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once visible, keep state true or optionally unobserve
        observer.unobserve(element);
      }
    }, {
      threshold: 0.15,
      ...options
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
