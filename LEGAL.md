# Offene rechtliche Ergänzungen

Dieses Dokument hält fest, was vor einem rechtssicheren Go-Live noch vom **Website-Betreiber** (Kunde) geliefert und vom Webteam eingebunden werden muss. Es ersetzt keine Rechtsberatung.

## Status

| Thema | Status | Zuständigkeit |
| --- | --- | --- |
| Impressum | **Platzhalter live** – Inhalt muss ergänzt werden | Kunde liefert Text, Webteam ersetzt Platzhalter |
| Datenschutzerklärung | **Platzhalter live** – Inhalt muss ergänzt werden | Kunde liefert Text (ggf. mit Fachberatung), Webteam ersetzt Platzhalter |
| Footer-Verlinkung | Umgesetzt (ein Klick) | `/impressum`, `/datenschutz` sowie arabische Pendants |
| KI-Kennzeichnung der Bilder | Umgesetzt auf der Website | Webteam (sichtbare Labels, Alt-Texte, Footer-Hinweis) |

Seiten:

- Deutsch: `/impressum`, `/datenschutz`
- Arabisch: `/ar/impressum`, `/ar/datenschutz`
- Konfiguration: `src/config/site.ts` → `legal.*`

## Impressum – vom Kunden benötigt

- vollständige Anbieterangaben und vertretungsberechtigte Person
- ladungsfähige Anschrift und Kontakt (vorläufig aus der Site-Config eingetragen)
- falls vorhanden: Registergericht, Registernummer, Umsatzsteuer-ID
- weitere Pflichtangaben je nach Rechtsform und Tätigkeit

## Datenschutz – vom Kunden benötigt

- verantwortliche Stelle
- Zwecke und Rechtsgrundlagen der Verarbeitung
- Empfänger / Auftragsverarbeiter
- Speicherdauer
- Betroffenenrechte
- datenschutzrechtliche Einordnung der Kontaktwege E-Mail, Telefon und WhatsApp
- Hosting-Anbieter
- ggf. Statistik-, Font-, CDN- oder sonstige Drittanbieter-Dienste

## KI-generierte Medien

Alle Bilder der Website (Logo, Inhaltsbilder, Social-Preview `public/og.webp`) sind mit KI generiert. Auf der Seite sind sie sichtbar und barrierearm gekennzeichnet („Mit KI generiert“ / arabische Entsprechung), inklusive Footer-Hinweis.

Technische Provenance-Markierungen in den Bilddateien selbst (maschinenlesbare Provider-Watermarks/Metadaten) bleiben ggf. zusätzlich zu prüfen, sobald verbindliche Praxisleitfäden und Datei-Workflows feststehen.
