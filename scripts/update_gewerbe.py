#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ZIBG e.V. - Gewerbeobjekte Krefeld Updater
Scrapt Kleinanzeigen Gewerbe-Angebote in Krefeld (Innenstadt + 10km, bis 750 € warm).
Gleicht mit dem bestehenden Datenbestand ab, markiert neue Angebote und bewahrt die Historie.
"""

import os
import sys
import re
import json
import html
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor
import requests

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8',
}

BLACKLISTED_NUMBERS = [
    '97581300',   # shareDnC GmbH Köln
    '6060440',    # Sirius Facilities GmbH
    '4040880',    # Sirius Hotline
]

def clean_phone(raw_phone):
    clean_display = re.sub(r'[\/\-]+', ' ', raw_phone)
    clean_display = ' '.join(clean_display.split())
    dial_num = re.sub(r'[^\d\+]', '', raw_phone)
    if dial_num.startswith('0049'):
        dial_num = '+' + dial_num[2:]
    return {"display": clean_display, "dial": dial_num}

def extract_phone_from_detail(href):
    try:
        url = f"https://www.kleinanzeigen.de{href}"
        r = requests.get(url, headers=HEADERS, timeout=8)
        r.encoding = 'utf-8'
        page_html = r.text
        
        # 1. adPhoneNumber (offizielle Kleinanzeigen-Telefonnummer)
        m = re.search(r"adPhoneNumber:\s*['\"]([^'\"]+)['\"]", page_html)
        if m and len(m.group(1).strip()) >= 6:
            val = m.group(1).strip()
            if not any(b in val for b in BLACKLISTED_NUMBERS):
                return clean_phone(val)
            
        # 2. tel: Link
        tel_links = re.findall(r'href=[\"\']tel:([^\"\']+)[\"\']', page_html)
        if tel_links:
            val = tel_links[0].strip()
            if not any(b in val for b in BLACKLISTED_NUMBERS):
                return clean_phone(val)

        # 3. Nur Beschreibungstext VOR Impressum / Rechtliche Angaben
        parts = re.split(r'Rechtliche Angaben|Angaben gemäß § 5 TMG|Impressum', page_html, flags=re.IGNORECASE)
        main_part = parts[0]
        body_clean = re.sub(r'<(script|style|svg|path)[^>]*>.*?</\1>', '', main_part, flags=re.DOTALL)
        body_text = re.sub(r'<[^>]+>', ' ', body_clean)
        
        candidates = re.findall(r'(?:(?:\+49|0049|0)\s*[1-9]\d{1,4}[ \/\-\.]?\s*(?:\d[ \/\-\.]?){5,9}\d)', body_text)
        for c in candidates:
            digits = re.sub(r'\D', '', c)
            if any(b in digits for b in BLACKLISTED_NUMBERS):
                continue
            if 8 <= len(digits) <= 15 and not c.startswith('000'):
                return clean_phone(c.strip())
    except Exception:
        pass
    return None

def is_suitable_for_zibg(title, desc, price_str, area_str):
    full_text = (title + " " + desc).lower()
    
    # 1. Strikte Ausschlusskriterien (für ZIBG Unterricht / Gemeinschaft unbrauchbar)
    excludes = [
        r'\bcoworking\b', r'\bco-working\b', r'\bfix desk\b', r'\bflex desk\b', r'\bshared desk\b', r'\bshared work\b',
        r'\bbüroplatz\b', r'\barbeitsplatz\b', r'\barbeitsplätze\b', r'\bteam office\b', r'\bk2 tower\b', r'\bchefbüro\b',
        r'\bhomeoffice\b', r'\bhomelffice\b', r'\bwg-zimmer\b', r'\buntermiete\b',
        r'\blager\b', r'\blagerfläche\w*', r'\bhalle\b', r'\blagerhalle\w*', r'\bselfstorage\b', r'\blagerbox\w*',
        r'\bkeller\w*', r'\bspindelwerkstatt\b', r'\baktenlager\b',
        r'\bgarage\w*', r'\bstellplatz\w*', r'\bparkplatz\w*', r'\bparkplätze\w*', r'\buber\b', r'\bflotten\b',
        r'\bpizzaladen\b', r'\bpizzeria\b', r'\brestaurant\b', r'\bkiosk\b', r'\bimbiss\b', r'\bgastro\w*',
        r'\bfriseur\w*', r'\bnageltisch\b',
        r'\bsirius\b', r'2 eur/m', r'13 eur/m', r'ab 2 eur'
    ]
    for ex in excludes:
        if re.search(ex, full_text):
            return False, f"Ausschluss: {ex}"
            
    # 2. Mogelpreise ausschließen (< 50 € ohne VB)
    price_digits = re.sub(r'\D', '', price_str)
    if price_digits and int(price_digits) < 50 and 'vb' not in price_str.lower():
        return False, "Ausschluss: Mogelpreis pro m²"
        
    # 3. Flächenfilter (unter 25 m² für Gruppenunterricht zu klein)
    area_m = re.search(r'(\d+)', area_str)
    if area_m:
        val = int(area_m.group(1))
        if val < 25:
            return False, f"Ausschluss: Fläche zu klein ({val} m²)"
            
    # 4. Positive Eignungssignale für Unterricht, Kurse, Verein, Laden
    positive_pattern = r'\b(laden|läden|ladenlokal|ladenlokale|ladenfläche|ladenflächen|geschäftslokal|schaufenster|einzelhandel|einzelhandelsfläche\w*|praxis|praxisraum|praxisräume|therapie|coaching|schulung|schulungsraum|schulungsräume|seminar|seminarraum|kursraum|kurse?|unterricht|lehrraum|lehrsaal|akademie|verein|vereinsraum|gemeinschaftsraum|treffpunkt|begegnung|begegnungsstätte|atelier|eventraum|vortragsraum|workshop|studio)\b'
    if not re.search(positive_pattern, full_text):
        return False, "Ausschluss: Reines Büro"
        
    # Wenn Titel oder Beschreibung reines Büro ohne Erdgeschoss/Laden/Schulung/Praxis ist
    if re.search(r'\b(büroraum|büro|büroetage)\b', title.lower()) and not re.search(r'\b(laden\w*|praxis\w*|schulung\w*|seminar\w*|kurs\w*|unterricht\w*|verein\w*|atelier\w*)\b', title.lower()):
        return False, "Ausschluss: Reines Büro im Titel"
        
    # Kategorisierung für ZIBG
    if re.search(r'\b(laden|läden|ladenlokal|ladenlokale|ladenfläche|geschäftslokal|schaufenster|einzelhandel\w*)\b', full_text):
        cat = "Ladenlokal (EG)"
    elif re.search(r'\b(schulung\w*|seminar\w*|kursraum|kurse?|unterricht\w*|akademie|vortrag\w*|eventraum)\b', full_text):
        cat = "Schulungs- / Seminarraum"
    elif re.search(r'\b(praxis\w*|therapie\w*|coaching\w*)\b', full_text):
        cat = "Praxis- / Kursraum"
    elif re.search(r'\b(atelier\w*|studio\w*|werkstatt\w*)\b', full_text):
        cat = "Atelier / Kreativraum"
    else:
        cat = "Vereinsfläche"
        
    return True, cat

def scrape_kleinanzeigen(max_price=750, radius=5, max_pages=4):
    """
    Scrapt Gewerbeimmobilien in Krefeld (5 km um Hauptbahnhof).
    Filtert strikt auf Räumlichkeiten, die für ZIBG e.V. (Unterricht & Gemeinschaft) geeignet sind.
    """
    base_url = f"https://www.kleinanzeigen.de/s-gewerbeimmobilien/krefeld/preis::{max_price}/c277l1981r{radius}"
    items = []
    seen_ids = set()
    
    for page in range(1, max_pages + 1):
        url = base_url if page == 1 else f"https://www.kleinanzeigen.de/s-gewerbeimmobilien/krefeld/seite:{page}/preis::{max_price}/c277l1981r{radius}"
        print(f"[{page}/{max_pages}] Scrape: {url}")
        
        try:
            resp = requests.get(url, headers=HEADERS, timeout=12)
            resp.encoding = 'utf-8'
            if resp.status_code != 200:
                break
        except Exception as e:
            print(f"Fehler beim Laden von Seite {page}: {e}")
            break
            
        articles = re.findall(r'<article[^>]*data-adid=\"(\d+)\"[^>]*data-href=\"([^\"]+)\"[^>]*>(.*?)</article>', resp.text, re.DOTALL)
        if not articles:
            break
            
        for adid, href, content in articles:
            if adid in seen_ids:
                continue
            seen_ids.add(adid)
            
            title = ""
            desc = ""
            ld_m = re.search(r'<script type=\"application/ld\+json\">(.*?)</script>', content)
            if ld_m:
                try:
                    data = json.loads(ld_m.group(1))
                    title = data.get('title') or data.get('name') or ""
                    desc = data.get('description') or ""
                except Exception:
                    pass
                    
            if not title:
                t_m = re.search(r'<h3[^>]*>.*?<a[^>]*>(.*?)</a>.*?</h3>', content, re.DOTALL)
                if t_m:
                    title = re.sub(r'<[^>]+>', '', t_m.group(1)).strip()
                    
            title = html.unescape(title)
            desc = html.unescape(desc)
            if not title:
                continue
                
            link = f"https://www.kleinanzeigen.de{href}"
            
            ps = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
            clean_ps = [html.unescape(re.sub(r'<[^>]+>', '', p)).strip() for p in ps]
            
            price = "VB"
            for p in reversed(clean_ps):
                if "€" in p or "VB" in p:
                    price = p
                    break
                    
            area = "k.A."
            for p in clean_ps:
                if ("m²" in p or "qm" in p or "m2" in p) and len(p.strip()) <= 20:
                    area = p.strip()
                    break
                        
            loc = "47798 Krefeld"
            loc_m = re.search(r'(\d{5}\s+Krefeld[^\<\|]*)', content)
            if loc_m:
                loc = loc_m.group(1).strip()
                
            dist_m = re.search(r'\(([0-9,.]+\s*km)\)', content)
            dist = dist_m.group(1).strip() if dist_m else "Zentrum / <1 km"
            
            ok, cat = is_suitable_for_zibg(title, desc, price, area)
            if not ok:
                continue
                
            items.append({
                "id": adid,
                "href": href,
                "category": cat,
                "price": price,
                "title": title,
                "url": link,
                "location": f"{loc} ({dist})" if dist else loc,
                "area": area,
                "description": desc[:180] + "..." if len(desc) > 180 else desc,
                "phone": None,
                "phoneFormatted": None
            })
            
    return items

def load_existing_data(file_path):
    """Liest die existierende ZIBG_GEWERBE_LISTE aus der TypeScript-Datei."""
    if not os.path.exists(file_path):
        return []
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        m = re.search(r'export const ZIBG_GEWERBE_LISTE:\s*ZibgGewerbeObject\[\]\s*=\s*(\[.*?\]);?\s*$', content, re.DOTALL)
        if m:
            raw_json = m.group(1)
            return json.loads(raw_json)
    except Exception as e:
        print(f"Hinweis beim Laden bestehender Daten: {e}")
        
    return []

def save_ts_data(file_path, items):
    """Speichert die Liste sauber formatiert als TypeScript-Datei."""
    kw = datetime.now().strftime("%W")
    today_str = datetime.now().strftime("%d.%m.%Y")
    
    header = f"""// src/data/zibg-gewerbe-objects.ts
