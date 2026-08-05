import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Flame,
  ClipboardList,
  Home as HomeIcon,
  HelpCircle,
  CheckCircle2,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react'
import useSeo from '../hooks/useSeo.js'
import CtaBlock from '../components/CtaBlock.jsx'

const FRAGEN = [
  {
    id: 'heizung',
    frage: 'Wie alt ist Ihre aktuelle Heizung?',
    optionen: [
      { value: 'alt', label: 'Öl-/Gasheizung, älter als 20 Jahre oder defekt' },
      { value: 'mittel', label: 'Öl-/Gasheizung, jünger als 20 Jahre' },
      { value: 'modern', label: 'Bereits Wärmepumpe oder moderne Heizung' },
      { value: 'unklar', label: 'Weiß ich nicht genau' },
    ],
  },
  {
    id: 'vorhaben',
    frage: 'Was möchten Sie vorrangig angehen?',
    optionen: [
      { value: 'heizung', label: 'Heizung austauschen' },
      { value: 'huelle', label: 'Dämmung, Fenster oder Fassade' },
      { value: 'mehrere', label: 'Mehrere Maßnahmen zusammen' },
      { value: 'unklar', label: 'Ich weiß noch nicht genau' },
    ],
  },
  {
    id: 'isfp',
    frage: 'Haben Sie bereits einen individuellen Sanierungsfahrplan (iSFP)?',
    optionen: [
      { value: 'ja', label: 'Ja, liegt schon vor' },
      { value: 'nein', label: 'Nein' },
      { value: 'unbekannt', label: 'Was ist das?' },
    ],
  },
  {
    id: 'einheiten',
    frage: 'Wie viele Wohneinheiten hat Ihr Gebäude?',
    optionen: [
      { value: '1', label: '1 Wohneinheit' },
      { value: 'mehr', label: '2 oder mehr Wohneinheiten' },
    ],
  },
]

function getEmpfehlungen({ heizung, vorhaben, isfp }) {
  const ergebnisse = []

  if (vorhaben === 'heizung' || heizung === 'alt') {
    ergebnisse.push({
      icon: Flame,
      titel: 'Heizungstausch (KfW 458)',
      text:
        heizung === 'alt'
          ? 'Da Ihre Heizung älter als 20 Jahre ist, kommt neben der Grundförderung ggf. auch der Klimageschwindigkeits-Bonus infrage.'
          : 'Für den Austausch bzw. Ersteinbau förderfähiger Heiztechnik gibt es eine Grundförderung, teils ergänzt um weitere Boni.',
      link: '/ratgeber',
      linkLabel: 'Details zu KfW 458 im Ratgeber',
    })
  }

  if (vorhaben === 'huelle' || vorhaben === 'mehrere') {
    if (isfp === 'ja') {
      ergebnisse.push({
        icon: ClipboardList,
        titel: 'Einzelmaßnahmen mit iSFP-Bonus nutzen',
        text: 'Da Sie bereits einen iSFP haben, profitieren Sie bei Gebäudehülle und Anlagentechnik vom erhöhten iSFP-Fördersatz.',
        link: '/ratgeber',
        linkLabel: 'Details zum iSFP-Bonus im Ratgeber',
      })
    } else {
      ergebnisse.push({
        icon: ClipboardList,
        titel: 'Individueller Sanierungsfahrplan (iSFP)',
        text: 'Ein iSFP vor der ersten Maßnahme lohnt sich meist: Er erhöht den Fördersatz für nachfolgende Einzelmaßnahmen und wird selbst gefördert.',
        link: '/leistungen',
        linkLabel: 'Mehr zum iSFP',
      })
    }
  }

  if (vorhaben === 'unklar' || heizung === 'unklar' || ergebnisse.length === 0) {
    ergebnisse.push({
      icon: HomeIcon,
      titel: 'Energieberatung vor Ort',
      text: 'Der sinnvollste erste Schritt ist eine persönliche Vor-Ort-Beratung: Wir verschaffen uns gemeinsam einen Überblick über den energetischen Zustand Ihres Gebäudes und die passenden nächsten Schritte.',
      link: '/leistungen',
      linkLabel: 'Mehr zur Energieberatung',
    })
  }

  if (isfp === 'unbekannt') {
    ergebnisse.push({
      icon: HelpCircle,
      titel: 'Was ist ein iSFP?',
      text: 'Ein individueller Sanierungsfahrplan zeigt Ihnen, in welcher Reihenfolge sich Maßnahmen an Ihrem Gebäude lohnen – und erhöht dabei den Fördersatz für spätere Einzelmaßnahmen.',
      link: '/ratgeber',
      linkLabel: 'Kurz erklärt im Ratgeber',
    })
  }

  return ergebnisse
}

