// Coded replica of the project dashboard. Figures are illustrative, never real client data.

const kpis = [
  { label: "¿Cómo avanza?", value: "55%", bar: 55 },
  { label: "¿Cómo va el coste?", value: "2.975.125 €", sub: "+82.085 € (2,8 %)", subTone: "text-bad" },
  { label: "Riesgos abiertos", value: "3", sub: "Crítico", subTone: "text-bad" },
  { label: "Próximo hito", value: "18 sept", sub: "Acabado de fachada" },
];

const waterfall = [
  { label: "Objetivo", h: 78, y: 22, color: "#2f5bd8" },
  { label: "Ejecutado", h: 30, y: 70, color: "#15803d" },
  { label: "Comprom.", h: 37, y: 33, color: "#5b6478" },
  { label: "Forecast", h: 80, y: 20, color: "#b91c1c" },
  { label: "Desv.", h: 3, y: 20, color: "#b91c1c" },
];

const menu = ["Inicio", "Economía", "Planificación", "Documentación", "Riesgos", "Calidad", "Informes", "Fotografías"];

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-x-10 -top-10 -bottom-4 rounded-[3rem] bg-gold-500/20 blur-3xl" aria-hidden="true" />
      <div
        className="relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/5"
        role="img"
        aria-label="Vista del panel de un proyecto en INARA 360: índice de salud, coste, avance, riesgos y gráficos de costes y avance."
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-[#eef0f5] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 hidden truncate rounded-md bg-white px-3 py-1 font-mono text-[11px] text-muted sm:block">
            app.inara360.com/proyectos/nave-industrial
          </span>
        </div>

        <div className="flex text-left">
          {/* Sidebar */}
          <aside className="hidden w-40 shrink-0 bg-navy-900 p-3 md:block">
            <div className="mb-4 flex items-center gap-2 px-1 pt-1">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              <span className="text-[10px] font-semibold tracking-[0.25em] text-white">INARA</span>
            </div>
            {menu.map((item, i) => (
              <div
                key={item}
                className={`mb-0.5 rounded-md px-2 py-1.5 text-[11px] ${
                  i === 0 ? "bg-white/10 font-medium text-gold-400" : "text-white/60"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 flex-1 bg-paper p-3 sm:p-4">
            {/* Health */}
            <div className="flex items-center justify-between rounded-xl border border-line bg-white p-3 sm:p-4">
              <div>
                <p className="text-[9px] font-medium tracking-widest text-muted uppercase">Estado general del proyecto</p>
                <p className="mt-0.5 text-xl font-bold tracking-tight text-warn sm:text-2xl">ATENCIÓN</p>
                <div className="mt-2 hidden flex-wrap gap-1 sm:flex">
                  {[
                    ["Coste", "-9"],
                    ["Riesgos", "-18"],
                    ["Plazos", "-16"],
                    ["Calidad", "-6"],
                  ].map(([k, v]) => (
                    <span key={k} className="rounded-full bg-paper px-2 py-0.5 text-[10px] text-ink">
                      {k} <span className="font-mono text-bad">{v}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e3e6ee" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="97.4"
                    strokeDashoffset={97.4 * (1 - 0.51)}
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center font-mono text-lg font-semibold text-ink">51</span>
              </div>
            </div>

            {/* KPIs */}
            <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-xl border border-line bg-white p-2.5">
                  <p className="truncate text-[9px] font-medium tracking-wider text-muted uppercase">{k.label}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-ink sm:text-base">{k.value}</p>
                  {k.bar !== undefined && (
                    <div className="mt-1.5 h-1 rounded-full bg-paper">
                      <div className="h-1 rounded-full bg-bad" style={{ width: `${k.bar}%` }} />
                    </div>
                  )}
                  {k.sub && <p className={`mt-0.5 truncate text-[10px] ${k.subTone ?? "text-muted"}`}>{k.sub}</p>}
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-medium text-ink">Cascada de costes</p>
                <svg viewBox="0 0 200 110" className="mt-2 w-full" aria-hidden="true">
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#e8ac45" strokeDasharray="3 3" strokeWidth="0.8" />
                  {waterfall.map((b, i) => (
                    <g key={b.label}>
                      <rect x={10 + i * 38} y={b.y} width="24" height={b.h} rx="2" fill={b.color} />
                      <text x={22 + i * 38} y="108" textAnchor="middle" fontSize="7" fill="#5b6478">
                        {b.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-medium text-ink">Curva S de avance</p>
                <svg viewBox="0 0 200 110" className="mt-2 w-full" aria-hidden="true">
                  {[25, 55, 85].map((y) => (
                    <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#eef0f5" strokeWidth="0.8" />
                  ))}
                  <polyline
                    points="0,98 20,96 40,92 60,86 80,74 100,62 120,48 140,34 160,22 180,14 200,10"
                    fill="none"
                    stroke="#2f5bd8"
                    strokeWidth="1.6"
                    strokeDasharray="4 3"
                  />
                  <polyline
                    points="0,98 20,93 40,90 60,82 80,72 100,62 110,50 120,58 140,58 160,58 200,58"
                    fill="none"
                    stroke="#d9972b"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="58" r="2.5" fill="#d9972b" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating copilot card */}
      <div className="absolute -bottom-16 -left-2 hidden w-64 animate-float rounded-2xl border border-white/15 bg-navy-900/90 p-4 text-left shadow-2xl backdrop-blur-xl sm:block lg:-left-10">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-gold-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Copiloto INARA
        </p>
        <p className="mt-2 text-xs leading-relaxed text-white/80">
          La previsión final indica un sobrecoste del <span className="font-semibold text-white">2,8 %</span>. Revisa el grupo
          Estructura.
        </p>
      </div>
    </div>
  );
}
