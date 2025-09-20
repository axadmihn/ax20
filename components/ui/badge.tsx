import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:border-turquoise/60 hover:bg-turquoise/20 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
