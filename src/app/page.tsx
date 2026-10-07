import { Header } from "@/components/Header";
import {
  ClientPortal,
  Copilot,
  Demo,
  Details,
  Faq,
  Features,
  Footer,
  Hero,
  Highlights,
  Problems,
  Steps,
} from "@/components/Sections";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  url: site.url,
  inLanguage: ["es", "fr", "en"],
  publisher: { "@type": "Organization", name: site.company, url: site.url },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Problems />
        <Features />
        <Copilot />
        <ClientPortal />
        <Steps />
        <Details />
        <Faq />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
