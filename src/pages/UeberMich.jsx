const WERDEGANG = [
  { jahr: '2021–2025', text: 'Hochschulstudium Maschinenbau-Verfahrenstechnik' },
  { jahr: '2021–2026', text: 'TGA-Ingenieur in der chemischen Industrie' },
  { jahr: 'seit 2025', text: 'Zertifizierter Energieberater' },
  { jahr: '2025', text: 'Zertifikat Trinkwasserhygiene VDI 6023 Kat. A' },
  { jahr: '2026', text: 'Zertifikat Lüftungshygiene VDI 6022 Kat. A' },
]

export default function UeberMich() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-8 text-center">Über mich</h1>

      <img
        src="portrait.jpg"
        alt="Luca Ferrandina"
        className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full object-cover border border-brand-100 mb-8"
      />

      <p className="text-ink-700 text-center max-w-xl mx-auto mb-14">
        Mein Name ist Luca Ferrandina, seit 2025 zertifizierter
        Energieeffizienz-Experte. {/* TODO: ausführlicherer Text folgt noch von Luca */}
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
