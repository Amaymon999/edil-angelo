import { FunnelDrawer } from "./components/funnel";
import { Badge, Button, Card, Container, Divider, Kpi, LogoMark } from "./components/ui";

const BRAND = "Angelo Edilizia";
const AREA = "Milano (Lambrate) ↔ Monza";
const CONTACT_EMAIL = "angeloberetta36@gmail.com";

// Inserisci qui il numero WhatsApp in formato internazionale (senza +) se vuoi il CTA diretto
const WHATSAPP_PHONE = "";

const SERVICES = [
  {
    title: "Ristrutturazioni interne chiavi in mano",
    desc: "Gestione completa: demolizioni, impianti, finiture e coordinamento squadre. Un unico referente, fino al collaudo.",
  },
  {
    title: "Recupero cantieri / lavori da sistemare",
    desc: "Quando un cantiere è fermo o mal gestito, interveniamo con un piano chiaro e portiamo a termine la consegna.",
  },
  {
    title: "Solai da rifare e ripristini",
    desc: "Interventi strutturali e ripristini: valutazione, esecuzione e chiusura lavori con attenzione a sicurezza e qualità.",
  },
  {
    title: "Pompe di calore",
    desc: "Soluzioni efficienti per comfort e consumi: scelta, installazione e messa in servizio.",
  },
  {
    title: "Fotovoltaico",
    desc: "Impianti per ridurre i costi energetici e aumentare il valore dell’immobile.",
  },
  {
    title: "Progettazione arredi (anche conto terzi)",
    desc: "Layout, arredi e soluzioni funzionali: pensate per vivere bene e valorizzare gli spazi.",
  },
];

const FAQS = [
  {
    q: "In che zone operate?",
    a: `Principalmente ${AREA}. Se sei poco fuori area, valutiamo caso per caso.`,
  },
  {
    q: "Fate anche cantieri già avviati?",
    a: "Sì. Siamo specializzati nel recupero di ristrutturazioni: analizziamo lo stato, definiamo priorità e consegniamo fino al collaudo.",
  },
  {
    q: "Siete economici?",
    a: "Non lavoriamo al ribasso: puntiamo su qualità, organizzazione e affidabilità. Se vuoi un lavoro fatto bene e che dura, siamo allineati.",
  },
  {
    q: "Come funziona il preventivo?",
    a: "Prima un check rapido (60 secondi) per capire l’intervento. Poi chiamata e, se utile, sopralluogo. Ti diamo una proposta chiara e realistica.",
  },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    areaServed: AREA,
    email: CONTACT_EMAIL,
    description:
      "Impresa edile specializzata in ristrutturazioni interne chiavi in mano, recupero cantieri, solai, pompe di calore e fotovoltaico. Operativa tra Milano (Lambrate) e Monza.",
    knowsAbout: [
      "ristrutturazioni",
      "recupero cantieri",
      "solai",
      "pompe di calore",
      "fotovoltaico",
      "progettazione arredi",
    ],
  };
}

