"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled || open
            ? "border border-white/10 bg-navy-950/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <a href="#top" aria-label={`${site.name}, inicio`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={site.loginUrl} className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:text-white">
            Acceder
          </a>
          <a
            href="#demo"
            className="rounded-xl bg-gold-500 px-4 py-2 text-sm font-medium text-navy-950 transition hover:bg-gold-400"
          >
            Solicitar demo
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Móvil"
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-navy-950/95 p-3 backdrop-blur-xl lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-white/80 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-gold-500 px-4 py-3 text-center font-medium text-navy-950"
          >
            Solicitar demo
          </a>
        </nav>
      )}
    </header>
  );
}
