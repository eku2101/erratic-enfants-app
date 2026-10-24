>are there any other semantic HTML tags that would be helpful in designing a 2 minute wellness app for inexperienced teachers in the classroom?

Beyond the standard `<header>`, `<main>`, `<section>`, and `<footer>` tags, several other semantic HTML5 tags can significantly enhance accessibility, improve structure, and reduce cognitive load for a fast 2-minute reset:

---

### 1. Focus & Micro-Interaction Controls

* **`<dialog>` (Native Modal / Popup Shell):**
* **Why it helps:** Use `<dialog>` for quick settings, sound toggles, or brief guidance overlays. It provides built-in keyboard trapping, accessible backdrop support, and standard `Escape` key dismissal without needing bulky JavaScript libraries.


* **Example:**
```html
<dialog id="settings-modal" aria-labelledby="settings-title">
  <h2 id="settings-title">Preferences</h2>
  <!-- Settings options -->
</dialog>

```




* **`<details>` and `<summary>` (Disclosure Elements):**
* **Why it helps:** Ideal for optional "Why this helps" science snippets or extra instructions. It keeps the main interface clean and minimal, preventing visual clutter while allowing curious teachers to expand information on demand.


* **Example:**
```html
<details>
  <summary>How box breathing calms your nervous system</summary>
  <p>Paced breathing activates the parasympathetic nervous system...</p>
</details>

```





---

### 2. Microcopy & Content Emphasis

* **`<output>` (Live Dynamic Results):**
* **Why it helps:** Perfect for dynamic counters, live timer readouts, or breathing prompts. Browsers treat `<output>` as an active semantic region, making state changes easier for assistive tech to announce without overwhelming screen readers.


* **Example:**
```html
<output id="timer-display" aria-live="polite">01:30</output>

```




* **`<figure>` and `<figcaption>` (Self-Contained Visual Nodes):**
* **Why it helps:** Wrap complex visualizer components (like interactive canvas visualizers, animated SVGs, or sensory grounding graphics) in `<figure>` and pair them with an explicit `<figcaption>`. This separates visual decorations from text content cleanly.


* **Example:**
```html
<figure role="img" aria-label="Breathing guide circle">
  <div class="breathing-guide" aria-hidden="true"></div>
  <figcaption class="sr-only">Inhale slowly for 4 seconds, then exhale.</figcaption>
</figure>

```




* **`<blockquote>` or `<q>` (Intentional Prompts & Mantras):**
* **Why it helps:** Semantic tags for grounding affirmations, quotes, or focus mantras (e.g., *"My classroom is safe, and I am in control"*). This gives assistive technologies explicit context that the text represents an external or intentional focus prompt.





---

### 3. Structural & Semantic Grouping

* **`<article>` (Self-Contained Summary Cards):**
* **Why it helps:** Use `<article>` for the final **Recharge/Intention** summary card. It signals that the takeaway card is an independent, complete unit of content that can be read or exported on its own.




* **`<time>` (Explicit Duration Markers):**
* **Why it helps:** Wrap time durations in `<time datetime="PT2M">2 minutes</time>` to give search engines, browsers, and screen readers standardized time data.



---

### Suggested Addition to `AGENTS.md`

If you'd like to document these in your guidelines, you can append this under **Section 1: Structural HTML Design**:

```markdown
- **Enhanced Semantic & Accessibility Controls:**
  - **`<dialog>`:** Native low-overhead modal container for settings and audio toggles.
  - **`<details>` / `<summary>`:** Progressive disclosure for optional science tips without cluttering the screen.
  - **`<output>`:** Semantic container for live timers and dynamic step feedback (`aria-live="polite"`).
  - **`<figure>` / `<figcaption>`:** Encapsulate animated visualizers with accessible text descriptions.
  - **`<time>`:** Standardized time encoding for session lengths (e.g., `<time datetime="PT2M">2 minutes</time>`).

```

---
