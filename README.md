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

## Rechtliche Seiten (Platzhalter)

Impressum und Datenschutz sind im **Footer** mit einem Klick erreichbar:

- `/impressum` und `/datenschutz` (Deutsch)
- `/ar/impressum` und `/ar/datenschutz` (Arabisch)

Die Seiten enthalten bewusst nur Platzhalter plus bereits bekannte Kontaktdaten. **Endgültige Texte liefert der Website-Betreiber.** Checkliste: [`LEGAL.md`](./LEGAL.md).

Konfiguration: `src/config/site.ts` → `legal`.

## KI-Kennzeichnung

Alle Bilder der Website sind mit KI generiert und auf der Seite gekennzeichnet (sichtbares Label, Alt-Text, Footer-Hinweis). Details: [`LEGAL.md`](./LEGAL.md).

## Inhalte und Kontakt

Zentrale Kontakt-, Navigations- und Rechtslink-Konfiguration: `src/config/site.ts`. Deutsche und arabische Inhalte liegen in `src/pages/index.astro` und `src/pages/ar/index.astro`.
