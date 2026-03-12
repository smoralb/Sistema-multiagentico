# FESTIVO - World Festivals & Events Explorer

**Product Requirements Document | v1.0**
**Last Updated**: June 2025
**Source**: Google Drive Document (synchronized)
**Link**: https://docs.google.com/document/d/1X57TS9iOUFsGhmGCSANjxeCoDKpdsLC-/edit?usp=sharing

---

## 📋 Document Sync Info

This document is synchronized from Google Drive. When the source document is updated, this file should be refreshed to maintain alignment between documentation and implementation.

**Last sync date**: 2026-03-12

---

## 1. Project Overview

Festivo is a web platform that allows users to discover and explore festivals, national holidays, and cultural celebrations from around the world. The platform enables filtering by country, city, and date range, serving both spontaneous explorers and purposeful trip planners.

The business model is built on organic search traffic monetized through Google AdSense, with future potential for travel affiliate revenue (hotels, tours) around major event dates.

### 1.1 Vision Statement

To become the go-to digital guide for cultural event discovery globally — turning unknown festivals into dream destinations.

### 1.2 Core Objectives

1. Enable discovery of festivals and public holidays filtered by country, city, and date.
2. Serve users who have no destination in mind yet, inspiring travel through cultural events.
3. Serve users who have a destination decided and need to find the best time to visit.
4. Generate organic SEO traffic through rich event detail pages.
5. Monetize via Google AdSense and (Phase 2) travel affiliate partnerships.

---

## 2. Target Users

Festivo is designed around two primary user archetypes. Understanding their motivations and journeys is central to every product decision.

| Attribute | The Explorer | The Planner |
|-----------|-------------|-------------|
| **Persona** | Alex, 28, digital nomad | Maria, 35, professional traveler |
| **Goal** | Find inspiration. Has no destination yet. Wants to discover something unique. | Has 1-3 destinations in mind. Needs to know the best dates to visit. |
| **Entry point** | Lands on homepage. Browses carousels. Clicks an event that catches attention. | Searches directly by country or city. Filters by date range. |
| **Key feature** | Themed carousels, visual browsing, "Events near me" section. | Advanced search, date picker, multi-destination comparison. |
| **Success** | Discovers a festival they didn't know and begins planning a trip. | Finds the ideal travel window and books informed by the festival calendar. |

---

## 3. Product Structure

Festivo is organized into six core pages. Each page is defined below with its purpose, key components, and interaction flow.

### 3.1 Homepage

**Purpose:**
- Engage The Explorer with visually-driven content discovery.
- Enable The Planner to start a search immediately via the header search bar.
- Surface trending and seasonal events without any user input.

**Key Components:**
- Sticky navigation header with global search bar (country / city autocomplete).
- Hero banner with rotating featured festival of the week.
- Themed horizontal carousels (e.g., "Carnival Season", "Summer Festivals", "Asia Highlights").
- "Happening This Month" section — events happening in the next 30 days.
- Country grid: quick-access visual grid of popular destinations.
- Footer with links to sitemap, about, and legal pages.

### 3.2 Search Results Page

**Purpose:**
- Show all matching events for the queried destination.
- Allow refinement by date range, event type (national / regional / religious), and month.
- Enable comparison across multiple destinations.

**Key Components:**
- Search bar pre-filled with current query (editable).
- Filter sidebar: date range picker, event type checkboxes, country/region selectors.
- Results list: event cards sorted by date ascending, with event name, date, type badge, and a short description.
- Map view toggle: optional map showing event pins per country/city.
- Pagination or infinite scroll for large result sets.
- Ad block placement between result rows (every 6-8 events).

### 3.3 Event Detail Page

**Purpose:**
- Provide rich cultural context about the event.
- Serve SEO traffic for queries like "Carnival of Rio 2026 dates" or "what to do in Brazil in February".
- Display affiliate or ad blocks in context (hotel links, tour suggestions near the event).

**Key Components:**
- Event hero image and title, with location tag and type badge.
- Date and duration information (pulled from Calendarific API).
- Cultural description paragraph (API-sourced, to be enriched with editorial content over time).
- Event highlights: quick facts (e.g., attendance, best neighborhoods, key dates within festival).
- Related events section: "Other events in Brazil" or "Other carnivals worldwide".
- Affiliate block: "Find hotels in Rio for Carnival" with booking.com / Civitatis links.
- Google Ad block below the fold.
- SEO metadata: structured data markup for events (schema.org/Event).

### 3.4 Country Page

**Purpose:**
- Serve as an SEO hub page for country-level event queries.
- Allow users to get an overview of all events in a country at a glance.
- Link to individual event pages for deeper engagement.

**Key Components:**
- Country header: flag, name, region, brief cultural introduction.
- Annual calendar view: visual month-by-month overview of events (grid or timeline).
- Event list: all events sortable by date, filterable by type.
- Spotlight section: most popular / most visited events for that country.
- Nearby countries section: "Also explore Portugal, Argentina…"
- Ad placement in sidebar and between sections.

