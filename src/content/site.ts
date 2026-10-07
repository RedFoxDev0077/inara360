// All landing copy lives here so it can be translated (FR / EN) without touching components.

export const site = {
  name: "INARA 360",
  company: "INARA · Proyectos y gestión",
  // TODO: replace with the real domain before going live.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://inara360.com",
  // TODO: replace with the real platform login URL.
  loginUrl: "#",
  // TODO: real contact details from INARA.
  email: "hola@inara360.com",
  year: 2026,
  lastUpdated: "2026-10-06",
  title: "INARA 360 · Control de proyectos de construcción en un solo lugar",
  description:
    "Coste, planificación, riesgos, calidad y documentación de tus obras en una sola plataforma. Con portal para el cliente, informes mensuales automáticos y Copiloto INARA.",
};

export const nav = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Copiloto", href: "#copiloto" },
  { label: "Portal cliente", href: "#cliente" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Nuevo · Copiloto INARA con análisis automático",
  title: ["El control total de tus", "proyectos de construcción,", "en un solo lugar."],
  subtitle:
    "Coste, avance, planificación, riesgos y documentación de cada obra, al día y en una sola pantalla. Para tu equipo, tus colaboradores y tu cliente.",
  primaryCta: { label: "Solicitar una demo", href: "#demo" },
  secondaryCta: { label: "Ver la plataforma", href: "#plataforma" },
  bullets: ["Coste, avance y desviación al día", "Documentos aprobados y fotos de obra", "Planificación, hitos y riesgos"],
};

export const highlights = [
  { value: "0–100", label: "Índice de salud por proyecto" },
  { value: "4", label: "Niveles de presupuesto, siempre cuadrados" },
  { value: "1", label: "Revisión vigente por documento" },
  { value: "3", label: "Idiomas: español, francés e inglés" },
];

export const problems = [
  {
    title: "Costes repartidos en mil Excel",
    text: "Cada uno tiene su versión del presupuesto y nadie sabe cuál es la buena hasta que llega la factura.",
  },
  {
    title: "Planos sin control de versiones",
    text: "En obra se construye con una revisión que ya estaba sustituida. El error se descubre tarde y sale caro.",
  },
  {
    title: "El cliente preguntando cada semana",
    text: "Informes a mano, correos y llamadas para contar lo mismo. Horas de trabajo que no avanzan la obra.",
  },
];

export const features = [
  {
    key: "cartera",
    eyebrow: "Cartera",
    title: "Todos tus proyectos, de un vistazo",
    text: "Una tarjeta por obra con objetivo, forecast y desviación. El índice de salud de 0 a 100 te dice dónde mirar primero.",
  },
  {
    key: "economia",
    eyebrow: "Economía",
    title: "Sigue el dinero hasta la última partida",
    text: "Proyecto, grupo de control, unidad y partida. Cada nivel es la suma del de abajo, con contratos, certificaciones, facturas y pagos enlazados.",
  },
  {
    key: "planificacion",
    eyebrow: "Planificación",
    title: "Gantt con camino crítico",
    text: "Cada actividad en el calendario. Las retrasadas se marcan solas y los hitos críticos siempre a la vista.",
  },
  {
    key: "riesgos",
    eyebrow: "Riesgos",
    title: "Lo que todavía puede torcerse",
    text: "Probabilidad e impacto calculan el nivel de cada riesgo. Nada se pone a mano.",
  },
  {
    key: "calidad",
    eyebrow: "Calidad y seguridad",
    title: "Inspecciones, no conformidades y HSE",
    text: "Con evidencias adjuntas y trazabilidad completa: quién abrió cada registro y quién lo validó.",
  },
  {
    key: "documentos",
    eyebrow: "Documentos y planos",
    title: "Siempre la revisión vigente",
    text: "Cada documento con su historial. Al aprobar una revisión nueva, la anterior queda sustituida sola. Dossier As-Built listo al final.",
  },
  {
    key: "informes",
    eyebrow: "Informes",
    title: "El informe mensual se hace solo",
    text: "Se construye con los mismos datos que el resto de pantallas. Elige el mes, revísalo y guárdalo en PDF.",
  },
];

