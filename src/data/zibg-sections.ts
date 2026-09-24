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
  defaultAssignee: string;
  defaultStatus: "todo" | "in-progress" | "done";
}

export const ZIBG_MEMBERS = [
  "Abdul Aziz",
  "Samih",
  "Engin",
  "Mahmoud",
  "Inan",
  "Hassib",
] as const;
export type ZibgMember = (typeof ZIBG_MEMBERS)[number];

export const zibgSections: ZibgSection[] = [
  { id: "aufgaben-teaser", badge: "Board", title: "Aufgaben-Board", externalLink: "./aufgaben/" },
  { id: "protokolle-teaser", badge: "Sitzung", title: "Protokolle & Beschlüsse", externalLink: "./protokolle/" },
  { id: "ausgangslage", badge: "01", title: "Ausgangslage" },
  { id: "zahlungen", badge: "02", title: "Bisherige Zahlungen" },
  { id: "beschluss", badge: "03", title: "Empfehlung" },
  { id: "rechner", badge: "04", title: "Beitragsrechner" },
  { id: "clubdesk", badge: "05", title: "ClubDesk" },
  { id: "betterplace", badge: "06", title: "Betterplace-Registrierung" },
  { id: "naechste-schritte", badge: "07", title: "Nächste Schritte" },
  { id: "satzung-extern", badge: "Recht", title: "Satzung & Dokumente", externalLink: "./satzung/" },
];

export const zibgNavItems = [
  { href: "./aufgaben/", label: "📋 Aufgaben-Board" },
  { href: "./protokolle/", label: "📝 Sitzungsprotokolle" },
  { href: "#zahlungen", label: "Zahlungen" },
  { href: "#rechner", label: "Beitragsrechner" },
  { href: "#clubdesk", label: "ClubDesk" },
  { href: "#betterplace", label: "Betterplace" },
  { href: "./satzung/", label: "📜 Satzung & PDF" },
];

export const zibgBoardNavItems = [
  { href: "../index.html", label: "← Zurück zur Übersicht" },
  { href: "../protokolle/", label: "📝 Protokolle & Beschlüsse" },
  { href: "../satzung/", label: "📜 Satzung & Dokumente" },
  { href: "#top", label: "Fortschritt" },
  { href: "#kanban-grid", label: "Kanban-Board" },
];

export const zibgProtokollNavItems = [
  { href: "../index.html", label: "← Zurück zur Übersicht" },
  { href: "../aufgaben/", label: "📋 Zum Aufgaben-Board" },
  { href: "#beschluesse", label: "Verbindliche Beschlüsse" },
  { href: "#themen", label: "Sitzungsthemen" },
  { href: "#massnahmen", label: "Aufgabenverteilung" },
  { href: "../satzung/", label: "📜 Satzung & PDF" },
];

export const zibgSatzungNavItems = [
  { href: "../index.html", label: "← Zurück zur Übersicht" },
  { href: "../aufgaben/", label: "📋 Aufgaben-Board" },
  { href: "../protokolle/", label: "📝 Protokolle & Beschlüsse" },
  { href: "#satzung", label: "Satzungslage" },
  { href: "#satzung-dokument", label: "Vollständige Satzung (PDF)" },
  { href: "#quellen", label: "Rechtsquellen" },
];

