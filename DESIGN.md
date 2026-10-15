---
name: Zoomment
description: Open-source comment widget for static sites; the website and dashboard around it.
colors:
  interactive-blue: "#1677ff"
  interactive-blue-hover: "#4096ff"
  interactive-blue-active: "#0958d9"
  interactive-blue-border: "#91caff"
  brand-cyan: "#00B3FF"
  brand-cyan-deep: "#0097DF"
  beta-violet: "#531dab"
  beta-violet-wash: "#f9f0ff"
  beta-violet-border: "#d3adf7"
  danger-red: "#ff4d4f"
  ink: "rgba(0, 0, 0, 0.88)"
  ink-muted: "rgba(0, 0, 0, 0.45)"
  workbench-grey: "#f5f5f5"
  paper-white: "#ffffff"
  hairline: "#d9d9d9"
  hairline-soft: "#f0f0f0"
  slate-code: "#1f2937"
  dawn-blue: "#e3eeff"
  dawn-rose: "#f3e7e9"
typography:
  display:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1.21
  headline:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.27
  title:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
  subtitle:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5714
  body-lead:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6667
  code:
    fontFamily: "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5714
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "8px"
  sm: "10px"
  md: "20px"
  lg: "28px"
  xl: "40px"
  xxl: "50px"
components:
  button-primary:
    backgroundColor: "{colors.interactive-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "4px 15px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.interactive-blue-hover}"
  button-primary-active:
    backgroundColor: "{colors.interactive-blue-active}"
  button-primary-large:
    backgroundColor: "{colors.interactive-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "7px 15px"
    height: "40px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    size: "32px"
  input-large:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "7px 11px"
    height: "40px"
  card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tag-beta:
    backgroundColor: "{colors.beta-violet-wash}"
    textColor: "{colors.beta-violet}"
    rounded: "{rounded.sm}"
    padding: "0 7px"
    typography: "{typography.label}"
  code-block:
    backgroundColor: "{colors.slate-code}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    typography: "{typography.code}"
  header-bar:
    backgroundColor: "{colors.paper-white}"
    height: "50px"
    width: "1000px"
---

# Design System: Zoomment

## Overview

**Creative North Star: "The Quiet Workbench"**

Zoomment's site is a tidy bench with one thing on it: the comment widget. The homepage puts a dark snippet and the real, working widget in the middle of a light page, and everything else (header, footer, cards) stays plain so the product does the talking. The system is calm, honest, practical and friendly: it shows the real thing instead of describing it, and it never dresses up with proof or polish it hasn't earned.

The base is stock Ant Design 6, used with restraint: default tokens, no theme overrides, white surfaces on a light grey workbench, a single interactive blue. The friendliness comes from small human touches rather than decoration: emoji in headings and reactions, monster-style gravatars, a violet "Beta" tag, and a soft dawn-coloured wash behind the donate page. Density is medium on marketing and reading pages (narrow columns, generous vertical space) and standard antd density in the dashboard.

Zoomment should never resemble an ad-heavy comment widget (sponsored rows, heavy chrome), a glossy SaaS hero (gradient blobs, glassmorphism, oversized marketing imagery), or dev-terminal cosplay (all-dark, neon on black). The single dark element, the code block, is a tool, not a theme.

**Key Characteristics:**
- The live widget and the embed snippet are the hero; chrome recedes.
- Stock antd tokens, refined through precise spacing and type, never loud.
- One interactive blue; the brand cyan lives in the logo.
- Friendliness through emoji, gravatars and the occasional pastel wash, not illustration.
- Narrow, centred columns: 600px for focus pages, 1000px for everything else.

## Colors

A restrained palette: white paper on light grey, near-black ink, one working blue, with a brand cyan and a beta violet as small signatures.

### Primary
- **Workbench Blue** (`interactive-blue`): Ant Design's primary. Every button, link, focus ring, active tab and selection uses it. Hover lightens (`interactive-blue-hover`), press deepens (`interactive-blue-active`), and its pale tint (`interactive-blue-border`) serves as a decorative underline, as under the donation card titles.

