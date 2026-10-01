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
  // --- Stand aus der Sitzung vom 01.10.2026: 2 erledigt, 6 in Arbeit (2 wiederkehrend), Rest offen ---

  // 1. ERLEDIGTE AUFGABEN (2)
  {
    id: "task-m-6",
    title: "Tschetschenischen Kontakt wegen Gewerbeobjekten anfragen",
    description:
      "Gespräch geführt: Hat selbst keine Fläche frei, fragt aber seine Kontakte nach passenden Räumen ab. Folgebeschluss: Besuch in Schulferien geplant.",
    category: "Räumlichkeiten",
    defaultAssignee: "Hassib",
    assignees: ["Hassib"],
    defaultStatus: "done",
  },
  {
    id: "task-m-8",
    title: "Maklerkontakt & Vitamin B in Krefeld ausloten",
    description:
      "Gespräch mit Makler Bilal in Krefeld geführt: Gewerbemarkt ist schwierig und angespannt, Vitamin B und direkte Kontakte sind der vielversprechendste Weg.",
    category: "Räumlichkeiten",
    defaultAssignee: "Nik Frühschulz",
    assignees: ["Nik Frühschulz", "Engin"],
    defaultStatus: "done",
  },

  // 2. IN ARBEIT (6 Aufgaben, davon 2 wiederkehrend)
  {
    id: "task-m-9",
    title: "Wöchentliches Status-Meeting durchführen (Do, 21:30 Uhr)",
    description:
      "Wiederkehrend: Fester wöchentlicher Jour Fixe zur Fortschrittskontrolle von Kanban-Board, Raumsuche, Bankfortschritt und Beseitigung von Engpässen.",
    category: "Organisation & Vorstand",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Mahmoud", "Samih"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-4",
    title: "Gewerbeflächen suchen & Inserate in Räumlichkeiten-Gruppe stellen",
    description:
      "Wiederkehrend: Max. 700 € warm, ca. 2,5 km um Krefeld Hbf, 30–34 qm. Neue Anzeigen ab sofort ausschließlich in die dedizierte Räumlichkeiten-Gruppe stellen als Puffer für Samy.",
    category: "Räumlichkeiten",
    defaultAssignee: "Inan",
    assignees: ["Inan", "Abdul Aziz"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-3",
    title: "Banktermin wahrnehmen: Online-Banking vor Ort einrichten",
    description:
      "Vorprüfung abgeschlossen: Persönliches Erscheinen eines Vorstandsmitglieds erforderlich. Fester Banktermin vereinbart für Mittwoch, 14.10. um 10:30 Uhr (Samih & Mahmoud; Ersatz springt bei Bedarf ein).",
    category: "Finanzen & Bank",
    defaultAssignee: "Samih",
    assignees: ["Samih", "Mahmoud"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-5",
    title: "Objekte abtelefonieren & Vermieter-Erstkontakt",
    description:
      "Samih telefoniert freigegebene und ältere Inserate ab. Bei Nichterreichen oder für schriftliche Anfragen wird die neue Muster-E-Mail versendet.",
    category: "Räumlichkeiten",
    defaultAssignee: "Samih",
    assignees: ["Samih"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-2",
    title: "Vereinsunterlagen übergeben & digitale Ablage aufbauen",
    description:
      "Übergabe der physischen Dokumentenbox stockte mangels Übergabetermin; Papierunterlagen zügig von Mahmoud an Abdul Aziz übergeben, scannen und Cloud-Share für Vorstand anlegen.",
    category: "Organisation & IT",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Mahmoud"],
    defaultStatus: "in-progress",
  },
  {
    id: "task-m-1",
    title: "Better Place: Plattform vollständig einrichten & freischalten",
    description:
      "Plattformbetreuung übernommen; Registrierung pausiert derzeit bis zur Übergabe der Vereinsdokumente & des Freistellungsbescheids.",
    category: "Fundraising & Spenden",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz"],
    defaultStatus: "in-progress",
  },

  // 3. OFFENE AUFGABEN & NÄCHSTE SCHRITTE AUS SITZUNG 01.10.2026
  {
    id: "task-m-10",
    title: "Muster-E-Mail für Vermieter vorbereiten & von Elias gegenlesen lassen",
    description:
      "Professionelles Anschreiben erstellen mit Schwerpunkt auf Lern-, Kultur- und Bildungsverein (30–34 qm genügen, kein abstoßendes Wording). Vor Versand Gegenlesen durch Elias.",
    category: "Räumlichkeiten",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz", "Elias"],
    defaultStatus: "todo",
  },
  {
    id: "task-m-11",
    title: "Weitere neue Objekte als Puffer in Räumlichkeiten-Gruppe schicken",
    description:
      "Gefundene Gewerbeobjekte (u. a. die leerstehende ehemalige Sparkassenfiliale) direkt in die separate Räumlichkeiten-Gruppe senden.",
    category: "Räumlichkeiten",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz"],
    defaultStatus: "todo",
  },
  {
    id: "task-m-12",
    title: "Kanban-Board für Mehrfach-Zuständigkeiten erweitern",
    description:
      "Board-System so ausbauen, dass Aufgaben flexibel mehreren Personen gleichzeitig zugeteilt werden können und Filter/Export dies abbilden.",
    category: "Organisation & IT",
    defaultAssignee: "Abdul Aziz",
    assignees: ["Abdul Aziz"],
    defaultStatus: "todo",
  },
  {
    id: "task-m-13",
    title: "Tschetschenischen Kontakt in den Schulferien besuchen",
    description:
      "Persönlicher Vor-Ort-Besuch in ein bis zwei Wochen während der Schulferien, um mögliche Raumkontakte und Netzwerke weiter zu vertiefen.",
    category: "Räumlichkeiten",
    defaultAssignee: "Hassib",
    assignees: ["Hassib"],
    defaultStatus: "todo",
  },
  {
    id: "task-m-14",
    title: "Haruns Vereinsstatus klären & ggf. in Gruppe aufnehmen",
    description:
      "Mahmoud klärt den aktuellen Status des Mitgründers Harun ab und nimmt ihn bei Bereitschaft zur Mitarbeit wieder in die WhatsApp-Gruppe auf.",
    category: "Vorstand & Recht",
    defaultAssignee: "Mahmoud",
    assignees: ["Mahmoud"],
    defaultStatus: "todo",
  },
  {
    id: "task-m-15",
    title: "Zahlungswege & Vereinssoftware evaluieren",
    description:
      "Unkomplizierte Spendenannahme vor Ort (QR-Code, Bargeldkasse), PayPal-Geschäftskonto sowie EasyVerein (kostenlos bis 50 Mitgl.) oder ClubDesk im Hintergrund prüfen.",
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
