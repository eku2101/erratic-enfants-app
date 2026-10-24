# Implementation decisions for Erin and Robert

Prepared 24 October 2026. Initially local-only work, based on Robert's public commit `af95dcdbc74a0cde1d2e7164d7a5ff75dc53be3f`. Erin subsequently requested a public app and a new GitHub repository under eku2101; the publication follow-up below records that scope change.

## Order and scope

Read in Robert's requested order: AGENTS, 3Rs, src, wireframes, then chat. Reviewed all four saved wireframe images visually. This version remains separate from the earlier live sites. Erin's later explicit requests add the two movie links to Recharge and authorize separate publication and GitHub storage. No shared-repository edits or Slack submission are included.

## Requirements implemented

| Requirement | Local implementation |
| --- | --- |
| Strict 4:5 canvas | Exact `width: min(1080px, calc(100vw - 2rem), calc((100dvh - 2rem) * 4 / 5))`; max 1080 × 1350; aspect ratio 4/5; border-box; flex none; overflow hidden |
| One screen, low navigation burden | One main, one visible stage, no tabs, feeds, menus, or dashboard |
| Wireframe silhouette | Progress/timer header, one central stage, persistent brand/footer, Begin at bottom right |
| Reflect | The wireframe's Overworked / Disrespected / Alone and its six follow-up choices; optional single feeling word |
| Release | 90 seconds of tailored support with 4-in/6-out breathing or eyes-open grounding |
| Recharge | A short joke, compassionate reminder, one next classroom action, and two optional external movie links |
| Exact sequence timing | 10 + 90 + 20 = 120 active seconds; pause and text entry explicitly stop the clock |
| Dim color palette | All mandated primary/surface/card, sage/teal/lavender and primary/secondary text variables preserved |
| Fluid layout | Canvas-relative `cqw` units, clamp bounds, and compact-canvas component rules |
| Non-intrusive progress | Native progress with total elapsed seconds; three visual segments; per-step clock as drawn |
| Harbor proposal | Original moon/ship/wave vector scene, subtle opposing motion, optional original repeating ocean-like audio on landing |
| Begin then no interaction | Return to the harbor at the end of the 10-second check-in |
| Accessible controls | Semantic headings/sections, labeled radio groups, visible keyboard focus, real buttons, pause, reduced motion, zoom allowed |

## Conflicts reconciled explicitly

1. **AGENTS has unresolved Git merge markers.** The root file and reference copy are identical to upstream. Implement the shared substantive constraints from both sides; do not claim the upstream document is clean or fully resolved. Robert still owns the final agreed AGENTS text.
2. **The source stylesheet is a fenced Markdown response.** Runtime CSS contains valid CSS only. Preserve the original reference, exact frame formula, and exact mandatory colors. Complete missing progress/footer/button rules and enforce `[hidden]` so hidden sections never appear together.
3. **Wireframe versus AI dialog.** A chat draft replaces the simple feeling labels and optional word with more clinical labels and radio choices. Erin explicitly asked for the wireframe, so its simple labels and branch shape win. Keep `Own failings` to match it, while the support text says that a feeling is not a verdict on teaching. This label is worth reviewing together.
4. **Two versus five minutes.** An old note on the landing sketch says five minutes. Updated AGENTS and the 10 / 90 / 20 timings say two; this version is strictly two active minutes. The previous live site's five-minute option remains untouched.
5. **10-second breathing versus 90-second release.** Ten seconds is the 4+6 breathing cycle; it repeats throughout the 90-second Release stage.
6. **Clips in Recharge versus no media distractions.** The first demo kept clips outside the app. Erin subsequently explicitly requested the two movie links inside Recharge. That instruction takes precedence over the guideline to hide all external links during the session. Add only these two optional links in step 3; no player, autoplay, feeds, or gallery. Clicking either source pauses an active session and opens a new tab. The base active-time sequence remains 10/90/20 seconds.
7. **Literal MP3 versus self-contained assets.** The email describes repeating wave audio. This version uses an original generated WAV loop rather than importing unprovided third-party audio. It is opt-in, loops, and stops before Reflect.
8. **Prevent zoom versus accessibility.** Source examples disable zoom; the structural guidelines also call for accessibility. This adaptation allows zoom, retains real touch targets, pauses on small windows, and provides a compact-viewport message when the frame is too small. No claim that clipping alone guarantees accessibility.
9. **Timer announcements.** Do not announce every countdown tick. The output can be read on demand; stage changes and in/out cues use polite announcements.
10. **Strict fitting versus arbitrarily small displays.** The canvas never changes ratio or scrolls. At frame widths below 280px, a clear rotate/enlarge message replaces inaccessible controls and pauses a running session. Full usability on every zoom/device/keyboard combination is not claimed; physical-phone and screen-reader review remain part of Erin's evaluation.

## Research and content provenance

The reference files connect their design proposals to the NotebookLM research collection. These AI dialogs are design references, not independent verification of the papers or proof that this prototype treats stress. User-facing copy avoids clinical outcome claims and presents ordinary supportive prompts. The exact colors, geometry, and chosen humor are design choices to evaluate with teachers.

Short classroom advice and the 4/6 rhythm are adapted from the approved Erin v7 source at commit `e2ae9bf1731d7630e07374ffd15e3b999cdb2e04`. The approved source is unchanged. This separate runtime focuses on the wireframe rather than carrying the full dashboard, journal, movie library, and Confidence Studio into the timed flow.

## Button review follow-up — 24 October 2026

After Erin reported unresponsive controls, the standalone bundle was tested through the local preview server, including every button and every check-in choice. No inactive control was reproduced in that version. The timed choice flow and automatic pause while typing could be unclear, so Pause/Resume now has visible text, the check-in explains its ten-second interval, and the text field explains how to resume. Radio selections also announce their selection and next step for assistive technology. The fixed canvas, wireframe stages, total active time, and original references are unchanged. These revisions remain local-only; an unidentified published URL is not covered by this verification.

## Recharge movie-link follow-up — 24 October 2026

Added the existing School of Rock / Learning in Song and Freedom Writers / I Am Home source URLs inside Recharge, with scene names and a visible new-tab label. Both source pages were checked. They link to full clips; no twenty-second cut or download is implied. Preserve the three original supportive messages, remove only the decorative "A little perspective" label, and tighten Recharge spacing so two touch-friendly links fit inside the same fixed 4:5 canvas. Both links remain available on the completed summary. The original upstream AGENTS snapshot is unchanged; this request-specific exception is recorded here.

## Publication follow-up — 24 October 2026

Erin requested a ReadMe.md, public app access, and GitHub storage, selecting a new repository under her eku2101 account. The target app is https://erratic-enfants-app.eku2101.chatgpt.site, with source in https://github.com/eku2101/erratic-enfants-app. Public access applies to the app; the source repository is private. Only this app project is saved, including its code, standalone demo, design references, and verification artifacts. Unrelated workspace folders and private weekend notes are excluded. Robert's shared repository and both older Sites remain unchanged.

## Next joint review

Robert: finalize the upstream rules, review the separate runtime, upload agreed files to GitHub, and handle submission when agreed. Erin: review the phone experience, classroom language, and movie references. Confirm the nine assignment criteria against the actual rubric; it is not present in these references.
