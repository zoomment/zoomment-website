# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Indie bloggers and developers who run personal or small static/SSG sites (Jekyll, Hugo, React apps, Adobe Muse and similar) and want a comment section without building or hosting a backend. They paste an embed snippet into their site, then moderate comments from the Zoomment dashboard. Their readers are a secondary audience: the people who leave comments and reactions through the widget.

## Product Purpose

Zoomment adds comments to any website through one `<div>` and one `<script>` tag (`https://cdn.zoomment.com/zoomment.min.js`). Site owners sign in with an email magic link, register their domains, and moderate comments per site and per page. Success means a site owner goes from landing on zoomment.com to a working comment section in minutes, and keeps using the dashboard to look after the conversation.

## Positioning

- **Free and donation-funded:** no ads and no paid tiers. Funded through GitHub Sponsors (`github.com/sponsors/zoomment`) and Open Collective (`opencollective.com/zoomment`).
- **Open source:** the code is public at `github.com/zoomment`, and self-hosting is supported.
- **No GitHub login for commenters:** unlike Giscus or Utterances, readers don't need a GitHub account to comment.
- **Lightweight extras in the same snippet:** emoji reactions, page view counts, an RSS feed of comments, email notifications on new comments, and replies.

## Operating Context

- **Install:** copy the embed snippet from the homepage, then configure it with `data-*` attributes: `data-theme` (light/dark), `data-language`, `data-gravatar` (avatar style), `data-emotions` (comma-separated reaction emoji) and `data-visitors` (show view counts). The full reference is the configuration guide at `/blog/guide-zoomment-widget-configuration`.
- **Sign-in:** email magic link (`/auth`); there are no passwords.
- **Dashboard (`/dashboard`):** a list of sites; for each site, a Comments tab and a Pages tab; per-site actions for getting the RSS feed and deleting the site; adding a site (`/dashboard/add`); account settings; and an admin view with a users list for privileged roles.
- **Content:** integration guides for specific platforms and opinion articles live in `_posts/` and are served at `/blog`. Comment RSS feeds are served per domain at `/rss/[domain]`.
- **The homepage runs the live widget itself**, so a visitor can see and try the real product right away.

## Capabilities and Constraints

- Next.js (app router plus a `pages/` RSS route) on React 18, Ant Design 6 and Roboto via `next/font`. The API lives at `NEXT_PUBLIC_API_URL`.
- Self-hosting is supported and may be offered to users.
- Undecided: whether the "Beta" label stays, and whether Ant Design is a lasting commitment. Neither is binding yet.

## Brand Commitments

- Name: **Zoomment**. Logo: `public/logo.svg`. Email logo: `public/email-logo.png`. OG image: `public/og-image.png`.
- Domains: `zoomment.com` and `cdn.zoomment.com`.
- Listed on Product Hunt (`producthunt.com/posts/zoomment`).

## Evidence on Hand

- The live widget, which can be demonstrated on any page.
- Six blog posts: integration guides for Jekyll, Hugo, React and Adobe Muse, a configuration guide, and an article on using a widget instead of building your own comment system.
- The Product Hunt listing.
- **Absent:** user or site counts, testimonials, customer logos, benchmarks and press. None of these may be made up.

## Product Principles

1. **One snippet to value:** every surface should shorten the path from "I want comments" to a working embed.
2. **Show the real thing:** demonstrate the live widget instead of describing it.
3. **Honest and free:** never imply paid tiers, scale or proof that doesn't exist. Ask for support openly, without guilt.
4. **Respect commenters:** no forced third-party accounts and no ads. Readers' friction counts as much as the owner's.
5. **Developer-legible:** code, attributes and configuration are first-class content, not something hidden behind marketing.
