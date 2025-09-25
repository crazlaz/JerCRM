"use client";
import Button from "./button";


export default function Pagination({ page, pageCount, onPageChange }: {
page: number;
pageCount: number;
onPageChange: (next: number) => void;
}) {
const prev = () => onPageChange(Math.max(1, page - 1));
const next = () => onPageChange(Math.min(pageCount, page + 1));


return (
<div className="flex items-center justify-end gap-2">
<Button variant="secondary" size="sm" onClick={prev} disabled={page <= 1}>Previous</Button>
<span className="text-sm text-neutral-600">Page {page} of {pageCount}</span>
<Button variant="secondary" size="sm" onClick={next} disabled={page >= pageCount}>Next</Button>
</div>
);
}