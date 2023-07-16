import { useEffect, useRef, useState } from "react";


export function useElementOnScreen (options) {

    const ref = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);
  
    const handleIntersect = function (entries, observer) {

      const [entry] = entries;
      
        setIsVisible(entry.isIntersecting);
        // observer.unobserve(entry.target);

    }
  
    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersect, options);
      if (ref.current) observer.observe(ref.current);
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      }
    }, [ref, options]);
  
    return [ref, isVisible];
}