import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 700,
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      default: return `translateY(${distance}px)`;
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = getInitialTransform();
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
    el.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
          // Clean up willChange after animation
          setTimeout(() => {
            el.style.willChange = 'auto';
          }, duration + delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, duration, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
