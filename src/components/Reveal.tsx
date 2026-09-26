import { type ReactNode, type ElementType, type Ref } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
}

export function Reveal({ children, className = '', delay, as: Tag = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const classes = `reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`;

  return (
    <Tag ref={ref as Ref<HTMLElement>} className={classes}>
      {children}
    </Tag>
  );
}
