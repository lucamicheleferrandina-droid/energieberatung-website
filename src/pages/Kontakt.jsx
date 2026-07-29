import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

// TODO: Formspree-Endpoint eintragen, siehe README.md ("Kontaktformular einrichten")
const FORM_ENDPOINT = 'https://formspree.io/f/DEIN_FORMULAR_CODE'

function Field({ id, label, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700 mb-1" htmlFor={id}>
        {label}
        {required && ' *'}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-brand-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
      />
    </div>
  )
}

export default function Kontakt() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Kontakt</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Sie möchten eine Beratung anfragen? Schreiben Sie mir gerne über das
        Formular oder direkt per E-Mail/Telefon.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <form action={FORM_ENDPOINT} method="POST" className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-semibold text-ink-900 mb-2">Persönliche Daten</legend>
            <Field id="name" label="Name" required />
            <Field id="adresse" label="Ihre Adresse" required />
            <Field id="email" label="E-Mail" type="email" required />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-semibold text-ink-900 mb-2">Angaben zum Objekt</legend>
            <Field id="objekt_adresse" label="Adresse des Objekts (falls abweichend)" />
            <Field id="baujahr" label="Baujahr" />
            <Field id="grundflaeche" label="Grundfläche / Wohnfläche (m²)" />
          </fieldset>

          <div>
            <label className="block text-sm font-medium text-ink-700 mb-1" htmlFor="nachricht">
              Ihre Anfrage *
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              required
              className="w-full rounded-lg border border-brand-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="datenschutz"
              name="datenschutz_akzeptiert"
              type="checkbox"
              required
              className="mt-1"
            />
            <label htmlFor="datenschutz" className="text-sm text-ink-700">
              Ich habe die{' '}
              <Link to="/datenschutz" className="text-brand-700 underline">
                Datenschutzerklärung
              </Link>{' '}
              gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
              meiner Anfrage einverstanden. *
            </label>
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
          <a href="tel:+4917668270350" className="flex items-center gap-3 hover:text-brand-700">
            <Phone size={20} className="text-brand-600" />
            0176 68270350
          </a>
        </div>
      </div>
    </section>
  )
}
