# Erratic Enfants — Teacher Reset App

A focused, phone-friendly two-minute pause for teachers: **Reflect → Release → Recharge**. This app-format prototype uses a fixed 4:5 canvas, one visible step at a time, and a quiet dark palette.

- **App address:** https://erratic-enfants-app.eku2101.chatgpt.site
- **Source repository:** https://github.com/eku2101/erratic-enfants-app
- **Standalone demo:** open `Erratic-Enfants-App-Preview.html` in Chrome or Edge.

The app and GitHub source repository are public. Robert and other reviewers can read the code and this ReadMe without signing in. This is a separate version; it does not replace Robert's shared repository or either earlier Erratic Enfants website.

## Purpose and classroom connection

Erin's classroom experience informs the central question: **How can this app help me take a breath, recognize what I'm feeling, and return to my students with a clearer head?** When an activity loses students' attention and classroom noise rises, the app offers a brief check-in, a simple practice, and one manageable next action.

Robert's wireframes, AGENTS.md, and research-informed design conversations guide the sequential structure, restrained interface, and fixed canvas. The app avoids feeds, tabs, and a dashboard of competing activities.

## How to use it

1. Select **Begin**, then choose **Overworked**, **Disrespected**, or **Alone**. Follow-up choices personalize the support; Alone allows an optional feeling word.
2. Follow a comfortable four-second inhale / six-second exhale rhythm, or choose **Prefer grounding?** for an eyes-open alternative.
3. Read the brief joke, reassurance, and practical next step in Recharge. The two movie links are optional.
4. Select **Return** whenever you want to leave the reset.

| Step | Active time | Purpose |
| --- | --- | --- |
| Reflect | 10 seconds | Acknowledge the present feeling |
| Release | 90 seconds | Breathing or sensory grounding |
| Recharge | 20 seconds | Encouragement and a classroom next step |

The sequence totals **120 active seconds**. Selecting a check-in option does not skip its timer. **Pause/Resume**, typing in the feeling field, leaving the tab, or opening a movie link pauses the clock. Resume continues from the same point. Begin without a check-in selection returns to the harbor after ten seconds. The completed takeaway stays visible until Return.

## Optional movie moments

Recharge includes links to these full source clips on Rotten Tomatoes:

- [School of Rock — Learning in Song](https://www.rottentomatoes.com/m/school_of_rock/videos/ScT_OYLuqaPK): finding another way into learning when a lesson needs to change.
- [Freedom Writers — I Am Home](https://www.rottentomatoes.com/m/freedom_writers/videos/FCnSJ1fiwyJF): the sense of belonging a teacher can help create.

Each opens in a new tab and pauses an active reset. They require internet access and are full clips, not edited twenty-second excerpts. Film footage is not downloaded, embedded, or rehosted. The corrected I Am Home URL was verified against the source's featured video title; details are in `MOVIE-REFERENCES.txt`.

## Design and accessibility

- One semantic `<main>` with a progress header, sequential sections, and a footer inside the canvas.
- Robert's exact 4:5 sizing formula, capped at 1080 × 1350, with overflow hidden.
- Muted sage, teal, and lavender accents on dark slate; fluid typography and touch-friendly controls.
- Visible keyboard focus, named radio groups, polite announcements, and visible Pause/Resume labels.
- Reduced-motion support and optional landing-page wave sound. Sound stops when the reset begins.
- Browser zoom remains available. Very small frames show a rotate/enlarge message and pause the session.

The app stores no check-in data, has no account system or app analytics, and clears the temporary feeling word on Return or reload. Following a movie link takes the teacher to a third-party service. The standalone reset works offline; its external links require a connection.

## Run and edit locally

Use **Node.js 24**, the version used for verification. No package installation is needed.

```sh
git clone https://github.com/eku2101/erratic-enfants-app.git
cd erratic-enfants-app
node server.mjs
```

Open `http://127.0.0.1:4177` on that computer. Keep the command running while using this local address. It is a loopback preview, so another device cannot reach it through its own localhost address. Use the public app address for phone review.

After editing the files in `dist/`:

```sh
node build-preview.mjs
node --test tests/*.test.mjs
```

The first command rebuilds the self-contained HTML demo. To test that exact bundle instead of the separate source modules:

```sh
node server.mjs --preview
```

## Project files

| File or folder | Role |
| --- | --- |
| `dist/index.html` | Semantic app structure and Recharge movie links |
| `dist/styles.css` | Fixed canvas, palette, responsive spacing, focus states |
| `dist/app.mjs` | Buttons, stage presentation, sound, focus, and pausing |
| `dist/session.mjs` | Deterministic timing and breathing rhythm |
| `dist/content.mjs` | Check-in choices and tailored teacher support |
| `dist/assets/` | Original vector icon and generated wave audio |
| `build-preview.mjs` | Rebuilds the standalone HTML demo |
| `server.mjs` | Local preview server |
| `tests/` | Timing, content-route, and design-contract checks |
| `review/` | Browser verification notes, measurements, and screenshots |
| `references/robert/` | Snapshot of Robert's public design references |
| `AGENTS.md` | Preserved upstream instructions to read before editing |
| `IMPLEMENTATION-NOTES.md` | Design conflicts, decisions, and request-specific exceptions |
| `FOR-ROBERT.txt` | Short handoff guide |
| `.openai/hosting.json` | Sites project identity and static deployment directory |

## Working with AGENTS.md

Read `AGENTS.md` first, then `IMPLEMENTATION-NOTES.md`, the 3Rs reference, source, wireframes, and design dialogs. The reference snapshot is pinned to Robert's public commit `af95dcdbc74a0cde1d2e7164d7a5ff75dc53be3f` in [rl3280/5003_03](https://github.com/rl3280/5003_03).

The upstream AGENTS file contains unresolved merge markers, and the original source CSS includes Markdown fences. Those reference files are preserved for review. The runtime uses valid CSS and reconciles shared constraints explicitly in the implementation notes. Erin's later request for two optional Recharge links is documented as an exception to the original no-external-links guideline.

The design dialogs cite the NotebookLM research collection. They are design references, not independent verification of every cited paper. Robert owns the final shared guidelines; this repository records Erin's working app version.

## Verification and current limits

All **14 automated tests** pass. Browser checks cover the full three-step flow, all check-in choices, pause/resume, sound and motion, grounding, reset behavior, and both movie destinations. The current Recharge layout was checked at 320 × 568, 390 × 844, and 1366 × 900 viewport sizes without clipping or scrolling. See `review/MOVIE-LINKS-VERIFICATION.md` for details.

Phone-size checks are browser emulation; physical phones, virtual keyboards, and a full screen-reader audit still need human review. This is a browser-based app prototype, not a native App Store package. The movie files have not been cut into twenty-second excerpts.

## Publishing

Sites publishes only the `dist/` runtime, using the identity in `.openai/hosting.json`. The GitHub repository saves the editable source, demo, references, and verification artifacts. A GitHub push alone does not deploy a new Sites version; publication is a separate, explicit step. Do not commit credentials, environment files, or unrelated personal workspace material.

## Credits

Erin Uhrine: classroom perspective, prototype development, Recharge content selection, and review. Robert Lewis: design framework, wireframes, AGENTS/CSS guidance, and research conversations. Movie clips remain with their original rights holders and are linked through Rotten Tomatoes.
