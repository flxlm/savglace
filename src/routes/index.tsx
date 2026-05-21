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
    desc: "Ripe strawberries, condensed milk, fresh cream.",
  },
  {
    num: "02",
    variant: "matcha" as const,
    name: "Matcha Cloud",
    desc: "Uji matcha, sweet red bean, toasted mochi.",
  },
  {
    num: "03",
    variant: "mango" as const,
    name: "Mango Sun",
    desc: "Alphonso mango, passionfruit syrup, lime zest.",
  },
  {
    num: "04",
    variant: "blueberry" as const,
    name: "Blueberry Frost",
    desc: "Wild blueberries, lemon curd, vanilla bean.",
  },
];

const RED = "var(--accent-rose)";

// little hand-drawn doodles
type DoodleProps = { className?: string; style?: React.CSSProperties };

const Smiley = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="50" cy="50" r="42" />
    <circle cx="36" cy="42" r="3" fill="currentColor" />
    <circle cx="64" cy="42" r="3" fill="currentColor" />
    <path d="M32 62 Q50 78 68 62" />
  </svg>
);

const TicTac = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M35 8 V92 M65 8 V92 M8 35 H92 M8 65 H92" />
    <circle cx="22" cy="22" r="9" />
    <path d="M44 14 L56 30 M56 14 L44 30" />
    <circle cx="78" cy="50" r="9" />
    <path d="M14 74 L30 86 M30 74 L14 86" />
    <circle cx="50" cy="78" r="9" />
  </svg>
);

const Squiggle = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 120 30"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M4 15 Q18 2 32 15 T60 15 T88 15 T116 15" />
  </svg>
);

const Star = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M30 6 L36 24 L54 26 L40 38 L44 56 L30 46 L16 56 L20 38 L6 26 L24 24 Z" />
  </svg>
);

const Arrow = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 120 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 40 Q40 8 80 30 T112 26" />
    <path d="M102 18 L112 26 L104 36" />
  </svg>
);

const CheckLabel = ({
  label,
  checked = true,
  className = "",
  style,
}: {
  label: string;
  checked?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`absolute flex items-center gap-2 font-marker text-2xl md:text-3xl ${className}`}
    style={{ color: RED, ...style }}
  >
    <span
      className={`inline-flex h-5 w-5 items-center justify-center border-2`}
      style={{ borderColor: RED, backgroundColor: checked ? RED : "transparent" }}
    >
      {checked && <span className="text-white text-xs leading-none">✓</span>}
    </span>
    <span className="-rotate-2">{label}</span>
  </div>
);

