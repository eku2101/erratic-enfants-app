#### Sequential 3-Act Sections (`<section class="step">`)

Sketch these as three interchangeable state panels inside the central body area:

1. **Act 1: Reflect / Acknowledge (`<section class="step" id="step-1">`)**


* **Content:** Short text acknowledging present stress without judgment (e.g., *"Name the stress in your classroom right now..."*).


* **Grounding:** Aligns with the *Transactional Model of Stress & Coping*—deactivating automatic stress responses through non-judgmental recognition.




2. **Act 2: Release / Practice (`<section class="step" id="step-2">`)**


* **Content:** Rhythmic expansion visual for guided breathing (e.g., 4s inhale / 6s exhale).


* **Grounding:** Regulates autonomic nervous system arousal during peak acute stress moments.




3. **Act 3: Recharge / Intention (`<section class="step" id="step-3">`)**


* **Content:** A brief affirmation or grounding thought before walking back into the classroom (e.g., *"I am capable, and one difficult moment does not define my day"*).


* **Grounding:** Builds self-compassion and professional resilience to avoid burnout.





---


Here is the UI design mapping directly from your literature notebook citations into simplified pseudocode for HTML and CSS.

---

### 1. The 3 Rs Micro-Flow (HTML Structure)

#### Research Quote

> *"The 3 Rs for teacher self-care: Reflect. Release. Recharge."* — Jackman (2022)
> 
> 
> *"Mindfulness directly addresses the appraisal process... encouraging teachers to adopt a non-judgmental, accepting stance..."* — Lazarus & Folkman (1984) / Meiklejohn et al. (2012)
> 
> 

#### HTML Pseudocode

```html
<main class="app-canvas" data-fixed-frame="4:5">

  <!-- Progress communicates time certainty (strictly 2 minutes) -->
  <progress value="0" max="120"></progress>

  <!-- STEP 1: REFLECT (Non-judgmental awareness) -->
  <section class="focus-stage" data-step="reflect">
    <h1>Acknowledge the Present</h1>
    <p>Notice your current stress without judging it.</p>
  </section>

  <!-- STEP 2: RELEASE (Guided somatic reset) -->
  <section class="focus-stage" data-step="release">
    <div class="breathing-guide" aria-hidden="true"></div>
  </section>

  <!-- STEP 3: RECHARGE (Cognitive reappraisal & return) -->
  <section class="focus-stage" data-step="recharge">
    <div class="summary-card">
      <p>Carry calm back into your classroom.</p>
    </div>
  </section>

</main>

```

---

### 2. Autonomic Calming & Visual De-arousal (CSS Styling)

#### Research Quote

> *"Deactivating the immediate stress responses that arise from perceived threats..."* — Meiklejohn et al. (2012)
> 
> 
> *"Recognize and regulate reactions to stressors in the environment..."* — Roeser et al. (2013) / Taylor et al. (2021)
> 
> 

