import { Home as HomeIcon, ClipboardList, Award, Thermometer } from 'lucide-react'
import useSeo from '../hooks/useSeo.js'

const LEISTUNGEN = [
  {
    slug: 'energieberatung',
    icon: HomeIcon,
    titel: 'Energieberatung',
    kurz: 'Persönliche Vor-Ort-Beratung zu energetischen Schwachstellen und sinnvollen Maßnahmen',
    text: 'Am Anfang jeder energetischen Sanierung steht eine persönliche Vor-Ort-Beratung: Ich verschaffe mir bei Ihnen vor Ort einen Überblick über den energetischen Zustand Ihrer Immobilie, kläre Sie über sinnvolle Sanierungsmaßnahmen auf und informiere Sie über passende Fördermöglichkeiten. Auf dieser Grundlage erhalten Sie eine fundierte Einschätzung, welche Schritte für Ihr Gebäude energetisch und wirtschaftlich sinnvoll sind.',
  },
  {
    slug: 'isfp',
    icon: ClipboardList,
    titel: 'Individuelle Sanierungsfahrpläne (iSFP)',
    kurz: 'Schrittweiser Sanierungsfahrplan mit bis zu 20 % höherem Fördersatz',
    text: 'Der individuelle Sanierungsfahrplan (iSFP) zeigt Ihnen, in welcher Reihenfolge sich Sanierungsmaßnahmen an Ihrem Gebäude energetisch und wirtschaftlich am meisten lohnen. Mit einem iSFP profitieren Sie vom iSFP-Bonus: Der Fördersatz für nachfolgende Einzelmaßnahmen steigt von 15 % auf 20 %, und die förderfähigen Investitionskosten erhöhen sich von 30.000 € auf 60.000 € pro Wohneinheit und Jahr. Zudem haben Sie 15 Jahre Zeit, die vorgeschlagenen Maßnahmen umzusetzen, ohne den Bonus zu verlieren. Die Erstellung des iSFP selbst wird ebenfalls gefördert: 50 % der Kosten, bis 650 € bei 1–2 Wohneinheiten bzw. bis 850 € ab 2 Wohneinheiten.',
    bild: 'leistungen-isfp.png',
    bildAlt: 'Beispiel eines individuellen Sanierungsfahrplans (iSFP)',
  },
  {
    slug: 'energieausweise',
    icon: Award,
    titel: 'Energieausweise',
    kurz: 'Energieausweise für Wohngebäude, z. B. für Verkauf oder Vermietung',
    text: 'Ich erstelle Energieausweise für Wohngebäude, wie sie zum Beispiel beim Verkauf oder der Vermietung einer Immobilie gesetzlich vorgeschrieben sind. So erhalten Sie, Ihre Mieter oder Käufer einen transparenten Überblick über den energetischen Zustand des Gebäudes.',
    bild: 'leistungen-energieausweis.png',
    bildAlt: 'Beispiel eines Energieausweises für Wohngebäude',
  },
  {
    slug: 'heiz-kuehllast',
    icon: Thermometer,
    titel: 'Heiz- und Kühllastberechnungen',
    kurz: 'Fachgerechte Berechnung für eine korrekt dimensionierte Anlagentechnik',
    text: 'Eine korrekte Heiz- und Kühllastberechnung ist die Grundlage für eine passgenau dimensionierte Anlagentechnik – etwa bei der Planung einer neuen Wärmepumpe. So vermeiden Sie eine Über- oder Unterdimensionierung Ihrer Heizungsanlage und sichern einen effizienten, wirtschaftlichen Betrieb.',
  },
]

export default function Leistungen() {
  useSeo(
    'Leistungen: iSFP, Energieausweis & Heizlastberechnung | Energieberatung Kaiserslautern',
    'Energieberatung, individuelle Sanierungsfahrpläne (iSFP), Energieausweise für Wohngebäude und Heiz-/Kühllastberechnungen – Leistungen von Luca Ferrandina in Kaiserslautern und Umgebung.'
  )

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Leistungen</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Als zertifizierter Energieeffizienz-Experte biete ich Ihnen folgende
        Leistungen rund um energieeffizientes Bauen und Sanieren an.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {LEISTUNGEN.map((l) => (
          <a
            key={l.slug}
            href={`#${l.slug}`}
            className="block border border-brand-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
              <l.icon className="text-brand-700" size={22} />
            </div>
            <h2 className="font-semibold text-ink-900 mb-2">{l.titel}</h2>
            <p className="text-sm text-ink-500">{l.kurz}</p>
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {LEISTUNGEN.map((l) => (
          <div key={l.slug} id={l.slug} className="scroll-mt-20">
            <div className="flex items-center gap-5 mb-4">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <l.icon className="text-brand-700" size={22} />
              </div>
              <h2 className="text-xl font-semibold text-ink-900">{l.titel}</h2>
            </div>
            <div className={l.bild ? 'grid sm:grid-cols-[260px,1fr] gap-6 items-start' : ''}>
              {l.bild && (
                <img
                  src={l.bild}
                  alt={l.bildAlt}
                  className="w-full sm:w-[260px] aspect-[3/4] object-cover rounded-xl shadow-sm"
                />
              )}
              <p className="text-ink-700 max-w-3xl">{l.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
