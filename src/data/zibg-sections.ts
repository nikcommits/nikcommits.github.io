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
  defaultAssignee?: string;
  assignees?: string[];
  defaultStatus: "todo" | "in-progress" | "done";
}

export const ZIBG_MEMBERS = [
  "Abdul Aziz",
  "Samih",
  "Mahmoud",
  "Engin",
  "Inan",
  "Hassib",
  "Elias",
  "Nik Frühschulz",
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
  { href: "#sitzung-2026-10-01", label: "Sitzung 01.10.2026" },
  { href: "#sitzung-2026-09-24", label: "Sitzung 24.09.2026" },
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
  // --- 1. ERLEDIGT ---
  {
    id: "task-bank-klaeren",
    title: "Bank und Online-Banking klären",
    description: "Samy hat mit der Bank gesprochen: Ein Vorstandsmitglied muss persönlich zur Bank erscheinen.",
    category: "Finanzen & Bank",
    defaultAssignee: "Samih",
    assignees: ["Samih"],
    defaultStatus: "done",
  },
  {
    id: "task-kontakt-tschetschene",
    title: "Kontakt zum Tschetschenen",
    description: "Hassib hat mit ihm gesprochen: Er selbst hat keinen Raum, will aber seine Kontakte nach geeigneten Räumlichkeiten fragen.",
    category: "Räumlichkeiten",
    defaultAssignee: "Hassib",
    assignees: ["Hassib"],
    defaultStatus: "done",
  },
  {
    id: "task-board-verbessern",
    title: "Board verbessern (Mehrere Personen zuweisbar)",
    description: "Das Board soll so eingestellt werden, dass mehrere Personen einer Aufgabe zugewiesen werden können.",
    category: "Organisation & IT",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz"],
    defaultStatus: "done",
  },
  {
    id: "task-makler-bilal",
    title: "Maklerkontakt & Vitamin B in Krefeld ausloten",
    description: "Nik sprach mit Makler Bilal in Krefeld: Gewerbemarkt schwierig und angespannt, Vitamin B und private Kontakte sind der beste Weg.",
    category: "Räumlichkeiten",
    defaultAssignee: "Nik Frühschulz",
    assignees: ["Nik Frühschulz", "Engin"],
    defaultStatus: "done",
  },

  // --- 2. NOCH OFFEN BZW. IN ARBEIT ---
  {
    id: "task-banktermin-vereinbaren",
    title: "Banktermin vereinbaren & wahrnehmen (14.10., 10:30 Uhr)",
    description: "Der Termin wurde für den 14. um 10:30 Uhr vereinbart. Samy geht voraussichtlich mit Mahmud; falls Mahmud nicht kann, springt Nik ein.",
    category: "Finanzen & Bank",
    defaultAssignee: "Samih",
    assignees: ["Samih", "Mahmoud", "Nik Frühschulz"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-raumsuche",
    title: "Raumsuche (Räumlichkeiten-Gruppe & Puffer)",
    description: "Neue Gewerbeobjekte sollen weiterhin in die Räumlichkeiten-Gruppe geschickt werden. Die bereits gesammelten Anzeigen sollen ebenfalls kontaktiert werden.",
    category: "Räumlichkeiten",
    defaultAssignee: "Inan",
    assignees: ["Inan", "Abdul Aziz"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-objekte-abtelefonieren",
    title: "Objekte abtelefonieren",
    description: "Samy soll die passenden Anzeigen durchgehen und die Vermieter kontaktieren.",
    category: "Räumlichkeiten",
    defaultAssignee: "Samih",
    assignees: ["Samih"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-betterplace-profil",
    title: "Betterplace-Profil einrichten",
    description: "Ohne die digitalisierten Unterlagen kann das Profil noch nicht eingerichtet werden.",
    category: "Fundraising & Spenden",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-meeting-weekly",
    title: "Wöchentliches Status-Meeting (Do, 21:30 Uhr)",
    description: "Wiederkehrend: Verbindlicher Jour Fixe zur Aufgabenkontrolle, Raumsuche und Beseitigung von Blockern.",
    category: "Organisation & Vorstand",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Mahmoud", "Samih"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-muster-email",
    title: "Muster-E-Mail für Vermieter",
    description: "Eine Vorlage soll erstellt und von Elias gegengelesen werden. Bei Nichterreichbarkeit soll die E-Mail verschickt werden.",
    category: "Räumlichkeiten",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Elias"],
    defaultStatus: "todo",
  },
  {
    id: "task-suchfilter-einrichten",
    title: "Suchfilter einrichten (Kleinanzeigen & ImmoScout)",
    description: "Nik wollte Benachrichtigungen für neue Gewerbeflächen auf Kleinanzeigen und ImmoScout einrichten.",
    category: "Räumlichkeiten",
    defaultAssignee: "Nik Frühschulz",
    assignees: ["Nik Frühschulz"],
    defaultStatus: "todo",
  },
  {
    id: "task-dokumente-digitalisieren",
    title: "Dokumente digitalisieren",
    description: "Die Übergabe der Unterlagen hat noch nicht funktioniert. Das Thema bleibt offen.",
    category: "Organisation & IT",
    defaultAssignee: "Mahmoud",
    assignees: ["Mahmoud", "Abdul Aziz"],
    defaultStatus: "todo",
  },
  {
    id: "task-harun-status",
    title: "Haruns Status klären",
    description: "Es war unklar, ob Harun noch in der Gruppe ist. Gegebenenfalls soll Mahmud ihn wieder aufnehmen.",
    category: "Vorstand & Recht",
    defaultAssignee: "Mahmoud",
    assignees: ["Mahmoud"],
    defaultStatus: "todo",
  },
  {
    id: "task-tschetschene-besuch",
    title: "Kontakt zum Tschetschenen: Besuch in den Schulferien",
    description: "Persönlicher Vor-Ort-Besuch in ein bis zwei Wochen während der Ferien, um Kontakte zu Gewerberäumen zu vertiefen.",
    category: "Räumlichkeiten",
    defaultAssignee: "Hassib",
    assignees: ["Hassib"],
    defaultStatus: "todo",
  },
  {
    id: "task-zahlungswege-evaluieren",
    title: "Zahlungswege & Vereinssoftware evaluieren",
    description: "QR-Codes, PayPal Geschäftskonto, Barkasse am Eingang und EasyVerein (bis 50 Mitgl. kostenlos) / ClubDesk prüfen.",
    category: "Software & IT",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Samih"],
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
