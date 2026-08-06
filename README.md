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

## Rechtliche Seiten (offen)

**Impressum und Datenschutzerklärung müssen noch ergänzt werden.** Die inhaltliche Verantwortung liegt beim Website-Betreiber; das Webteam setzt die Seiten und Links um, sobald geprüfte Texte vorliegen.

Die Zielpfade werden in `src/config/site.ts` unter `legal` eingetragen. Solange die Werte leer sind, werden keine unvollständigen Rechtslinks angezeigt; der Footer weist auf die ausstehende Ergänzung hin.

Vollständige Checkliste: [`LEGAL.md`](./LEGAL.md).

## KI-Kennzeichnung

Alle Bilder der Website sind mit KI generiert und auf der Seite gekennzeichnet (sichtbares Label, Alt-Text, Footer-Hinweis). Details: [`LEGAL.md`](./LEGAL.md).

## Inhalte und Kontakt

Zentrale Kontakt-, Navigations- und Rechtslink-Konfiguration: `src/config/site.ts`. Deutsche und arabische Inhalte liegen in `src/pages/index.astro` und `src/pages/ar/index.astro`.