export const copilot = {
  eyebrow: "Copiloto INARA",
  title: "Tu proyecto, analizado antes de que preguntes",
  text: "El Copiloto revisa coste, avance, plazos y riesgos de cada obra y te dice en palabras claras qué está pasando y qué conviene hacer.",
  points: [
    "Detecta desviaciones de coste y plazo en cuanto aparecen",
    "Explica qué está afectando al índice de salud",
    "Propone las decisiones pendientes más urgentes",
  ],
  insights: [
    { tone: "warn", text: "La previsión final indica un sobrecoste del 2,8 % respecto al presupuesto." },
    { tone: "info", text: "El avance económico real es del 38,9 %, por debajo del avance físico (55 %)." },
    { tone: "ok", text: "No existen grupos de control con riesgo económico crítico." },
    { tone: "warn", text: "Decisión de cliente sobre acabado de fachada: hito retrasado 16 días." },
  ],
};

export const clientPortal = {
  eyebrow: "Portal del cliente",
  title: "Tu cliente ve su obra en tiempo real. Solo lo que tú validas.",
  text: "Un registro llega al cliente solo cuando se cumplen dos condiciones: está marcado para el cliente y INARA lo ha validado. Así ningún borrador sale antes de tiempo.",
  internal: ["Todos los registros y borradores", "Observaciones internas", "Estimación económica de riesgos", "Rondas de aprobación de documentos", "Crear, editar y validar"],
  client: ["Solo sus proyectos", "Registros publicados y validados", "Riesgos sin cifras internas", "Documentos vigentes publicados", "Solo lectura"],
};

export const steps = [
  { n: "01", title: "Cargamos tu proyecto", text: "Presupuesto, planificación y documentación de partida, estructurados desde el primer día." },
  { n: "02", title: "Tu equipo trabaja en el día a día", text: "Certificaciones, facturas, inspecciones y revisiones se registran donde ocurren, también desde el móvil." },
  { n: "03", title: "Tú y tu cliente decidís con datos", text: "Índice de salud, Copiloto e informe mensual automático. Sin perseguir a nadie para saber cómo va la obra." },
];

export const details = [
  { title: "En el móvil", text: "Diseñada para usarse en obra, con el pulgar." },
  { title: "Español, francés e inglés", text: "Toda la plataforma cambia de idioma con un clic." },
  { title: "Modo claro y oscuro", text: "Las cifras se leen bien en los dos." },
  { title: "Búsqueda con Ctrl + K", text: "Cualquier proyecto, unidad o documento, desde cualquier pantalla." },
  { title: "Modo presentación", text: "Enseña el proyecto en una reunión sin ruido alrededor." },
  { title: "Acceso por perfiles", text: "Dirección, jefe de proyecto y cliente, cada uno con sus permisos." },
];

export const faqs = [
  {
    q: "¿Para quién es INARA 360?",
    a: "Para promotoras, constructoras, project managers y equipos de dirección de obra que necesitan controlar coste, plazo y calidad de varios proyectos a la vez, y compartir el avance con su cliente.",
  },
  {
    q: "¿Qué ve exactamente mi cliente?",
    a: "Solo sus proyectos y solo los registros que están marcados para el cliente y validados por INARA. Nunca ve borradores, observaciones internas ni la estimación económica de los riesgos.",
  },
  {
    q: "¿Puedo usarla desde el móvil en obra?",
    a: "Sí. La plataforma está pensada para usarse con el móvil: formularios a pantalla completa, botones grandes y tablas que se desplazan dentro de su propio marco.",
  },
  {
    q: "¿En qué idiomas está disponible?",
    a: "En español, francés e inglés. Cada usuario elige su idioma y toda la interfaz cambia al momento.",
  },
  {
    q: "¿Cómo se generan los informes mensuales?",
    a: "Se construyen automáticamente con los mismos datos del resto de la plataforma. Eliges el periodo, lo revisas y lo guardas en PDF o lo archivas junto al documento enviado al cliente.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Solicita una demo con el formulario de abajo. Te enseñamos la plataforma con un proyecto de ejemplo y vemos juntos cómo cargar el tuyo.",
  },
];

export const demo = {
  eyebrow: "Solicita una demo",
  title: "Mira tu próxima obra con INARA 360",
  text: "Cuéntanos qué proyectos gestionas y te enseñamos la plataforma en 30 minutos.",
};
