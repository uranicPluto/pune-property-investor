import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "navy" | "ivory" | "success" | "warning" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "navy",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wide select-none";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    gold: "bg-gold/15 text-gold-dark border border-gold/30",
    navy: "bg-navy/10 text-navy border border-navy/15",
    ivory: "bg-ivory text-text-primary border border-border",
    success: "bg-status-success/10 text-status-success border border-status-success/20",
    warning: "bg-status-warning/10 text-status-warning border border-status-warning/20",
    outline: "bg-transparent border border-border text-text-secondary",
  };

  const dotColors = {
    gold: "bg-gold",
    navy: "bg-navy",
    ivory: "bg-text-secondary",
    success: "bg-status-success",
    warning: "bg-status-warning",
    outline: "bg-text-muted",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}
