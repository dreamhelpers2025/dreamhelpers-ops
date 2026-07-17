# Soil Detective — Brand Spec for Rebuild

**Status:** Brand alignment doc, drives changes to the soildetective-site rebuild
**Owner:** Both founders
**Sources:** Live CSS extracted from https://www.soildetective.org/ (Squarespace site) on 2026-06-25. Rosalinda's stated preferences from discovery meeting on 2026-06-24 (captured in [01-soil-detective-discovery-notes.md](01-soil-detective-discovery-notes.md)).
**Purpose:** Specify the exact font + color targets so the rebuild at https://dreamhelpers2025.github.io/soildetective-site/ visually aligns with the original brand Rosalinda already established. This doc is a spec, not a change log — actual rebuild edits happen in the soildetective-site repo.

## Glossary (read once, then skim)

- **Hex code** — six-character color code like `#B77AFF`. The standard way colors get specified in web design.
- **HSL** — Hue, Saturation, Lightness. Another way to describe a color. The original site stores its colors as HSL.
- **Adobe Fonts** — also called Typekit. A library of professional fonts available with an Adobe Creative Cloud subscription.
- **Squarespace** — a no-code website builder. The original Soil Detective site runs on it.
- **Astro / Tailwind** — the framework and CSS toolkit the rebuild uses.

---

## What Rosalinda asked for

From the meeting:
- **Font:** Flower Power (Adobe Fonts)
- **Color palette:** "Needs to be true to original site"

## The original site's actual brand (extracted from live CSS)

### Colors

| Role | HSL (original CSS) | Hex equivalent | Description |
|---|---|---|---|
| **Accent / Primary** | `hsl(267.52, 100%, 73.92%)` | **`#B77AFF`** | Bright vibrant lavender purple. This is the dominant brand color — matches the "purple and white dots forming a globe" logo. |
| **Light Accent / Background** | `hsl(45, 11.76%, 86.67%)` | **`#E1DFD9`** | Warm off-white / cream. Used for page backgrounds and cards. |
| **Dark Accent / Text** | `hsl(111.43, 11.11%, 12.35%)` | **`#1D231C`** | Very dark forest green. Reads as near-black but has a green undertone. Used for body text and dark surfaces. |
| White | `#FFFFFF` | `#FFFFFF` | Pure white. |
| Black | `#000000` | `#000000` | Pure black, used sparingly. |

### Fonts (as currently used on the live original site)

| Role | Font | Source |
|---|---|---|
| Headings + body | **new-spirit** | Adobe Fonts (Typekit) |
| Display / hero | **swear-display** | Adobe Fonts (Typekit) |
| Fallback chain | Clarkson, Helvetica Neue, Helvetica, Arial, sans-serif | System fonts |

Note: The live site does NOT currently use Flower Power. Rosalinda's request is to **introduce Flower Power on the rebuild** as the new headline/display font, while keeping the rest of the brand identity intact.

## The rebuild's current state (extracted from live CSS)

### Colors currently in use

| Hex | Role in rebuild |
|---|---|
| `#2B1E17` | Dark brown (text/dark surfaces) |
| `#3D5A31`, `#4A6B3C`, `#5D8049` | Greens (foliage, accents) |
| `#5E4360`, `#6A4C6D` | Dusty / muted purples |
| `#A44A3F` | Rust red |
| `#B89858`, `#C8A96A` | Mustard / gold |
| `#EDE6D8` | Cream |
| `#F9F5EF` | Off-white |

### Fonts currently in use

- **Caveat** (Google Fonts) — handwriting script
- **Inter** (Google Fonts) — sans-serif body
- **Playfair Display** (Google Fonts) — serif heading

## The gap (what needs to change in the rebuild)

### Colors — replace with originals

| Replace | With | Notes |
|---|---|---|
| Dusty purples `#5E4360`, `#6A4C6D` | **`#B77AFF`** | Rosalinda's brand is **vibrant** lavender, not dusty. This is the single most important visual change. |
| Cream / off-white `#EDE6D8`, `#F9F5EF` | **`#E1DFD9`** | Closer match to original warm cream. |
| Dark brown `#2B1E17` | **`#1D231C`** | Original is dark forest green, not brown. |
| Greens `#3D5A31`, `#4A6B3C`, `#5D8049` | **Keep as-is** as supporting palette, OR drop entirely | Confirm with Rosalinda: are these foliage accents part of her vision, or should the palette reduce to just lavender + cream + dark green? |
| Rust red `#A44A3F` | **Drop** unless she confirms it | Not in the original brand. |
| Mustard `#B89858`, `#C8A96A` | **Drop** unless she confirms it | Not in the original brand. |

