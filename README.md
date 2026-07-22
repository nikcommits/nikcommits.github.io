# Shaker Consulting Website

Mehrsprachige Astro-Website für das Übersetzungsbüro Shaker Consulting in Krefeld. Die deutsche und arabische Startseite sind statisch, responsive, barrierearm und ohne Client-Framework umgesetzt.

## Lokal entwickeln

```bash
npm install
npm run dev
```

Qualitätsprüfung und Produktions-Build:

```bash
npm run check
npm run build
```

## Produktionsdomain konfigurieren

Die Domain ist bewusst nicht fest im Projekt hinterlegt. Vor dem Produktions-Build muss `PUBLIC_SITE_URL` auf die vollständige kanonische Domain gesetzt werden, zum Beispiel:

```bash
PUBLIC_SITE_URL=https://www.beispiel.de npm run build
```

Erst dann werden Canonicals, absolute Open-Graph-URLs, `hreflang`, Sitemap und der Sitemap-Verweis in `robots.txt` erzeugt. Ohne diese Variable bleibt der lokale Build gültig, ohne eine falsche Domain zu veröffentlichen.

## Rechtliche Seiten

Die Zielpfade für Impressum und Datenschutz werden in `src/config/site.ts` unter `legal` eingetragen, sobald die geprüften Inhalte vorliegen. Solange die Werte leer sind, zeigt die Website keine irreführenden oder unvollständigen Links.

Noch benötigt werden:

- vollständige Anbieterangaben und vertretungsberechtigte Person für das Impressum,
- falls vorhanden Register, Registernummer und Umsatzsteuer-ID,
- verantwortliche Stelle, Rechtsgrundlagen, Empfänger, Speicherdauer und Betroffenenrechte für die Datenschutzerklärung,
- datenschutzrechtliche Einordnung der Kontaktwege E-Mail, Telefon und WhatsApp,
- Hosting-Anbieter und gegebenenfalls eingesetzte Statistik- oder Drittanbieter-Dienste.

## Inhalte und Kontakt

Zentrale Kontakt-, Navigations- und Rechtslink-Konfiguration: `src/config/site.ts`. Deutsche und arabische Inhalte liegen in `src/pages/index.astro` und `src/pages/ar/index.astro`.
