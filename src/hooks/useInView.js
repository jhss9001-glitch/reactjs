import { useEffect, useRef, useState } from "react";

/* 요소가 한 번 화면에 들어오면 true가 되고 관찰을 멈춥니다. */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => !("IntersectionObserver" in window));

  useEffect(() => {
    const el = ref.current;
    if (inView || !el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [inView, threshold]);

  return [ref, inView];
}
