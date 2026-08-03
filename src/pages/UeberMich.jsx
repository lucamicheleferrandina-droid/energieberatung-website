import useSeo from '../hooks/useSeo.js'
import CtaBlock from '../components/CtaBlock.jsx'

const WERDEGANG = [
  { jahr: '2021–2025', text: 'Hochschulstudium Maschinenbau-Verfahrenstechnik' },
  { jahr: '2021–2026', text: 'TGA-Ingenieur in der chemischen Industrie' },
  { jahr: 'seit 2025', text: 'Zertifizierter Energieberater' },
  { jahr: '2025', text: 'Zertifikat Trinkwasserhygiene VDI 6023 Kat. A' },
  { jahr: '2026', text: 'Zertifikat Lüftungshygiene VDI 6022 Kat. A' },
]

export default function UeberMich() {
  useSeo(
    'Über mich | Luca Ferrandina – Energieberater in Kaiserslautern',
    'Luca Ferrandina: zertifizierter Energieeffizienz-Experte in Kaiserslautern und Umgebung. Hintergrund als Maschinenbau-Verfahrenstechniker und TGA-Ingenieur, Werdegang und Zertifikate im Überblick.'
  )

  return (
    <>
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-8 text-center">Über mich</h1>

      <img
        src="portrait.jpg"
        alt="Luca Ferrandina"
        className="w-56 sm:w-64 aspect-[4/5] mx-auto rounded-xl object-cover border border-brand-100 mb-8"
      />

      <div className="space-y-4 text-ink-700 mb-14">
        <p>
          Mein Name ist Luca Ferrandina. Seit 2025 bin ich zertifizierter
          Energieeffizienz-Experte und berate Eigentümerinnen und Eigentümer
          in Kaiserslautern und Umgebung rund um energetische Sanierung und
          Förderung.
        </p>
        <p>
          Vor der Energieberatung habe ich Maschinenbau-Verfahrenstechnik
          studiert und als TGA-Ingenieur in der chemischen Industrie
          gearbeitet – dort, wo Anlagentechnik zuverlässig und effizient
          laufen muss. Diesen technischen Hintergrund bringe ich in jede
          Beratung ein: Ich beurteile Gebäude- und Anlagentechnik nicht nur
          nach Datenblatt, sondern mit Blick darauf, was im täglichen
          Betrieb tatsächlich funktioniert.
        </p>
        <h2 className="text-xl font-semibold text-ink-900 pt-2">Wie ich arbeite</h2>
        <p>
          Ehrlichkeit steht für mich an erster Stelle – ich sage Ihnen auch,
          wenn sich eine Maßnahme für Sie wirtschaftlich nicht lohnt. Meine
          Empfehlungen sind praxisnah und darauf ausgelegt, dass sie sich
          rechnen, inklusive der bestmöglichen Ausschöpfung staatlicher
          Förderprogramme. Nachhaltige Lösungen und die Technik dahinter
          begeistern mich dabei ganz persönlich.
        </p>
      </div>

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
    <CtaBlock />
    </>
  )
}
