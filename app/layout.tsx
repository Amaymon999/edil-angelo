import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angelo Edilizia | Ristrutturazioni Milano–Monza",
  description:
    "Ristrutturazioni interne chiavi in mano, recupero cantieri, solai, pompe di calore e fotovoltaico. Qualità alta, fino al collaudo. Operativi tra Milano (Lambrate) e Monza.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
