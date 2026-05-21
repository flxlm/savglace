## Goal
Replace all `blueberry` references with `smarties`. `smarties` already exists in the `Variant` union (currently aliased to the strawberry SVG), so this consolidates it to use the real (renamed) asset.

## Changes

1. **Rename asset** `src/assets/flavor-blueberry.svg` → `src/assets/flavor-smarties.svg`.

2. **`src/components/ShavedIce.tsx`**
   - Replace `import blueberry from "@/assets/flavor-blueberry.svg"` with `import smarties from "@/assets/flavor-smarties.svg"`.
   - Remove `"blueberry"` from the `Variant` union (keep `smarties`).
   - In `sources`: remove the `blueberry` entry and remove the placeholder `smarties: strawberry` alias; set `smarties` to the imported `smarties` asset.

## Out of scope
- `redbean` (still aliased to matcha) — not mentioned in the request, left untouched.
- `src/routes/index.tsx` — already uses `smarties`/`redbean`, no edits needed.
