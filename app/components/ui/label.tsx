import * as React from "react";
import { cn } from "../../lib/utils"

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}


export default function Label({ className, ...props }: LabelProps) {
return (
<label className={cn("text-sm font-medium text-neutral-800", className)} {...props} />
);
}