### Fonts — replace with Flower Power + clean body

| Current | Replace with | Rationale |
|---|---|---|
| Playfair Display (heading) | **Flower Power** (Adobe Fonts) | Direct Rosalinda request. |
| Caveat (script) | **Drop** OR keep as a secondary handwritten accent | Decide based on whether Flower Power fills both the display + handwritten roles. Flower Power is decorative; one display font is usually enough. |
| Inter (body) | **Keep** OR swap to `new-spirit` from Adobe Fonts | Inter is highly legible and free. `new-spirit` would match the original site exactly. Recommend keep Inter unless Rosalinda specifically wants new-spirit. |

## How to apply this on the rebuild repo

The rebuild lives in a separate repo (presumably `dreamhelpers2025/soildetective-site`). Three concrete edits:

### 1. Add an Adobe Fonts kit for Flower Power

In the rebuild's `src/layouts/BaseLayout.astro` (or equivalent `<head>` location):

```html
<link rel="stylesheet" href="https://use.typekit.net/{YOUR_KIT_ID}.css">
```

`{YOUR_KIT_ID}` comes from the Soil Detective Adobe Fonts account. Either:
- Reuse the existing Squarespace kit ID (visible in the original site's HTML: `KsNqb0C7…` is part of the URL but it's specific to the Squarespace integration and likely won't work directly).
- Create a new web project in https://fonts.adobe.com that publishes Flower Power, get the new kit ID. This is the cleaner path.

Then in CSS:

```css
.font-display { font-family: 'flower-power', cursive; }
```

### 2. Update Tailwind config with the new palette

In `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        accent:   '#B77AFF',  // lavender purple — primary
        light:    '#E1DFD9',  // warm cream — background
        dark:     '#1D231C',  // dark forest green — text
        // optionally keep:
        leaf:     '#5D8049',  // mid green for accents (confirm with Rosalinda)
      },
    },
    fontFamily: {
      display: ['flower-power', 'cursive'],
      sans:    ['Inter', 'system-ui', 'sans-serif'],
    },
  },
},
```

### 3. Sweep and replace existing color/font classes

In the rebuild's components, find and replace:
- `bg-amber-*`, `bg-yellow-*`, `bg-orange-*` → likely `bg-brand-light` or `bg-brand-accent`
- `text-stone-*`, `text-brown-*` → `text-brand-dark`
- `font-serif` (Playfair) → `font-display` (Flower Power) for headlines only
- Keep `font-sans` (Inter) for body

## Sample swatches (paste into Slack to preview)

```
Accent / Primary    █████  #B77AFF  (lavender)
Light / Background  █████  #E1DFD9  (warm cream)
Dark / Text         █████  #1D231C  (forest green)
```

## Open questions for Rosalinda before publishing

1. **Are the supporting greens (#3D5A31 / #4A6B3C / #5D8049) part of her vision** or should the rebuild reduce to lavender + cream + dark green only?
2. **Does she want to keep any of the rust / mustard tones** the rebuild added (#A44A3F, #B89858, #C8A96A), or drop them entirely?
3. **Flower Power for everything, or just headlines?** The font is decorative — it's gorgeous for hero text but illegible at body sizes. Recommend: headlines only, with Inter or new-spirit for paragraphs.
4. **Does she have her own Adobe Fonts subscription**, or should we use Tack' account to publish the Flower Power kit for the rebuild? (Affects ongoing access if we ever stop hosting.)
5. **Patreon and any future channels** — does the brand spec apply there too, or are those separate visual identities?

## Next step

This is a spec, not a code change. Implementing it requires switching context to the soildetective-site repo. When you're ready, I can:

1. Clone the soildetective-site repo locally
2. Apply the three edits above
3. Build and verify visually
4. Push and deploy

Tell me when, and confirm the Adobe Fonts kit decision (existing vs. new) before I start.
