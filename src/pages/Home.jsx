import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const HIGHLIGHTS = [
  'Energieberatung',
  'Individuelle Sanierungsfahrpläne (iSFP)',
  'Energieausweise',
  'Heiz- und Kühllastberechnungen',
]

export default function Home() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <p className="uppercase tracking-wide text-brand-600 text-sm font-semibold mb-3">
          Energieberatung
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-ink-900 mb-6">
          Ihr Weg zum energieeffizienten Zuhause
        </h1>
        <p className="text-ink-500 max-w-2xl mx-auto mb-8">
          Energieberatung, individuelle Sanierungsfahrpläne, Energieausweise und
          Heiz-/Kühllastberechnungen aus einer Hand – persönlich und kompetent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kontakt"
            className="inline-flex justify-center px-6 py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
          >
            Beratungstermin anfragen
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex justify-center px-6 py-3 rounded-lg border border-brand-200 text-brand-700 font-medium hover:bg-brand-50 transition-colors"
          >
            Leistungen ansehen
          </Link>
        </div>
      </section>

      <section className="bg-brand-50/60 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((text) => (
            <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm">
              <CheckCircle2 className="text-brand-600 shrink-0 mt-0.5" size={20} />
              <span className="text-sm text-ink-700">{text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
