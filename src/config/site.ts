export const siteConfig = {
  name: "Shaker Consulting",
  title: "Beglaubigte Übersetzungen Arabisch–Deutsch in Krefeld | Shaker Consulting",
  description:
    "Beglaubigte Übersetzungen Arabisch–Deutsch in Krefeld, Dolmetschen und verständliche Antragsunterstützung. Persönlich erreichbar, vertraulich bearbeitet und bundesweit versendet.",
  locale: "de_DE",
  defaultImage: "/og.webp",
  email: "uebersetzungsbuero.shaker@gmail.com",
  phone: "02151 6000430",
  mobile: "01573 6455464",
  whatsapp: "https://wa.me/4915736455464",
  address: "Ostwall 70, 47798 Krefeld",
  hours: "Mo–Fr 10:00–16:30 Uhr · Sa nach Vereinbarung",
  nav: [
    { label: "Übersetzungen", href: "#uebersetzungen" },
    { label: "Dolmetschen", href: "#dolmetschen" },
    { label: "Anträge", href: "#antraege" },
    { label: "Ablauf", href: "#ablauf" },
  ],
  /**
   * Rechtsseiten sind als Platzhalter verlinkt (Footer, ein Klick).
   * Endgültige Texte liefert der Website-Betreiber – siehe LEGAL.md.
   */
  legal: {
    imprintUrl: "/impressum",
    privacyUrl: "/datenschutz",
    imprintUrlAr: "/ar/impressum",
    privacyUrlAr: "/ar/datenschutz",
  },
} as const;

/** Sprachwechsel-Pfad zur Parallelseite (DE ↔ AR). */
export function alternateLanguagePath(pathname: string, lang: "de" | "ar"): string {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (lang === "ar") {
    if (normalized === "/ar") return "/";
    return normalized.replace(/^\/ar/, "") || "/";
  }
  if (normalized === "/") return "/ar";
  return `/ar${normalized}`;
}
