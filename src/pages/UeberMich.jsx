export default function UeberMich() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-8">Über mich</h1>

      <div className="grid sm:grid-cols-3 gap-10 items-start">
        <div className="sm:col-span-1">
          <div className="aspect-square rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-ink-500 text-sm text-center p-4">
            [Platzhalter: Porträtfoto]
          </div>
        </div>

        <div className="sm:col-span-2 space-y-4 text-ink-700">
          <p>
            [Platzhalter] Werdegang, Ausbildung, Erfahrung als Energieeffizienz-Experte.
          </p>
          <p>
            [Platzhalter] Zertifizierungen und Eintragungsnummer in der dena-Expertenliste,
            ausstellende Stelle.
          </p>
          <p>
            [Platzhalter] Persönliche Motivation / Warum Energieberatung.
          </p>
        </div>
      </div>
    </section>
  )
}
