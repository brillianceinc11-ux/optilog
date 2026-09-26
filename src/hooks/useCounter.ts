import { useEffect, useRef, useState } from 'react';

export function useCounter(
  target: number,
  options: { duration?: number; startOnVisible?: boolean; decimals?: number } = {}
) {
  const { duration = 2000, startOnVisible = true, decimals = 0 } = options;
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const start = () => {
    if (hasStarted) return;
    setHasStarted(true);
    startTimeRef.current = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!startOnVisible) {
      start();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    value: decimals > 0 ? value.toFixed(decimals) : Math.round(value),
    start,
    hasStarted,
  };
}