### Secondary
- **Speech-Bubble Cyan** (`brand-cyan` → `brand-cyan-deep`): the vertical gradient in the speech-bubble logo (`public/logo.svg`). It is the brand mark, not an interface color. It currently appears only in the logo, and the split from Workbench Blue is deliberate and recorded as-is.

### Tertiary
- **Beta Violet** (`beta-violet` on `beta-violet-wash`, edged with `beta-violet-border`): antd's purple tag, used for the "Beta" badge next to the wordmark. It marks product status and nothing else.

### Neutral
- **Ink** (`ink`): body text and headings (antd `colorText`).
- **Muted Ink** (`ink-muted`): secondary titles such as the homepage subtitle, timestamps and metadata.
- **Workbench Grey** (`workbench-grey`): the page layout background behind content (antd `Layout`).
- **Paper White** (`paper-white`): the header, footer, cards, auth panel and every container surface.
- **Hairline** (`hairline`) / **Soft Hairline** (`hairline-soft`): input borders, and card borders and dividers.
- **Slate Code** (`slate-code`): the code block background, the only dark surface in the system.
- **Dawn Wash** (`dawn-rose` → `dawn-blue`): the 280px pastel gradient behind the top of the donate page, rising from rose to pale blue.

### Named Rules
**The One Working Blue Rule.** Everything interactive is Workbench Blue. Speech-Bubble Cyan is the logo's, and it never fills a button or link.

**The Status-Only Violet Rule.** Beta Violet labels product status. It is never decoration, an accent or a hover state.

**The Danger Is a Menu Item Rule.** Destructive actions (delete site, delete comment, log out) appear as danger-red items inside dropdown menus, not as red buttons on the page.

## Typography

**Display Font:** Roboto (400/500 via `next/font`), with the system sans stack as fallback
**Body Font:** Roboto
**Label/Mono Font:** antd's monospace stack, for code

**Character:** A single neutral grotesque throughout, so the work reads as a tool rather than a brand statement. Hierarchy comes from antd's heading scale and from muted ink, not from contrasting typefaces.

### Hierarchy
- **Display** (`display`): page titles ("Benefits", "Donate today", the "Zoomment" wordmark, blog post titles).
- **Headline** (`headline`): the donation card names.
- **Title** (`title`): card headings on the benefits page, and empty-state headings in the dashboard.
- **Subtitle** (`subtitle`): footer column headings and the muted homepage tagline ("Add Comments to Your Website").
- **Body** (`body`): the antd default for all UI text and paragraphs. Keep reading columns at 600px max (about 75ch).
- **Body Lead** (`body-lead`): intro paragraphs under page titles, capped at 600px.
- **Label** (`label`): tags, comment page links and dates.
- **Code** (`code`): the embed snippet. It is pre-formatted and white on Slate Code.

### Named Rules
**The One Family Rule.** Roboto everywhere except code. Don't add a display face for flavour.

**The Weight Gap Note.** antd headings render at weight 600, but only Roboto 400 and 500 are loaded. Treat the rendered heading weight as unverified, and either load 600 or set the heading weight to 500 before adding new heading styles.

## Layout

All content sits in centred, fixed-max-width columns on the Workbench Grey layout:

- **Standard container:** 1000px max width with 20px side padding. It is shared by the header, footer, benefits, donate, blog and dashboard.
- **Focus column:** 600px max for the homepage (snippet + widget) and for intro paragraphs. The auth panel is 550px.
- **Vertical rhythm:** pages open with 40–50px top padding. Titles take 10px bottom margin, and lead paragraphs 30px before the content grid.
- **Grids:** antd `Row`/`Col` with a `[28, 28]` gutter. Cards go two-up from `md` (768px) and stack below that.
- **Header:** a sticky 50px bar with the logo on the left and the profile/login control on the right.
- **Footer:** columns of links, each a third wide at `md` and above, full width below.

Spacing values in use: 8, 10, 20, 28, 40 and 50px, on top of antd's internal spacing.

## Elevation & Depth

