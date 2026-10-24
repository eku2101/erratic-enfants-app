>Single-View Architecture (<main> Container):Avoid complex navigation bars, dropdown menus, or multi-tab layouts. 
>Provide a single full-screen <main> container that loads directly into the 2-minute experience.
>Use semantic HTML tags (<header>, <section>, <footer>) logically so screen readers and assistive tools process the page seamlessly.
>
>You have my current index.html.  Given the research, how could <div> give more detail to the design limitations already assigned <main> ><header> <section> <footer>, so to reduce cognitive overload of inexperienced teachers in a classroom who can only click a 2 minute app on >their phone for wellbeing support.  Again, based on the research in the attached Notebook.
>
The research in your 🧘 [Cultivating Awareness and Resilience in Education](https://gemini.google.com/notebook/a6683734-707b-4eb9-a28f-b3f815aaee01) notebook highlights that teachers operate under severe cognitive strain and transactional stress. When a teacher opens a self-care tool during a brief 2-minute break, any extra visual noise or unnecessary choices can trigger cognitive overload and automatic stress responses.

In HTML, semantic tags (`<main>`, `<header>`, `<section>`, `<footer>`) define the page's *regional landmarks* for assistive technologies and structural hierarchy. However, generic `<div>` elements—when paired with explicit, functional CSS container classes—provide the **layout boundary and focus-isolation detail** needed to protect a stressed teacher's attention.

---

### How `<div>` Containers Add Functional Detail to Reduce Cognitive Overload

#### 1. Preventing Viewport Distortion (Fixed-Aspect Viewport Shell)

* **Design Requirement:** When an inexperienced or overwhelmed teacher opens the app on a phone, layout shifts, awkward scrolling, or distorted content immediately increase cognitive load.


* **`<div>` Structural Role:**
* Placing a `<div class="app-viewport">` wrapper around `<main class="app-canvas">` ensures the layout maintains a fixed vertical focal point (e.g., `aspect-ratio: 4 / 5` with `max-width` and `max-height`).


* Setting `overflow: hidden` on the inner canvas `<div>` guarantees that no unexpected scrollbars appear during the 2-minute session, keeping the experience fully self-contained.





#### 2. Isolating Attention (Single Focal Stage)

* **Design Requirement:** According to stress and mindfulness literature, reducing cognitive demands requires eliminating extraneous choices, menus, and visual distractions.


* **`<div>` Structural Role:**
* Inside the active `<section class="step">`, wrapping content in a `<div class="focus-stage">` centers the active prompt and breathing guide directly in the teacher’s primary field of vision.


* Using a `<div class="breathing-guide" aria-hidden="true"></div>` separates purely visual/rhythmic animation elements from text, ensuring that decorative pulsing indicators do not interfere with screen readers or clutter readable text blocks.





#### 3. Framing Bite-Sized Content Cards

* **Design Requirement:** Research emphasizes that brief mindfulness works best through short, actionable reflection cards rather than dense paragraphs.


* **`<div>` Structural Role:**
* A `<div class="summary-card">` or `<div class="prompt-card">` creates a distinct visual boundary around single micro-reflections.


* CSS properties applied to these `<div>` cards (soft rounded corners, subtle drop shadows, low-luminance background colors) visually separate the prompt from the screen background, allowing the teacher’s brain to parse the prompt instantly without cognitive fatigue.





---

### Proposed Refinement for `AGENTS.md`

We can expand the **Single-View Architecture** section in `AGENTS.md` with the following design guidelines for `<div>` container usage:

```markdown
* **Functional Viewport & Stage Wrapping (`<div>` Containers):**
  * **Viewport Shell (`.app-viewport` & `.app-canvas`):** Enclose `<main>` within a fixed-aspect container using `aspect-ratio: 4 / 5` and `overflow: hidden` to prevent layout shifts or scrollbars on mobile displays.
  * **Focus Stage (`.focus-stage`):** Use internal `<div>` wrappers inside active `<section>` elements to lock user attention onto a single focal point (e.g., breathing visualizer or text prompt).
  * **Visual Component Separation:** Keep decorative rhythm/animation elements in dedicated `<div>` nodes (e.g., `<div class="breathing-guide" aria-hidden="true">`) to separate text readability from visual breathing cues.

```

---
