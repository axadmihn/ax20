"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type FadeInProps = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function FadeIn({ as: Tag = "div", delay = 0, className, children }: FadeInProps) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<any>}
      className={cn(
        "transform-gpu opacity-0 transition-all duration-700 ease-out",
        visible && "translate-y-0 opacity-100",
        !visible && "translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