export default function Page() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="glow text-emerald-300">
                <LogoMark />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">{BRAND}</div>
                <div className="text-xs text-zinc-400">{AREA}</div>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Badge>Qualità • Fino al collaudo</Badge>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                Contatti
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative pt-12 sm:pt-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Ristrutturazioni interne</Badge>
                <Badge>Recupero cantieri</Badge>
                <Badge>Pompe di calore & Fotovoltaico</Badge>
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Ristrutturazioni fatte bene.
                <span className="block text-zinc-300">Senza sorprese, fino al collaudo.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300">
                Operiamo tra <span className="text-zinc-100">Milano (Lambrate)</span> e <span className="text-zinc-100">Monza</span>.
                Gestione completa e qualità alta: ideale se vuoi un cantiere ordinato e una consegna reale.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#preventivo">Ottieni un preventivo</Button>
                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                  Scrivici via email
                </Button>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Kpi label="Capacità media" value="~4 cantieri/mese" />
                <Kpi label="Approccio" value="Quality-first" />
                <Kpi label="Consegna" value="Fino al collaudo" />
              </div>
            </div>

            {/* Right: Apple-like product card */}
            <div className="relative">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Checklist cantiere (preview)</div>
                    <div className="mt-1 text-xs text-zinc-400">
                      Un esempio di come lavoriamo: chiaro, ordinato, misurabile.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-xs text-zinc-200">
                    Milano–Monza
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {["Sopralluogo e obiettivi", "Piano lavori + tempi", "Impianti & predisposizioni", "Finiture e posa", "Collaudo e consegna"].map(
                    (t, i) => (
                      <div
                        key={t}
                        className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/30 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-7 w-7 rounded-xl bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                          <div className="text-sm text-zinc-100">{t}</div>
                        </div>
                        <div className="text-xs text-zinc-500">0{i + 1}</div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                  <div className="text-sm font-semibold">Se cerchi “il prezzo più basso”…</div>
                  <div className="mt-1 text-sm text-zinc-200">
                    qui probabilmente non siamo il match. Se cerchi <span className="text-white">qualità</span>,
                    <span className="text-white"> organizzazione</span> e <span className="text-white">resa finale</span>, allora sì.
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-3xl bg-emerald-400/10 blur-2xl sm:block" />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-14">
        <Container>
          <Divider />
        </Container>
      </section>

      {/* Services */}
      <section className="mt-14">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm text-zinc-400">Servizi</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Tutto quello che serve per consegnare bene
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                Ristrutturazioni, recupero cantieri, interventi su solai e impianti moderni.
                Se vuoi un unico referente e un lavoro curato, sei nel posto giusto.
              </p>
            </div>
            <div className="hidden sm:block">
              <Badge>Impresa edile • costruzioni • ristrutturazioni</Badge>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Card key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </Container>
      </section>

      {/* Proof / Portfolio placeholders */}
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 shadow-ring">
              <div className="text-sm text-zinc-400">Perché funziona</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Processo chiaro, risultato stabile</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Lavoriamo con un metodo pratico: obiettivi, pianificazione, esecuzione e verifica.
                Esperienza con realtà industriali → standard alti, attenzione ai dettagli.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { t: "1. Brief & sopralluogo", d: "Inquadriamo priorità, vincoli e obiettivi." },
                  { t: "2. Piano di lavoro", d: "Tempi realistici, ordini e fasi ben definite." },
                  { t: "3. Esecuzione", d: "Cantiere ordinato, coordinamento squadre." },
                  { t: "4. Collaudo & consegna", d: "Controlli finali e chiusura lavori." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-zinc-400">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 shadow-ring">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-zinc-400">Portfolio</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">Prima/Dopo (placeholder)</h3>
                </div>
                <Badge>Da sostituire con foto reali</Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Qui inseriamo 6–12 foto dei lavori migliori (anche con mini descrizione). Se me le mandi, le carico e le impagino.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="aspect-[4/3] rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950/60 to-zinc-900/40" />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4 text-sm text-zinc-300">
                <span className="font-semibold text-zinc-100">Tip:</span> 10–30 foto + 3 lavori “top” con zona, durata e fascia budget → il sito converte molto di più.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Funnel anchor */}
      <section id="preventivo" className="mt-16">
        <Container>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 shadow-ring">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm text-zinc-400">Preventivo</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">Fatti richiamare (senza perdere tempo)</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  Un funnel semplice e “smart”: 6 domande, riepilogo automatico e invio richiesta.
                  Poi ti contattiamo per definire sopralluogo e proposta.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                  Email
                </Button>
                <Button href="#" variant="primary">
                  Apri il funnel ↓
                </Button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <div className="text-sm font-semibold">Nota</div>
              <div className="mt-1 text-sm text-zinc-200">
                Se preferisci, puoi anche inviarci direttamente una mail a <span className="text-white">{CONTACT_EMAIL}</span> con:
                zona, tipo lavoro, metratura e tempistiche.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="mt-16 pb-28">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm text-zinc-400">FAQ</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Domande frequenti
              </h2>
            </div>
            <Badge>Risposte rapide</Badge>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-ring"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold">
                  <span className="text-zinc-100">{f.q}</span>
                  <span className="float-right text-zinc-500 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-zinc-300">{f.a}</div>
              </details>
            ))}
          </div>

          <footer className="mt-12">
            <Divider />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-zinc-500">
                © {new Date().getFullYear()} {BRAND}. Area operativa: {AREA}. Contatto: {CONTACT_EMAIL}
              </div>
              <div className="flex items-center gap-2">
                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                  Contattaci
                </Button>
                <Badge>Quality-first</Badge>
              </div>
            </div>
          </footer>
        </Container>
      </section>

      {/* Funnel UI */}
      <FunnelDrawer brandName={BRAND} whatsappPhone={WHATSAPP_PHONE || undefined} />
    </main>
  );
}
