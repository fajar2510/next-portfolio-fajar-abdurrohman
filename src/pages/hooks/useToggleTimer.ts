import { useEffect, useState } from "react";

export const useToggleTimer = (interval: number): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return isVisible;
};
