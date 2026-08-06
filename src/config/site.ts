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
   * Offen: Impressum und Datenschutz müssen vom Website-Betreiber
   * (Shaker Consulting) inhaltlich geliefert und hier verlinkt werden.
   * Solange leer, werden keine Rechtslinks gerendert; der Footer zeigt
   * einen Hinweis auf die ausstehende Ergänzung.
   * Checkliste: siehe LEGAL.md
   */
  legal: {
    imprintUrl: "",
    privacyUrl: "",
  },
} as const;
