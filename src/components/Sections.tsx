import {
  clientPortal,
  copilot,
  demo,
  details,
  faqs,
  features,
  hero,
  highlights,
  nav,
  problems,
  site,
  steps,
} from "@/content/site";
import Image from "next/image";
import { images } from "@/assets/images";
import { DashboardMockup } from "./DashboardMockup";
import { DemoForm } from "./DemoForm";
import { Logo } from "./Logo";

function Check({ className = "text-gold-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] uppercase ${
        dark ? "text-gold-400" : "text-gold-600"
      }`}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </p>
  );
}

/* ---------------------------------------------------------------- Hero */

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-24 text-white sm:pt-40">
      <Image
        src={images.heroAerial.src}
        alt=""
        fill
        preload
        sizes="100vw"
        quality={60}
        placeholder="blur"
        className="-z-20 object-cover object-[50%_70%] opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/60 via-navy-950/75 to-navy-950" aria-hidden="true" />
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute top-[-20%] left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,151,43,0.28),transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 text-center">
        <a
          href="#copiloto"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur transition hover:border-gold-500/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
          </span>
          {hero.badge}
        </a>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {hero.title[0]} {hero.title[1]} <span className="text-gradient-gold">{hero.title[2]}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-white/65">{hero.subtitle}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-medium text-navy-950 shadow-lg shadow-gold-500/25 transition hover:bg-gold-400"
          >
            {hero.primaryCta.label}
            <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition hover:bg-white/5"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          {hero.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-gold-500" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 max-w-5xl">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Highlights */

export function Highlights() {
  return (
    <section aria-label="INARA 360 en cifras" className="border-b border-line bg-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-line px-4 lg:grid-cols-4 lg:divide-x">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse px-4 py-10 text-center">
            <dt className="mt-2 text-sm text-muted">{h.label}</dt>
            <dd className="font-mono text-4xl font-semibold tracking-tight text-navy-900">{h.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------------------------------------------------------------- Problems */

export function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="reveal max-w-2xl">
        <Eyebrow>El problema</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Una obra se pierde en los detalles que nadie ve a tiempo.
        </h2>
      </div>
      <div className="reveal relative mt-12 h-56 overflow-hidden rounded-3xl sm:h-80">
        <Image
          src={images.problemDesk.src}
          alt={images.problemDesk.alt}
          fill
          sizes="(min-width: 1152px) 1120px, 100vw"
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden="true" />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {problems.map((p, i) => (
          <article key={p.title} className="reveal rounded-3xl border border-line bg-white p-7">
            <span className="font-mono text-sm text-bad">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
          </article>
        ))}
      </div>
      <p className="reveal mt-10 text-lg text-ink">
        <span className="font-semibold">INARA 360 pone todo en un solo sitio:</span>{" "}
        <span className="text-muted">una sola cifra, una sola revisión vigente y un solo lugar donde mirar.</span>
      </p>
    </section>
  );
}

/* ---------------------------------------------------------------- Features (bento) */

function PortfolioVisual() {
  const cards = [
    { name: "Nave industrial", score: 51, tone: "text-warn border-warn/30 bg-warn/5", word: "Atención", bar: 39 },
    { name: "Ampliación almacén", score: 86, tone: "text-ok border-ok/30 bg-ok/5", word: "Sano", bar: 62 },
    { name: "Plataforma logística", score: 32, tone: "text-bad border-bad/30 bg-bad/5", word: "Crítico", bar: 71 },
  ];
  return (
    <div className="mt-6 grid gap-2 sm:grid-cols-3">
      {cards.map((c) => (
        <div key={c.name} className="rounded-xl border border-line bg-paper p-3">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium">{c.name}</p>
            <span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] ${c.tone}`}>
              {c.score} {c.word}
            </span>
          </div>
          <div className="mt-3 h-1 rounded-full bg-line">
            <div className="h-1 rounded-full bg-navy-700" style={{ width: `${c.bar}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function TreeVisual() {
  const rows = [
    { code: "03", label: "Estructura", pad: "pl-0", v: "1.347.760 €" },
    { code: "03.01", label: "Cimentación", pad: "pl-4", v: "412.300 €" },
    { code: "03.01.004", label: "Excavación", pad: "pl-8", v: "126.085 €" },
  ];
  return (
    <div className="mt-6 space-y-1.5 font-mono text-[11px]">
      {rows.map((r) => (
        <div key={r.code} className={`flex items-center justify-between rounded-lg bg-paper px-3 py-2 ${r.pad}`}>
          <span>
            <span className="text-gold-600">{r.code}</span> <span className="text-ink">{r.label}</span>
          </span>
          <span className="text-muted">{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function GanttVisual() {
  const bars = [
    { l: 0, w: 22, c: "bg-ok" },
    { l: 14, w: 26, c: "bg-ok" },
    { l: 30, w: 34, c: "bg-bad" },
    { l: 52, w: 24, c: "bg-navy-600" },
    { l: 66, w: 30, c: "bg-navy-600/40" },
  ];
  return (
    <div className="relative mt-6 space-y-2 rounded-xl bg-paper p-4">
      <div className="absolute top-2 bottom-2 left-[58%] w-px bg-gold-500" aria-hidden="true" />
      {bars.map((b, i) => (
        <div key={i} className="relative h-2.5">
          <div className={`absolute h-2.5 rounded-full ${b.c}`} style={{ left: `${b.l}%`, width: `${b.w}%` }} />
        </div>
      ))}
    </div>
  );
}

function RiskVisual() {
  const color = (p: number, i: number) => {
    const s = p * i;
    if (s >= 12) return "bg-bad";
    if (s >= 6) return "bg-warn";
    return "bg-ok/70";
  };
  return (
    <div className="mt-6 grid grid-cols-4 gap-1" aria-hidden="true">
      {[4, 3, 2, 1].flatMap((p) =>
        [1, 2, 3, 4].map((i) => (
          <div key={`${p}-${i}`} className={`aspect-[3/1] rounded ${color(p, i)} ${p === 4 && i === 3 ? "ring-2 ring-ink" : "opacity-80"}`} />
        )),
      )}
    </div>
  );
}

function RevisionVisual() {
  return (
    <div className="mt-6 space-y-1.5 text-[11px]">
      <div className="flex items-center justify-between rounded-lg border border-ok/30 bg-ok/5 px-3 py-2">
        <span className="font-mono">Rev. B</span>
        <span className="font-medium text-ok">Vigente · Publicada</span>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-paper px-3 py-2 text-muted line-through decoration-muted/40">
        <span className="font-mono">Rev. A</span>
        <span>Sustituida</span>
      </div>
    </div>
  );
}

function QualityVisual() {
  return (
    <div className="mt-6 rounded-lg bg-paper px-3 py-2.5 text-[11px]">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate font-medium">Ensayo de compactación</span>
        <span className="rounded-md border border-ok/30 bg-ok/5 px-1.5 py-0.5 text-ok">Publicado</span>
      </div>
      <p className="mt-1 truncate text-muted">Creado por Jefe de proyecto · Validado por Dirección</p>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className="mt-6 space-y-1.5 font-mono text-[11px]">
      {["2026-10", "2026-09", "2026-08"].map((m, i) => (
        <div key={m} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
          <span>Informe mensual · {m}</span>
          <span className={i === 0 ? "text-gold-600" : "text-muted"}>{i === 0 ? "PDF ↓" : "Archivado"}</span>
        </div>
      ))}
    </div>
  );
}

const featureVisuals: Record<string, React.ReactNode> = {
  cartera: <PortfolioVisual />,
  economia: <TreeVisual />,
  planificacion: <GanttVisual />,
  riesgos: <RiskVisual />,
  calidad: <QualityVisual />,
  documentos: <RevisionVisual />,
  informes: <ReportVisual />,
};

const featureSpan: Record<string, string> = {
  cartera: "lg:col-span-4",
  economia: "lg:col-span-2",
  planificacion: "lg:col-span-3",
  riesgos: "lg:col-span-3",
  calidad: "lg:col-span-2",
  documentos: "lg:col-span-2",
  informes: "lg:col-span-2",
};

export function Features() {
  return (
    <section id="plataforma" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>La plataforma</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Todo lo que pasa en tu obra, conectado.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Cada pantalla usa los mismos datos. Lo que cambias en una partida se ve al momento en el panel, en el informe y
            en el portal del cliente.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {features.map((f) => (
            <article
              key={f.key}
              className={`reveal group flex flex-col rounded-3xl border border-line bg-paper/60 p-7 transition hover:border-gold-500/40 hover:bg-white hover:shadow-xl hover:shadow-navy-900/5 ${featureSpan[f.key]}`}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] text-gold-600 uppercase">{f.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
              <div className="mt-auto">{featureVisuals[f.key]}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Copilot */

const toneStyles: Record<string, string> = {
  warn: "border-warn/40 text-gold-300",
  info: "border-sky-400/30 text-sky-300",
  ok: "border-ok/50 text-emerald-300",
};

export function Copilot() {
  return (
    <section id="copiloto" className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <Image
        src={images.copilotManager.src}
        alt=""
        fill
        sizes="100vw"
        quality={60}
        placeholder="blur"
        className="-z-20 object-cover object-[30%_40%] opacity-50"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40 max-lg:bg-navy-950/85"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10%] bottom-[-30%] -z-10 h-[500px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(217,151,43,0.18),transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow dark>{copilot.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{copilot.title}</h2>
          <p className="mt-5 text-lg text-white/65">{copilot.text}</p>
          <ul className="mt-8 space-y-3">
            {copilot.points.map((p) => (
              <li key={p} className="flex gap-3 text-white/85">
                <Check />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm font-medium">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold-500 text-navy-950" aria-hidden="true">
                ✦
              </span>
              Copiloto INARA
            </p>
            <span className="font-mono text-[11px] text-white/40">Nave industrial · hoy</span>
          </div>
          <p className="mt-5 text-sm text-white/50">Análisis automático del estado económico</p>
          <ul className="mt-3 space-y-2.5">
            {copilot.insights.map((ins) => (
              <li key={ins.text} className={`rounded-xl border-l-2 bg-white/[0.03] px-4 py-3 text-sm ${toneStyles[ins.tone]}`}>
                <span className="text-white/85">{ins.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white/50">
            Ver recomendaciones <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Client portal */

export function ClientPortal() {
  return (
    <section id="cliente" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="reveal mx-auto max-w-3xl text-center">
        <Eyebrow>{clientPortal.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{clientPortal.title}</h2>
        <p className="mt-5 text-lg text-muted">{clientPortal.text}</p>
      </div>

      <div className="reveal relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl sm:aspect-[16/7]">
        <Image
          src={images.clientPortal.src}
          alt={images.clientPortal.alt}
          fill
          sizes="(min-width: 1152px) 1120px, 100vw"
          placeholder="blur"
          className="object-cover object-[40%_35%]"
        />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-ok" /> Publicado y validado para el cliente
        </span>
      </div>

      <div className="mt-4 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="reveal rounded-3xl border border-line bg-white p-7">
          <p className="text-sm font-medium text-muted">Equipo INARA ve</p>
          <ul className="mt-5 space-y-3">
            {clientPortal.internal.map((x) => (
              <li key={x} className="flex gap-3">
                <Check className="text-navy-700" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal flex flex-row items-center justify-center gap-3 md:flex-col" aria-hidden="true">
          <span className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium">Marcado para cliente</span>
          <span className="font-mono text-gold-600">+</span>
          <span className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium">Validado</span>
          <span className="font-mono text-gold-600 md:rotate-0">=</span>
        </div>

        <div className="reveal rounded-3xl bg-navy-900 p-7 text-white">
          <p className="text-sm font-medium text-gold-400">Tu cliente ve</p>
          <ul className="mt-5 space-y-3">
            {clientPortal.client.map((x) => (
              <li key={x} className="flex gap-3 text-white/90">
                <Check />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Steps */

const stepImages = [images.step1, images.step2, images.step3];

export function Steps() {
  return (
    <section id="como-funciona" className="border-y border-line bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal max-w-2xl">
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">De la primera partida al dossier final.</h2>
        </div>
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="reveal relative overflow-hidden rounded-3xl border border-line">
              <Image
                src={stepImages[i].src}
                alt={stepImages[i].alt}
                sizes="(min-width: 768px) 360px, 100vw"
                placeholder="blur"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="px-7 pt-6 pb-7">
              <span className="font-mono text-5xl font-semibold text-gold-500/30">{s.n}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Details */

export function Details() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        {/* Site photo with a floating status card */}
        <div className="reveal relative mx-auto w-full max-w-md">
          <Image
            src={images.siteMobile.src}
            alt={images.siteMobile.alt}
            sizes="(min-width: 1024px) 448px, 100vw"
            placeholder="blur"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-navy-900/20"
          />
          <div className="absolute -right-2 bottom-8 w-56 rounded-2xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur sm:-right-8">
            <p className="text-[11px] font-medium tracking-wider text-muted uppercase">Calidad y seguridad</p>
            {[
              ["Ensayo de compactación", "bg-ok"],
              ["Hold point ferralla", "bg-bad"],
            ].map(([x, c]) => (
              <div key={x} className="mt-2 flex items-center justify-between text-xs">
                <span className="truncate">{x}</span>
                <span className={`ml-2 h-2 w-2 shrink-0 rounded-full ${c}`} />
              </div>
            ))}
            <div className="mt-3 rounded-lg bg-gold-500 py-1.5 text-center text-[11px] font-medium text-navy-950">+ Nueva inspección</div>
          </div>
        </div>

        <div>
          <div className="reveal">
            <Eyebrow>Pensada para el día a día</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">En la oficina y en la obra.</h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.title} className="reveal border-t border-line pt-5">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1 text-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FAQ */

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="border-t border-line bg-white py-24 sm:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.6fr]">
        <div className="reveal">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Lo que suelen preguntarnos.</h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {f.q}
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45 group-open:border-gold-500 group-open:text-gold-600"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Demo CTA */

export function Demo() {
  return (
    <section id="demo" className="px-4 py-24 sm:py-32">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 text-white sm:px-12 sm:py-16">
        <Image
          src={images.ctaNight.src}
          alt={images.ctaNight.alt}
          fill
          sizes="(min-width: 1152px) 1120px, 100vw"
          quality={60}
          placeholder="blur"
          className="-z-20 object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/50" aria-hidden="true" />
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute top-[-40%] left-[-10%] -z-10 h-[500px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(217,151,43,0.25),transparent)]"
          aria-hidden="true"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow dark>{demo.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{demo.title}</h2>
            <p className="mt-5 text-lg text-white/65">{demo.text}</p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li className="flex gap-3">
                <Check /> Demo con un proyecto de ejemplo
              </li>
              <li className="flex gap-3">
                <Check /> Vemos cómo cargar tu primera obra
              </li>
              <li className="flex gap-3">
                <Check /> Sin compromiso
              </li>
            </ul>
          </div>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Footer */

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo tone="dark" />
          <p className="mt-3 max-w-xs text-sm text-muted">Plataforma de control de proyectos de construcción.</p>
        </div>
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted">
          © {site.year} {site.company}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
