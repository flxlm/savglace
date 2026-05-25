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
    name: "Red Bean Matcha",
    desc: "Homemade motchi, Anko, and our matcha-flavoured shaved ice.",
  },
  {
    num: "02",
    variant: "matcha" as const,
    name: "Mango Snow",
    desc: "Mango, sweetened condensed milk, and a sprig of mint.",
  },
  {
    num: "03",
    variant: "mango" as const,
    name: "Matcha Strawberry",
    desc: "Our famous strawberry matcha as a shaved ice.",
  },
  {
    num: "04",
    variant: "smarties" as const,
    name: "SavFlurry",
    desc: "Smarties and condensed milk on our original vanilla shaved ice.",
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

const Spiral = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M30 30 m0 0 a4 4 0 1 1 4 -4 a8 8 0 1 1 -12 4 a12 12 0 1 1 20 -8 a16 16 0 1 1 -26 10" />
  </svg>
);

const Sparkle = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <path d="M30 6 L34 26 L54 30 L34 34 L30 54 L26 34 L6 30 L26 26 Z" />
  </svg>
);

const Heart = ({ className = "", style }: DoodleProps) => (
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
    <path d="M30 50 C10 36 8 18 22 14 C28 12 30 18 30 22 C30 18 32 12 38 14 C52 18 50 36 30 50 Z" />
  </svg>
);

const Cloud = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 44 Q8 44 10 32 Q12 22 24 24 Q26 12 40 14 Q52 8 58 20 Q72 18 74 30 Q86 30 84 44 Z" />
  </svg>
);

const Sun = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <circle cx="30" cy="30" r="10" />
    <path d="M30 6 V14 M30 46 V54 M6 30 H14 M46 30 H54 M13 13 L18 18 M42 42 L47 47 M47 13 L42 18 M13 47 L18 42" />
  </svg>
);

const Drop = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 40 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 C20 6 6 26 6 38 A14 14 0 0 0 34 38 C34 26 20 6 20 6 Z" />
  </svg>
);

