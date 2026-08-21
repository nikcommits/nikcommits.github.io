export interface ZibgSection {
  id: string;
  badge: string;
  title: string;
  externalLink?: string;
}

export interface ZibgTask {
  id: string;
  title: string;
  description: string;
  category: string;
  defaultAssignee: "Abdul Aziz" | "Engin" | "Mahmoud" | "Sammy";
  defaultStatus: "todo" | "in-progress" | "done";
}

export const ZIBG_MEMBERS = ["Abdul Aziz", "Engin", "Mahmoud", "Sammy"] as const;
export type ZibgMember = (typeof ZIBG_MEMBERS)[number];

export const zibgSections: ZibgSection[] = [
  { id: "aufgaben-teaser", badge: "Board", title: "Aufgaben-Board", externalLink: "./aufgaben/" },
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
  { href: "./aufgaben/", label: "📋 Zum Aufgaben-Board" },
  { href: "#satzung", label: "Satzungslage" },
  { href: "#zahlungen", label: "Zahlungen" },
  { href: "#clubdesk", label: "ClubDesk" },
  { href: "#betterplace", label: "Betterplace" },
  { href: "#naechste-schritte", label: "Nächste Schritte" },
];

export const zibgBoardNavItems = [
  { href: "../index.html", label: "← Zurück zur Übersicht" },
  { href: "#top", label: "Fortschritt" },
  { href: "#kanban-grid", label: "Kanban-Board" },
];

export const initialZibgTasks: ZibgTask[] = [
  {
    id: "task-1",
    title: "Mitgliederbestand erfassen & abgleichen",
    description:
      "WhatsApp-Gruppe mit schriftlichen Aufnahmeanträgen und tatsächlichen Kontoeingängen abgleichen.",
    category: "Mitglieder & Verwaltung",
    defaultAssignee: "Sammy",
    defaultStatus: "todo",
  },
  {
    id: "task-2",
    title: "Entwurf der Beitragsordnung erstellen",
    description:
      "240 € Jahresbeitrag (optional 12x 20 €), Fälligkeiten, Ermäßigungen und Mahnverfahren formulieren.",
    category: "Recht & Satzung",
    defaultAssignee: "Mahmoud",
    defaultStatus: "todo",
  },
  {
    id: "task-3",
    title: "Gemeinnützigkeitsnachweis prüfen",
    description:
      "Gültigen Freistellungsbescheid zur Körperschaftsteuer oder Feststellungsbescheid nach § 60a AO bereithalten.",
    category: "Recht & Satzung",
    defaultAssignee: "Mahmoud",
    defaultStatus: "todo",
  },
  {
    id: "task-4",
    title: "Vereinskonto & IBAN prüfen",
    description:
      "Sicherstellen, dass das Bankkonto korrekt auf den Vereinsnamen lautet (kein Privatkonto).",
    category: "Finanzen & Bank",
    defaultAssignee: "Engin",
    defaultStatus: "todo",
  },
  {
    id: "task-5",
    title: "Mitgliederversammlung fristgerecht einladen",
    description:
      "Mindestens 2 Wochen vorher mit Tagesordnungspunkt „Beschluss der Beitragsordnung“ einladen.",
    category: "Mitglieder & Verwaltung",
    defaultAssignee: "Sammy",
    defaultStatus: "todo",
  },
  {
    id: "task-6",
    title: "Beschluss fassen & Protokoll unterzeichnen",
    description:
      "Abstimmungsergebnis protokollieren; von Versammlungsleitung und Protokollführung unterschreiben lassen.",
    category: "Recht & Satzung",
    defaultAssignee: "Mahmoud",
    defaultStatus: "todo",
  },
  {
    id: "task-7",
    title: "Mitglieder über neues Modell informieren",
    description:
      "Beitragshöhe, monatliche Zahlungsoption, Starttermin, Bankdaten und eindeutige Verwendungszwecke mitteilen.",
    category: "Mitglieder & Verwaltung",
    defaultAssignee: "Sammy",
    defaultStatus: "todo",
  },
  {
    id: "task-8",
    title: "ClubDesk Free einrichten & testen",
    description:
      "Mitgliederliste importieren, Benutzerrollen vergeben und Buchungskategorien (Beitrag vs. Spende) anlegen.",
    category: "Software & IT",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },
  {
    id: "task-9",
    title: "ClubDesk Auftragsverarbeitung & DSGVO",
    description:
      "AVV mit ClubDesk online abschließen und vereinsinterne Datenschutzerklärung ergänzen.",
    category: "Software & IT",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },
  {
    id: "task-10",
    title: "Betterplace: Organisationsprofil anlegen",
    description:
      "Vereinsname, Kontaktdaten, Vereinsregister und Freistellungsbescheid im Portal hinterlegen.",
    category: "Fundraising",
    defaultAssignee: "Engin",
    defaultStatus: "todo",
  },
  {
    id: "task-11",
    title: "Betterplace: Projektseite & Bedarfe anlegen",
    description:
      "Aussagekräftigen Projekttitel, Beschreibung, Zielgruppe, Bildmaterial und konkrete Spendenbedarfe erstellen.",
    category: "Fundraising",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },
  {
    id: "task-12",
    title: "Betterplace: Bankverbindung für Auszahlung hinterlegen",
    description:
      "Vereinskonto bei erster Auszahlung eintragen und Verifizierungsnachweis bereithalten.",
    category: "Fundraising",
    defaultAssignee: "Engin",
    defaultStatus: "todo",
  },
  {
    id: "task-13",
    title: "Mittelverwendung & Belegordnung",
    description:
      "Spendennachweise, Verträge und Mietbelege sicher und getrennt von Mitgliedsbeiträgen archivieren.",
    category: "Finanzen & Bank",
    defaultAssignee: "Engin",
    defaultStatus: "todo",
  },
  {
    id: "task-14",
    title: "Beitragsrechner & Monatsabgleich pflegen",
    description:
      "Monatliche Einnahmen gegen Mietbedarf (650 €) gegenprüfen und Deckungsgrad aktualisieren.",
    category: "Software & IT",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },
];
