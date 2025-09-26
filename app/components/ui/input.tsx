"use client";
import * as React from "react";
import { cn } from "../../lib/utils"


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
({ className, type = "text", ...props }, ref) => {
return (
<input
ref={ref}
type={type}
className={cn(
"w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black",
className
)}
{...props}
/>
);
}
);
Input.displayName = "Input";
export default Input;