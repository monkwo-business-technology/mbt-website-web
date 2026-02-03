import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-[#dadce0] dark:border-border bg-background px-4 py-2 text-base text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] dark:focus:border-primary dark:focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
