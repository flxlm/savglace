import strawberry from "@/assets/flavor-strawberry.svg";
import matcha from "@/assets/flavor-matcha.svg";
import mango from "@/assets/flavor-mango.svg";
import smarties from "@/assets/flavor-smarties.svg";

type Variant = "strawberry" | "matcha" | "mango" | "smarties" | "redbean";
type Props = { variant: Variant };

const sources: Record<Variant, string> = {
  strawberry,
  matcha,
  mango,
  smarties,
  redbean: matcha,
};

export function ShavedIce({ variant }: Props) {
  return (
    <img
      src={sources[variant]}
      alt={`${variant} shaved ice`}
      className="w-full h-full object-contain"
    />
  );
}
