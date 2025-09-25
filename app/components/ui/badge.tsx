import * as React from "react";
import { cn } from "@/lib/utils";


type Variant = "default" | "success" | "warning" | "neutral";


const variants: Record<Variant, string> = {
default: "bg-black text-white",
success: "bg-green-600 text-white",
warning: "bg-amber-500 text-white",
neutral: "bg-neutral-200 text-neutral-800",
};


export default function Badge({
className,
variant = "neutral",
...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
return (
<span
className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs", variants[variant], className)}
{...props}
/>
);
}