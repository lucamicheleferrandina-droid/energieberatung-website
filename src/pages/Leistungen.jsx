const LEISTUNGEN = [
  {
    titel: 'Energieberatung',
    text: 'Persönliche Beratung zu energetischen Schwachstellen und sinnvollen Maßnahmen an Ihrer Immobilie.',
  },
  {
    titel: 'Individuelle Sanierungsfahrpläne (iSFP)',
    text: 'Schrittweiser Fahrplan für die energetische Sanierung Ihres Gebäudes, abgestimmt auf Ihr Budget und Ihre Ziele.',
  },
  {
    titel: 'Energieausweise',
    text: 'Erstellung von Energieausweisen für Wohn- und Nichtwohngebäude, z.B. für Verkauf oder Vermietung.',
  },
  {
    titel: 'Heiz- und Kühllastberechnungen',
    text: 'Berechnung der Heiz- und Kühllast Ihres Gebäudes als Grundlage für eine korrekt dimensionierte Anlagentechnik.',
  },
]

export default function Leistungen() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Leistungen</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Als zertifizierter Energieeffizienz-Experte biete ich Ihnen folgende
        Leistungen rund um energieeffizientes Bauen und Sanieren an.
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
