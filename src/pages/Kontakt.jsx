import { Mail, Phone } from 'lucide-react'

// TODO: Formspree-Endpoint eintragen, siehe README.md ("Kontaktformular einrichten")
const FORM_ENDPOINT = 'https://formspree.io/f/DEIN_FORMULAR_CODE'

export default function Kontakt() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Kontakt</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Sie möchten eine Beratung anfragen? Schreiben Sie mir gerne über das
        Formular oder direkt per E-Mail/Telefon.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <form action={FORM_ENDPOINT} method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-brand-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-1" htmlFor="email">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-brand-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-700 mb-1" htmlFor="nachricht">
              Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              required
              className="w-full rounded-lg border border-brand-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
          >
            Anfrage senden
          </button>
        </form>

        <div className="space-y-4 text-ink-700">
          <a href="mailto:info@meine-energieberatung.com" className="flex items-center gap-3 hover:text-brand-700">
            <Mail size={20} className="text-brand-600" />
            info@meine-energieberatung.com
          </a>
          <a href="tel:+49" className="flex items-center gap-3 hover:text-brand-700">
            <Phone size={20} className="text-brand-600" />
            [Platzhalter: Telefonnummer]
          </a>
        </div>
      </div>
    </section>
  )
}
