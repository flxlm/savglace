import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { ShavedIce } from "@/components/ShavedIce";

export const Route = createFileRoute("/")({
  component: Index,
});

const flavors = [
  {
    num: "01",
    variant: "strawberry" as const,
    name: "Strawberry Snow",
    kr: "딸기 빙수",
    desc: "Ripe strawberries, condensed milk, fresh cream.",
  },
  {
    num: "02",
    variant: "matcha" as const,
    name: "Matcha Cloud",
    kr: "말차 빙수",
    desc: "Uji matcha, sweet red bean, toasted mochi.",
  },
  {
    num: "03",
    variant: "mango" as const,
    name: "Mango Sun",
    kr: "망고 빙수",
    desc: "Alphonso mango, passionfruit syrup, lime zest.",
  },
  {
    num: "04",
    variant: "blueberry" as const,
    name: "Blueberry Frost",
    kr: "블루베리 빙수",
    desc: "Wild blueberries, lemon curd, vanilla bean.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif">
      <div className="mx-auto max-w-5xl px-8 py-12 md:px-16 md:py-20">
        {/* Top bar */}
        <header className="flex items-start justify-between gap-8 border-b border-foreground/20 pb-6 text-[11px] uppercase tracking-[0.18em]">
          <div className="space-y-1">
            <p>Shaved Ice · Est. 2026</p>
            <p className="text-foreground/60">Open Wed–Sun · 12–9pm</p>
          </div>
          <div className="text-right space-y-1">
            <p>14 Linden Ave</p>
            <p className="text-foreground/60">+1 (555) 014–2210</p>
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-12 gap-6 pt-14 pb-20">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-[5rem] leading-[0.9] md:text-[8rem] tracking-tight font-medium">
              저기요<span className="text-[color:var(--accent-rose)]">.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
              Four flavors. Hand-shaved ice, slow syrups, quiet rooms.
              A first season menu.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:justify-end items-start">
            <img src={logo} alt="House mark" className="w-44 md:w-56 [&_path]:fill-foreground" />
          </div>
        </section>

        {/* Flavor grid */}
        <section className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4 md:gap-x-10">
          {flavors.map((f) => (
            <article key={f.num} className="space-y-3">
              <p className="text-xs tracking-[0.2em] text-foreground/60">{f.num}</p>
              <div className="aspect-square">
                <ShavedIce variant={f.variant} />
              </div>
              <div>
                <p className="text-[15px] leading-tight">{f.name}</p>
                <p className="text-xs text-foreground/50 mt-0.5">{f.kr}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Menu list */}
        <section className="mt-24 grid grid-cols-12 gap-6 border-t border-foreground/20 pt-10">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-3xl tracking-tight">Menu</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/50">
              Spring / Summer
            </p>
          </div>
          <ol className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {flavors.map((f) => (
              <li key={f.num} className="flex gap-4 border-b border-foreground/10 pb-2">
                <span className="text-foreground/50 tabular-nums">{f.num}</span>
                <div className="flex-1">
                  <p>{f.name}</p>
                  <p className="text-xs text-foreground/55 mt-0.5">{f.desc}</p>
                </div>
                <span className="text-foreground/60 tabular-nums">9</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-wrap items-end justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
          <p>© 2026 저기요 — A house of ice.</p>
          <p>Walk-in only · Cash & card</p>
        </footer>
      </div>
    </main>
  );
}
