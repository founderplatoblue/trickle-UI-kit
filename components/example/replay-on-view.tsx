'use client';

import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Most trickle components are server components whose keyframes start on
 * first paint, so anything below the fold has finished animating before the
 * reader scrolls to it. This wrapper defers them: once hydrated, a block that
 * starts off-screen is hidden, then remounted (replaying every keyframe
 * inside) the moment it scrolls into view.
 *
 * Without JS, or with reduced motion, the content renders normally and is
 * never hidden. Blocks already on screen at load are left alone.
 */
export function ReplayOnView({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pending, setPending] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let first = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (first) {
          first = false;
          if (entry.isIntersecting) {
            observer.disconnect();
          } else {
            setPending(true);
          }
          return;
        }
        if (entry.isIntersecting) {
          setPending(false);
          setRun((n) => n + 1);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(pending && 'opacity-0', className)}>
      <Fragment key={run}>{children}</Fragment>
    </div>
  );
}
