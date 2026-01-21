import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap",
          {
            "bg-gradient-to-r from-[#f9df96] via-[#f4cf6a] to-[#eeba2c] text-text shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:brightness-105 focus:ring-[#eeba2c]":
              variant === "primary",
            "bg-gold text-white hover:bg-gold/90 focus:ring-gold":
              variant === "secondary",
            "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white focus:ring-accent":
              variant === "outline",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