### 3.5 Explore Page

**Purpose:**
- Provide a curated, editorially-driven browsing experience.
- Show themed collections, seasonal highlights, and editorial picks.
- Reduce decision fatigue by organizing global events into meaningful categories.

**Key Components:**
- Themed collections: e.g., "Top 10 Carnivals", "Best Winter Festivals", "Less-Known Gems".
- Region selector: filter the explore view by continent or region.
- Interactive world map: click a country to see its events pinned.
- Trending now: automatically-generated list of events happening in the next 30 days globally.
- Event type filter: National Holiday / Regional Festival / Religious / Cultural.

**Interaction Flow — Explorer Path:**
1. User lands on Explore page.
2. Selects a theme or region (optional).
3. Browses event cards in a masonry or grid layout.
4. Clicks an event card → goes to Event Detail page.
5. From detail page, clicks related events or country link.

### 3.6 Login / Account Page (Optional MVP)

**Purpose:**
- Allow users to save and revisit their favorite events or destinations.
- Enable future personalization (e.g., "Events based on your saved countries").
- Provide a foundation for a newsletter or alert subscription feature.

**Key Components:**
- Social login: Google / Apple sign-in (no email/password forms required for MVP).
- Saved events list: visible after login, accessible from any page via header icon.
- Alert preferences: opt-in to be notified when a saved event date approaches.

**Note:** For MVP, this page can be deferred. All core discovery features work without an account.

---

## 4. Feature Definitions

### 4.1 Global Search Bar
- The central navigation element, present in the sticky header across all pages.
- Autocomplete suggestions as user types (country names, city names, major events).
- Supports queries like: "Brazil", "Rio de Janeiro", "Carnival".
- On submission, navigates to Search Results page with query pre-applied.
- On mobile: expands to full-screen search overlay.

### 4.2 Date Range Filter
- Dual calendar picker: "From" and "To" date selectors.
- Presets: This Month, Next 3 Months, Next 6 Months, Custom.
- Visible in: Search Results page, Country page, and Explore page.
- Filters the Calendarific API call with the selected date window.

### 4.3 Event Cards
- Reusable UI component displayed in carousels, search results, and the explore grid.
- Contains: event name, country flag, date, type badge (National / Regional / Religious), and thumbnail image.
- On hover: brief description tooltip or expand animation.
- On click: navigates to Event Detail page.
- Cards are SEO-linked via structured URLs: /event/{country}/{event-slug}.

### 4.4 Themed Carousels
- Horizontal scrollable rows on the Homepage and Explore pages.
- Each carousel is editorially curated (initially manual, later algorithm-driven in Phase 2).
- Examples: "Carnival Season", "Asia Highlights", "Top Summer Picks".
- Carousel data is static JSON in Phase 1, migrated to a CMS in Phase 2.

### 4.5 Country Grid
- Visual grid of country cards with flag icon, country name, and event count badge.
- Displayed on Homepage (top 20 countries by event volume) and full list on Explore page.
- Each card links to the corresponding Country page.

### 4.6 SEO Dynamic Pages
- Every country and event generates a unique, crawlable page at a predictable URL.
- URL structure: /country/{country-slug} and /event/{country-slug}/{event-slug}.
- Each page includes schema.org/Event structured data for rich Google search results.
- Page titles follow the pattern: "Carnival of Rio 2026 — Dates, Guide & Info | Festivo".

---

## 5. Data Sources & API Strategy

### 5.1 API Evaluation Summary

The following external APIs were evaluated to power Festivo's event data:

| API | Advantages | Limitations | Status |
|-----|-----------|-------------|---------|
| **Nager.Date** | 100% free, open source, no registration required. | National holidays only; very limited local events. | Supplementary |
| **Abstract API** | Very accurate on religious & regional holidays. | Free tier highly limited in request volume. | Discarded |
| **Time and Date** | Rich historical & cultural information. | Complex docs; less developer-friendly. | Future reference |
| **Calendarific** | Best balance of local data, ease of use & i18n support. | 1,000 requests/month on free tier. | ✅ **Selected (MVP)** |
| **PredictHQ** | Live events: concerts, fairs, sports. High CPC potential. | Paid API; requires traffic volume to justify cost. | Phase 2 |

### 5.2 Selected API: Calendarific

