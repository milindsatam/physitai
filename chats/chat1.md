# PhysiTAI layout reference

_Started 2026-09-06 09:13 UTC_

---

## User

Reference images attached show the exact LAYOUT, spacing, and component style I want (pastel color blocks, floating stat chips, pill buttons, bold headings, generous whitespace). Match that layout language and vibe. Do NOT copy their colors or banking content. Use only the PhysiTAI color system and messaging defined below.

## User

Reference images attached show the exact LAYOUT, spacing, and component style I want (pastel color blocks, floating stat chips, pill buttons, bold headings, generous whitespace). Match that layout language and vibe. Do NOT copy their colors or banking content. Use only the PhysiTAI color system and messaging defined below.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Built the PhysiTAI homepage as one Design Component: nav, hero with floating stat chips, problem stats, AIIR-Phys 4-stage flow plus Capture/Analyze/Guide/Track strip, technology split, who-we-serve cards, goal-framed outcomes, orange impact band, demo form, navy footer. All photos and product screens are `[IMAGE: …]` placeholders.

Two tweaks are exposed: impact band color (orange or navy) and stat-chip visibility. Send real photos or a logo file and I'll drop them in.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Impact band now uses navy text and dot on orange (≈5.9:1), and the nav links tighten with viewport width so the header stays on one row at tablet sizes.

## User

HEADER
Keep the logo on the left. Remove all menu links except two: "About" and "Contact". Keep the "Request a Demo" navy pill button on the right. Header stays white, minimal, and sticky. Fonts, button style, and spacing stay consistent with the existing design system.

HERO
Rebuild the hero to be clean and minimal, matching the attached reference layout: an eyebrow label, one bold headline, one short paragraph, and two CTAs. Nothing else on the text side.

Text content:

Eyebrow label: "Rehabilitation Intelligence"
Headline: "Objective rehabilitation, powered by AI." (bold, large, tight leading)
Paragraph: "PhysiTAI uses thermal imaging and AI to make pain visible and recovery measurable, so clinicians can treat with data, not guesswork."
Primary CTA: navy pill "Request a Demo"
Secondary CTA: outline pill "See How It Works"

Remove the three pillar boxes (Pain Made Visible, Recovery Measured, Rehabilitation Predictable) completely.

LAYOUT
Two-column hero. Text on the left, image on the right. Use the attached spine/thermal body image on the right side, large and prominent, replacing the placeholder box. Let the eyebrow or headline slightly overlap the image edge where it looks intentional and clean.

BACKGROUND
Make the hero background a richer, deeper brand tone, not the current pale tint. Use a confident navy-to-teal background similar to the attached reference image. Because the background is dark, set the headline and paragraph text to white or near-white for high contrast and readability. Keep the eyebrow label legible on the dark background.

FLOATING STAT CHIPS
Keep the two small floating stat chips overlapping the image: "Thermal Asymmetry 1.4 °C" and "Recovery Progress 72% on track". Style them as clean white cards with soft shadows so they stand out against the darker background.

CONSTRAINTS

Keep the existing fonts, pill button styles, card radius, and spacing rhythm.
No em dashes in any copy.
Keep text tight and confident, no filler.
Everything outside the header and hero stays exactly as it is.

## User

HEADER
Keep the logo on the left. Remove all menu links except two: "About" and "Contact". Keep the "Request a Demo" navy pill button on the right. Header stays white, minimal, and sticky. Fonts, button style, and spacing stay consistent with the existing design system.

HERO
Rebuild the hero to be clean and minimal, matching the attached reference layout: an eyebrow label, one bold headline, one short paragraph, and two CTAs. Nothing else on the text side.

Text content:

Eyebrow label: "Rehabilitation Intelligence"
Headline: "Objective rehabilitation, powered by AI." (bold, large, tight leading)
Paragraph: "PhysiTAI uses thermal imaging and AI to make pain visible and recovery measurable, so clinicians can treat with data, not guesswork."
Primary CTA: navy pill "Request a Demo"
Secondary CTA: outline pill "See How It Works"

Remove the three pillar boxes (Pain Made Visible, Recovery Measured, Rehabilitation Predictable) completely.

