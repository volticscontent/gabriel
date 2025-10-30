'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  decimals?: number; // casas decimais forçadas; se não definido, inferimos do target
  className?: string;
}

// Suavização para uma animação mais agradável
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function AnimatedCounter({
  target,
  duration = 1500,
  prefix = '',
  suffix = '',
  decimals,
  className = '',
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Inferir casas decimais caso não seja fornecido
  const inferredDecimals = decimals ?? (Number.isInteger(target) ? 0 : 1);

  useEffect(() => {
    // Cancelar animação anterior se houver
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current == null) startTimeRef.current = timestamp;
      const elapsed = timestamp - (startTimeRef.current ?? 0);
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = target * eased;
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  // Formatador numérico com locale pt-BR
  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: inferredDecimals,
    maximumFractionDigits: inferredDecimals,
  });

  return (
    <span className={className}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}