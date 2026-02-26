# Angelo Edilizia — Funnel Website (Next.js + Tailwind)

Sito **marketing-first** con **funnel multi-step** (drawer) + CTA WhatsApp.
Pronto per essere messo su GitHub e pubblicato su **Vercel**.

## Quick start

```bash
npm i
npm run dev
```
Poi apri `http://localhost:3000`.

## Deploy su Vercel (2 minuti)

1. Carica questa cartella su GitHub
2. Su Vercel → **New Project** → importa il repo
3. Deploy

## Personalizzazioni rapide

- **Email di contatto**: `app/page.tsx` → `CONTACT_EMAIL`
- **WhatsApp**: `app/page.tsx` → `WHATSAPP_PHONE` (formato internazionale senza `+`)
- **Servizi / testi**: `SERVICES`, `FAQS` in `app/page.tsx`

## Lead (funnel)

Le richieste vengono inviate a `POST /api/lead` e loggate nei Vercel Logs.
Se vuoi invio automatico via email/CRM (Resend, Make, Zapier), dimmi quale usi e lo collego.
