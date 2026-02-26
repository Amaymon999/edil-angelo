"use client";

import React, { useMemo, useState } from "react";
import { Badge, Button, cn, Divider } from "./ui";

type Lead = {
  intervento?: string;
  zona?: string;
  metratura?: string;
  tempistiche?: string;
  budget?: string;
  nome?: string;
  telefono?: string;
  email?: string;
  note?: string;
  consenso?: boolean;
};

const STEP_TITLES = [
  "Che lavoro ti serve?",
  "Dove si trova l’immobile?",
  "Quanto è grande?",
  "Quando vuoi partire?",
  "Che budget hai in mente?",
  "Dove ti ricontattiamo?",
];

function Progress({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Step {step} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-2 rounded-full bg-emerald-400"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function OptionGrid({
  value,
  options,
  onSelect,
}: {
  value?: string;
  options: string[];
  onSelect: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={cn(
              "rounded-2xl border px-4 py-4 text-left text-sm transition",
              active
                ? "border-emerald-400 bg-emerald-400/10"
                : "border-zinc-800 bg-zinc-950/40 hover:border-zinc-700"
            )}
          >
            <div className="font-medium text-zinc-100">{opt}</div>
            <div className="mt-1 text-xs text-zinc-400">
              {active ? "Selezionato" : "Tocca per selezionare"}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-zinc-200">{label}</div>
      <input
        type={type}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/70"
      />
    </label>
  );
}