export default function FoerderCheck() {
  useSeo(
    'Förder-Check: Welche Förderung passt zu mir? | Energieberatung Kaiserslautern',
    'Kurzer, unverbindlicher Förder-Check: Beantworten Sie 4 Fragen und erhalten Sie eine erste Einschätzung, welche Fördermöglichkeiten für Ihr Sanierungsvorhaben infrage kommen.'
  )

  const [step, setStep] = useState(0)
  const [antworten, setAntworten] = useState({})

  const fertig = step >= FRAGEN.length
  const ergebnisse = fertig ? getEmpfehlungen(antworten) : []

  function waehleOption(value) {
    const frage = FRAGEN[step]
    setAntworten((a) => ({ ...a, [frage.id]: value }))
    setStep((s) => s + 1)
  }

  function zurueck() {
    setStep((s) => Math.max(0, s - 1))
  }

  function neuStarten() {
    setStep(0)
    setAntworten({})
  }

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold text-ink-900 mb-3">Förder-Check</h1>
        <p className="text-ink-500 mb-10 max-w-2xl">
          Beantworten Sie 4 kurze Fragen und erhalten Sie eine erste,
          unverbindliche Einschätzung, welche Förderthemen für Ihr Vorhaben
          relevant sein könnten.
        </p>

        {!fertig && (
          <div className="border border-brand-100 rounded-xl p-6 sm:p-8 shadow-sm">
            <p className="text-sm text-brand-600 font-semibold mb-4">
              Frage {step + 1} von {FRAGEN.length}
            </p>
            <h2 className="text-lg font-semibold text-ink-900 mb-6">
              {FRAGEN[step].frage}
            </h2>
            <div className="space-y-3">
              {FRAGEN[step].optionen.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => waehleOption(opt.value)}
                  className="w-full text-left px-4 py-3 rounded-lg border border-brand-200 hover:border-brand-400 hover:bg-brand-50 transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={zurueck}
                className="mt-6 inline-flex items-center gap-1 text-sm text-ink-500 hover:text-brand-700"
              >
                <ArrowLeft size={16} /> Zurück
              </button>
            )}
          </div>
        )}

        {fertig && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
                <CheckCircle2 className="text-brand-700" size={20} />
              </div>
              <h2 className="text-lg font-semibold text-ink-900">
                Ihre erste Einschätzung
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {ergebnisse.map((e) => (
                <div key={e.titel} className="border border-brand-100 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <e.icon className="text-brand-600" size={20} />
                    <h3 className="font-semibold text-ink-900">{e.titel}</h3>
                  </div>
                  <p className="text-sm text-ink-700 mb-2">{e.text}</p>
                  <Link to={e.link} className="text-sm text-brand-700 underline">
                    {e.linkLabel}
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-xs text-ink-400 mb-8">
              Diese Einschätzung ist unverbindlich und ersetzt keine
              individuelle Energieberatung. Alle Angaben ohne Gewähr, Stand
              2026.
            </p>

            <button
              type="button"
              onClick={neuStarten}
              className="inline-flex items-center gap-1 text-sm text-ink-500 hover:text-brand-700"
            >
              <RotateCcw size={16} /> Noch einmal starten
            </button>
          </div>
        )}
      </section>
      <CtaBlock />
    </>
  )
}
