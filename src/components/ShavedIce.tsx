type Props = { variant: "strawberry" | "matcha" | "mango" | "blueberry" };

const palettes = {
  strawberry: { ice: "#fbe4ea", syrup: "#e94e6a", accent: "#b8253f", topping: "#7a1029" },
  matcha: { ice: "#e8efd6", syrup: "#7fa346", accent: "#4d6b22", topping: "#2e3f12" },
  mango: { ice: "#fff1c9", syrup: "#f0a92b", accent: "#c87a13", topping: "#6b3a04" },
  blueberry: { ice: "#e2e3f1", syrup: "#5e6db1", accent: "#2e3a7a", topping: "#161f4a" },
};

export function ShavedIce({ variant }: Props) {
  const p = palettes[variant];
  return (
    <svg viewBox="0 0 200 220" className="w-full h-auto" aria-hidden>
      {/* fluffy ice mound */}
      <path
        d={`M40 130
           C 40 80, 70 50, 100 50
           C 130 50, 160 80, 160 130
           Z`}
        fill={p.ice}
      />
      {/* ice texture peaks */}
      <path d="M55 120 Q 65 95 78 118 Q 90 92 100 120 Q 112 90 124 118 Q 137 95 148 120 Z" fill="white" opacity="0.65" />
      <path d="M62 105 Q 72 88 84 108 Q 100 80 116 108 Q 130 86 142 106" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />

      {/* syrup drizzle */}
      <path
        d="M70 80 C 80 95, 75 110, 90 115 C 105 120, 100 100, 115 95 C 130 90, 125 115, 140 120"
        fill="none"
        stroke={p.syrup}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M55 100 C 65 105, 60 125, 75 130"
        fill="none"
        stroke={p.syrup}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* toppings */}
      {variant === "strawberry" && (
        <>
          <circle cx="90" cy="75" r="9" fill={p.accent} />
          <circle cx="115" cy="85" r="7" fill={p.accent} />
          <circle cx="75" cy="95" r="5" fill={p.topping} />
        </>
      )}
      {variant === "matcha" && (
        <>
          <ellipse cx="100" cy="72" rx="22" ry="10" fill={p.accent} opacity="0.7" />
          <circle cx="92" cy="72" r="3" fill={p.topping} />
          <circle cx="106" cy="74" r="3" fill={p.topping} />
        </>
      )}
      {variant === "mango" && (
        <>
          <rect x="82" y="68" width="12" height="18" rx="3" fill={p.accent} transform="rotate(-15 88 77)" />
          <rect x="104" y="72" width="12" height="18" rx="3" fill={p.accent} transform="rotate(20 110 81)" />
          <rect x="93" y="82" width="10" height="14" rx="2" fill={p.topping} opacity="0.6" />
        </>
      )}
      {variant === "blueberry" && (
        <>
          <circle cx="88" cy="78" r="6" fill={p.accent} />
          <circle cx="105" cy="74" r="6" fill={p.accent} />
          <circle cx="118" cy="86" r="5" fill={p.topping} />
          <circle cx="78" cy="92" r="4" fill={p.topping} />
        </>
      )}

      {/* bowl */}
      <path
        d="M28 130 L 172 130 C 168 175, 145 200, 100 200 C 55 200, 32 175, 28 130 Z"
        fill="white"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M40 145 Q 100 158 160 145" fill="none" stroke="#1a1a1a" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
