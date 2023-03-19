import { useEffect, useRef } from "react";
import html from "../assets/logoTecnologias/html.png";
import anime from "animejs/lib/anime.es.js";

function GlowEffect({ color, duration, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const animation = anime({
      targets: ref.current,
      filters: [
        {
          value: `drop-shadow(0 0 10px rgba(${color}, 0.5))`,
          duration: duration / 2,
        },
        {
          value: `drop-shadow(0 0 20px rgba(${color}, 0))`,
          duration: duration / 2,
        },
      ],
      easing: "linear",
      direction: "alternate",
      loop: true,
    });

    return () => animation.pause();
  }, [color, delay, duration]);
  return (
    <div>
      <img ref={ref} src={html} />
    </div>
  );
}

export default GlowEffect;
