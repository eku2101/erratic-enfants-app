# UI/UX & Inter-AI Semantic Design Guidelines for First-Year Teacher Wellbeing App

<<<<<<< HEAD
You are an experience Website Coder who has been assigned the following task:
The majority of first year teachers in USA's public school system do not continue a career in teaching more than five years.  One reason is the scacity of resources available to first teachers _in_the_classroom_ in need of wellness support.
The literature in your library offers rich, evidence-based insights into teacher stress, cognitive load, and brief mindfulness practices. You can translate these research findings into concrete HTML structure and CSS styling patterns to support a 2-minute wellness experience.
=======
> **CRITICAL CONTRACT FOR AI ASSISTANTS (Copilot / Codex / Gemini):**
> This repository defines a strict design and structural contract to support first-year public school teachers facing high cognitive load and burnout (Jennings et al., 2017; Taylor et al., 2021). 
> All AI models generating or editing code in this project MUST read and adhere to these guidelines. Do NOT create separate sandbox implementations without inheriting these rules.
>>>>>>> b22dec4f8f15d426ec16fb3c2f07fdb5dec4cb9a

---

**Structural HTML Design Literature Grounding:**

Taylor et al. (2021) and Roeser et al. (2012) emphasize that teachers face high attentional demands and executive function fatigue. Scrolling, shifting layouts, or sticky elements create micro-friction that breaks attentional focus.

**Content Presentation & UI Elements Literature Grounding**

Birtwell et al. (2021) and Gold et al. (2010) show that short, focused mindfulness interventions require uninterrupted presence to achieve cognitive reappraisal. Media distractions during the timed exercise destroy efficacy.

### 1. Structural HTML Design: Minimizing Cognitive Demands
Teachers experience chronic executive function demands and severe time poverty (Roeser et al., 2012; McCarthy & Lambert, 2006). The interface must offer zero navigation friction.

<<<<<<< HEAD
- **Single-View Architecture (`<main>` Container):**
  - Avoid complex navigation bars, dropdown menus, or multi-tab layouts. Provide a single full-screen `<main>` container that loads directly into the 2-minute experience.
  - Use semantic HTML tags (`<header>`, `<section>`, `<footer>`) logically so screen readers and assistive tools process the page seamlessly.
- **Sequential Step Sections (`<section class="step">`):**
  - Break the 2-minute intervention into a clear 3-part micro-flow:
    1. **Reflect/Acknowledge:** A simple prompt encouraging non-judgmental awareness of present stress.
    2. **Release/Practice:** A focused micro-activity (e.g., progressive muscle relaxation or sensory grounding).
    3. **Recharge/Intention:** A brief closing summary to transition back into the classroom.
- **Micro-Progress Indicators (`<progress>` or `role="progressbar"`):**
  - Include a non-intrusive progress bar at the top of the viewport. Knowing the activity strictly takes 2 minutes relieves the fear of losing precious prep or instructional time.
<!-- Functional Container & Viewport Guidelines (Cognitive Load Reduction) -->
- **Functional Viewport & Stage Wrapping (`<div>` Containers):**
  - **Viewport Shell (`.app-viewport` & `.app-canvas`):** Enclose `<main>` within a fixed-aspect container using `aspect-ratio: 4 / 5` and `overflow: hidden` to prevent layout shifts or scrollbars on mobile displays.
  - **Focus Stage (`.focus-stage`):** Use internal `<div>` wrappers inside active `<section>` elements to lock user attention onto a single focal point (e.g., breathing visualizer or text prompt).
  - **Visual Component Separation:** Keep decorative rhythm/animation elements in dedicated `<div>` nodes (e.g., `<div class="breathing-guide" aria-hidden="true">`) to separate text readability from visual breathing cues.
=======
- **Single-View Architecture (`<main class="app-canvas">`):**
  - Do NOT create multi-page navigation, scrollable pages, or sticky external footers.
  - The entire application MUST load into a single, un-scrollable `<main>` container formatted as a fixed 4:5 frame.
- **Sequential 3-R Micro-Flow (`<section class="focus-stage">`):**
  Structured sequentially (Jackman, 2022) using `data-step` attributes:
  1. `data-step="reflect"`: Present moment stress acknowledgment (Kabat-Zinn, 2003).
  2. `data-step="release"`: Guided 10-second rhythmic breathing/grounding (Birtwell et al., 2021).
  3. `data-step="recharge"`: Cognitive reappraisal and classroom return summary (Taylor et al., 2016).
