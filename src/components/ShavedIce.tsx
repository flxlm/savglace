import strawberry from "@/assets/flavor-strawberry.svg";
import matcha from "@/assets/flavor-matcha.svg";
import mango from "@/assets/flavor-mango.svg";
import blueberry from "@/assets/flavor-blueberry.svg";

type Variant = "strawberry" | "matcha" | "mango" | "blueberry" | "redbean" | "smarties";
type Props = { variant: Variant };

const sources: Record<Variant, string> = {
  strawberry,
  matcha,
  mango,
  blueberry,
  redbean: matcha,
  smarties: strawberry,
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
