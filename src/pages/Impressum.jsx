import useSeo from '../hooks/useSeo.js'

export default function Impressum() {
  useSeo('Impressum | Luca Ferrandina Energieberatung', 'Impressum der Energieberatung Luca Ferrandina.')

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 prose prose-ink">
      <h1 className="text-3xl font-bold text-ink-900 mb-6">Impressum</h1>
      <p className="text-ink-700">
        [Platzhalter – noch nicht rechtsgültig, bitte vor Veröffentlichung
        vervollständigen und rechtlich prüfen lassen]
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">Angaben gemäß § 5 TMG</h2>
      <p className="text-ink-700">
        Luca Ferrandina<br />
        Nelkenstraße 114<br />
        67691 Hochspeyer
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">Kontakt</h2>
      <p className="text-ink-700">
        Telefon: 0176 68270350<br />
        E-Mail: info@meine-energieberatung.com
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">Energieberater-Registrierungsnummer</h2>
      <p className="text-ink-700">EB673442</p>
      <h2 className="font-semibold text-ink-900 mt-6">Umsatzsteuer-ID</h2>
      <p className="text-ink-700">DE458370665</p>
      <h2 className="font-semibold text-ink-900 mt-6">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
      </h2>
      <p className="text-ink-700">
        Luca Ferrandina<br />
        Nelkenstraße 114<br />
        67691 Hochspeyer
      </p>
      <p className="text-ink-700">
        Dieses Impressum gilt auch für die folgenden Online-Präsenzen:<br />
        Instagram: @energieberatung.lf
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
      </h2>
      <p className="text-ink-700">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">Urheberrecht</h2>
      <p className="text-ink-700">
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
        wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
        trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
        wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
      <h2 className="font-semibold text-ink-900 mt-6">Haftungshinweis</h2>
      <p className="text-ink-700">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
        Haftung für die Inhalte externer Links.
      </p>
    </section>
  )
}
