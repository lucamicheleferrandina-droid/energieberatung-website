import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  { frage: '[Platzhalter] Frage 1', antwort: '[Platzhalter] Antwort 1' },
  { frage: '[Platzhalter] Frage 2', antwort: '[Platzhalter] Antwort 2' },
  { frage: '[Platzhalter] Frage 3', antwort: '[Platzhalter] Antwort 3' },
  { frage: '[Platzhalter] Frage 4', antwort: '[Platzhalter] Antwort 4' },
  { frage: '[Platzhalter] Frage 5', antwort: '[Platzhalter] Antwort 5' },
  { frage: '[Platzhalter] Frage 6', antwort: '[Platzhalter] Antwort 6' },
  { frage: '[Platzhalter] Frage 7', antwort: '[Platzhalter] Antwort 7' },
  { frage: '[Platzhalter] Frage 8', antwort: '[Platzhalter] Antwort 8' },
  { frage: '[Platzhalter] Frage 9', antwort: '[Platzhalter] Antwort 9' },
  { frage: '[Platzhalter] Frage 10', antwort: '[Platzhalter] Antwort 10' },
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
