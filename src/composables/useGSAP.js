import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP() {
  const tickerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = gsap.to(".ticker-content", {
      xPercent: -50,
      ease: "none",
      duration: 1000,
      repeat: -1,
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const play = () => animationRef.current?.play();
  const pause = () => animationRef.current?.pause();

  return { tickerRef, play, pause };
}
