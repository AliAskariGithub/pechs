# Rebrand: The Academy PECHS

Convert the existing school site from Career House Schooling System to **The Academy PECHS** — new identity, palette, typography, imagery, content and page structure — following the accuracy rule in the details document: nothing invented, unknown facts marked **TO VERIFY**.

## Brand direction

| Token | Value | Use |
|---|---|---|
| Deep Navy | `#102A43` | Header, footer, dark bands, headings |
| Academic Blue | `#2563A6` | Links, buttons, interactive, highlights |
| Warm Gold | `#C9A227` | Accents, dividers, achievement details (sparingly) |
| Soft Ivory | `#F8F7F3` | Large backgrounds, editorial sections |
| White | `#FFFFFF` | Cards, content areas |
| Text | `#17202A` / `#52606D` | Primary / secondary |
| Border | `#D9E2EC` | Dividers, card outlines |

Typography: **Libre Baskerville** headings, **Inter** body, loaded via `<link>` in the root head. Overall feel: elegant, academic, editorial — serif headlines, ivory sections, thin gold rules, generous whitespace. Existing crimson/teal tokens are replaced, not added to.

Logo: no official artwork supplied, so a text-based wordmark ("The Academy" + PECHS lockup) in Libre Baskerville with a small gold rule, plus a matching favicon. Swappable the moment real artwork arrives.

## Pages

| Route | Content |
|---|---|
| `/` | Hero ("Learn Today. Lead Tomorrow."), about intro, academic pillars (Learning, Thinking, Practice, Communication, Preparation), student development, campus preview, news teaser, admissions CTA |
| `/about` | About introduction, mission, vision, core values (Excellence, Integrity, Curiosity, Discipline, Confidence, Respect, Responsibility, Growth), educational philosophy, head's message (draft copy, marked for approval), leadership placeholders |
| `/academics` | Academic introduction, learning environment, student development dimensions, programme cards linking to the two segments |
| `/academics/$programme` | `o-level` and `a-level` pages: positioning, learning approach, academic support, subject list rendered as TO VERIFY placeholders, faculty placeholder cards |
| `/student-life` | Student life intro, activity areas (clubs, societies, sports, events, leadership) — all marked TO VERIFY |
| `/admissions` | Admissions message, step flow (Inquiry → Visit → Application → Assessment → Interview → Decision → Enrollment), requirements/documents as TO VERIFY, inquiry form |
| `/fees` | Fee structure table with every figure as TO VERIFY plus an explanatory notice |
| `/news` | News & events list (sample structure clearly labelled as placeholder entries) |
| `/gallery` | Campus, classrooms, academics, student life, sports, events categories |
| `/contact` | PECHS Karachi location, contact fields as TO VERIFY, office hours TO VERIFY, contact form |

Existing per-class routes (Montessori–Class 10) are removed; header nav and footer links updated to the new structure. The chatbot stays and its FAQ dataset is rewritten around the document's FAQ topics, answering "not yet confirmed — please contact the school" wherever facts are unverified.

## Handling missing details

Every unverified fact renders as a visible, consistent `TO VERIFY` badge rather than invented text: address, phone, WhatsApp, emails, office hours, founding year, principal and faculty names, curriculum/board, subject lists, fees, results, achievements, alumni, testimonials. A short note on Contact and Fees explains these will be filled in once the school confirms them. No testimonials, statistics, rankings or university placements are generated.

## Images

New generated imagery in the academic-editorial style described (natural, bright, documentary): campus exterior, classroom/lesson, library/study, science lab, computer lab, student activity. Old CHSS assets deleted. All images lazy-loaded and compressed; alt text on each.

## Technical notes

- Tokens rewritten in `src/styles.css` (`:root` + `@theme inline`) in oklch; no hardcoded colors in components. Existing animation utilities (reveal, hover-lift, page transition, loading screen) retained but retuned to navy/gold.
- `src/data/school.ts` rewritten as the single source for the new school: identity, values, programmes, admissions steps, fees, news, gallery, FAQ, plus a `TO_VERIFY` constant used everywhere a fact is missing.
- Per-route `head()` with unique title/description/og tags for every route including new ones; JSON-LD `EducationalOrganization` on home; single H1 per page.
- Inquiry form stays client-side (validation + mailto/copy), unchanged behaviour.
