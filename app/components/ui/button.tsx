"use client";
import * as React from "react";
import { cn } from "@/lib/utils";


type Variant = "default" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";


const variantClasses: Record<Variant, string> = {
default: "bg-black text-white hover:bg-black/90",
secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
ghost: "bg-transparent hover:bg-neutral-100",
destructive: "bg-red-600 text-white hover:bg-red-700",
};


const sizeClasses: Record<Size, string> = {
sm: "h-8 px-3 text-sm",
md: "h-10 px-4 text-sm",
lg: "h-12 px-6 text-base",
};


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
variant?: Variant;
size?: Size;
}


export default function Button({
className,
variant = "default",
size = "md",
...props
}: ButtonProps) {
return (
<button
className={cn(
"inline-flex items-center justify-center rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
variantClasses[variant],
sizeClasses[size],
className
)}
{...props}
/>
);
}