import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    function updateMatches() {
      setMatches(media.matches);
    }

    updateMatches();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateMatches);
    } else {
      media.addListener(updateMatches);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", updateMatches);
      } else {
        media.removeListener(updateMatches);
      }
    };
  }, [query]);

  return matches;
}
