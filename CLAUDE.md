# CLAUDE.md — Giddipass Crest Website Mock-up

## What this project is
A **sample (mock-up) website** for **Giddipass Crest** (also known as Crest Restaurant), a restaurant with a rooftop in central Tamale, Ghana.
It is being built by **DePrograma** (Adam Abdul-Rafik) as a **free sales sample**. The goal is to show the owners what their website could look like so they hire DePrograma to build the real one.

The owners replied "okay" 👍 to a WhatsApp outreach message. They will see this mock-up on their **phones**, sent as a link. Win them over in the first 5 seconds on a phone screen.

## Goal and success criteria
- Looks **classy, modern and premium**, clearly better than a generic template.
- **Mobile-first.** Most viewers open it from WhatsApp on an Android phone, often on mobile data. Keep it fast and light.
- The owner should immediately think: *"That's my restaurant, and it looks expensive."*
- Deployable to **Vercel** with a shareable link (e.g. `giddipass-crest.vercel.app`).
- Finish in one focused session. Don't over-engineer it.

## Tech stack
- **Next.js (App Router) + TypeScript + Tailwind CSS**, static export (`output: 'export'`) so it deploys anywhere.
- No database, no backend, no CMS. All content lives in one file: `src/data/restaurant.ts`.
- Icons: `lucide-react`. Fonts: `next/font` (Google Fonts).
- Optional, subtle animation only: `framer-motion` (fade/slide on scroll). Nothing heavy.
- Run with `npm run dev`; build with `npm run build`.

## Business facts (use exactly these, don't invent others)
| Field | Value |
|---|---|
| Name | Giddipass Crest (Crest Restaurant) |
| Location | Central Tamale, Hospital Road area (opposite SSNIT). Plus Code: C535+8Q7, Tamale |
| Map coordinates | 9.403286, -0.8405811 |
| Phone / WhatsApp | +233 24 420 7608 (alternate listed: +233 55 882 9871) |
| Opening hours | Every day, 8:00 AM – 11:30 PM |
| Price level | Budget-friendly |

**What customers love (from public Google reviews; use as themes, not quotes):**
- **The rooftop**: watching the **sunset over central Tamale**, by day and by night
- **Banku and tilapia** (some call it the best in Tamale)
- Relaxed place to meet friends and **watch football / Champions League matches**
- Right in the **heart of the city**, with good-value food and friendly service

## Content rules (important)
- **No fake testimonials.** Don't invent customer names or quotes. Use a "What guests say" section with short paraphrased *themes* (e.g. "Best sunset view in Tamale"), or leave clearly marked placeholders: `[Add a real customer review here]`.
- **No invented prices.** Menu items show `GH₵ —` or `[price]` placeholders until the owner sends the real menu.
- **Images:** don't take photos from Google Maps or the restaurant's social media without permission. Use high-quality free stock photos (Unsplash/Pexels: African dishes, grilled tilapia, rooftop at sunset, city lights) as placeholders. Keep them in `public/images/` and name them clearly (`hero-rooftop.jpg`, `banku-tilapia.jpg`) so they're easy to swap for the restaurant's real photos later.
- Add a small, tasteful banner or footer line: **"Sample design by DePrograma — preview for Giddipass Crest."**
- Spelling: British/Ghanaian English (e.g. "favourite", "colour"). Currency: **GH₵**.

## Design direction
- **Mood:** "Sunset on the rooftop". Warm, elegant, evening atmosphere.
- **Palette** (adjust if needed):
  - Deep night: `#0F1419` (backgrounds, dark sections)
  - Sunset amber: `#E8A33D` (primary accent, buttons)
  - Burnt orange: `#C8553D` (secondary accent)
  - Warm cream: `#F7F1E8` (light sections, text on dark)
  - Charcoal text: `#1E1E1E`
- **Typography:** an elegant serif for headings (e.g. *Playfair Display* or *Cormorant Garamond*) paired with a clean sans for body text (e.g. *Inter* or *DM Sans*).
- Generous spacing, large food photography, rounded-2xl cards, soft shadows, subtle gradients (amber → orange to suggest a sunset).
- Avoid clutter, stock-template look, too many colours, and autoplaying video.
- All buttons are big, thumb-friendly tap targets (min 48px tall).

