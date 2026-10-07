"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-gold-500 focus:bg-white/10";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="grid place-items-center rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center" role="status">
        <div>
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-500 text-xl text-navy-950">✓</span>
          <p className="mt-4 text-xl font-semibold">¡Gracias! Hemos recibido tu solicitud.</p>
          <p className="mt-2 text-white/60">Te escribiremos en menos de 24 horas laborables.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-white/70">
          Nombre
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Tu nombre" />
        </label>
        <label className="text-sm text-white/70">
          Empresa
          <input name="company" required autoComplete="organization" className={inputClass} placeholder="Nombre de la empresa" />
        </label>
        <label className="text-sm text-white/70">
          Correo electrónico
          <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="nombre@empresa.com" />
        </label>
        <label className="text-sm text-white/70">
          Teléfono <span className="text-white/40">(opcional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+34 600 000 000" />
        </label>
        <label className="text-sm text-white/70 sm:col-span-2">
          ¿Cuántas obras gestionáis a la vez?
          <select name="projects" className={inputClass} defaultValue="">
            <option value="" disabled className="text-ink">
              Selecciona una opción
            </option>
            <option className="text-ink">1 – 3</option>
            <option className="text-ink">4 – 10</option>
            <option className="text-ink">Más de 10</option>
          </select>
        </label>
        <label className="text-sm text-white/70 sm:col-span-2">
          Mensaje <span className="text-white/40">(opcional)</span>
          <textarea name="message" rows={3} className={inputClass} placeholder="Cuéntanos brevemente tu caso" />
        </label>
        {/* Honeypot: bots fill it, people never see it. */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      <label className="mt-4 flex items-start gap-3 text-xs text-white/50">
        <input type="checkbox" name="privacy" required className="mt-0.5 accent-[#d9972b]" />
        Acepto que INARA use estos datos para contactarme sobre la demo.
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-xl bg-gold-500 px-6 py-3.5 font-medium text-navy-950 transition hover:bg-gold-400 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Solicitar demo"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-300" role="alert">
          No se ha podido enviar. Inténtalo de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
