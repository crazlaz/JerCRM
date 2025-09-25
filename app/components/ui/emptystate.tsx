import { Card, CardContent } from "./card";


export default function EmptyState({ title = "No data", description = "Get started by adding a new item.", action }: {
title?: string;
description?: string;
action?: React.ReactNode;
}) {
return (
<Card>
<CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
<p className="text-base font-medium">{title}</p>
<p className="text-sm text-neutral-600">{description}</p>
{action}
</CardContent>
</Card>
);
}