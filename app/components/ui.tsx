import React from "react";

export function cn(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200 shadow-ring">
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50",
    disabled && "opacity-50 cursor-not-allowed",
    variant === "primary" && "bg-emerald-400 text-zinc-950 hover:bg-emerald-300",
    variant === "secondary" &&
      "border border-zinc-800 bg-zinc-950/40 text-zinc-100 hover:border-zinc-700",
    variant === "ghost" && "text-zinc-100 hover:bg-white/5"
  );

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-ring">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 rounded-xl border border-zinc-800 bg-zinc-950/50 p-2">
            {icon}
          </div>
        ) : null}
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />;
}

export function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 shadow-ring">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{label}</div>
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  // Mark semplice ispirato al “flusso”/S. Colore gestito via currentColor.
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-7 w-7", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 16c0-3.314 2.686-6 6-6h28v8H22v6h26c3.314 0 6 2.686 6 6v6c0 3.314-2.686 6-6 6H22v6h26v8H20c-3.314 0-6-2.686-6-6v-6c0-3.314 2.686-6 6-6h26v-6H20c-3.314 0-6-2.686-6-6v-6z"
        fill="currentColor"
      />
    </svg>
  );
}
