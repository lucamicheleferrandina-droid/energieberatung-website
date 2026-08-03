import { Newspaper, Banknote, Lightbulb, Wrench } from 'lucide-react'
import useSeo from '../hooks/useSeo.js'

const THEMEN = [
  { slug: 'aktuelles', icon: Newspaper, titel: 'Aktuelles' },
  { slug: 'foerderungen', icon: Banknote, titel: 'Förderungen' },
  { slug: 'nice-to-know', icon: Lightbulb, titel: 'Nice to know' },
  { slug: 'sanierungsmassnahmen', icon: Wrench, titel: 'Typische Sanierungsmaßnahmen' },
]

const NICE_TO_KNOW = [
  {
    frage: 'Was ist ein iSFP?',
    antwort:
      'Der individuelle Sanierungsfahrplan zeigt Schritt für Schritt, welche Sanierungsmaßnahmen an Ihrem Gebäude sinnvoll sind und in welcher Reihenfolge sie sich am meisten lohnen.',
  },
  {
    frage: 'Was bedeutet „Energieeffizienz-Experte"?',
    antwort:
      'Eine bundesweite, staatlich geführte Expertenliste (dena) – die Eintragung ist Voraussetzung dafür, viele Förderprogramme für Kunden begleiten zu dürfen.',
  },
  {
    frage: 'Muss ich sofort alle Maßnahmen umsetzen?',
    antwort:
      'Nein. Ein iSFP gibt Ihnen bis zu 15 Jahre Zeit, die vorgeschlagenen Maßnahmen umzusetzen, ohne den iSFP-Bonus zu verlieren.',
  },
  {
    frage: 'Energieausweis oder iSFP – was ist der Unterschied?',
    antwort:
      'Der Energieausweis ist eine gesetzlich vorgeschriebene Kennzahl zum energetischen Ist-Zustand eines Gebäudes. Der iSFP ist ein individueller Maßnahmen- und Förderfahrplan für die Zukunft.',
  },
]

const SANIERUNGSMASSNAHMEN = [
  {
    titel: 'Dämmung',
    text: 'Dach, oberste Geschossdecke, Fassade und Kellerdecke – meist die Maßnahme mit dem besten Kosten-Nutzen-Verhältnis.',
  },
  {
    titel: 'Fenster & Außentüren',
    text: 'Reduziert Wärmeverluste spürbar und verbessert zugleich den Wohnkomfort.',
  },
  {
    titel: 'Heizungstausch',
    text: 'Z. B. der Umstieg auf eine Wärmepumpe – bei alten Öl- oder Gasheizungen meist der größte Hebel.',
  },
  {
    titel: 'Lüftungsanlage mit Wärmerückgewinnung',
    text: 'Besonders wichtig, wenn die Gebäudehülle nach einer Sanierung sehr dicht ist.',
  },
  {
    titel: 'Photovoltaik & Solarthermie',
    text: 'Ergänzend zur energetischen Sanierung für die eigene Stromerzeugung.',
  },
]

