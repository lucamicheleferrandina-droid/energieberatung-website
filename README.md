# Energieberatung-Website – Luca Ferrandina

Öffentliche Website für die Energieberatung von Luca Ferrandina. Getrennt vom
internen Kundenverwaltungs-Tool (`Kundenapp`-Repo) – dieses Repo enthält
ausschließlich die öffentliche Marketing-Website.

## Aktueller Stand

Grundgerüst mit Platzhaltern ist eingerichtet:

- Startseite, Leistungen, Über mich, Kontakt, Impressum, Datenschutz
- Alle `[Platzhalter]`-Texte müssen noch durch echte Inhalte ersetzt werden
  (siehe Content-Checkliste, die Luca und Claude gemeinsam abarbeiten)
- Kontaktformular ist technisch vorbereitet, aber noch **nicht** aktiv
  (siehe unten „Kontaktformular einrichten“)
- Rechtstexte (Impressum/Datenschutz) sind Platzhalter und **nicht
  rechtsgültig**, bis sie ausgefüllt und geprüft wurden

## Nächste Schritte

1. Inhalte liefern (Texte, Fotos, Logo, Zertifizierungsdaten)
2. Kontaktformular aktivieren (Formspree-Konto anlegen, siehe unten)
3. GitHub Pages aktivieren: Repo-Einstellungen → „Pages“ → Source:
   „GitHub Actions“ (einmalig, danach deployt jeder Push auf `main`
   automatisch)
4. Domain (`meine-energieberatung.com`) mit der Website verbinden, sobald
   geklärt ist, ob das IONOS-Paket DNS-Verwaltung erlaubt

## Kontaktformular einrichten

Das Formular nutzt [Formspree](https://formspree.io) (kostenloses Kontingent
reicht für eine Beratungs-Website):

1. Kostenloses Konto auf formspree.io anlegen mit
   `info@meine-energieberatung.com`
2. Neues Formular anlegen, den angezeigten Formular-Code kopieren
   (sieht aus wie `xyzabcde`)
3. In `src/pages/Kontakt.jsx` die Zeile

   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/DEIN_FORMULAR_CODE'
   ```

   ersetzen durch den echten Code

Danach kommen Formular-Anfragen direkt als E-Mail bei
`info@meine-energieberatung.com` an.

## Lokal ansehen (nur für Entwicklung)

```bash
npm install
npm run dev
```
