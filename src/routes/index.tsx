import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Film, Scissors, Wand2, Music4, Mail, Phone, MapPin } from "lucide-react";

import { ContactDialog } from "@/components/ContactDialog";
import logo from "@/assets/logo.jpg.asset.json";
import reel1 from "@/assets/reel-1.mp4.asset.json";
import reel2 from "@/assets/reel-2.mp4.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Behind the Cut — Video Editing Studio" },
      {
        name: "description",
        content:
          "Behind the Cut edits short-form reels, YouTube videos and brand films that keep people watching. See our work and start a project.",
      },
      { property: "og:title", content: "Behind the Cut — Video Editing Studio" },
      {
        property: "og:description",
        content: "Reels, YouTube edits and brand films, cut with intent.",
      },
    ],
  }),
  component: Index,
});

const nav = ["Home", "About", "Work", "Services", "Process", "Contact"];

const reels = [
  {
    src: reel1.url,
    title: "What I Can Do",
    kind: "Short-form, Motion Graphics",
  },
  {
    src: reel2.url,
    title: "Your Standards Decide Your Future",
    kind: "Talking Head, Sound Design",
  },
  {
    src: reel3.url,
    title: "App Promo Animation",
    kind: "Promo, 2D Animation",
  },
];

const services = [
  {
    icon: Scissors,
    title: "Short-Form Edits",
    body: "Reels, Shorts and TikToks paced for retention from the first frame.",
  },
  {
    icon: Film,
    title: "YouTube Editing",
    body: "Long-form storytelling with clean pacing, b-roll and captions.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    body: "Titles, callouts and animated brand elements built to your identity.",
  },
  {
    icon: Music4,
    title: "Sound & Color",
    body: "Mixing, sound design and grading that make footage feel finished.",
  },
];

const stats = [
  { value: "900+", label: "Videos Delivered" },
  { value: "120+", label: "Happy Creators" },
  { value: "6+", label: "Years Editing" },
  { value: "48h", label: "Average Turnaround" },
];

const testimonials = [
  {
    quote:
      "Behind the Cut turned our raw podcast footage into clips that actually perform. Retention went up within two weeks.",
    name: "Rafi Ahmed",
    role: "Founder, Deepwork Media",
  },
  {
    quote:
      "Fast, precise and genuinely creative. They understand pacing better than any editor we've worked with.",
    name: "Sofia Lindqvist",
    role: "Content Lead, Northlane",
  },
];

const process = [
  { no: "01", title: "Brief", body: "We learn the goal, the audience and the tone of the edit." },
  { no: "02", title: "Assembly", body: "Footage is sorted, cut and structured around the story." },
  { no: "03", title: "Polish", body: "Graphics, sound design, color and captions get layered in." },
  { no: "04", title: "Deliver", body: "Revisions, then exports sized for every platform you post on." },
];

function Reel({ src, title, kind }: { src: string; title: string; kind: string }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-[4/5] overflow-hidden bg-ink">
        <video
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          controls
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
        <div>
          <h3 className="text-base">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{kind}</p>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Behind the Cut logo"
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-[0.18em]">BEHIND THE CUT</span>
              <span className="block text-[10px] tracking-[0.22em] text-muted-foreground">
                VIDEO EDITING STUDIO
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-ink hidden sm:inline-flex">
            Let's Talk <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Editing that holds attention</p>
              <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl">
                We edit videos people
                <em className="italic"> actually </em>
                finish watching.
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Behind the Cut is a video editing studio for creators and brands. Reels, YouTube
                edits, promos and brand films — cut with rhythm, sound and intent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="btn-ink">
                  View Our Work <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a href="#contact" className="btn-outline-ink">
                  Start A Project
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-lg">
                <video
                  src={reels[1]!.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-lg border border-border bg-card px-5 py-3 md:-left-8">
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Now Playing
                </p>
                <p className="text-sm">Showreel 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="mt-3 text-4xl">Featured Edits</h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground"
            >
              Request Full Reel <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reels.map((r) => (
              <Reel key={r.src} {...r} />
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[220px_1fr]">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2 className="mt-3 text-4xl">Services</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, body }) => (
                <div key={title} className="border-l border-border pl-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-ink-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-secondary py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl text-primary">{s.value}</p>
                <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow">Clients Say</p>
          <h2 className="mt-3 text-4xl">Kind Words</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-7">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-16">
          <p className="eyebrow">How We Work</p>
          <h2 className="mt-3 text-4xl">The Process</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.no}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground">
                  {p.no}
                </span>
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-10 rounded-2xl bg-ink px-8 py-12 text-ink-foreground md:grid-cols-2 md:px-12">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase opacity-70">
                Let's create something great
              </p>
              <h2 className="mt-4 text-4xl leading-tight">
                Got footage? We'll make it worth watching.
              </h2>
              <ContactDialog>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-cream px-6 py-3.5 text-[11px] tracking-[0.16em] uppercase text-primary transition-transform hover:-translate-y-0.5"
                >
                  Let's Talk <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </ContactDialog>
            </div>
            <dl className="grid content-center gap-6 text-sm md:border-l md:border-white/15 md:pl-12">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 opacity-70" />
                <div>
                  <dt className="text-[10px] tracking-[0.2em] uppercase opacity-70">Email</dt>
                  <dd>behindthecut12@gmail.com</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 opacity-70" />
                <div>
                  <dt className="text-[10px] tracking-[0.2em] uppercase opacity-70">Phone</dt>
                  <dd>01782017981</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 opacity-70" />
                <div>
                  <dt className="text-[10px] tracking-[0.2em] uppercase opacity-70">Location</dt>
                  <dd>Nalchity Upazila, Bangladesh</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-8 w-8 rounded-md object-cover" />
            <span className="text-sm font-bold tracking-[0.18em]">BEHIND THE CUT</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 Behind the Cut.</p>
        </div>
      </footer>
    </div>
  );
}