const Lightning = ({ className = "", style }: DoodleProps) => (
  <svg
    viewBox="0 0 40 60"
    className={className}
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M24 4 L8 32 L18 32 L14 56 L32 26 L22 26 Z" />
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
    <path d="M8 40 Q40 8 80 30 T112 25" />
    <path d="M101 36 L112 25 L122 36" />
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
  const marqueeItems = ["Shaved Ice", "Est. 2026", "ONLY Open during the summer", "1–7pm", "780 Brewster Avenue"];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-8 pt-6 text-xs uppercase tracking-widest">
        <p>est. 2026 · walk-in only</p>
        <a href="mailto:hello@savglace.com?subject=Hello&body=Hi there!" className="underline underline-offset-2">
          hello@savglace.com
        </a>
      </div>

      {/* scattered top doodles + checkboxes (desktop) */}
      <CheckLabel label="COLD" className="hidden md:flex top-20 left-[24%] rotate-[-4deg]" />
      <CheckLabel label="FRUITY" className="hidden md:flex top-16 right-[6%] rotate-[3deg]" />
      <CheckLabel label="SWEET" className="hidden md:flex top-[210px] left-[32%] rotate-[-2deg]" />
      <CheckLabel label="HOT" checked={false} className="hidden md:flex top-[230px] right-[10%] rotate-[2deg]" />

      <Squiggle className="absolute top-12 left-[8%] w-24 text-foreground rotate-[-8deg] hidden md:block" />
      <Star className="absolute top-[260px] left-[14%] w-10 hidden md:block" style={{ color: RED }} />
      <TicTac className="absolute top-[300px] right-[6%] w-20 text-foreground hidden md:block" />
      <Sparkle className="absolute top-[90px] left-[44%] w-8 hidden md:block" style={{ color: RED }} />
      <Sun className="absolute top-[180px] right-[22%] w-12 text-foreground hidden md:block rotate-[12deg]" />
      <Spiral className="absolute top-[340px] left-[5%] w-14 hidden md:block" style={{ color: RED }} />
      <Drop className="absolute top-[120px] left-[18%] w-8 hidden md:block rotate-[15deg]" style={{ color: RED }} />

      {/* scattered top doodles (mobile only — fewer, edge-hugging) */}
      <CheckLabel label="COLD" className="flex md:hidden top-[70px] left-3 rotate-[-4deg] text-xl" />
      <CheckLabel label="SWEET" className="flex md:hidden top-[100px] right-3 rotate-[3deg] text-xl" />
      <Star className="absolute md:hidden top-[60px] right-[42%] w-6" style={{ color: RED }} />
      <Sparkle className="absolute md:hidden top-[130px] left-[42%] w-5" style={{ color: RED }} />
      <Squiggle className="absolute md:hidden top-[150px] right-2 w-14 rotate-[-6deg] text-foreground" />

      {/* HERO */}
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <div className="relative mx-auto max-w-3xl flex items-center justify-center">
            <img src={logo} alt="SAVGLACÉ mark" className="w-40 md:w-48 [&_path]:fill-foreground" />

            {/* Arrow + label, absolutely placed to the right of the centered logo */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 ml-28 lg:ml-36 items-center gap-1 pointer-events-none">
              <svg
                className="w-28 lg:w-36 h-14"
                viewBox="0 0 300 120"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                stroke={RED}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 280 80 Q 200 10, 62 52 L 78 42 M 62 52 L 72 64" />
              </svg>
              <span
                className="font-marker text-2xl md:text-3xl rotate-[-6deg] whitespace-nowrap"
                style={{ color: RED }}
              >
                that's us!
              </span>
            </div>
          </div>

          <h1 className="mt-8 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-[0.95] text-balance">
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">SAVGLACÉ</span>
            <span style={{ color: RED }}>.</span> is a{" "}
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">pop-up</span> shaved
            ice shop. We serve{" "}
            <span className="inline-block border border-dashed border-foreground/40 px-2 py-1">original</span> flavors
            that{" "}
            <span className="font-marker text-4xl sm:text-5xl md:text-7xl lg:text-8xl align-middle" style={{ color: RED }}>
              cools
            </span>{" "}
            you nicely.
          </h1>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee relative border-y-2 border-foreground bg-background py-5 overflow-hidden">
        <div className="marquee-track inline-flex whitespace-nowrap font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? "true" : undefined}>
              {marqueeItems.map((item, i) => (
                <span key={i} className="mx-8 flex items-center gap-12 shrink-0">
                  {item}
                  <span style={{ color: RED }} className="font-marker text-5xl md:text-7xl">
                    ·
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FLAVORS */}
      <section className="relative px-8 pt-20 pb-24">
        <Smiley className="absolute -top-2 left-[6%] w-24 text-foreground" />
        <Squiggle className="absolute top-10 right-[8%] w-28 rotate-[6deg]" style={{ color: RED }} />
        <Cloud className="absolute top-6 left-[40%] w-20 text-foreground hidden md:block" />
        <Heart className="absolute bottom-12 left-[3%] w-10 hidden md:block rotate-[-10deg]" style={{ color: RED }} />
        <Lightning className="absolute top-24 right-[36%] w-8 hidden md:block" style={{ color: RED }} />

        {/* mobile-only doodles */}
        <Heart className="absolute md:hidden top-8 right-2 w-7 rotate-[8deg]" style={{ color: RED }} />
        <Sparkle className="absolute md:hidden bottom-6 right-3 w-6" style={{ color: RED }} />
        <Spiral className="absolute md:hidden bottom-10 left-2 w-8 text-foreground" />

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

      {/* CONTACT WIDGETS */}
      <section className="relative px-8 pb-12">
        <TicTac className="absolute right-[8%] -top-4 w-24 text-foreground hidden md:block" />
        <Star className="absolute left-[12%] top-10 w-8 hidden md:block" style={{ color: RED }} />

        {/* mobile-only */}
        <Star className="absolute md:hidden top-2 right-3 w-6" style={{ color: RED }} />
        <Squiggle className="absolute md:hidden bottom-4 left-2 w-16 -rotate-6 text-foreground" />

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
        </div>
      </section>

      {/* EXPERIMENTAL ITEMS */}
      <section className="relative px-8 pt-16 pb-24">
        <Star className="absolute top-4 right-[12%] w-10 hidden md:block" style={{ color: RED }} />
        <Squiggle className="absolute top-20 left-[6%] w-32 -rotate-[8deg] hidden md:block" style={{ color: RED }} />
        <Smiley className="absolute bottom-12 right-[8%] w-20 hidden md:block" style={{ color: RED }} />
        <Spiral className="absolute top-8 left-[40%] w-12 text-foreground hidden md:block" />
        <Sparkle className="absolute bottom-20 left-[20%] w-10 hidden md:block" style={{ color: RED }} />
        <Sun className="absolute bottom-32 right-[30%] w-10 hidden md:block" style={{ color: RED }} />

        {/* mobile-only */}
        <Star className="absolute md:hidden top-4 right-3 w-6" style={{ color: RED }} />
        <Sparkle className="absolute md:hidden top-6 left-3 w-6" style={{ color: RED }} />
        <Smiley className="absolute md:hidden bottom-6 right-2 w-10" style={{ color: RED }} />
        <Spiral className="absolute md:hidden bottom-8 left-2 w-8 text-foreground" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex items-baseline gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Experimental Items</h2>
            <span className="font-marker text-3xl rotate-[3deg] hidden sm:inline-block" style={{ color: RED }}>
              limited run, maybe?
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 items-stretch">
            {[
              {
                num: "A",
                name: "Shaved Ice Affogato",
                desc: "Espresso poured over vanilla milk shaved ice. Hot meets cold in one bowl.",
              },
              {
                num: "B",
                name: "Crush Float",
                desc: "Shaved Creamsicle? Cream-shaved-sicle? I don't know butyou get orange Crush and vanilla shaved ice so it's bound to be good!",
              },
              {
                num: "C",
                name: "Vanilla",
                desc: "Sometimes the unflavoured option is an experiment. Will the people like the base?? Be our test subject.",
              },
            ].map((item) => (
              <article
                key={item.num}
                className="relative h-full min-h-[180px] border-2 border-dashed border-foreground/50 p-6 flex flex-col"
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

      {/* CLOSING NOTE */}
      <section className="relative px-8 pb-20 text-center">
        <p className="font-marker text-3xl rotate-[-2deg] inline-block" style={{ color: RED }}>
          see you soon! ☺
        </p>
        <Arrow className="absolute bottom-10 left-[10%] w-24 rotate-[170deg] hidden md:block" style={{ color: RED }} />
        <Smiley className="absolute bottom-6 right-[10%] w-16 hidden md:block" style={{ color: RED }} />
        <Heart className="absolute top-2 left-[30%] w-8 hidden md:block" style={{ color: RED }} />
        <Cloud className="absolute top-0 right-[28%] w-16 text-foreground hidden md:block" />
        <Drop className="absolute bottom-20 right-[20%] w-6 hidden md:block rotate-[-12deg]" style={{ color: RED }} />

        {/* mobile-only */}
        <Heart className="absolute md:hidden top-0 left-3 w-6" style={{ color: RED }} />
        <Cloud className="absolute md:hidden top-0 right-3 w-12 text-foreground" />
        <Smiley className="absolute md:hidden bottom-2 right-3 w-10" style={{ color: RED }} />
        <Drop className="absolute md:hidden bottom-4 left-3 w-5 rotate-[-12deg]" style={{ color: RED }} />
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
