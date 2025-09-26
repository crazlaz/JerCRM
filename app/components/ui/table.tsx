import * as React from "react";
import { cn } from "../../lib/utils"


export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
return (
<div className="overflow-x-auto">
<table className={cn("w-full text-sm", className)} {...props} />
</div>
);
}


export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) {
return <thead {...props} />;
}
export function TBody(props: React.HTMLAttributes<HTMLTableSectionElement>) {
return <tbody {...props} />;
}
export function TR(props: React.HTMLAttributes<HTMLTableRowElement>) {
return <tr className="border-b last:border-0" {...props} />;
}
export function TH({ className, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) {
return <th className={cn("bg-neutral-50 p-3 text-left font-medium", className)} {...props} />;
}
export function TD({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
return <td className={cn("p-3 align-middle", className)} {...props} />;
}