- **Non-Intrusive Progress Indicator:**
  - Standard `<progress>` element locked at the top of `.app-canvas` to communicate time certainty (strictly 2 minutes).


---

### 2. Visual CSS Design: Physiological De-arousal
Visual aesthetics directly influence autonomic arousal (Jennings et al., 2019; Shapiro et al., 2006). All styling MUST use the low-luminance desaturated variables below.

<<<<<<< HEAD
- **Color Palette & Lighting:**
  - **Calming Hues:** Utilize soft, muted colors (such as slate blues, soft sage greens, or warm earthy neutrals) using CSS variables (`--bg-color`, `--accent-color`). Avoid stark, high-contrast pure white (`#FFF`) backgrounds or harsh red/alert tones that mimic classroom urgency or notifications.
  - **Dark Mode / Low Luminance:** Apply low-luminance CSS styles to prevent screen glare, creating a visually restful environment for an exhausted teacher sitting at their desk.
- **Typography & White Space:**
  - **Generous Spacing:** Apply generous CSS padding, margins, and line height (`line-height: 1.6`) around text blocks.
  - **Typography:** Use clean, sans-serif or soft rounded serif fonts with minimal copy per screen to reduce visual noise and prevent cognitive fatigue.
- **Subtle, Rhythm-Based CSS Animations:**
  - **Pacing Visuals:** Implement keyframe animations (such as a slowly expanding and contracting circle) to guide rhythmic breathing (e.g., 4-second inhale, 6-second exhale).
  - **Smooth Transitions:** Set all screen or state changes to use smooth CSS transitions (`transition: all 0.5s ease-in-out`). Avoid sudden layout shifts, abrupt pop-ups, or jarring animations that trigger automatic stress responses.
=======
```css
/* ==========================================================================
   INTER-AI MANDATORY CSS VARIABLES (DO NOT MODIFY OR OVERWRITE WITH HARDCODED PX)
   ========================================================================== */
:root {
  --bg-primary: #12181b;       /* Dark slate base */
  --bg-surface: #1e262b;       /* Surface container */
  --bg-card: #283238;          /* Interactive elements */
>>>>>>> b22dec4f8f15d426ec16fb3c2f07fdb5dec4cb9a

  --accent-sage: #8ab49c;      /* Reflect step highlight */
  --accent-teal: #6db3b1;      /* Release step highlight */
  --accent-lavender: #a3a7db;  /* Recharge step highlight */

  --text-primary: #e0e6ed;     /* Low-glare primary copy */
  --text-secondary: #94a3b8;   /* Muted body text */

<<<<<<< HEAD
- **Distraction-Free UI (No Feeds or Social Elements):**
  - While social media can contain self-care content, it often carries high cognitive noise and comparison traps. Hide unnecessary links, notifications, social share icons, or external feeds using CSS layout controls (`display: none` for non-essential controls during the 2-minute session).
- **Bite-Sized Interaction Controls:**
  - Use large, touch-friendly button elements (`<button>`) with clear, supportive microcopy (e.g., "Begin 2-Minute Reset" or "Release").
  - Provide simple visual focus states (`:focus-visible`) for accessibility without aggressive outline borders.
- **Empowering Summary Display:**
  - Conclude the session with a minimal summary card highlighting a key self-care or self-compassion theme. Using CSS card layouts (`border-radius`, subtle drop shadows), present a single actionable takeaway or positive reflection to help the teacher return to their classroom with improved emotional regulation.

---

### 4. Key UI/UX Techniques for Fixed-Dimension Apps

1. **`aspect-ratio: 4 / 5` Property:**
   Using `aspect-ratio: 4 / 5` alongside `max-width: 1080px` and `max-height: 1350px` ensures that even if a desktop or mobile screen is smaller than 1080px wide, the container will scale down proportionally without distorting the 4:5 vertical layout.

2. **Scaling Content with Fluid Units (`clamp()` or `vh`/`vw` relative to canvas):**
   Since the dimensions are fixed, use relative sizing for text and padding (such as `font-size: clamp(1rem, 2.5vw, 1.75rem);`) so text stays well-proportioned if the canvas scales down on smaller mobile displays.

3. **Preventing Content Overflow:**
   Setting `overflow: hidden` on `.app-canvas` prevents scrollbars from ruining the immersive experience during the 2-minute session.
=======
  --radius-smooth: 16px;
  --transition-rhythm: 0.5s ease-in-out;
}

