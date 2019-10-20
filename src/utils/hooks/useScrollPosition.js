import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  /**
   * To support server-side rendering (SSR) and prevent unnecessary bugs,
   * we need to check if the DOM is ready, and the window context exists.
   *
   */
  const isBrowser = typeof window !== `undefined`;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isScroll, setIsScroll] = useState(false);

  const scrollHandler = () => {
    setPosition({ x: window.scrollX, y: window.scrollY });
    setIsScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return [position, isScroll];
};

export default useScrollPosition;