function Index() {
  const marqueeItems = ["Shaved Ice", "Est. 2026", "Open during the summer", "1–7pm", "780 Brewster Avenue"];
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* email tag, top-left */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-2 text-sm">
        <div
          className="h-8 w-8 border-2 border-foreground/80 flex items-center justify-center text-[10px] font-marker"
          style={{ color: RED }}
        >
          ✉
        </div>
        <span className="underline underline-offset-2">hello@jogiyo.cafe</span>
      </div>

      {/* scattered top doodles + checkboxes (desktop only — too crowded on mobile) */}
      <CheckLabel label="COLD" className="hidden md:flex top-20 left-[24%] rotate-[-4deg]" />
      <CheckLabel label="FRUITY" className="hidden md:flex top-28 right-[18%] rotate-[3deg]" />
      <CheckLabel label="SWEET" className="hidden md:flex top-[210px] left-[32%] rotate-[-2deg]" />
      <CheckLabel label="HOT" checked={false} className="hidden md:flex top-[230px] right-[10%] rotate-[2deg]" />

      <Squiggle className="absolute top-12 left-[8%] w-24 text-foreground rotate-[-8deg] hidden md:block" />
      <Star className="absolute top-[170px] right-[34%] w-10 hidden md:block" style={{ color: RED }} />
      <TicTac className="absolute top-[300px] right-[6%] w-20 text-foreground hidden md:block" />

      {/* HERO */}
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <div className="relative inline-block">
            <img src={logo} alt="SAVGLACÉ mark" className="mx-auto w-40 md:w-48 [&_path]:fill-foreground" />
            <Arrow className="absolute -right-28 top-6 w-28 hidden md:block" style={{ color: RED }} />
            <span
              className="absolute -right-32 -top-2 font-marker text-xl rotate-[8deg] hidden md:inline"
              style={{ color: RED }}
            >
              that's us!
            </span>
          </div>

          <h1 className="mt-8 font-display text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.05] md:leading-[0.95]">
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">SAVGLACÉ</span>
            <span style={{ color: RED }}>.</span> is a{" "}
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">tiny</span> shaved
            <br />
            ice shop. We serve{" "}
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">four</span> flavors that{" "}
            <span className="font-marker text-4xl sm:text-6xl md:text-8xl align-middle" style={{ color: RED }}>
              melt
            </span>{" "}
            slowly.
          </h1>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee relative border-y-2 border-foreground bg-background py-5 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
          {loop.map((item, i) => (
            <span key={i} className="mx-8 flex items-center gap-12 shrink-0">
              {item}
              <span style={{ color: RED }} className="font-marker text-5xl md:text-7xl">
                ·
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* FLAVORS */}
      <section className="relative px-8 pt-20 pb-24">
        <Smiley className="absolute -top-2 left-[6%] w-24 text-foreground" />
        <Squiggle className="absolute top-10 right-[8%] w-28 rotate-[6deg]" style={{ color: RED }} />

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-baseline gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Menu</h2>
            <span className="font-marker text-3xl rotate-[-4deg]" style={{ color: RED }}>
              ← pick one!
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
            {flavors.map((f, i) => (
              <article key={f.num} className={`relative space-y-3 ${i % 2 ? "md:mt-10" : ""}`}>
                <p className="font-marker text-2xl" style={{ color: RED }}>
                  {f.num}.
                </p>
                <div className="aspect-square">
                  <ShavedIce variant={f.variant} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">{f.name}</p>
                  <p className="text-xs text-foreground/70 mt-2">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIMENTAL ITEMS */}
      <section className="relative px-8 pt-16 pb-24">
        <Star className="absolute top-4 right-[12%] w-10 hidden md:block" style={{ color: RED }} />
        <Squiggle className="absolute top-20 left-[6%] w-32 -rotate-[8deg] hidden md:block" style={{ color: RED }} />
        <Smiley className="absolute bottom-12 right-[8%] w-20 hidden md:block" style={{ color: RED }} />

        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex items-baseline gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Experimental Items</h2>
            <span className="font-marker text-3xl rotate-[3deg] hidden sm:inline-block" style={{ color: RED }}>
              limited run
            </span>
          </div>

          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {[
              {
                num: "A",
                name: "Shaved Ice Affogato",
                desc: "Espresso poured over vanilla milk shaved ice. Hot meets cold in one bowl.",
              },
              {
                num: "B",
                name: "Matcha Latte Float",
                desc: "Ceremonial matcha, oat milk, and a scoop of red bean shaved ice.",
              },
              {
                num: "C",
                name: "Yuzu Ginger Shave",
                desc: "Yuzu curd, candied ginger, honey drizzle. Sharp, bright, refreshing.",
              },
            ].map((item, i) => (
              <article
                key={item.num}
                className={`relative border-2 border-dashed border-foreground/50 p-6 ${i === 1 ? "md:mt-8" : ""}`}
              >
                <p className="font-marker text-2xl absolute -top-4 left-4 px-2 bg-background" style={{ color: RED }}>
                  {item.num}.
                </p>
                <p className="font-display text-xl md:text-2xl font-bold mt-2">{item.name}</p>
                <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT WIDGETS */}
      <section className="relative px-8 pb-32">
        <TicTac className="absolute right-[8%] -top-4 w-24 text-foreground hidden md:block" />
        <Star className="absolute left-[12%] top-10 w-8 hidden md:block" style={{ color: RED }} />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm mb-3">I want a flavor on the menu:</p>
          <div className="mx-auto flex max-w-md flex-col sm:flex-row items-stretch sm:items-center gap-2 border-2 border-dashed border-foreground/60 p-3">
            <input
              type="text"
              placeholder="watermelon-basil…"
              className="flex-1 min-w-0 bg-transparent font-marker text-2xl outline-none placeholder:text-foreground/30"
            />
            <button
              className="px-4 py-1.5 text-sm font-medium text-white shrink-0"
              style={{ backgroundColor: "#3b82f6" }}
              type="button"
            >
              Send ✉
            </button>
          </div>

          <p className="mt-10 font-marker text-3xl rotate-[-2deg] inline-block" style={{ color: RED }}>
            see you at the shop ☺
          </p>
        </div>

        <Arrow className="absolute bottom-10 left-[10%] w-24 rotate-[170deg] hidden md:block" style={{ color: RED }} />
        <Smiley className="absolute bottom-6 right-[10%] w-16 hidden md:block" style={{ color: RED }} />
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-foreground px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest">
        <p>© 2026 SAVGLACÉ — a house of ice</p>
        <p>780 Brewster Ave · Walk-in only</p>
        <p className="font-marker text-xl normal-case tracking-normal" style={{ color: RED }}>
          made with cold hands
        </p>
      </footer>
    </main>
  );
}
