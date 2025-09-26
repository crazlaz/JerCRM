"use client";
import * as React from "react";
import { cn } from "../../lib/utils"


export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}


export default function Select({ className, children, ...props }: SelectProps) {
return (
<select
className={cn(
"w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black",
className
)}
{...props}
>
{children}
</select>
);
}