**Calendarific** (https://calendarific.com) is the primary data source for the MVP phase.

**Key selection criteria:**
- Granular filtering by type: type=local, type=national, type=religious
- Multilingual support: festival names available in multiple languages
- Reasonable free tier: 1,000 requests/month
- Simple RESTful API

**API Request Strategy:**
To stay within free tier limits:
- Server-side or edge caching: cache API responses per country/month for 24 hours minimum.
- Pre-fetch on build: for static generation (Next.js or similar), pre-fetch all country data at build time and regenerate weekly.
- Prioritize popular countries: queue API calls for top 50 countries by expected traffic first.

### 5.3 Phase 2: PredictHQ Integration

Once Festivo reaches stable organic traffic, **PredictHQ** (https://www.predicthq.com) will be integrated:
- Adds live events beyond static holidays: concerts, fairs, sporting events, conferences.
- Enables "What's happening this week" recommendations.
- Increases average session time and ad revenue.
- Requires paid plan — integration deferred until AdSense revenue justifies the cost.

---

## 6. Technical Stack (MVP)

### 6.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | React + Next.js (or Astro) | SSG/SSR for SEO; fast Time-to-First-Byte. |
| **Styling** | Tailwind CSS | Rapid UI development; responsive by default. |
| **Data fetching** | Calendarific REST API | Server-side to protect API key and enable caching. |
| **Hosting** | Vercel / Netlify | Free tier; edge CDN; built-in CI/CD. |
| **Monetization** | Google AdSense | Auto ad placement; easy integration. |
| **Analytics** | Google Analytics 4 | Track user journeys between Explorer and Planner flows. |

### 6.2 URL Structure

A clean, descriptive URL structure is critical for both SEO and user experience:

| Page | URL Pattern |
|------|------------|
| Homepage | festivo.com/ |
| Explore | festivo.com/explore |
| Search Results | festivo.com/search?q=brazil&from=2026-02-01 |
| Country Page | festivo.com/country/brazil |
| Event Detail | festivo.com/event/brazil/carnival-rio-2026 |
| Login | festivo.com/login |

---

## 7. SEO & Content Strategy

### 7.1 Dynamic Landing Pages
- Each country and event generates a dedicated, crawlable page at a predictable URL.
- **Target keywords**: "Carnival of Rio 2026 dates", "Brazil public holidays 2026", "what to do in Japan in April".
- **Title format**: [Event Name] [Year] — Dates, Guide & Info | Festivo.
- Meta descriptions generated dynamically from API event descriptions.

### 7.2 Structured Data
- Implement schema.org/Event JSON-LD on all Event Detail pages.
- Enables Google rich results (event dates, location displayed directly in SERPs).
- Implement schema.org/Country or TouristDestination on Country pages.

### 7.3 Cultural Content
Beyond raw API data, each event page should include:
- A "What is it?" cultural description paragraph.
- Practical info: best neighborhoods, transport tips, what to wear (Phase 2).
- Photo gallery (Phase 2: licensed stock images or user-submitted).

### 7.4 Affiliate Integration (Phase 2)
Complementing AdSense with performance-based affiliate revenue:
- **Booking.com Affiliate Program**: "Find hotels in [City] during [Festival]" links.
- **Civitatis or GetYourGuide**: "Book a Carnival tour in Rio" CTA buttons.
- **Placement**: Event Detail page sidebar and bottom CTA block.
- **Note**: Affiliate links should use UTM tracking and be disclosed per FTC/EU regulations.

---

## 8. Product Roadmap

### Phase 1 — MVP (Months 1–3)
- Homepage with carousels, hero banner, and country grid.
- Search Results page with country/city filter and date picker.
- Event Detail pages (API-powered, auto-generated per event).
- Country pages (API-powered, auto-generated per country).
- Google AdSense integration.
- Basic SEO setup: sitemap, structured data, meta tags.
- Mobile-responsive design.
- Data source: Calendarific API (free tier).

### Phase 2 — Growth (Months 4–8)
- Explore page with world map and themed collections.
- User accounts (Google/Apple login), saved events, and alerts.
- PredictHQ integration for live events (concerts, fairs, sports).
- Affiliate link integration (Booking.com, Civitatis).
- Editorial content layer: curated descriptions, practical guides.
- Photo galleries for top 50 events.
- Newsletter / event alert email system.

### Phase 3 — Premium (Months 9+)
- Personalized recommendations engine.
- Premium listing option for tourism boards and local event organizers.
- Multi-language UI (Spanish, Portuguese, French).
- Native mobile app (React Native).
- API access tier for travel bloggers and media partners.

---

## 9. Success Metrics

| Metric | MVP Target (Month 3) | Growth Target (Month 8) |
|--------|---------------------|------------------------|
| **Monthly organic sessions** | 1,000 | 25,000 |
| **Pages indexed by Google** | 500+ (all country + event pages) | 2,000+ |
| **Avg. session duration** | 1 min 30 sec | 3 min+ |
| **AdSense revenue** | — | €200–€1,000/month |
| **Saved events (logged users)** | N/A (MVP optional) | 500 active users |

---

## 📌 Implementation Notes

This is a living document that defines the product vision and requirements for Festivo. All development work should align with the features and phases defined here.

**For any new feature request:**
1. Verify if it's contemplated in the current phase.
2. If not, determine if it should be added to the roadmap.
3. Update this document accordingly before implementation.

---

**Document Version**: 1.0
**Last Synchronized**: 2026-03-12
**Source**: Google Drive
**Product**: FESTIVO - World Festivals & Events Explorer
