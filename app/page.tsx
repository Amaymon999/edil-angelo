import Image from "next/image";
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
    icon: "home",
  },
  {
    title: "Recupero cantieri / lavori da sistemare",
    desc: "Quando un cantiere è fermo o mal gestito, interveniamo con un piano chiaro e portiamo a termine la consegna.",
    icon: "rescue",
  },
  {
    title: "Solai da rifare e ripristini",
    desc: "Interventi strutturali e ripristini: valutazione, esecuzione e chiusura lavori con attenzione a sicurezza e qualità.",
    icon: "layers",
  },
  {
    title: "Pompe di calore",
    desc: "Soluzioni efficienti per comfort e consumi: scelta, installazione e messa in servizio.",
    icon: "heat",
  },
  {
    title: "Fotovoltaico",
    desc: "Impianti per ridurre i costi energetici e aumentare il valore dell’immobile.",
    icon: "solar",
  },
  {
    title: "Progettazione arredi (anche conto terzi)",
    desc: "Layout, arredi e soluzioni funzionali: pensate per vivere bene e valorizzare gli spazi.",
    icon: "sofa",
  },
] as const;

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

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "home":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "rescue":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 22v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M22 12h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 12H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7.5 7.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "layers":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M3 16l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "heat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2c2.5 3 1.5 4.5 0 6s-2.5 3-1.5 5 4 2.5 5.5-.5C17 9 14.5 7 16 4.5 17 3 18 2.5 19 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14c-1 4 2 8 6 8s7-4 6-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "solar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 19v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4.2 5.2l1.4 1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.4 18.4l1.4 1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M3 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.2 19.8l1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.4 6.6l1.4-1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "sofa":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M6 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 16v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
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
      <section className="relative pt-10 sm:pt-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Ristrutturazioni interne</Badge>
                <Badge>Recupero cantieri</Badge>
                <Badge>Pompe di calore & Fotovoltaico</Badge>
              </div>

              <h1 className="mt-6 text-balance heading-tight text-[clamp(2.4rem,4.2vw,3.7rem)] font-semibold leading-[1.06]">
                Ristrutturazioni fatte bene, senza sorprese.
                <span className="block text-zinc-300">Dalla prima chiamata al collaudo finale.</span>
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-300">
                Operiamo tra <span className="text-zinc-100">Milano (Lambrate)</span> e <span className="text-zinc-100">Monza</span>.
                Standard alti, cantiere ordinato e consegna reale: ideale se vuoi qualità e controllo, non caos.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#preventivo">Preventivo veloce (60s)</Button>
                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                  Scrivici via email
                </Button>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Kpi label="Capacità media" value="~4 cantieri/mese" />
                <Kpi label="Approccio" value="Quality-first" />
                <Kpi label="Consegna" value="Fino al collaudo" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Esperienza con gruppi industriali
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Non lavoriamo al ribasso
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="relative aspect-[16/11]">
                  <Image
                    src="/images/hero-illustration.svg"
                    alt="Anteprima progetto ristrutturazione"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/0" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold">Metodo di lavoro (in breve)</div>
                      <div className="mt-1 text-xs text-zinc-400">Obiettivi → piano → esecuzione → controlli → consegna</div>
                    </div>
                    <Badge>Milano–Monza</Badge>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      "Brief & sopralluogo",
                      "Piano lavori + tempi",
                      "Impianti & predisposizioni",
                      "Finiture + collaudo",
                    ].map((t, i) => (
                      <div key={t} className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/30 px-4 py-3">
                        <div className="h-9 w-9 rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/25" />
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-zinc-100">{t}</div>
                          <div className="text-xs text-zinc-500">Step 0{i + 1}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                    <div className="text-sm font-semibold">Se cerchi “il prezzo più basso”…</div>
                    <div className="mt-1 text-sm text-zinc-200">
                      qui probabilmente non siamo il match. Se cerchi <span className="text-white">qualità</span>,
                      <span className="text-white"> organizzazione</span> e <span className="text-white">resa finale</span>, allora sì.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-3xl bg-emerald-400/10 blur-2xl sm:block" />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="mt-14">
        <Container>
          <div className="grid grid-cols-1 gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:grid-cols-3">
            {[{
              t: "Cantiere ordinato",
              d: "Piano chiaro e coordinamento: meno stress, più controllo.",
            }, {
              t: "Qualità verificabile",
              d: "Materiali e lavorazioni curati: ciò che si vede e ciò che non si vede.",
            }, {
              t: "Fino al collaudo",
              d: "Chiudiamo bene: controlli finali e consegna pulita.",
            }].map((x) => (
              <div key={x.t} className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5">
                <div className="text-sm font-semibold">{x.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-zinc-300">{x.d}</div>
              </div>
            ))}
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm text-zinc-400">Servizi</div>
              <h2 className="mt-2 text-balance heading-tight text-2xl font-semibold tracking-tight sm:text-3xl">
                Tutto quello che serve per consegnare bene
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
                Ristrutturazioni, recupero cantieri, interventi su solai e impianti moderni.
                Un unico referente, controllo delle fasi e attenzione ai dettagli.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Impresa edile • costruzioni • ristrutturazioni</Badge>
                <Badge>Milano–Monza</Badge>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 shadow-ring">
              <div className="relative aspect-[16/10]">
                <Image src="/images/process.svg" alt="Processo di lavoro" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                title={s.title}
                desc={s.desc}
                icon={<span className="text-emerald-300"><Icon name={s.icon} /></span>}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How we work (richer) */}
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 shadow-ring">
              <div className="text-sm text-zinc-400">Come lavoriamo</div>
              <h3 className="mt-2 text-balance heading-tight text-2xl font-semibold tracking-tight">
                Processo semplice, ma rigoroso
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Lavoriamo con un metodo pratico: obiettivi, pianificazione, esecuzione e verifica.
                Esperienza con realtà industriali → standard alti e attenzione ai dettagli.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { t: "1) Brief & sopralluogo", d: "Capire bene cosa serve, vincoli, priorità." },
                  { t: "2) Piano di lavoro", d: "Fasi, tempi realistici, materiali e ordini." },
                  { t: "3) Esecuzione ordinata", d: "Coordinamento squadre e controllo qualità." },
                  { t: "4) Collaudo & consegna", d: "Verifiche finali e chiusura lavori." },
                ].map((x) => (
                  <div key={x.t} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
                    <div className="mt-0.5 h-10 w-10 flex-none rounded-2xl bg-emerald-400/10 ring-1 ring-emerald-400/25" />
                    <div>
                      <div className="text-sm font-semibold">{x.t}</div>
                      <div className="mt-1 text-xs leading-relaxed text-zinc-400">{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4 text-sm text-zinc-300">
                <span className="font-semibold text-zinc-100">Obiettivo:</span> un cantiere che scorre, senza improvvisazioni.
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 shadow-ring">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-zinc-400">Portfolio</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">Prima/Dopo (placeholder)</h3>
                </div>
                <Badge>Inserire foto reali</Badge>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Quando ci mandi 10–30 foto + 3 lavori “top” (zona, durata, fascia budget),
                le impaginiamo qui in modo premium per aumentare fiducia e conversioni.
              </p>

              <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/30">
                <div className="relative aspect-[16/10]">
                  <Image src="/images/portfolio-placeholder.svg" alt="Placeholder portfolio" fill className="object-cover" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { t: "Ristrutturazione completa", d: "Casa / appartamento" },
                  { t: "Bagno / cucina", d: "Impianti + finiture" },
                  { t: "Recupero cantiere", d: "Subentro e chiusura" },
                  { t: "Efficientamento", d: "PDC + FV" },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
                    <div className="text-sm font-semibold">{x.t}</div>
                    <div className="mt-1 text-xs text-zinc-400">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Area */}
      <section className="mt-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm text-zinc-400">Area operativa</div>
              <h2 className="mt-2 text-balance heading-tight text-2xl font-semibold tracking-tight sm:text-3xl">
                Milano (Lambrate) ↔ Monza
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
                Ci muoviamo con continuità tra Milano e Monza. Se sei appena fuori zona, scrivici: valutiamo in base a tempi e logistica.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="#preventivo">Verifica se sei in zona</Button>
                <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                  Invia dettagli via email
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 shadow-ring">
              <div className="relative aspect-[16/10]">
                <Image src="/images/area-map.svg" alt="Mappa area operativa" fill className="object-cover" />
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
                <h3 className="mt-2 text-balance heading-tight text-2xl font-semibold tracking-tight">
                  Preventivo veloce (funnel) — senza perdere tempo
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  6 domande, riepilogo automatico e invio richiesta. Poi ti richiamiamo per definire sopralluogo e proposta.
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

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[{
                t: "Tempo stimato",
                d: "~60–90 secondi",
              }, {
                t: "Cosa serve",
                d: "Zona • tipo lavoro • metratura",
              }, {
                t: "Risultato",
                d: "Richiamata + sopralluogo",
              }].map((x) => (
                <div key={x.t} className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5">
                  <div className="text-sm font-semibold">{x.t}</div>
                  <div className="mt-2 text-sm text-zinc-300">{x.d}</div>
                </div>
              ))}
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
              <h2 className="mt-2 text-balance heading-tight text-2xl font-semibold tracking-tight sm:text-3xl">
                Domande frequenti
              </h2>
            </div>
            <Badge>Risposte rapide</Badge>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-ring">
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

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4">
        <Container>
          <div className="flex items-center justify-between gap-3 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-3 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="min-w-0">
              <div className="text-xs text-zinc-400">Preventivo veloce</div>
              <div className="truncate text-sm font-semibold">Rispondi a 6 domande → richiamata rapida</div>
            </div>
            <div className="flex items-center gap-2">
              {WHATSAPP_PHONE ? (
                <Button
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    "Ciao Angelo, vorrei un preventivo. Zona: ___ | Tipo lavoro: ___ | Metratura: ___ | Tempistiche: ___"
                  )}`}
                  variant="secondary"
                >
                  WhatsApp
                </Button>
              ) : null}
              <Button href="#preventivo">Apri funnel</Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Funnel UI */}
      <FunnelDrawer brandName={BRAND} whatsappPhone={WHATSAPP_PHONE || undefined} />
    </main>
  );
}
