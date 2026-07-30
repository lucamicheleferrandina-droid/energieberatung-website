import { Link } from 'react-router-dom'
import {
  Home as HomeIcon,
  ClipboardList,
  Award,
  Thermometer,
  UserCheck,
  ShieldCheck,
  Target,
  Heart,
  Leaf,
  CheckCircle2,
} from 'lucide-react'

const VERTRAUEN = [
  { icon: UserCheck, titel: 'Persönlich & unabhängig' },
  { icon: ShieldCheck, titel: 'Fördermittel-Experte' },
  { icon: Target, titel: 'Maßgeschneiderte Lösungen' },
  { icon: Heart, titel: 'Nachhaltig für die Zukunft' },
]

const VORTEILE = [
  'Kosten senken & Förderungen nutzen',
  'Wohnkomfort steigern',
  'Zukunftssicher & nachhaltig handeln',
]

const HIGHLIGHTS = [
  {
    icon: HomeIcon,
    titel: 'Energieberatung',
    text: 'Persönliche Vor-Ort-Beratung zu energetischen Schwachstellen und sinnvollen Maßnahmen.',
  },
  {
    icon: ClipboardList,
    titel: 'Sanierungsfahrpläne',
    text: 'Schrittweiser Sanierungsfahrplan (iSFP) mit bis zu 20 % höherem Fördersatz.',
  },
  {
    icon: Award,
    titel: 'Energieausweise',
    text: 'Energieausweise für Wohngebäude, z. B. für Verkauf oder Vermietung.',
  },
  {
    icon: Thermometer,
    titel: 'Heiz- & Kühllast',
    text: 'Fachgerechte Berechnung für eine korrekt dimensionierte Anlagentechnik.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-wide text-brand-600 text-sm font-semibold mb-3">
              Energieberatung
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-ink-900 mb-6">
              Ihr Weg zum energieeffizienten Zuhause
            </h1>
            <p className="text-ink-500 max-w-lg mb-8">
              Energieberatung, individuelle Sanierungsfahrpläne, Energieausweise und
              Heiz-/Kühllastberechnungen aus einer Hand – persönlich und kompetent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex justify-center px-6 py-3 rounded-lg bg-brand-600 text-white font-medium shadow-sm hover:bg-brand-700 hover:shadow-md transition-all"
              >
                Beratungstermin anfragen
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex justify-center px-6 py-3 rounded-lg border border-brand-200 bg-white text-brand-700 font-medium shadow-sm hover:bg-brand-50 hover:shadow-md transition-all"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div className="relative mb-16 lg:mb-0">
            <img
              src="hero-house.jpg"
              alt="Modernes Haus mit Solarpaneelen auf dem Dach"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-[-1.5rem] sm:w-72 bg-white rounded-xl shadow-lg p-5 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <Leaf className="text-brand-700" size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink-900 leading-snug">
                  Nachhaltig beraten. Zukunft gestalten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, titel, text }) => (
            <div
              key={titel}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
                <Icon className="text-brand-700" size={22} />
              </div>
              <h3 className="font-semibold text-ink-900 mb-1">{titel}</h3>
              <p className="text-sm text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative mb-16 lg:mb-0 lg:order-2">
            <img
              src="lifestyle-family.jpg"
              alt="Familie entspannt zu Hause im Wohnzimmer"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-[-1.5rem] sm:w-72 bg-white rounded-xl shadow-lg p-5 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <HomeIcon className="text-brand-700" size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink-900 leading-snug">
                  Gut beraten. Besser wohnen.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:order-1">
            <p className="uppercase tracking-wide text-brand-600 text-sm font-semibold mb-3">
              Ihre Vorteile
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ink-900 mb-6">
              Mehr Effizienz. Mehr Komfort. <span className="text-brand-600">Mehr Zukunft.</span>
            </h2>
            <p className="text-ink-500 max-w-lg mb-6">
              Mit einer professionellen Energieberatung sparen Sie nicht nur
              Kosten, sondern steigern auch den Wert Ihrer Immobilie und
              leisten einen aktiven Beitrag zum Klimaschutz.
            </p>
            <ul className="space-y-3">
              {VORTEILE.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-600 shrink-0" size={20} />
                  <span className="text-ink-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center uppercase tracking-wide text-brand-600 text-sm font-semibold mb-10">
            Vertrauen durch Kompetenz
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {VERTRAUEN.map(({ icon: Icon, titel }) => (
              <div key={titel} className="flex flex-col items-center text-center gap-3">
                <Icon className="text-brand-600" size={28} strokeWidth={1.5} />
                <span className="text-sm font-medium text-ink-900">{titel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
