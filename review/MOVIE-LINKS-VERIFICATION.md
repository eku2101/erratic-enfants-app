# Recharge movie links — 24 October 2026

The generated standalone HTML is tested via the loopback preview (`node server.mjs --preview`); it is the same artifact delivered in the email package. No live deployment or shared GitHub change is part of this work.

## Sources

- School of Rock — Learning in Song: https://www.rottentomatoes.com/m/school_of_rock/videos/ScT_OYLuqaPK
- Freedom Writers — I Am Home: https://www.rottentomatoes.com/m/freedom_writers/videos/FCnSJ1fiwyJF

The prior saved Freedom Writers URL ended in ZXDsx0U754wA and actually selected Paco Did It. The corrected URL was taken from the source page's I Am Home link and updated in the demo, references, handoff guide, and existing contract test.

These are full source clips on Rotten Tomatoes, not edited twenty-second files or embedded players. The test verifies source destinations and featured clip titles. Playback availability, advertising, consent prompts, and regional restrictions on the third-party site are outside the demo's control; no footage was downloaded or rehosted.

## Implementation checks

- All 14 existing automated checks pass, including timing and exact 4:5 geometry declarations. The external-URL check now allows only the two requested clip destinations.
- Optional links appear only in Recharge and the completed summary.
- Both anchors use target="_blank" and rel="noopener noreferrer" and have a visible new-tab description.
- Clicking a clip pauses the active reset. Resume continues the remaining time; the reset is not restarted.
- Recharge retains the joke, reassurance, and classroom next step. Only its decorative perspective label was removed to make room.
- The reset has no new external asset dependency and still runs offline; following the movie links requires internet access.

Phone checks use browser viewport sizes, not physical-device testing. Direct file-protocol browser automation is not covered; the actual self-contained artifact is exercised over local HTTP.

## Browser results

- Clicked School of Rock in Recharge and verified the new tab's featured heading: "The School of Rock: Official Clip - Learning in Song".
- Clicked the corrected Freedom Writers link from the regenerated standalone demo and verified the featured heading: "Freedom Writers: Official Clip - I Am Home". The video player showed the expected 2:01 source clip.
- Observed an active Recharge timer pause at 0:12 after a movie-link click. Resume continued from that point; another link click paused it again.
- The final regenerated build reached Recharge and then Complete through the normal sequence. Links remained available at Complete, and Return returned to the harbor.
- Tested the Relax and Alone summaries. At 320 × 568, 390 × 844, and 1366 × 900 viewport sizes, all checked Recharge content stayed inside its stage with no document scrolling. Link heights were 44px on both phone sizes and approximately 68.5px at desktop size.
- Final app console logs contained no warnings or errors.
- `movie-layout-measurements.json` records the final layout checks. `recharge-movies-mobile.jpg` and `recharge-movies-desktop.jpg` show the updated screen.
