// app/page.tsx
"use client";
import { useState } from "react";
import { Card } from "./components/ui/card";
import { CardHeader } from "./components/ui/card";
import { CardTitle } from "./components/ui/card";
import { CardContent } from "./components/ui/card";

import { Table } from "./components/ui/table";
import { THead } from "./components/ui/table";
import { TBody } from "./components/ui/table";
import { TR } from "./components/ui/table";
import { TH } from "./components/ui/table";
import { TD } from "./components/ui/table";

import Button from "./components/ui/button";
import EmptyState from "./components/ui/emptystate";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
};

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890", company: "Acme Inc." },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "987-654-3210", company: "Beta LLC" },
  ]);

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Contacts</CardTitle>
          <Button size="sm" onClick={() => alert("TODO: open form")}>
            + Add Contact
          </Button>
        </CardHeader>
        <CardContent>
          {contacts.length === 0 ? (
            <EmptyState
              title="No contacts yet"
              description="Start by adding your first contact."
              action={<Button onClick={() => alert("TODO: open form")}>Add Contact</Button>}
            />
          ) : (
            <Table>
              <THead>
                <TR>
                  <TH>Name</TH>
                  <TH>Email</TH>
                  <TH>Phone</TH>
                  <TH>Company</TH>
                </TR>
              </THead>
              <TBody>
                {contacts.map((c) => (
                  <TR key={c.id}>
                    <TD>{c.name}</TD>
                    <TD>{c.email}</TD>
                    <TD>{c.phone}</TD>
                    <TD>{c.company}</TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
