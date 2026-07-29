import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    frage: 'Wie läuft eine Energieberatung (iSFP-Erstellung) ab?',
    antwort:
      'In vier Schritten: Kontaktaufnahme über Online-Formular, E-Mail oder Telefon → Vor-Ort-Termin mit Aufklärung zu Fördermöglichkeiten und typischen Sanierungsmaßnahmen → Hausbegehung mit Fotodokumentation zur Erfassung des Ist-Zustands → Erstellung des individuellen Sanierungsfahrplans (iSFP) und abschließende Durchsprache der Ergebnisse mit Ihnen.',
  },
  {
    frage: 'Wie läuft eine Antragstellung für eine Sanierungsmaßnahme ab?',
    antwort:
      'Zunächst muss vor Vorhabenbeginn ein Förderantrag gestellt werden – dafür braucht es einen Liefer- oder Leistungsvertrag mit einer auflösenden oder aufschiebenden Bedingung zur Förderzusage, aus dem das voraussichtliche Umsetzungsdatum hervorgeht. Als Energieeffizienz-Experte begleite ich Sie dabei: Ich erstelle die technische Projektbeschreibung, bestätige die Einhaltung der technischen Mindestanforderungen und wirke bei der Aufstellung der förderfähigen Ausgaben mit. Nach Zusage haben Sie 36 Monate Zeit zur Umsetzung, danach reichen wir gemeinsam den Verwendungsnachweis mit allen Nachweisen und Rechnungen ein.',
  },
  {
    frage: 'Wie viel Förderung gibt es für den iSFP?',
    antwort:
      'Für 1–2 Wohneinheiten werden 50 % der Kosten bis maximal 650 € gefördert, ab 2 Wohneinheiten 50 % bis maximal 850 €.',
  },
  {
    frage: 'Was sind die Vorteile eines iSFP?',
    antwort:
      'Ein iSFP erhöht die förderfähigen Investitionskosten bei nachfolgenden Einzelmaßnahmen von 30.000 € auf 60.000 € pro Wohneinheit und Jahr, erhöht den Fördersatz für diese Maßnahmen von 15 % auf 20 % (iSFP-Bonus), bietet Ihnen 15 Jahre Planungssicherheit und einen klaren Sanierungsfahrplan mit sinnvoller Maßnahmenreihenfolge.',
  },
  {
    frage: 'Muss ich alle Maßnahmen aus dem iSFP in der vorgeschlagenen Reihenfolge umsetzen?',
    antwort:
      'Nein. Unwesentliche inhaltliche Abweichungen, eine Übererfüllung der iSFP-Vorgaben oder Änderungen der zeitlichen Reihenfolge sind dabei unschädlich – nur eine wesentliche Untererfüllung der Vorgaben führt dazu, dass die Maßnahme nicht als iSFP-Maßnahme gilt.',
  },
  {
    frage: 'Wie lange ist der iSFP-Bonus gültig, wenn ich die Maßnahmen später umsetze?',
    antwort:
      'Der Bonus gilt, wenn die Maßnahme innerhalb eines Zeitraums von maximal 15 Jahren nach Erstellung des iSFP umgesetzt wird.',
  },
  {
    frage: 'Gilt der iSFP-Bonus für alle Maßnahmen?',
    antwort:
      'Nein. Vom iSFP-Bonus ausgenommen bleiben Leistungen wie Heizungstechnik, Emissionsminderung Biomasseheizungen und Fachplanung/Baubegleitung. Der Bonus gilt also nur für Gebäudehülle, sonstige Anlagentechnik und Heizungsoptimierung.',
  },
  {
    frage: 'Muss der iSFP bei Antragstellung bereits vorliegen?',
    antwort:
      'Ja. Bereits bei der Antragstellung muss der iSFP vorliegen, und zur Einreichung des Verwendungsnachweises muss die geförderte Energieberatung abschließend beschieden und ausgezahlt worden sein.',
  },
  {
    frage:
      'Muss bei der Antragstellung wieder ein Energieeffizienz-Experte eingebunden werden, wenn ich den iSFP-Bonus nutzen möchte?',
    antwort:
      'Ja. Bei der Antragstellung ist ein Energieeffizienz-Experte einzubeziehen, der prüft, ob die beantragte Maßnahme dem iSFP entspricht.',
  },
  {
    frage: 'Kann ich den iSFP-Bonus mit anderen Boni kombinieren (z. B. beim Heizungstausch)?',
    antwort:
      'Der iSFP-Bonus selbst gilt nicht für Heizungsmaßnahmen (siehe Frage 7). Für Heizungen greifen stattdessen andere Boni wie der Klimageschwindigkeits- oder Einkommens-Bonus – das ist ein eigenes Thema, das wir bei Bedarf separat vertiefen können.',
  },
]

function FaqItem({ frage, antwort }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-100">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-ink-900">{frage}</span>
        <ChevronDown
          className={`shrink-0 text-brand-600 transition-transform ${open ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {open && <p className="text-ink-700 pb-5 pr-8">{antwort}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-3">Häufige Fragen</h1>
      <p className="text-ink-500 mb-10 max-w-2xl">
        Antworten auf die häufigsten Fragen rund um Energieberatung,
        Förderungen und den Ablauf.
      </p>

      <div>
        {FAQS.map((item, i) => (
          <FaqItem key={i} frage={item.frage} antwort={item.antwort} />
        ))}
      </div>
    </section>
  )
}
