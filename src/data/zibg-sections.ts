export interface ZibgSection {
  id: string;
  badge: string;
  title: string;
}

export const zibgSections: ZibgSection[] = [
  { id: "ausgangslage", badge: "01", title: "Ausgangslage" },
  { id: "satzung", badge: "02", title: "Satzungslage" },
  { id: "satzung-dokument", badge: "PDF", title: "Vollständige Satzung" },
  { id: "zahlungen", badge: "03", title: "Bisherige Zahlungen" },
  { id: "beschluss", badge: "04", title: "Empfehlung" },
  { id: "rechner", badge: "05", title: "Beitragsrechner" },
  { id: "clubdesk", badge: "06", title: "ClubDesk" },
  { id: "naechste-schritte", badge: "07", title: "Nächste Schritte" },
  { id: "betterplace", badge: "08", title: "Betterplace-Registrierung" },
  { id: "quellen", badge: "09", title: "Rechtsquellen" },
];

export const zibgNavItems = [
  { href: "#satzung", label: "Satzungslage" },
  { href: "#zahlungen", label: "Zahlungen" },
  { href: "#clubdesk", label: "ClubDesk" },
  { href: "#betterplace", label: "Betterplace" },
  { href: "#naechste-schritte", label: "Nächste Schritte" },
];
