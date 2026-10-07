// Static imports give next/image the intrinsic size and an automatic blur placeholder.
// Regenerate the files with `npm run images` (see scripts/optimize-images.mjs).
import heroAerial from "./hero-aerial.webp";
import problemDesk from "./problem-desk.webp";
import copilotManager from "./copilot-manager.webp";
import clientPortal from "./client-portal.webp";
import siteMobile from "./site-mobile.webp";
import step1 from "./step-1-plan.webp";
import step2 from "./step-2-site.webp";
import step3 from "./step-3-decide.webp";
import ctaNight from "./cta-night.webp";

export const images = {
  heroAerial: { src: heroAerial, alt: "Vista aérea al anochecer de una nave industrial en construcción con grúas y luces de obra" },
  problemDesk: { src: problemDesk, alt: "Mesa de obra desordenada con planos marcados, hojas de cálculo impresas y un casco" },
  copilotManager: { src: copilotManager, alt: "Directora de proyecto revisando gráficos de avance con una obra iluminada al fondo" },
  clientPortal: { src: clientPortal, alt: "Jefa de obra enseñando el avance del proyecto en una tableta a su cliente en la estructura" },
  siteMobile: { src: siteMobile, alt: "Mano con guante sujetando un móvil con la aplicación en obra, junto a la ferralla" },
  step1: { src: step1, alt: "Planos, portátil y escuadra sobre una mesa azul" },
  step2: { src: step2, alt: "Encargado con casco revisando una unión de estructura metálica con una tableta" },
  step3: { src: step3, alt: "Dos profesionales dándose la mano junto a una tableta con gráficos, con la obra al fondo" },
  ctaNight: { src: ctaNight, alt: "" },
};