// Automatisch aktualisiert am {today_str} (KW {kw}) via GitHub Actions Scraper
// Enthält {len(items)} Gewerbeobjekte in Krefeld bis 750 € warm

export interface ZibgGewerbeObject {{
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
}}

export type GewerbeStatus = "offen" | "nicht_erreicht" | "erreicht" | "besichtigung" | "absage";

export interface GewerbeStateItem {{
  status: GewerbeStatus;
  note?: string;
  calledBy?: string;
  updatedAt?: string;
}}

export const ZIBG_GEWERBE_LISTE: ZibgGewerbeObject[] = """

    json_str = json.dumps(items, ensure_ascii=False, indent=2)
    full_content = header + json_str + ";\n"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(full_content)

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    ts_file = os.path.join(root_dir, "src", "data", "zibg-gewerbe-objects.ts")
    
    print("=" * 65)
    print("ZIBG e.V. Räumlichkeiten-Update (Krefeld Hbf & 5 km, bis 750 €)")
    print("Fokus: Ladenlokale, Schulungs-, Praxis- und Vereinsräume")
    print("=" * 65)
    
    # 1. Bestehende geeignete Objekte laden
    raw_existing = load_existing_data(ts_file)
    # Nur Objekte behalten, die für ZIBG geeignet sind
    existing_items = []
    for ex in raw_existing:
        ok, _ = is_suitable_for_zibg(ex.get("title", ""), ex.get("description", ""), ex.get("price", ""), ex.get("area", ""))
        if ok:
            existing_items.append(ex)
            
    existing_by_id = {str(item["id"]): item for item in existing_items}
    print(f"Vorhandene geeignete Objekte im System: {len(existing_items)} (von {len(raw_existing)} bereinigt)")
    
    # 2. Aktuelle Anzeigen scrapen (5 km um Krefeld Hbf)
    scraped_items = scrape_kleinanzeigen(max_price=750, radius=5, max_pages=4)
    print(f"Gefundene passende Anzeigen im aktuellen Scrape: {len(scraped_items)}")
    
    kw = datetime.now().strftime("%W")
    today_str = datetime.now().strftime("%d.%m.%Y")
    
    new_found = []
    need_phone_fetch = []
    
    for item in scraped_items:
        item_id = str(item["id"])
        if item_id in existing_by_id:
            # Objekt existiert bereits
            ex = existing_by_id[item_id]
            ex["price"] = item["price"]
            ex["category"] = item["category"]
            ex["area"] = item["area"]
            ex["location"] = item["location"]
            ex["isNew"] = False
            if not ex.get("firstSeen"):
                ex["firstSeen"] = f"KW 39"
        else:
            # BRANDNEUES Objekt!
            item["isNew"] = True
            item["firstSeen"] = f"KW {kw} ({today_str})"
            new_found.append(item)
            need_phone_fetch.append(item)
            
    print(f"\n✨ Brandneue Inserate diese Woche: {len(new_found)}")
    
    # 3. Telefonnummern für neue Objekte laden
    if need_phone_fetch:
        print(f"Lade Telefonnummern für {len(need_phone_fetch)} neue Objekte parallel...")
        hrefs = [it["href"] for it in need_phone_fetch]
        with ThreadPoolExecutor(max_workers=6) as executor:
            phone_results = list(executor.map(extract_phone_from_detail, hrefs))
            
        for it, phone in zip(need_phone_fetch, phone_results):
            if phone:
                it["phone"] = phone["dial"]
                it["phoneFormatted"] = phone["display"]
            else:
                it["phone"] = None
                it["phoneFormatted"] = None
                
    # Unnötiges Feld 'href' entfernen
    for it in new_found:
        if "href" in it:
            del it["href"]
            
    # Liste zusammenbauen: Neue Objekte ganz oben
    final_list = new_found + list(existing_by_id.values())
    
    # Speichern
    save_ts_data(ts_file, final_list)
    print(f"\n✓ Erfolgreich gespeichert in: {ts_file}")
    print(f"✓ Gesamtbestand für ZIBG: {len(final_list)} passende Räume (davon {len(new_found)} neu)")

if __name__ == "__main__":
    main()
