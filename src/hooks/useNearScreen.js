import { useEffect, useState, useRef } from 'react';

const useNearScreen = () => {
  const elementRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    import('intersection-observer').then(() => {
      const observer = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(elementRef.current);

      return () => {
        observer.unobserve();
      };
    });
  }, []);

  return {
    show,
    elementRef,
  };
};

export default useNearScreen;