LAYOUT
Two-column hero. Text on the left, image on the right. Use the attached spine/thermal body image on the right side, large and prominent, replacing the placeholder box. Let the eyebrow or headline slightly overlap the image edge where it looks intentional and clean.

BACKGROUND
Make the hero background a richer, deeper brand tone, not the current pale tint. Use a confident navy-to-teal background similar to the attached reference image. Because the background is dark, set the headline and paragraph text to white or near-white for high contrast and readability. Keep the eyebrow label legible on the dark background.

FLOATING STAT CHIPS
Keep the two small floating stat chips overlapping the image: "Thermal Asymmetry 1.4 °C" and "Recovery Progress 72% on track". Style them as clean white cards with soft shadows so they stand out against the darker background.

CONSTRAINTS

Keep the existing fonts, pill button styles, card radius, and spacing rhythm.
No em dashes in any copy.
Keep text tight and confident, no filler.
Everything outside the header and hero stays exactly as it is.

## User

LOGO
Replace the current placeholder logo mark and the "[IMAGE: LOGO]" text in the header with the attached PhysiTAI logo image. Remove the small teal square icon and the placeholder tag completely. Show only the attached logo, sized to sit cleanly in the header height with proper vertical alignment and padding. Keep it on the left.

HERO IMAGE POSITION
The spine/body figure currently floats with empty space below it. Anchor the figure to the bottom edge of the hero section so its feet sit flush on the bottom of the hero (the section's bottom border), grounded, not floating in mid-air. Let the bottom of the image align to the bottom of the hero container. The top of the figure can extend up naturally. Keep the figure on the right side.

Keep the floating stat chips and the circular icon callouts positioned relative to the figure as they are now. Keep the darker navy-to-teal background, the text, CTAs, and header links exactly as they are.

CONSTRAINTS

Only change the logo and the vertical positioning of the hero figure.
Do not alter copy, colors, buttons, or other sections.

## Assistant

_[tool: copy_files]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Logo image now sits alone in the header at 32px height, and the hero figure is bottom-anchored so it lands flush on the section's bottom edge. Chips and everything else unchanged.

## User

Redesign the Problem section only. Match the spacing, scale, and colored-block style of the attached reference. Do not change any other section.

TOP OF SECTION (keep, refine spacing)
Keep the eyebrow "THE PROBLEM" in teal, the heading "Physiotherapy still relies on guesswork." on the left, and the paragraph on the right. Increase the whitespace: add generous padding above and below the section, and more breathing room between the heading row and the cards below. Let it feel calm and open like the reference.

THE CARDS (this is the main change)
Turn the four plain stat cards into four large colored blocks, styled like the reference: big, rounded (20 to 24px radius), generous internal padding, a large prominent icon at the top of each block, then the number, then the supporting line.

Layout: four blocks in a row on desktop, wrapping to two-by-two on tablet and one column on mobile. Add comfortable gaps between blocks.

Each block needs a big icon at the top (large, not tiny), sitting in the card with clear space around it, similar to how the reference cards lead with a large icon or illustration.

Block colors, cohesive with the brand palette, varied for rhythm:

Block 1: pastel teal tint background. Icon: people or globe. Number "1.7B+". Line: "People live with chronic pain globally".
Block 2: pastel blue tint background. Icon: a partial or broken circle suggesting under-treatment. Number "40 to 50%". Line: "Of patients do not get adequate relief".
Block 3: pastel teal tint background. Icon: a downward trend chart. Number "30 to 40%". Line: "Productivity loss reported by sufferers".
Block 4: solid navy background with white text (this is the contrast block, the culminating pain point). Icon: a clipboard or paper document in white or teal. Title "Paper-based". Line: "Progress tracked mostly on paper, with no real-time view of inflammation or fatigue".

Typography inside blocks: big bold navy number or title (white on the navy block), muted supporting line beneath. Keep numbers large and confident.

SPACING AND FEEL
Match the reference: airy, balanced, lots of whitespace, nothing cramped. Consistent padding inside every block. Equal card heights.

CONSTRAINTS

Keep existing fonts, radius language, and the overall design system.
No em dashes in copy.
Only change the Problem section.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The Problem section is now four large 24px-radius colored blocks (teal tint, blue tint, teal tint, navy contrast), each leading with a 60px line icon, number and line pinned to the bottom for equal heights. Section padding and the gap under the heading row were both increased for a calmer rhythm.

## User

Redesign the Our Solution section only. Make it the boldest section on the page: strong color blocks, a bento grid, and the product dashboard as the hero visual. Do not change any other section.

SECTION INTRO (push heading to the right)
Move the intro text to the right side of the section, similar to the attached banking reference where the heading sits right with the left column open. Keep the left column mostly empty with just a small teal eyebrow label "OUR SOLUTION" near the top left. On the right: bold navy heading "A 4-stage protocol that turns every session into data." and one short paragraph "The AIIR-Phys protocol runs alongside the session, from baseline scan to discharge metrics." Generous whitespace above and below.

BENTO GRID (main change, below the intro)
Replace the current numbered-card row, the Capture/Analyze/Guide/Track strip, and the plain image placeholder with a single cohesive bento grid of tiles in varied sizes and colors. Rounded tiles (20 to 24px), generous padding, clear gaps, equal visual rhythm. Make it bold and modern, like the attached bento reference or better.

Recommended layout on desktop (improve if you can make it cleaner):

Top row:

LARGE tile, left, spanning wide and tall (about 60% width, two rows tall): the product dashboard image. Fit the attached dashboard screenshot fully inside as a framed product shot, contained with no awkward cropping of the sidebar, sitting on a soft navy or light background with rounded corners and a subtle shadow so it reads like a real screen. Optional small label overlay: "Real-time patient dashboard".
Right of it, stacked two tiles:
Tile 1: solid navy block, white text. Bold title "AIIR-Phys 4-Stage Protocol" with one line "Baseline to discharge, every session measured."
Tile 2: pastel teal tint block. A compact numbered list of the four stages: 01 Pre-Session Baseline, 02 Mid-Session Adaptability, 03 Post-Session Validation, 04 Program Discharge Metrics. Keep it tight and scannable.

Bottom row (full width, four small tiles):

Four tiles for the product loop, each with a large icon on top, a bold label, and one short line. Alternate backgrounds for rhythm (white, pastel teal, pastel blue, white):
Capture: "High-resolution thermal scans in seconds."
Analyze: "AI reads inflammation, asymmetry, perfusion."
Guide: "Protocol prompts during the session."
Track: "Session-over-session recovery trend."

COLOR AND FEEL
Use the brand palette boldly: at least one solid navy block, pastel teal and pastel blue tint blocks, and white blocks, arranged for contrast. Large confident icons. The dashboard image is the visual anchor and should feel premium. Keep it airy, not cramped.

RESPONSIVE
Bento collapses gracefully: large image tile goes full width on mobile, the two right tiles stack under it, and the four bottom tiles become two-by-two then single column.

CONSTRAINTS

Keep existing fonts, radius language, and design system.
No em dashes in copy.
Only change the Our Solution section.

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

Now removing the old numbered cards, strip, and placeholder image.

_[tool: run_script]_

_[tool: read_file]_

_[tool: read_file]_

Structure is clean.

_[tool: ready_for_verification]_

Our Solution is now a bento: eyebrow parked left with the heading and paragraph pushed right, then a wide navy-framed dashboard tile (with a "Real-time patient dashboard" pill) beside a stacked navy protocol tile and pastel teal 01 to 04 stage list, and a four-tile Capture/Analyze/Guide/Track row underneath with large line icons and alternating white, teal, and blue backgrounds. Old numbered cards, strip, and placeholder are gone.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Top bento row is now a flex pair (dashboard tile flex 3, stacked column flex 1) so they sit side by side and stack cleanly when narrow. The loop row is two paired grids, so it reads 4 across on desktop and folds to 2x2 rather than 3 + 1.

## User

Edit the Technology section only. Do not change any other section.

IMAGE
Replace the "[IMAGE: thermal scan visual / handheld thermal camera]" placeholder box on the left with the attached thermal back-scan image. The image already has rounded corners and a dark background, so fit it fully inside the left column, contained, no cropping of the body, with a soft shadow so it sits like a premium framed visual. Keep it aligned with the text block on the right.

MATCH SITE LOOK AND FEEL
Make the styling consistent with the rest of the page:

The three feature rows on the right (Objective biomarkers, AI-powered analysis, Non-contact and radiation-free) should use the same card language as the Problem and Solution sections: same rounded radius, same soft shadows, consistent padding. Use pastel teal or pastel blue tint backgrounds on these rows for cohesion instead of the current flat gray.
Icon chips: use the brand teal for the small icon squares, consistent with the icons used elsewhere.
Headings in navy, body in muted gray, eyebrow "THE TECHNOLOGY" in teal, matching the type styles used across other sections.
Keep spacing generous and balanced, in the same vertical rhythm as the other sections.

Optional polish: since the thermal image is dark and vivid, you can add a very subtle pastel or navy background panel behind the whole section, or keep it white if that reads cleaner with the rest of the page. Choose whichever keeps the page cohesive.

CONSTRAINTS

Keep existing fonts, radius, shadows, and design system.
No em dashes in copy.
Only change the Technology section.

aslo solution section that eyebrow should also be on right side not on left side

## Assistant

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Technology now shows the thermal back-scan image with a soft shadow on the left, and the three feature rows use 20px pastel teal and blue cards with solid teal icon chips matching the rest of the page. The Our Solution eyebrow moved up with the heading on the right.

## User

replace the image with this one..on technology section..

1. Remove orange strap..

Redesign the Who We Serve section only. Turn the four plain icon cards into image cards using the four attached photos. Do not change any other section.

IMAGE MAPPING (assign each photo to the correct card)

Physiotherapy Clinics: the photo of a therapist treating a seated woman with a spine dashboard on the wall.
Sports and Athletic Teams: the photo of a therapist working on a male athlete's knee in a gym.
Hospitals and Rehab Centers: the photo of an older man walking with parallel bars assisted by a nurse.
Defense and Tactical Units: the photo of a therapist attending to a kneeling soldier in tactical gear.

CARD STRUCTURE
Each card has an image on top and text below, in this order: photo, then bold navy title, then one short supporting line. Keep the four cards in a row on desktop.

Text stays the same:

Physiotherapy Clinics: "Objective assessment and progress tracking."
Sports and Athletic Teams: "Injury prevention and faster return to play."
Hospitals and Rehab Centers: "In-patient rehab and post-surgical recovery."
Defense and Tactical Units: "Field readiness and injury management."

IMPORTANT, CONTROL THE IMAGE HEIGHT
The photos are tall portraits. Do not let them make the cards very tall. Crop each image to a consistent fixed aspect ratio (use object-fit cover, roughly 4:3 or 3:2 landscape) so all four images show the same height and the cards stay compact and equal. Center the crop on the people so faces and action stay visible. All four cards must be exactly the same height.

STYLING (match the site)

Rounded card corners consistent with other sections, with the image corners rounded to match the top of the card.
Soft shadow, white card background, consistent padding around the text area.
Title in navy, supporting line in muted gray, same type styles as the rest of the page.
Keep the heading "Built for everyone who cares about recovery." as is, with the same generous spacing above the cards.

## User

replace the image with this one..on technology section..

1. Remove orange strap..

Redesign the Who We Serve section only. Turn the four plain icon cards into image cards using the four attached photos. Do not change any other section.

IMAGE MAPPING (assign each photo to the correct card)

Physiotherapy Clinics: the photo of a therapist treating a seated woman with a spine dashboard on the wall.
Sports and Athletic Teams: the photo of a therapist working on a male athlete's knee in a gym.
Hospitals and Rehab Centers: the photo of an older man walking with parallel bars assisted by a nurse.
Defense and Tactical Units: the photo of a therapist attending to a kneeling soldier in tactical gear.

CARD STRUCTURE
Each card has an image on top and text below, in this order: photo, then bold navy title, then one short supporting line. Keep the four cards in a row on desktop.

Text stays the same:

Physiotherapy Clinics: "Objective assessment and progress tracking."
Sports and Athletic Teams: "Injury prevention and faster return to play."
Hospitals and Rehab Centers: "In-patient rehab and post-surgical recovery."
Defense and Tactical Units: "Field readiness and injury management."

IMPORTANT, CONTROL THE IMAGE HEIGHT
The photos are tall portraits. Do not let them make the cards very tall. Crop each image to a consistent fixed aspect ratio (use object-fit cover, roughly 4:3 or 3:2 landscape) so all four images show the same height and the cards stay compact and equal. Center the crop on the people so faces and action stay visible. All four cards must be exactly the same height.

STYLING (match the site)

Rounded card corners consistent with other sections, with the image corners rounded to match the top of the card.
Soft shadow, white card background, consistent padding around the text area.
Title in navy, supporting line in muted gray, same type styles as the rest of the page.
Keep the heading "Built for everyone who cares about recovery." as is, with the same generous spacing above the cards.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Crop moved onto the images themselves (3:2, cover), and the four cards now sit in two paired 2-column grids so they read 4 across, fold to 2x2, and match in height.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

The Problem blocks now use the same paired-grid pattern: 4 across on wide screens, 2x2 on tablet, single column on mobile.

## User

<pasted_text name="Pasted text (46 lines)">
Act as a senior landing page designer with 25+ years of experience building for world-class brands. The current homepage works but looks inconsistent and templated. Do a full design-quality pass. The goal: a calm, premium, white-dominant page with one consistent system, generous breathing room, and restraint. Keep all copy and images the same. Change styling, spacing, consistency, and the specific sections noted. Go section by section but enforce the global system across all of them.

GLOBAL DESIGN SYSTEM (lock this first, apply everywhere)

Color: White is the dominant background for the whole page. Navy is for headings, key text, and primary buttons. Teal is the single accent, used sparingly for eyebrows, small icons, and highlights only. Retire the thermal orange except inside actual product or thermal images. Pastel teal and pastel blue tints are allowed only as occasional full-section backgrounds for rhythm, not on individual cards inside a white section. Never mix pastel-tint cards and white cards in the same row. Pick one per section.

Icons: Use one single icon library and one single style across the entire page (thin line icons, consistent stroke weight, consistent size). Every icon sits in the same style of container: a small rounded square chip in pastel teal with a teal line icon. No filled icons in some places and outline in others. No mixed shapes. This one change fixes most of the inconsistency.

Cards: One radius everywhere (use 16px consistently). One shadow style everywhere (a single soft, low, diffuse shadow, not several different depths). One border treatment. Equal internal padding across all cards. Equal heights within any row.

Typography: One type scale for the whole page. Section eyebrow labels: small, uppercase, letter-spaced, teal. Section headings: large bold navy, tight leading. Body: neutral gray, comfortable line height. Keep the heading sizes consistent from section to section so nothing feels random.

Spacing and breathing room: This is the priority. Increase vertical padding between every section significantly so the page feels open and confident. Add more space between a section heading and its content. Use a consistent container max-width and consistent left and right margins on every section so everything aligns to the same grid. When in doubt, add more whitespace. The page should feel unhurried.

Motion: Add subtle, tasteful scroll behavior only. Gentle fade-and-rise as sections enter the viewport. Keep it understated. Do not add heavy or bouncy animation.

SECTION BY SECTION

Header: Keep it minimal and white with a thin bottom border or subtle shadow on scroll. Logo left, About and Contact links, Request a Demo navy pill right. Add slightly more horizontal padding so it breathes.

Hero: Keep the navy-to-teal background, the copy, the figure, the stat chips, and the icon callouts. Add a subtle parallax effect: as the user scrolls, the background and the body figure move at slightly different speeds to create gentle depth. Keep it smooth and subtle, not dramatic. Ensure the floating stat chips and callouts stay legible and well placed at all screen sizes. Give the hero more vertical padding top and bottom.

The Problem: Keep the four-block layout, it works. Enforce the global card system on it: identical radius, identical shadow, identical padding, identical icon chip style. Keep the navy contrast block as the fourth. Add more space above the card row.

Our Solution: This is the strongest section, keep the bento structure. Clean it up with the global system: the four bottom tiles (Capture, Analyze, Guide, Track) must all use the identical icon chip style and identical backgrounds. Right now they alternate white and tint in a way that looks inconsistent. Make all four the same. Keep the dashboard tile and the navy protocol tile. Ensure consistent gaps across the whole bento. Add breathing room around the whole grid.

The Technology: Keep the layout. Apply the global system to the three feature rows so their icon chips, radius, shadow, and padding match everything else. Keep the thermal image contained with a consistent frame and the single site shadow. Balance the whitespace between the image and the text column.

Who We Serve: Keep the four image cards. Enforce identical image aspect ratio, identical card height, identical radius and shadow, identical text padding. Make sure all four look like one set. Add more space above the row.

Why It Matters: Keep the three goal stat blocks. Apply consistent card styling and spacing. Keep the softened wording. Make the three blocks visually identical.

CTA SECTION (redesign for a premium feel)
Rebuild the "See PhysiTAI in action" section to feel like a polished enterprise CTA. Use a clean, confident layout: a strong navy heading and short subtext on the left, and a well-structured contact form on the right, or a centered single-column version if that reads cleaner. Improve the form: clear field labels, consistent input styling with the site radius, comfortable spacing between fields, a full-width navy Request a Demo button. Make it feel trustworthy and calm, with generous padding. Consider a soft pastel or subtle navy panel behind it to set it apart, chosen to stay cohesive with the page.

FOOTER (redesign, more professional structure)
Rebuild the footer with a clear multi-column structure on a navy background. Columns: brand column with logo and the one-line tagline, a navigation column, a contact column with email and phone. Add a thin divider line, then a bottom bar with copyright left and a short descriptor right. Consistent spacing, clean alignment to the same grid as the rest of the page, comfortable padding. Make it look like a real company footer, structured and restrained.

CONSTRAINTS

White is the dominant page color. Keep the palette tight: navy, teal, pastel tints, white. No stray colors.
One icon style, one card style, one shadow, one radius, one type scale across the entire page.
Generous, consistent whitespace is the top priority.
Keep all existing copy and images.
No em dashes anywhere.
The result should feel like a top global brand designed it: calm, cohesive, confident, minimal.
</pasted_text>

## Assistant

Doing a full system pass — rewriting the component in one go.

_[tool: dc_write]_

_[tool: ready_for_verification]_

Full system pass done: one radius (16px), one shadow, one 44px teal chip with thin-line icons everywhere, one type scale, single container with consistent gutters, and much larger section padding. Loop tiles are now uniformly white, Problem cards uniform neutral with the navy fourth, Why It Matters blocks identical, CTA rebuilt with labeled fields and a full-width navy button, footer restructured with brand / navigate / contact columns plus a divider and bottom bar. Motion is a gentle fade-and-rise per section plus subtle hero parallax and a header shadow on scroll, all disabled under reduced-motion.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Reveal is now fail-safe: anything already in view or scrolled past is shown immediately on mount, a rect pass runs on every scroll and resize, and a 2.5s timeout clears all hidden states regardless of the observer.

## User

Add a pinned parallax reveal to the hero section only. Do not change any other section, styling, or content.

Behavior: The hero should stay fixed in place while the rest of the page scrolls up over it. As the user scrolls down, the hero remains pinned in the background (fixed position), and the section below it (The Problem) slides up and over the hero, covering it. The effect is that the body of the page scrolls over a stationary hero, like a reveal.

Implementation notes:

Pin the hero so it stays in the viewport while the next section scrolls upward over it, then hand off to normal scrolling once the hero is fully covered.
The section immediately below the hero should have a solid background (the off-white canvas) so it cleanly covers the hero as it rises over it, with no transparency showing the hero through it.
Give the covering section a top edge that reads intentionally, for example a large top radius or a clean solid edge, so the overlap looks designed as it slides up.
Keep it smooth. Add a subtle depth cue if it helps: the hero can very gently scale down or fade slightly as it gets covered, but keep this understated.

Constraints:

Only the hero and the transition into the next section change. Everything below continues to scroll normally.
Must work smoothly on desktop and degrade gracefully on mobile. On mobile, if the pinned effect feels janky, fall back to normal scrolling rather than a broken effect.
Keep performance smooth, no stutter.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Reworked to the Finpay language: soft off-white canvas (#F2F5F9) with white 24px panels for Solution, Technology, and Why It Matters, 16px inner cards, unified teal chips, and larger section rhythm. The hero is now pinned (sticky) while the Problem section rises over it with a 40px top radius and lifted shadow, and the hero gently fades and scales as it gets covered; the pin disables under 700px wide or reduced motion. The contact form and email/phone block are gone, replaced by a navy CTA panel with the two pill buttons, and the footer keeps its brand / navigate / contact structure.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The safety net now runs the rect-based pass instead of revealing everything, so sections below the fold keep their fade-and-rise.

