import { useState, type FormEvent, type ReactNode } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const EMAIL = "behindthecut12@gmail.com";

export function ContactDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${name || "a client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Talk</DialogTitle>
          <DialogDescription>
            Tell us about your footage and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="ct-name">Name</Label>
            <Input
              id="ct-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ct-email">Email</Label>
            <Input
              id="ct-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ct-project">Project details</Label>
            <Textarea
              id="ct-project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Type of video, length, deadline…"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-[11px] tracking-[0.16em] uppercase text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>
        </form>

        <div className="mt-2 grid gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-foreground">
            <Mail className="h-3.5 w-3.5" /> {EMAIL}
          </a>
          <a href="tel:+8801782017981" className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-3.5 w-3.5" /> +880 17820-17981
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> Nalchity Upazila, Bangladesh
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
