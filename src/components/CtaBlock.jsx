import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function CtaBlock() {
  return (
    <section className="bg-brand-50/60 border-t border-brand-100 py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-3">
          Fragen zu Ihrem Vorhaben?
        </h2>
        <p className="text-ink-500 mb-8">
          Im kostenlosen Erstgespräch klären wir unverbindlich, welche
          Maßnahmen sich für Ihr Gebäude lohnen und welche Förderung für Sie
          infrage kommt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/kontakt"
            className="inline-flex justify-center px-6 py-3 rounded-lg bg-brand-600 text-white font-medium shadow-sm hover:bg-brand-700 hover:shadow-md transition-all"
          >
            Beratungstermin anfragen
          </Link>
          <a
            href="tel:+4917668270350"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-200 bg-white text-brand-700 font-medium shadow-sm hover:bg-brand-50 hover:shadow-md transition-all"
          >
            <Phone size={18} />
            0176 68270350
          </a>
        </div>
      </div>
    </section>
  )
}
