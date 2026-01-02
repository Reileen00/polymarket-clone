import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(mql.matches);
    };

    // Subscribe
    mql.addEventListener("change", onChange);

    // ✅ Initialize state via the external system
    onChange();

    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [MOBILE_BREAKPOINT]);

  return isMobile ?? false;
}