The surfaces are mostly flat: depth comes from white paper on grey rather than from shadows. The only consistent shadow is antd's faint tertiary shadow under the sticky header, which separates it from scrolling content. Cards use a soft hairline border, not a shadow. Dropdowns and menus use antd's own popover elevation.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px 0 rgba(0,0,0,0.02)`): the sticky header only.

### Named Rules
**The Paper-on-Bench Rule.** Separate surfaces with Paper White on Workbench Grey and a hairline. Reserve shadows for things that float: the sticky header and popovers.

## Shapes

Gently rounded and consistent, following antd's radius ladder: 4px on tags and small controls, 6px on default buttons, inputs and the code block, and 8px on cards, large controls and the auth panel. Avatars and the speech-bubble logo supply the only round forms. There are no clipped corners, pills or decorative geometry.

## Components

Refined and restrained: stock antd components, given care through spacing, sizing and copy rather than custom skins.

### Buttons
- **Shape:** gently rounded (6px, 8px at large size).
- **Primary:** Workbench Blue with white text. It handles the main action on each surface: Login, Continue, Add New Site, Donate on {name}. Large size is used for the main call to action on an empty state, auth or a donation card.
- **Hover / Focus:** antd defaults: lighter blue on hover, deeper blue on press, and antd's focus outline.
- **Text:** an icon-only text button (⋯) opens per-row action menus in dashboard lists.

### Chips
- **Style:** the "Beta" tag is violet text on a violet wash with a violet border and 4px radius, set inline with the wordmark.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Paper White.
- **Shadow Strategy:** none; a soft hairline border (see Elevation & Depth).
- **Internal Padding:** 24px.
- Cards in a grid are equal height (`height: 100%`). Benefit cards lead their title with an emoji.

### Inputs / Fields
- **Style:** antd inputs. The auth form uses large size (40px), with a hairline border and 8px radius.
- **Focus:** the border turns Workbench Blue with antd's soft blue outline glow.
- **Error:** antd's inline validation messages in danger red.

### Navigation
- **Header:** the sticky, white, 50px bar. The logo links home. Signed in, it shows a 28px gravatar plus the name and a caret, which opens a click dropdown (Dashboard, Donate, Account Settings, Admin for role 2, Logout as danger). Signed out, it shows a primary Login button with an icon.
- **Footer:** plain antd links under subtitle-level column headings ("Zoomment", "Resources"), followed by a divider.
- **Dashboard:** antd `Tabs` (Comments, Pages) per site, plus a site header with an actions dropdown.

### Embed Snippet (signature)
The dark code block holding the `<div id="zoomment" …>` and `<script>` embed, with a white settings cog (top-right, 20px) that links to the configuration guide. It appears on the homepage and on the add-site page, and is always immediately followed by, or tied to, the live widget.

### Live Widget (signature)
The real Zoomment widget, rendered in place with `data-theme="light"`, monster gravatars, and the reaction set ❤️ 😀 🪄 🥸 💡 🤔 💩 😢. While the script loads it shows antd skeletons: a row of five button skeletons and a 100px input skeleton.

## Do's and Don'ts

### Do:
- **Do** let the snippet and the live widget lead every surface that sells the product, and show the real thing instead of mockups.
- **Do** use Workbench Blue for every interactive element, and keep Speech-Bubble Cyan in the logo.
- **Do** keep content in centred columns: 600px for focus pages, 1000px for standard pages.
- **Do** separate surfaces with Paper White on Workbench Grey, a hairline, and 8px corners.
- **Do** use emoji, monster gravatars and the soft Dawn Wash as the friendly touches.
- **Do** put destructive actions in dropdown menus as danger items.

### Don't:
- **Don't** add ad-like or sponsored-looking rows, heavy borders, or crowded chrome around comments.
- **Don't** use glossy SaaS hero tropes: gradient blobs, glassmorphism, or oversized marketing imagery.
- **Don't** go all-dark or neon on black. Slate Code is the only dark surface, and only for code.
- **Don't** use Beta Violet for anything except product status.
- **Don't** add a second typeface outside code.
- **Don't** show user counts, testimonials or customer logos. None exist (see PRODUCT.md).
