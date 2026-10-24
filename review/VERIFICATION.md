# Verification — 24 October 2026

Latest change: optional movie links have been added to Recharge at Erin's request. See MOVIE-LINKS-VERIFICATION.md for the new link checks and screenshots. Earlier screenshots below document the prior button-review version.

## Automated checks

14 Node tests pass. They cover exact 10/90/20 stage boundaries, elapsed-time pausing, delayed clock ticks, idle return, four-in/six-out breathing, all six wireframe choices plus Alone and fallback routes, bounded temporary feeling text, canvas declarations, semantic structure, absence of external media/storage, palette/reduced-motion rules, and exact preservation of the reference AGENTS file.

The standalone HTML's combined JavaScript parses successfully. It contains no external script or stylesheet dependency; its audio and icon are embedded. During the button review, the actual generated standalone HTML was served with `node server.mjs --preview` and exercised in the browser. The original bundle matched the Downloads copy byte for byte. Direct `file://` opening is not covered by browser automation, nor is any unidentified public website link.

## Actual browser checks

### Button review follow-up

The generated standalone file was checked again after adding visible Pause/Resume labels, a ten-second check-in explanation, and a typing-pause instruction. Every feeling button and all six radio options responded. Change feeling, Alone text entry, keyboard Begin, sound on/off, motion on/off, pause/resume, and both directions of the breathing/grounding switch responded. The paused countdown stayed unchanged across two observations. The updated source still passes all 14 automated checks. Phone-size checks use browser viewport emulation, not a physical phone. No dead button was reproduced in this separate app; the exact public URL the user was using was not provided.

The updated standalone completed the full Reflect → Release → Recharge → Complete sequence in the browser. Both the mid-session Return and completed-session Return worked; starting again cleared the typed feeling. At 320 × 568 and 390 × 844 viewports, updated instructions and controls fit inside the unchanged 4:5 canvas without scrolling. The updated Pause/Resume controls were also exercised at 1366 × 900. No browser errors or warnings were reported. `buttons-checked-mobile.jpg` shows the visible Resume control and explanation.

Tested through the Codex in-app browser at `http://127.0.0.1:4177`:

- Started with Begin, paused/resumed, selected all six detail radios, and used Alone with typed text.
- Observed automatic Reflect → Release → Recharge → Complete through a real full session. Completion showed 0:00, a full progress bar, the final takeaway, and Return.
- Switched breathing → grounding → breathing while preserving the session.
- Confirmed Return clears the prior feeling word before a new session.
- Confirmed an untouched check-in returns to the harbor with “No rush” after the ten-second check-in.
- Confirmed text-field focus pauses the clock and Resume continues it.
- Checked motion-off state; wave audio's play promise resolved and paused=false, then the off toggle stopped it. Audio's perceptual quality was not assessed by a human listener.
- Activated Begin using the Enter key; checked radio selection and focus; only one step section was visible.
- Tested the rotate/enlarge message at 280 × 500 viewport (248px canvas) after the small-frame guard was added.
- No browser warning/error logs were reported at the final check.

## Geometry

`layout-measurements.json` contains actual DOM bounding-box measurements for Reflect, Release, and Recharge at six viewport sizes. Each tested stage had no document scrolling and no checked content/control outside its central stage. The observed ratio was 0.8 within subpixel rounding (largest deviation about 0.000007).

| Viewport | Observed canvas |
| --- | --- |
| 320 × 568 | 288 × 360 |
| 390 × 844 | approximately 358.4 × 448 |
| 768 × 1024 | 736 × 920 |
| 1366 × 900 | approximately 694.4 × 868 |
| 2000 × 1600 | 1080 × 1350 |
| 844 × 390 | approximately 286.7 × 358.4 |

All measured visible button targets were at least 44px high. Check-in row targets were also 44px or higher. Native radio controls sit within their clickable row labels.

Computed palette contrast examples: primary text on primary background 14.26:1; secondary text on primary background 6.99:1; primary text on surface 12.22:1; dark text on sage 7.75:1; dark text on teal 7.45:1. These checks are not a complete accessibility audit.

## Scope and limits

- Measurements use browser viewport emulation, not physical iPhone/Android testing. Mobile virtual keyboards, screen readers, OS text scaling, and full WCAG conformance remain unverified.
- Very small frames show a rotate/enlarge message instead of shrinking required controls indefinitely. This is documented, not hidden behind a claim of universal fitting.
- The exact root AGENTS copy still contains Robert's upstream merge conflicts. Reconciliation is documented in `IMPLEMENTATION-NOTES.md` for his review.
- The two-minute clock counts active time. Explicit pauses, hidden-tab pauses, and text-entry pauses can extend wall-clock duration.
- Neither published website was deployed or edited. The approved source checkout remains clean at `e2ae9bf1731d7630e07374ffd15e3b999cdb2e04`. The shared GitHub repository was only read.
- This is an app-format web prototype, not a native or installed app-store build.
