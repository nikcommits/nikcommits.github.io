# Offene rechtliche Ergänzungen

Dieses Dokument hält fest, was vor einem rechtssicheren Go-Live noch vom **Website-Betreiber** (Kunde) geliefert und vom Webteam eingebunden werden muss. Es ersetzt keine Rechtsberatung.

## Status

| Thema | Status | Zuständigkeit |
| --- | --- | --- |
| Impressum | **Offen – muss ergänzt werden** | Kunde liefert Inhalt, Webteam bindet Seite/Link ein |
| Datenschutzerklärung | **Offen – muss ergänzt werden** | Kunde liefert Inhalt (ggf. mit Fachberatung), Webteam bindet Seite/Link ein |
| KI-Kennzeichnung der Bilder | Umgesetzt auf der Website | Webteam (sichtbare Labels, Alt-Texte, Footer-Hinweis) |

Konfiguration der späteren Links: `src/config/site.ts` → `legal.imprintUrl` und `legal.privacyUrl`.

## Impressum – vom Kunden benötigt

- vollständige Anbieterangaben und vertretungsberechtigte Person
- ladungsfähige Anschrift und Kontakt
- falls vorhanden: Register, Registernummer, Umsatzsteuer-ID
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