## Page structure (single page, smooth-scroll sections)
1. **Sticky header**: logo/wordmark "Giddipass Crest", nav links (Menu, Rooftop, Visit), and a "Order on WhatsApp" button. Collapses to a hamburger menu on mobile.
2. **Hero**: full-screen rooftop sunset image with a dark gradient overlay.
   - Headline idea: *"Tamale's Rooftop at Sunset"*
   - Sub-line: *"Great local food, cold drinks and the best view in the heart of the city."*
   - Two buttons: **Order on WhatsApp** (primary) · **View Menu** (secondary)
   - Small info strip: 📍 Central Tamale · 🕗 Open daily 8 AM – 11:30 PM
3. **Signature dishes**: 3–4 cards (Banku & Tilapia featured first, plus e.g. Jollof Rice, Fried Rice & Chicken, TZ). Photo, name, one-line description, `GH₵ —` price placeholder.
4. **Full menu**: tabbed or grouped by category (Local Dishes · Rice Dishes · Grills · Drinks), with placeholder items and prices that are easy to edit in `restaurant.ts`.
5. **The Rooftop experience**: image + text about sunsets, evenings with friends and match nights. A small gallery grid (4–6 images) with a lightbox on tap.
6. **What guests say**: 3 short theme cards (no fake names), following the content rules above.
7. **Visit us**: embedded Google Map (iframe using the coordinates above), address, opening hours table, tap-to-call and WhatsApp buttons.
8. **Footer**: name, hours, phone, location, and "Sample design by DePrograma" with a link to https://deprograma.vercel.app.
9. **Floating WhatsApp button** (bottom-right, always visible on mobile).

## WhatsApp ordering
Every "Order" button opens:
```
https://wa.me/233244207608?text=Hello%20Giddipass%20Crest%2C%20I%27d%20like%20to%20place%20an%20order%3A%20
```
Menu item cards can also have a small "Order this" button that pre-fills the dish name in the message.

## Quality checklist (check before calling it done)
- [ ] Looks great at **360px** width (common Android phones) as well as on desktop
- [ ] Lighthouse mobile performance ≥ 90; images optimised (`next/image`, WebP, lazy-loaded)
- [ ] All WhatsApp and call links work (`tel:+233244207608`)
- [ ] No fake reviews, no invented prices, no copied Google Maps photos
- [ ] SEO basics: page `<title>` "Giddipass Crest | Rooftop Restaurant in Tamale", meta description, Open Graph image (so the WhatsApp link preview looks good)
- [ ] Favicon set
- [ ] `npm run build` passes with no errors or TypeScript warnings
- [ ] Deployed to Vercel and the link opens correctly on a phone

## Folder structure
```
src/
  app/
    layout.tsx        # fonts, metadata, OG tags
    page.tsx          # assembles all sections
    globals.css
  components/
    Header.tsx
    Hero.tsx
    SignatureDishes.tsx
    Menu.tsx
    Rooftop.tsx
    Testimonials.tsx
    Visit.tsx
    Footer.tsx
    WhatsAppFloat.tsx
  data/
    restaurant.ts     # ALL editable content: name, hours, phone, menu, gallery
public/
  images/
```

## Working style for Claude
- Build section by section, and run `npm run dev` to check each one before moving on.
- Keep all text and data in `src/data/restaurant.ts`, so swapping in the real menu, prices and photos later takes minutes.
- Prefer simple, readable code over clever abstractions. This is a sales mock-up that will later become the real site.
- When something is unknown (prices, real photos, logo), use a clearly marked placeholder. Don't guess.
- When finished, give me the deploy steps for Vercel and a short WhatsApp message I can send Giddipass Crest with the link.

## After the owner says yes (later phase, don't build now)
- Replace placeholders with their real menu, prices, photos and logo
- Optional extras to upsell: online order form, event/table booking for match nights, Google Business Profile setup, custom domain (e.g. `giddipasscrest.com`)