export function FunnelDrawer({
  brandName,
  whatsappPhone,
}: {
  brandName: string;
  whatsappPhone?: string;
}) {
  const totalSteps = 6;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [lead, setLead] = useState<Lead>({ consenso: true });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const canNext = useMemo(() => {
    if (step === 1) return !!lead.intervento;
    if (step === 2) return !!lead.zona;
    if (step === 3) return !!lead.metratura;
    if (step === 4) return !!lead.tempistiche;
    if (step === 5) return !!lead.budget;
    if (step === 6) return !!lead.nome && !!lead.telefono && !!lead.consenso;
    return false;
  }, [lead, step]);

  const score = useMemo(() => {
    // Priorità leggera per capire "lead caldo" senza essere invadenti
    let s = 0;
    if (lead.intervento) s += 15;
    if (lead.zona) s += 15;
    if (lead.metratura) s += 10;
    if (lead.tempistiche)
      s += lead.tempistiche.toLowerCase().includes("urg") ? 20 : 10;
    if (lead.budget) {
      const b = lead.budget.toLowerCase();
      if (b.includes("oltre") || b.includes("20")) s += 25;
      else if (b.includes("10")) s += 18;
      else s += 10;
    }
    return Math.min(100, s);
  }, [lead]);

  const heatLabel = useMemo(() => {
    if (score >= 70) return "Alta priorità";
    if (score >= 45) return "Buona";
    return "Standard";
  }, [score]);

  function reset() {
    setStep(1);
    setLead({ consenso: true });
    setStatus("idle");
  }

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          leadScore: score,
          leadPriority: heatLabel,
          source: "angelo-edilizia-funnel",
        }),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const whatsappHref = useMemo(() => {
    if (!whatsappPhone) return undefined;
    const msg = encodeURIComponent(
      `Ciao ${brandName}! Vorrei un preventivo.\n` +
        `Intervento: ${lead.intervento ?? "-"}\n` +
        `Zona: ${lead.zona ?? "-"}\n` +
        `Metratura: ${lead.metratura ?? "-"}\n` +
        `Tempistiche: ${lead.tempistiche ?? "-"}\n` +
        `Budget: ${lead.budget ?? "-"}`
    );
    return `https://wa.me/${whatsappPhone}?text=${msg}`;
  }, [brandName, lead, whatsappPhone]);

  return (
    <>
      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-4 z-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-400/25" />
                <div>
                  <div className="text-sm font-semibold">
                    Preventivo veloce in 60 secondi
                  </div>
                  <div className="text-xs text-zinc-400">
                    Rispondi a 6 domande → ti richiamiamo noi.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {whatsappHref ? (
                  <Button href={whatsappHref} variant="secondary">
                    WhatsApp
                  </Button>
                ) : null}
                <Button
                  onClick={() => {
                    setOpen(true);
                    setStatus("idle");
                  }}
                >
                  Inizia ora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {open ? (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => {
              setOpen(false);
              if (status === "sent") reset();
            }}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-zinc-800 bg-zinc-950/95 p-6 shadow-soft backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Preventivo rapido</div>
                <div className="mt-1 text-sm text-zinc-400">
                  {STEP_TITLES[step - 1]}
                </div>
              </div>
              <button
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm text-zinc-200 hover:border-zinc-700"
                onClick={() => {
                  setOpen(false);
                  if (status === "sent") reset();
                }}
              >
                Chiudi
              </button>
            </div>

            <div className="mt-4">
              <Progress step={step} total={totalSteps} />
              <div className="mt-3 flex items-center gap-2">
                <Badge>
                  Priorità: <span className="ml-1 font-semibold">{heatLabel}</span>
                </Badge>
                <Badge>
                  Score: <span className="ml-1 font-semibold">{score}/100</span>
                </Badge>
              </div>
            </div>

            <Divider />

            <div className="mt-5 space-y-5">
              {step === 1 ? (
                <OptionGrid
                  value={lead.intervento}
                  options={[
                    "Ristrutturazione completa",
                    "Bagno/Cucina",
                    "Recupero cantiere",
                    "Solai / ripristini",
                    "Pompa di calore",
                    "Fotovoltaico",
                  ]}
                  onSelect={(v) => setLead((p) => ({ ...p, intervento: v }))}
                />
              ) : null}

              {step === 2 ? (
                <OptionGrid
                  value={lead.zona}
                  options={[
                    "Milano (Lambrate)",
                    "Milano (altre zone)",
                    "Monza",
                    "Brianza",
                    "Altro (da valutare)",
                  ]}
                  onSelect={(v) => setLead((p) => ({ ...p, zona: v }))}
                />
              ) : null}

              {step === 3 ? (
                <OptionGrid
                  value={lead.metratura}
                  options={["< 50 mq", "50–100 mq", "100–150 mq", "> 150 mq"]}
                  onSelect={(v) => setLead((p) => ({ ...p, metratura: v }))}
                />
              ) : null}

              {step === 4 ? (
                <OptionGrid
                  value={lead.tempistiche}
                  options={[
                    "Urgente (0–30 giorni)",
                    "1–3 mesi",
                    "3–6 mesi",
                    "Sto valutando",
                  ]}
                  onSelect={(v) => setLead((p) => ({ ...p, tempistiche: v }))}
                />
              ) : null}

              {step === 5 ? (
                <OptionGrid
                  value={lead.budget}
                  options={["< 10.000€", "10.000–20.000€", "Oltre 20.000€", "Da definire"]}
                  onSelect={(v) => setLead((p) => ({ ...p, budget: v }))}
                />
              ) : null}

              {step === 6 ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
                    <div className="text-sm font-semibold">Riepilogo</div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-zinc-300">
                      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2">
                        <div className="text-zinc-400">Intervento</div>
                        <div className="mt-1 font-medium">{lead.intervento}</div>
                      </div>
                      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2">
                        <div className="text-zinc-400">Zona</div>
                        <div className="mt-1 font-medium">{lead.zona}</div>
                      </div>
                      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2">
                        <div className="text-zinc-400">Metratura</div>
                        <div className="mt-1 font-medium">{lead.metratura}</div>
                      </div>
                      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2">
                        <div className="text-zinc-400">Tempistiche</div>
                        <div className="mt-1 font-medium">{lead.tempistiche}</div>
                      </div>
                    </div>
                  </div>

                  <Input
                    label="Nome e cognome"
                    value={lead.nome}
                    onChange={(v) => setLead((p) => ({ ...p, nome: v }))}
                    placeholder="Es. Mario Rossi"
                  />
                  <Input
                    label="Telefono (WhatsApp)"
                    value={lead.telefono}
                    onChange={(v) => setLead((p) => ({ ...p, telefono: v }))}
                    placeholder="Es. 333 123 4567"
                    type="tel"
                  />
                  <Input
                    label="Email (facoltativa)"
                    value={lead.email}
                    onChange={(v) => setLead((p) => ({ ...p, email: v }))}
                    placeholder="Es. nome@email.it"
                    type="email"
                  />
                  <label className="block">
                    <div className="mb-2 text-sm text-zinc-200">
                      Note (facoltative)
                    </div>
                    <textarea
                      value={lead.note ?? ""}
                      onChange={(e) =>
                        setLead((p) => ({ ...p, note: e.target.value }))
                      }
                      placeholder="Es. devo rifare impianti, ho già progetto, ecc."
                      className="min-h-[110px] w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-400/70"
                    />
                  </label>

                  <label className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4">
                    <input
                      type="checkbox"
                      checked={lead.consenso ?? false}
                      onChange={(e) =>
                        setLead((p) => ({ ...p, consenso: e.target.checked }))
                      }
                      className="mt-1 h-4 w-4 accent-emerald-400"
                    />
                    <div className="text-xs text-zinc-300">
                      Acconsento al trattamento dei dati per essere ricontattato.
                    </div>
                  </label>
                </div>
              ) : null}

              <Divider />

              {status === "sent" ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                  <div className="text-sm font-semibold">Richiesta inviata ✅</div>
                  <div className="mt-1 text-xs text-zinc-200">
                    Ti ricontattiamo appena possibile. Se preferisci, puoi scriverci su WhatsApp.
                  </div>
                  <div className="mt-3 flex gap-2">
                    {whatsappHref ? (
                      <Button href={whatsappHref} variant="primary">
                        Apri WhatsApp
                      </Button>
                    ) : null}
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setOpen(false);
                        reset();
                      }}
                    >
                      Chiudi
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (step === 1) {
                        setOpen(false);
                        return;
                      }
                      setStep((s) => Math.max(1, s - 1));
                    }}
                  >
                    Indietro
                  </Button>

                  <div className="flex items-center gap-2">
                    {step < totalSteps ? (
                      <Button
                        onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
                        disabled={!canNext}
                      >
                        Avanti
                      </Button>
                    ) : (
                      <Button
                        onClick={submit}
                        disabled={!canNext || status === "sending"}
                      >
                        {status === "sending" ? "Invio…" : "Invia richiesta"}
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {status === "error" ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-zinc-200">
                  Errore nell’invio. Riprova o contattaci via WhatsApp/telefono.
                </div>
              ) : null}

              <div className="text-xs text-zinc-500">
                Inviando, riceverai un contatto per un primo inquadramento e, se utile, sopralluogo.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