export const initialZibgTasks: ZibgTask[] = [
  // --- Beschlossene Aufgaben aus der Sitzung vom 24.09.2026 ---
  {
    id: "task-m-1",
    title: "Better Place: Plattform vollständig übernehmen & einrichten",
    description:
      "Vollständige Betreuung übernehmen; Freistellungsbescheid, Vereinsunterlagen und Bankdaten beim Vorstand anfordern; Profil und Projektseite vor Raumbezug fertigstellen.",
    category: "Fundraising & Spenden",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-2",
    title: "Vereinsunterlagen scannen & zentrale digitale Ablage aufbauen",
    description:
      "Vorhandene physische Mappe/Dokumentenbox übernehmen, Papierunterlagen (Anträge, Nachweise, Kontoauszüge) strukturieren und auf einem sicheren Share für berechtigte Vorstandsmitglieder ablegen.",
    category: "Organisation & IT",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },
  {
    id: "task-m-3",
    title: "Bank & Online-Banking als Schatzmeister klären",
    description:
      "Bei der Bank die Voraussetzungen für den Online-Banking-Zugang prüfen und feststellen, ob der Zugang allein mit Ausweis und Satzung beantragt werden kann oder eine Vorstandsbegleitung nötig ist.",
    category: "Finanzen & Bank",
    defaultAssignee: "Samih",
    defaultStatus: "todo",
  },
  {
    id: "task-m-4",
    title: "Gewerbeflächen suchen & Inserate in die Gruppe stellen",
    description:
      "Operative Suche nach geeigneter Gewerbeeinheit: Max. 700 € warm, ca. 2,5 km um Krefeld Hbf, ebenerdig/gut zugänglich, seriöser Eindruck. Links intern zur Prüfung teilen.",
    category: "Räumlichkeiten",
    defaultAssignee: "Inan",
    defaultStatus: "todo",
  },
  {
    id: "task-m-5",
    title: "Freigegebene Vermieter/Makler kontaktieren",
    description:
      "Systematisches Vorgehen: Nach interner Freigabe zuerst schriftlich per E-Mail anfragen (Fokus auf Bildung, Deutschunterricht, Treffpunkt), anschließend telefonisch nachfassen.",
    category: "Räumlichkeiten",
    defaultAssignee: "Samih",
    defaultStatus: "todo",
  },
  {
    id: "task-m-6",
    title: "Tschetschenischen Kontakt wegen Gewerbeobjekten anfragen",
    description:
      "Den genannten tschetschenischen Kontakt bezüglich potenzieller Gewerbeimmobilien oder weiterführender Kontakte in Krefeld anschreiben.",
    category: "Räumlichkeiten",
    defaultAssignee: "Hassib",
    defaultStatus: "todo",
  },
  {
    id: "task-m-7",
    title: "Unterlagen & Vollmachten an Verantwortliche übergeben",
    description:
      "Abdul Aziz (Better Place/Digitalisierung) und Samih (Bank) alle benötigten Dokumente, Nachweise und Berechtigungen zügig und unkompliziert bereitstellen.",
    category: "Vorstand & Recht",
    defaultAssignee: "Mahmoud",
    defaultStatus: "todo",
  },
  {
    id: "task-m-8",
    title: "Im privaten Umfeld nach Gewerbeflächen umhören (Vitamin B)",
    description:
      "Gezielte Abfrage im persönlichen Netzwerk nach passenden Gewerbeobjekten oder hilfreichen Vermieterkontakten im 2,5-km-Bereich um den Krefelder Hauptbahnhof.",
    category: "Räumlichkeiten",
    defaultAssignee: "Engin",
    defaultStatus: "todo",
  },
  {
    id: "task-m-9",
    title: "Wöchentliches Status-Meeting durchführen (Do, 21:30 Uhr)",
    description:
      "Fester wöchentlicher Jour Fixe zur Fortschrittskontrolle von Kanban-Board, Better Place, Raumsuche und Finanzen. Frühzeitige Hilfestellung bei Engpässen.",
    category: "Organisation & Vorstand",
    defaultAssignee: "Abdul Aziz",
    defaultStatus: "todo",
  },

  // --- Basisaufgaben der Vereinsverwaltung ---
  {
    id: "task-1",
    title: "Mitgliederbestand erfassen & abgleichen",
    description:
      "WhatsApp-Gruppe mit schriftlichen Aufnahmeanträgen und tatsächlichen Kontoeingängen abgleichen.",
    category: "Mitglieder & Verwaltung",
    defaultAssignee: "Samih",
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
    defaultAssignee: "Samih",
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
    defaultAssignee: "Samih",
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
