## Font loading fix — Option A (Google Fonts link)

### What
Replace self-hosted gstatic @font-face blocks with a Google Fonts CSS link served from the route head, and strengthen CSS fallback stacks for cross-device compatibility.

### Why
The current @font-face declarations each point to a single static .woff2 subset file from fonts.gstatic.com. Those URLs can 404 or serve incomplete character sets on some devices, causing missing glyphs (e.g. é in SAVGLACÉ). Google Fonts’ stylesheet emits per-subset @font-face rules with proper unicode-range coverage, so every character resolves correctly on every device.

### Scope
- `src/styles.css`
- `src/routes/__root.tsx` (head links)

No component class names change — `font-marker`, `font-display`, etc. stay the same.

### Steps

1. **Remove @font-face blocks from `src/styles.css`**
   Delete the three `@font-face` rules for Caveat, Space Grotesk, and Inter.

2. **Add Google Fonts link tags to `src/routes/__root.tsx` head()**
   Insert these inside the `links` array (before the app stylesheet link):
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:wght@400..800&family=Space+Grotesk:wght@400..700&display=swap" rel="stylesheet">
   ```

3. **Update `.font-marker` fallback stack in `src/styles.css`**
   Change to:
   ```css
   .font-marker {
     font-family: "Caveat", "Bradley Hand", "Segoe Script", cursive;
   }
   ```

4. **Update `.font-display` fallback stack in `src/styles.css`**
   Change to:
   ```css
   .font-display {
     font-family: "Space Grotesk", "Inter", system-ui, sans-serif;
   }
   ```

### Out of scope
- Component class names (no changes to how fonts are referenced in JSX)
- `body` font-family declaration in `@layer base` (already correct)
- Any other styles, animations, or markup