// src/data/zibg-gewerbe-objects.ts
// Automatisch aktualisiert am 02.10.2026 (KW 39) via GitHub Actions Scraper
// Enthält 17 Gewerbeobjekte in Krefeld bis 750 € warm

export interface ZibgGewerbeObject {
  id: string;
  category: string;
  price: string;
  title: string;
  url: string;
  location: string;
  area: string;
  description: string;
  phone: string | null;
  phoneFormatted: string | null;
  firstSeen?: string;
  isNew?: boolean;
}

export type GewerbeStatus = "offen" | "nicht_erreicht" | "erreicht" | "besichtigung" | "absage";

export interface GewerbeStateItem {
  status: GewerbeStatus;
  note?: string;
  calledBy?: string;
  updatedAt?: string;
}

export const ZIBG_GEWERBE_LISTE: ZibgGewerbeObject[] = [
  {
    "id": "3479975065",
    "category": "Schulungs- / Seminarraum",
    "price": "94 € VB",
    "title": "Stilvoller Event- & Vortragsraum Krefeld | Lesungen, Präsentationen & Ausstellungen",
    "url": "https://www.kleinanzeigen.de/s-anzeige/stilvoller-event-vortragsraum-krefeld-lesungen-praesentationen-ausstellungen/3479975065-277-1975",
    "location": "47800 Krefeld (3 km)",
    "area": "k.A.",
    "description": "Studio Sollbrüggen – dein Event-, Veranstaltungs- und Vortragsraum für Lesungen, Präsentationen, Vernissagen & Boutique-Veranstaltungen in Krefeld-Bockum.\n\nIn stilvoller Landhausat...",
    "phone": "+4915150754221",
    "phoneFormatted": "+4915150754221",
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3480008837",
    "category": "Schulungs- / Seminarraum",
    "price": "69 € VB",
    "title": "Yogaraum & Körpertherapie in Krefeld-Bockum – stundenweise & wöchentlich buchbar",
    "url": "https://www.kleinanzeigen.de/s-anzeige/yogaraum-koerpertherapie-in-krefeld-bockum-stundenweise-woechentlich-buchbar/3480008837-277-1975",
    "location": "47800 Krefeld (4 km)",
    "area": "k.A.",
    "description": "Dein charmanter Kursraum, Übungsraum und Meditationsraum für Yoga, Tai Chi, Qigong, Meditation und Körperarbeit in Krefeld-Bockum.\n\nDer lichtdurchflutete Hauptraum (ca. 33 m²) biet...",
    "phone": "+4915150754221",
    "phoneFormatted": "+4915150754221",
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3476922285",
    "category": "Ladenlokal (EG)",
    "price": "5 € VB",
    "title": " EINZELHANDELSFLÄCHE  IN ETABLIERTER  NAHVERSORGUNGSLA",
    "url": "https://www.kleinanzeigen.de/s-anzeige/-einzelhandelsflaeche-in-etablierter-nahversorgungsla/3476922285-277-1978",
    "location": "47803 Krefeld (2 km)",
    "area": "k.A.",
    "description": "Zur Vermietung steht eine großzügige Einzelhandels- bzw. Gewerbefläche im Erdgeschoss eines gepflegten Wohn- und\nGeschäftshauses an der Hülser Straße im Krefelder Norden. Das Gebäu...",
    "phone": "01575",
    "phoneFormatted": "01575...",
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3479859812",
    "category": "Schulungs- / Seminarraum",
    "price": "209 € VB",
    "title": "Seminarraum, Workshop Krefeld/Düsseldorf – flexibel buchbar",
    "url": "https://www.kleinanzeigen.de/s-anzeige/seminarraum-workshop-krefeld-duesseldorf-flexibel-buchbar/3479859812-277-1975",
    "location": "47800 Krefeld (3 km)",
    "area": "55 m²",
    "description": "Studio Sollbrüggen – dein flexibler Seminar-, Workshop- und Tagungsraum in Krefeld-Bockum, der seinesgleichen sucht.\n\nStatt anonymer Tagungshotel-Atmosphäre erwartet dich ein persö...",
    "phone": "+4915150754221",
    "phoneFormatted": "+4915150754221",
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3478372940",
    "category": "Schulungs- / Seminarraum",
    "price": "69 € VB",
    "title": "Flexibler Coaching-, Workshop- & Eventraum in Krefeld-Bockum",
    "url": "https://www.kleinanzeigen.de/s-anzeige/flexibler-coaching-workshop-eventraum-in-krefeld-bockum/3478372940-277-1975",
    "location": "47800 Krefeld (3 km)",
    "area": "k.A.",
    "description": "Studio Sollbrüggen – Die Verwandlungskünstlerin für Coaching, Workshops, Yoga & Begegnung.\n\nEin Raum – viele Möglichkeiten.\n\nOb Coaching, Therapie, Yoga, Workshops, Seminare, Vortr...",
    "phone": "015150754221",
    "phoneFormatted": "015150754221",
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3487762286",
    "category": "Atelier / Kreativraum",
    "price": "600 €",
    "title": "Arbeiten mit Kult-Status: Atelier, Office/ Büro in Krefeld Bockum",
    "url": "https://www.kleinanzeigen.de/s-anzeige/arbeiten-mit-kult-status-atelier-office-buero-in-krefeld-bockum/3487762286-277-1975",
    "location": "47800 Krefeld (4 km)",
    "area": "81 m²",
    "description": "Suchen Sie mehr als nur vier weiße Wände für Ihr Unternehmen? Hier kommt eine seltene Gelegenheit! Wir ziehen aus und suchen für das geschichtsträchtige Haus Mormels direkt am Bock...",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39 (02.10.2026)"
  },
  {
    "id": "3479846315",
    "category": "Praxis- / Kursraum",
    "price": "69 € VB",
    "title": "Coaching- & Therapieraum Krefeld-Bockum | flexibel buchbar",
    "url": "https://www.kleinanzeigen.de/s-anzeige/coaching-therapieraum-krefeld-bockum-flexibel-buchbar/3479846315-277-1975",
    "location": "47800 Krefeld (3 km)",
    "area": "55 m²",
    "description": "Studio Sollbrüggen – dein Coaching-, Praxis- und Beratungsraum in Krefeld-Bockum.\n\nEin ruhiger, hochwertig eingerichteter Raum für 1:1-Coachings, Therapiegesprä...",
    "phone": "+4915150754221",
    "phoneFormatted": "+4915150754221",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3528016578",
    "category": "Ladenlokal (EG)",
    "price": "720 €",
    "title": "kleines Ladenlokal für Beauty, Schmuck, Büro - Königstrasse /Fußgängerzone - renoviert! n Krefeld",
    "url": "https://www.kleinanzeigen.de/s-anzeige/kleines-ladenlokal-fuer-beauty-schmuck-buero-koenigstrasse-fussgaengerzone-renoviert-n-krefeld/3528016578-277-1981",
    "location": "47798 Krefeld (1 km)",
    "area": "28 m²",
    "description": "Ladenlokal für Beauty, Schmuck, Einzelhandel, Büro\n\nan der Königstrasse in Krefeld (ca. 30 m zur Fußgängerzone) \n\nDas Ladenlokall wurde Innen komplett renovierr...",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3525140552",
    "category": "Ladenlokal (EG)",
    "price": "750 €",
    "title": "Ladenlokal zu vermieten",
    "url": "https://www.kleinanzeigen.de/s-anzeige/ladenlokal-zu-vermieten/3525140552-277-1978",
    "location": "47803 Krefeld (2 km)",
    "area": "50 m²",
    "description": "Vielseitig nutzbare Gewerbefläche mit hellen Räumen und modernem Eingangsbereich. Ideal für Einzelhandel, Dienstleistungen, Büro, Studio oder Praxis.",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3176758069",
    "category": "Ladenlokal (EG)",
    "price": "748 €",
    "title": "Mehr Möglichkeiten, gibt es kaum. Ladenlokal Breite Str. zu mieten",
    "url": "https://www.kleinanzeigen.de/s-anzeige/mehr-moeglichkeiten-gibt-es-kaum-ladenlokal-breite-str-zu-mieten/3176758069-277-1981",
    "location": "47798 Krefeld (Zentrum / <1 km)",
    "area": "90 m²",
    "description": "Objektbeschreibung:\nDas hier angebotene Ladenlokal befindet sich im Erdgeschoss eines Wohn- und Geschäftshauses aus dem Jahr 1960 und bietet mit einer Gesamtflä...",
    "phone": "02151807218",
    "phoneFormatted": "02151 807218",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3523331288",
    "category": "Ladenlokal (EG)",
    "price": "350 €",
    "title": "Zentrales Ladenlokal/ Büro in Krefeld",
    "url": "https://www.kleinanzeigen.de/s-anzeige/zentrales-ladenlokal-buero-in-krefeld/3523331288-277-1981",
    "location": "47798 Krefeld (0.5 km)",
    "area": "43 m²",
    "description": "Zentrales, ebenerdiges Ladenlokal/ Büro in Krefeld Sankt Anton Str. 114.\nDie Einheit besteht aus 2 Räumen, ein Raum mit Schaufensterfront.\nDes weiteren sep. Toi...",
    "phone": "01745700000",
    "phoneFormatted": "0174 5700000",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3522106996",
    "category": "Atelier / Kreativraum",
    "price": "350 €",
    "title": "Künstleratelier in Krefeld - 25qm + Gemeinschaftswerkstatt (opt.)",
    "url": "https://www.kleinanzeigen.de/s-anzeige/kuenstleratelier-in-krefeld-25qm-gemeinschaftswerkstatt-opt-/3522106996-277-1981",
    "location": "47798 Krefeld (0.3 km)",
    "area": "25 m²",
    "description": "Kreativer Freiraum in geschichtsträchtiger Kulisse – Atelier/Raum für Künstler & Kreative in Krefeld zu vermieten!\nIn den Räumlichkeiten der ehemaligen, bekannt...",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3520848345",
    "category": "Ladenlokal (EG)",
    "price": "610 €",
    "title": "Ihr neues Ladenlokal/Büro -  für Start-ups /Selbstständige!",
    "url": "https://www.kleinanzeigen.de/s-anzeige/ihr-neues-ladenlokal-buero-fuer-start-ups-selbststaendige-/3520848345-277-1978",
    "location": "47803 Krefeld (1 km)",
    "area": "k.A.",
    "description": "",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3251191741",
    "category": "Praxis- / Kursraum",
    "price": "273 €",
    "title": "HELLE BÜRO-/PRAXISRÄUME IM HERZEN KREFELDS ZU VERMIETEN!",
    "url": "https://www.kleinanzeigen.de/s-anzeige/helle-buero-praxisraeume-im-herzen-krefelds-zu-vermieten-/3251191741-277-1981",
    "location": "47798 Krefeld (Zentrum / <1 km)",
    "area": "42 m²",
    "description": "Objektbeschreibung:\nDie hellen Büro-/Praxisräume befinden sich im 2. Obergeschoss (mit Aufzug) eines denkmalgeschützten Geschäftshauses aus dem Baujahr 1956.\nAu...",
    "phone": "02151807226",
    "phoneFormatted": "02151 80 72 26",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3514247243",
    "category": "Ladenlokal (EG)",
    "price": "670 €",
    "title": "Zentral gelegenes Büro oder Ladenlokal",
    "url": "https://www.kleinanzeigen.de/s-anzeige/zentral-gelegenes-buero-oder-ladenlokal/3514247243-277-1982",
    "location": "47799 Krefeld (0.6 km)",
    "area": "67 m²",
    "description": "Entdecken Sie dieses charmante Büro zur Miete, ideal für Unternehmen, die eine zentrale Lage schätzen. Dieses Büro befindet sich im Erdgeschoss eines gepflegten...",
    "phone": "015252152485",
    "phoneFormatted": "01525 2152485",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3355336648",
    "category": "Schulungs- / Seminarraum",
    "price": "300 €",
    "title": "SCHULUNGSRÄUME TAGEWEISE IN KREFELD ZU MIETEN!",
    "url": "https://www.kleinanzeigen.de/s-anzeige/schulungsraeume-tageweise-in-krefeld-zu-mieten-/3355336648-277-1978",
    "location": "47803 Krefeld (2 km)",
    "area": "180 m²",
    "description": "Die angebotenen Schulungsräume befinden sich in einem freistehenden Bürogebäude in Krefeld und eignen sich ideal für Schulungen, Präsentationen, Seminare oder W...",
    "phone": "02151807210",
    "phoneFormatted": "02151 80 72 10",
    "isNew": false,
    "firstSeen": "KW 39"
  },
  {
    "id": "3510930930",
    "category": "Atelier / Kreativraum",
    "price": "420 €",
    "title": "Exklusive Atelier- und Bürofläche in stilvollem Altbauambiente",
    "url": "https://www.kleinanzeigen.de/s-anzeige/exklusive-atelier-und-bueroflaeche-in-stilvollem-altbauambiente/3510930930-277-1972",
    "location": "47829 Krefeld (7 km)",
    "area": "27 m²",
    "description": "In einem charmanten Altbau mit repräsentativer Fassade und herrschaftlichem Eingangsbereich befindet sich diese besondere Büro-, Praxis- oder Atelierfläche. Die...",
    "phone": null,
    "phoneFormatted": null,
    "isNew": false,
    "firstSeen": "KW 39"
  }
];
