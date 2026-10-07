// Recreation of the INARA mark seen in the platform. Swap for the official SVG when INARA sends it.
export function Logo({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const stroke = tone === "light" ? "#ffffff" : "#0f1b33";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <path d="M6 19 L20 7 L34 19 V34 H6 Z" fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 34 V24 H24 V34" fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        <circle cx="29" cy="11" r="4" fill="#d9972b" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-semibold tracking-[0.28em] ${tone === "light" ? "text-white" : "text-navy-900"}`}>
          INARA <span className="text-gold-500">360</span>
        </span>
        <span className={`mt-1 text-[9px] tracking-[0.18em] uppercase ${tone === "light" ? "text-white/50" : "text-muted"}`}>
          proyectos y gestión
        </span>
      </span>
    </span>
  );
}
