import { useEffect, useRef, useState } from "react";

export function useElementOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersect = function (entries) {
    const [entry] = entries;

    if (entry.intersectionRatio > options.threshold) {
      setIsVisible(entry.isIntersecting);
    }

  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}
