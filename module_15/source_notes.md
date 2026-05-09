# Module 15 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 12, Troubleshooting and Diagnostics.
- FreeRTOS Kernel Book Figures 12.1 through 12.8 as diagnostic concept references.
- FreeRTOS API reference: task diagnostics, heap APIs, hook functions, runtime stats, and trace configuration.
- FreeRTOS Kernel source: tasks.c, queue.c, timers.c, event_groups.c, stream_buffer.c, and portable layer diagnostics.
- Course Modules 03-14 as integrated design and troubleshooting references.

## Visual Assets

- Primary shared visual: `../shared_assets/infographics/memory_reliability_map.png`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Kernel Book diagnostic output figures 12.7 and 12.8 from `../shared_assets/book_figures/figure_12_*`.
- Slides 9-14 use custom HTML/CSS diagnostic visuals instead of repeated Tracealyzer screenshots, so each slide has a distinct visual role: trace lens map, execution timeline, CPU load bars, response-time bands, user-event flow, and object-history lanes.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic final deck into an evidence-driven troubleshooting and integration lecture.
- Added slides for diagnostic workflow, trace evidence lenses, execution timeline, CPU load, response time, user events, object history, task list, runtime stats, hooks/assertions, health monitor, watchdog design, symptom-to-evidence mapping, integration review, capstone boundary check, and course summary.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
