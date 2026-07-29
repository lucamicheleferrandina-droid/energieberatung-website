const WERDEGANG = [
  { jahr: '[Jahr]', text: '[Platzhalter] Station im Werdegang, z.B. Ausbildung/Studium.' },
  { jahr: '[Jahr]', text: '[Platzhalter] Station im Werdegang, z.B. Zertifizierung zum Energieeffizienz-Experten.' },
  { jahr: '[Jahr]', text: '[Platzhalter] Station im Werdegang, z.B. Gründung der eigenen Beratung.' },
]

export default function UeberMich() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-8 text-center">Über mich</h1>

      <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-ink-500 text-xs text-center p-4 mb-8">
        [Platzhalter: Porträtfoto]
      </div>

      <p className="text-ink-700 text-center max-w-xl mx-auto mb-14">
        [Platzhalter] 2–3 Sätze über Luca: wer er ist, was ihn als
        Energieeffizienz-Experten ausmacht und wem er hilft.
      </p>

      <h2 className="text-xl font-semibold text-ink-900 mb-6">Werdegang</h2>
      <ol className="space-y-4 border-l-2 border-brand-100 pl-6">
        {WERDEGANG.map((station, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[1.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-500" />
            <span className="block text-sm font-medium text-brand-700">{station.jahr}</span>
            <span className="text-ink-700">{station.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
