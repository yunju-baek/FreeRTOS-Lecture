# Module 02 English Source Notes

Created: 2026-05-06

## Deck

- English HTML deck: `html_slides/module_02/index.html`
- Superseded Korean generated deck: removed during English-default migration
- Current structure: 31-slide English lecture deck
- Visual approach: HTML/CSS educational infographics, shared generated icon assets, shared generated infographics, and selected Kernel Book source figures

## Design Scope

- Module 02 was generated as a new English-first deck, not as a direct translation of the Korean 12-slide draft.
- The deck targets third-year computer science students and introduces terms before relying on them in API/source reading.
- The slide count is intentionally more generous than the default compact standard so the instructor can skip or compress sections during delivery.
- Self Lab remains lightweight as `Project Boundary Check`.

## Infographic Coverage

- Module 01 boundary reused for task creation
- Task run/wait/ready loop
- Task object anatomy
- Per-task stack and TCB memory relation
- Created/Ready/Running preview
- Dynamic task creation path
- Scheduler start boundary
- Static task memory layout
- Tutorial 02/03 allocation-style comparison
- Task creation debugging path
- Shared generated infographic: `html_slides/shared_assets/infographics/task_creation_object_construction.png`
- Shared generated infographic: `html_slides/shared_assets/infographics/scheduler_start_boundary.png`
- Kernel Book source figure: `html_slides/shared_assets/book_figures/figure_4_1_top_level_task_states.png`
- Kernel Book source figure: `html_slides/shared_assets/book_figures/figure_4_9_vtaskdelay_execution_sequence.png`

## Primary Sources Used

- `FreeRTOS_15모듈_강의록.md`
  - Module 02: Task creation and scheduler start
- `FreeRTOS_강의자료_원천수집/markdown/github_tutorials/tutorials/tutorial_2.md`
  - Tutorial 02 learning objective and task function concept
- `FreeRTOS_강의자료_원천수집/markdown/github_tutorials/tutorials/tutorial_3.md`
  - Tutorial 03 static allocation concept: TCB and stack memory
- `FreeRTOS_강의자료_원천수집/raw/github/Lab-Project-FreeRTOS-Tutorials-main/source/tutorials/tutorial_2/source/tutorial_2.c`
  - Tutorial 02 TODO structure, `xTaskCreate()`, `vTaskDelay()`, `vTaskStartScheduler()`
- `FreeRTOS_강의자료_원천수집/raw/github/Lab-Project-FreeRTOS-Tutorials-main/source/tutorials/tutorial_3/source/tutorial_3.c`
  - Tutorial 03 static buffers, `xTaskCreateStatic()`, return handle check
- `FreeRTOS_강의자료_원천수집/index/tutorial_topic_map.md`
  - Tutorial 02/03 API and config mapping
- `FreeRTOS_강의자료_원천수집/index/tutorial_api_index.md`
  - Dynamic/static allocation config differences

## Verification

- 31 slide sections.
- 31 page markers.
- Sequential IDs from `s1` to `s31`.
- No Hangul text in the HTML.
- No visible duration/version production wording.
- 10 HTML image references after visual enrichment.
- Shared generated infographic and source figure paths resolve successfully.
- HTML file contains only ASCII characters.

## 2026-05-06 Visual Enrichment

- Added icon cards to the learning route slide.
- Replaced the task anatomy HTML-only diagram with a generated task-creation infographic.
- Added Kernel Book Figure 4.1 to the priority/state preview slide.
- Replaced the scheduler-start HTML-only diagram with a generated scheduler-boundary infographic.
- Added Kernel Book Figure 4.9 to the delay/tick slide.
- Regenerated `task_creation_object_construction.png` and `scheduler_start_boundary.png` with internal pixel labels where useful.
- Internal labels are kept as part of the bitmap; HTML overlay labels are avoided.
- Overall infographic titles and bottom figure captions should remain outside the bitmap.

## 2026-05-06 References Slide Update

- Added final `References and Further Reading` slide.
- References include FreeRTOS Kernel Book Chapter 4 section names, Tutorial 02/03 materials, API reference paths, and configuration reading paths.
