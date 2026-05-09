# Module 01 English Source Notes

Created: 2026-05-06
Last updated: 2026-05-06

## Deck

- English HTML deck: `html_slides/module_01/index.html`
- Superseded Korean generated deck: removed during English-default migration
- Shared generated infographic asset: `html_slides/module_01/assets/module_01_linked_kernel.png`
- Current structure: 37-slide English lecture deck with shared generated icon assets, HTML/CSS infographics, one generated RTOS-transition infographic, and a final references slide

## Design Scope

- The English deck is the primary lecture deliverable for Module 01.
- The deck targets third-year computer science students.
- New RTOS and FreeRTOS terms are introduced with short explanations before they are used in source or configuration reading.
- The deck is not constrained to a fixed slide count. The instructor can adjust pacing in class.
- Visible duration labels, internal draft labels, and time-slot wording are intentionally kept off the slide surface.
- The generated PNG linked-kernel visual is reused by relative path: `assets/module_01_linked_kernel.png`.

## Visual Update

- Replaced abbreviation-in-circle icon marks with generated reusable PNG icon assets under `html_slides/shared_assets/icons/`.
- Added repeated icon cards for concepts such as timing, ISR, RTOS, task, scheduler, kernel object, context switch, configuration, and debugging boundaries.
- Added HTML/CSS educational infographics for firmware layering, latency flow, RTOS mechanism/policy mapping, scheduler behavior, context switching, build path, scheduler startup, and final conceptual bridge.
- Added generated shared infographic asset `html_slides/shared_assets/infographics/super_loop_to_task_boundaries.png` to the RTOS definition slide.
- Added generated shared infographic asset `html_slides/shared_assets/infographics/config_to_runtime_behavior.png` to the configuration slide.
- Added source figure asset `html_slides/shared_assets/book_figures/figure_4_4_tick_interrupt_execution_sequence.png` to the scheduling configuration slide.
- Kept the generated bitmap infographic for the FreeRTOS linked-kernel architecture because it is visually stronger than a plain SVG and does not carry critical small text that would risk misreading.
- Used icons and infographics as teaching anchors, not decorative filler.

## Primary Sources Used

- Earlier Korean generated Module 01 HTML deck
  - Used only as a migration source before the English deck became the default folder
- `FreeRTOS_15모듈_강의록.md`
  - Module 01: RTOS perspective and FreeRTOS project structure
- `FreeRTOS_강의자료_원천수집/markdown/github_tutorials/tutorials/tutorial_1.md`
  - Tutorial 01 learning objectives and project structure
- `FreeRTOS_강의자료_원천수집/index/tutorial_topic_map.md`
  - Tutorial 01 source/config/API macro index
- `FreeRTOS_강의자료_원천수집/index/tutorial_api_index.md`
  - Tutorial 01 key config differences

## Verification

- 37 slide sections.
- 37 page markers.
- Sequential IDs from `s1` to `s37`.
- No Hangul text remains in the English HTML.
- No non-ASCII characters remain in the English HTML.
- Shared PNG infographic path is present and resolves relative to the default Module 01 folder.
- Visual support count: 9 infographic blocks and 24 icon-card blocks.
- Shared generated icon and infographic image paths resolve successfully.
- Current HTML image references: 28.

## 2026-05-06 References Slide Update

- Added final `References and Further Reading` slide.
- References distinguish lecture sources from optional student reading paths.

## 2026-05-06 Adjustment History

- Earlier English drafts were compressed around a shorter classroom pacing model, then polished to remove visible duration wording.
- User feedback later clarified that slide count should follow teaching clarity, not a fixed count.
- The current deck supersedes the 28-slide version with a 36-slide concept-first structure.
- Self Lab language was replaced by a lighter `Project Boundary Check` style so the deck reads as a complete lecture, not a lab handout.

## 2026-05-06 Icon And Infographic Redesign

- User feedback: Module 01 needed more visual variation; icons and infographics should be used generously when they help students follow the lecture.
- Action taken: regenerated the Module 01 English deck with more slides, richer concept explanation, repeated icon cards, and multiple HTML/CSS infographics.
- Follow-up action: replaced fake abbreviation icons with generated shared icon PNGs and inserted a generated RTOS-transition infographic.
- Added or expanded explanations for `firmware`, timing requirements, `latency`, `jitter`, `deadline`, `ISR`, `RTOS`, `task`, `scheduler`, `kernel object`, `context switch`, task/thread/process analogy, `port layer`, `BSP`, `FreeRTOSConfig.h`, preemption, time slicing, tick, memory configuration, diagnostics configuration, and scheduler startup.

## 2026-05-06 Shared Icon Library Expansion

- Added two generated icon sprite sheets and cropped 32 additional reusable icon PNGs.
- Re-cropped the original 8 icons with square source crops to preserve aspect ratio.
- Shared icon library now contains 40 individual reusable 320 x 320 PNG icons plus 3 sprite source files.
- Module 01 icon cards now use larger 72 px icon slots with a balanced icon/text card layout.

## 2026-05-06 Infographic Text Policy Pass

- Regenerated the Module 01 generated infographics with internal pixel labels where useful.
- Replaced `module_01_linked_kernel.png`, `super_loop_to_task_boundaries.png`, and `config_to_runtime_behavior.png`.
- Internal labels are kept as part of the bitmap; HTML overlay labels are avoided.
- Overall infographic titles and bottom figure captions should remain outside the bitmap.
- Added Kernel Book Figure 4.4 as a large source figure so its text is not used as a small decorative thumbnail.