export default function Ratgeber() {
  useSeo(
    'Ratgeber: Förderungen, Sanierung & Energieeffizienz | Energieberatung Kaiserslautern',
    'Aktuelles zur Förderlandschaft, BEG/KfW-Förderungen im Detail, Wissenswertes und typische Sanierungsmaßnahmen – der Ratgeber von Luca Ferrandina.'
  )

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Ratgeber</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Rund um Förderungen, Sanierung und Energieeffizienz gibt es viel zu
        wissen. Hier finden Sie einen kompakten Überblick – unabhängig,
        verständlich und auf dem aktuellen Stand.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {THEMEN.map((t) => (
          <a
            key={t.slug}
            href={`#${t.slug}`}
            className="block border border-brand-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
              <t.icon className="text-brand-700" size={22} />
            </div>
            <h2 className="font-semibold text-ink-900">{t.titel}</h2>
          </a>
        ))}
      </div>

      {/* Aktuelles */}
      <div id="aktuelles" className="scroll-mt-20 mb-16">
        <div className="flex items-center gap-5 mb-6">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
            <Newspaper className="text-brand-700" size={22} />
          </div>
          <h2 className="text-xl font-semibold text-ink-900">
            Die aktuelle Förderlandschaft im Überblick
          </h2>
        </div>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">Wo stehen wir aktuell?</h3>
            <p className="text-ink-700">
              Die staatliche Förderung energetischer Sanierungen läuft seit
              2023 über die Bundesförderung für effiziente Gebäude (BEG),
              ergänzt durch KfW-Kredite und BAFA-Zuschüsse. Kernstück ist
              weiterhin die Kombination aus Einzelmaßnahmen-Förderung und dem
              individuellen Sanierungsfahrplan (iSFP), der zusätzliche
              Fördersätze ermöglicht. Die Konditionen werden regelmäßig
              angepasst – dieser Überblick wird bei größeren Änderungen
              aktualisiert, Stand: 2026.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">
              Warum sich eine Beratung vor der Antragstellung lohnt
            </h3>
            <p className="text-ink-700">
              Förderanträge müssen vor Beginn der Baumaßnahme gestellt
              werden, und die technischen Mindestanforderungen sind an
              Details geknüpft. Eine Energieberatung vor Antragstellung
              schützt davor, Fördergeld durch formale Fehler zu verlieren.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">Ihr Weg zur Förderung</h3>
            <ol className="list-decimal pl-5 space-y-2 text-ink-700">
              <li>
                Kontaktaufnahme mit einem Energieberater
                <ul className="list-disc pl-5 mt-1">
                  <li>Maßnahmen durchsprechen</li>
                </ul>
              </li>
              <li>Einholen von Angeboten beim Fachunternehmen</li>
              <li>Beauftragung beim Energieberater (TPB)</li>
              <li>Antragstellung bei der BAFA</li>
              <li>Umsetzung der Maßnahme</li>
              <li>
                Einreichen des Verwendungsnachweises durch den
                Energieberater (TPN)
              </li>
              <li>Prüfung und Auszahlung</li>
            </ol>
            <p className="text-sm text-ink-500 mt-3">
              Quelle:{' '}
              <a
                href="https://www.bafa.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-700"
              >
                bafa.de
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Förderungen */}
      <div id="foerderungen" className="scroll-mt-20 mb-16">
        <div className="flex items-center gap-5 mb-6">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
            <Banknote className="text-brand-700" size={22} />
          </div>
          <h2 className="text-xl font-semibold text-ink-900">BEG, KfW & BAFA im Detail</h2>
        </div>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">
              BEG-Einzelmaßnahmen (Gebäudehülle & Anlagentechnik)
            </h3>
            <p className="text-ink-700">
              Für einzelne Sanierungsmaßnahmen (Gebäudehülle, Anlagentechnik
              außer Heizung) gilt eine Grundförderung von 15 % der
              förderfähigen Kosten. Ist die Maßnahme Teil eines individuellen
              Sanierungsfahrplans (iSFP), kommt ein Bonus von +5 % hinzu
              (macht 20 %) – dieser iSFP-Bonus greift aber nur bei Maßnahmen
              mit einer Investitionssumme über 30.000 €. Liegt die
              Investitionssumme darunter, bleibt es bei 15 %. Förderfähig
              sind bis zu 30.000 € Kosten pro Wohneinheit und Jahr (mit
              iSFP: 60.000 €). Die Kosten für Fachplanung und Baubegleitung
              werden zusätzlich mit 50 % gefördert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">
              Heizungstausch oder Erstmaliger Einbau (KfW 458)
            </h3>
            <p className="text-ink-700 mb-3">
              Für den Austausch bzw. Ersteinbau förderfähiger Heiztechnik
              (solarthermische Anlagen, Biomasseheizungen, elektrisch
              angetriebene Wärmepumpen, Brennstoffzellenheizungen,
              wasserstofffähige Heizungen, innovative Heizungstechnik auf
              Basis erneuerbarer Energien) gilt eine Grundförderung von
              30 %. Hinzu kommen ggf.:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-ink-700 mb-3">
              <li>
                <strong>Klimageschwindigkeits-Bonus</strong> (aktuell 16 %,
                gestaffelt sinkend, gilt bis Ende 2028): beim Austausch einer
                funktionierenden Öl-, Kohle-, Gas-Etagen- oder
                Nachtspeicherheizung bzw. Gas-/Biomasseheizung, deren Einbau
                mind. 20 Jahre zurückliegt
              </li>
              <li>
                <strong>Einkommensbonus</strong> (30 %): für selbstnutzende
                Eigentümer mit zu versteuerndem Haushaltsjahreseinkommen bis
                50.000 € (gestaffelt)
              </li>
              <li>Die Förderquote ist auf max. 70 % gedeckelt.</li>
            </ul>
            <p className="text-ink-700">
              Förderfähige Kosten (gestaffelt nach Wohneinheiten): 28.000 €
              für die erste Wohneinheit, je 15.000 € für die 2. bis 6.
              Wohneinheit, je 8.000 € ab der 7. Wohneinheit. Zusätzlich ist
              ein Emissionsminderungszuschlag von 2.500 € möglich.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">iSFP-Erstellung selbst</h3>
            <p className="text-ink-700">
              Auch die Erstellung des individuellen Sanierungsfahrplans wird
              gefördert: 50 % der Kosten, gedeckelt auf 650 € (1–2
              Wohneinheiten) bzw. 850 € (ab 2 Wohneinheiten).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">
              Komplettsanierung zum Effizienzhaus (KfW 261)
            </h3>
            <p className="text-ink-700">
              Wer sein Gebäude in einem Zug umfassend saniert (oder ein
              frisch saniertes Gebäude kauft) und dabei mindestens die
              Effizienzhausstufe 85 erreicht, kann die KfW-261-Förderung
              nutzen: 5–45 % Förderung je nach erreichter
              Effizienzhaus-Stufe, maximal 150.000 € pro Wohneinheit.
              Zusätzliche Boni: +5 % für die Erneuerbare-Energien-Klasse,
              +10 % für ein „Worst Performance Building", +15 % für
              serielle Sanierung. Die Baubegleitung kann separat gefördert
              werden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink-900 mb-2">
              KfW 358/359 – Ergänzungskredit
            </h3>
            <p className="text-ink-700">
              Ergänzungs-/Zusatzkredit zu bereits bewilligten
              Einzelmaßnahmen (die Bewilligung darf nicht länger als 12
              Monate zurückliegen). Ablauf: Zuschusszusage erhalten →
              Finanzierungspartner wählen (Hausbank oder
              Finanzierungsvermittler) → Maßnahme durchführen → Kredit
              abrufen und Zuschuss erhalten. KfW 358 richtet sich an
              Haushalte mit einem Jahreseinkommen unter 90.000 €.
            </p>
          </div>
          <div className="bg-brand-50/60 border border-brand-100 rounded-xl p-4 text-sm text-ink-500">
            Alle Angaben ohne Gewähr, Stand 2026 – für eine verbindliche
            Einschätzung zu Ihrem Vorhaben vereinbaren Sie ein
            Beratungsgespräch.
          </div>
        </div>
      </div>

      {/* Nice to know */}
      <div id="nice-to-know" className="scroll-mt-20 mb-16">
        <div className="flex items-center gap-5 mb-6">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
            <Lightbulb className="text-brand-700" size={22} />
          </div>
          <h2 className="text-xl font-semibold text-ink-900">Kurz erklärt</h2>
        </div>
        <div className="space-y-6 max-w-3xl">
          {NICE_TO_KNOW.map((item) => (
            <div key={item.frage}>
              <h3 className="font-semibold text-ink-900 mb-2">{item.frage}</h3>
              <p className="text-ink-700">{item.antwort}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Typische Sanierungsmaßnahmen */}
      <div id="sanierungsmassnahmen" className="scroll-mt-20">
        <div className="flex items-center gap-5 mb-6">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
            <Wrench className="text-brand-700" size={22} />
          </div>
          <h2 className="text-xl font-semibold text-ink-900">
            Womit Hausbesitzer meistens starten
          </h2>
        </div>
        <div className="space-y-6 max-w-3xl">
          {SANIERUNGSMASSNAHMEN.map((item) => (
            <div key={item.titel}>
              <h3 className="font-semibold text-ink-900 mb-2">{item.titel}</h3>
              <p className="text-ink-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
