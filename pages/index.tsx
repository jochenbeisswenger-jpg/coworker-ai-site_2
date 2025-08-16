import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CoWorker AI – Dein smarter E-Mail Agent</title>
        <meta name="description" content="Automatisiere dein E-Mail-Postfach mit CoWorker AI. Spare Zeit und steigere die Effizienz deines Unternehmens." />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            CoWorker AI – Dein smarter E-Mail Agent
          </h1>
          <p className="text-lg max-w-2xl mb-8">
            Automatisiere dein E-Mail-Postfach: Eingehende Mails werden
            bearbeitet, weitergeleitet, beantwortet und kategorisiert – völlig
            autonom.
          </p>
          <a
            href="#preise"
            className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-2xl shadow-lg"
          >
            Jetzt starten
          </a>
        </section>

        {/* Features */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-10">Deine Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Autonom</h3>
              <p>Dein E-Mail-Agent arbeitet 24/7 für dich.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Effizient</h3>
              <p>Nie wieder manuelles Sortieren und Antworten.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Flexibel</h3>
              <p>Passt sich an deine Unternehmensprozesse an.</p>
            </div>
          </div>
        </section>

        {/* Preise */}
        <section id="preise" className="py-20 px-6 bg-gray-950 text-center">
          <h2 className="text-4xl font-semibold mb-10">Pakete & Preise</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="mb-4">E-Mail-Agent für kleine Teams</p>
              <p className="text-3xl font-bold mb-6">99 € / Monat</p>
              <a href="#" className="bg-purple-600 px-6 py-3 rounded-2xl block">
                Auswählen
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border-2 border-purple-600">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="mb-4">Erweiterte Features & Support</p>
              <p className="text-3xl font-bold mb-6">199 € / Monat</p>
              <a href="#" className="bg-purple-600 px-6 py-3 rounded-2xl block">
                Auswählen
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="mb-4">Individuelle Lösungen für Unternehmen</p>
              <p className="text-3xl font-bold mb-6">Auf Anfrage</p>
              <a href="#" className="bg-purple-600 px-6 py-3 rounded-2xl block">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
