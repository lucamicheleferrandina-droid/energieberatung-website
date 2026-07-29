const LEISTUNGEN = [
  {
    titel: '[Platzhalter] Energieberatung vor Ort',
    text: '[Platzhalter] Kurze Beschreibung dieser Leistung, z.B. Ablauf und Nutzen für den Kunden.',
  },
  {
    titel: '[Platzhalter] Individueller Sanierungsfahrplan (iSFP)',
    text: '[Platzhalter] Kurze Beschreibung.',
  },
  {
    titel: '[Platzhalter] Förderanträge (BEG / KfW)',
    text: '[Platzhalter] Kurze Beschreibung.',
  },
  {
    titel: '[Platzhalter] Baubegleitung',
    text: '[Platzhalter] Kurze Beschreibung.',
  },
]

export default function Leistungen() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Leistungen</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        [Platzhalter] Einleitender Text zu den angebotenen Leistungen.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {LEISTUNGEN.map((l) => (
          <div key={l.titel} className="border border-brand-100 rounded-xl p-6">
            <h2 className="font-semibold text-ink-900 mb-2">{l.titel}</h2>
            <p className="text-sm text-ink-500">{l.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
