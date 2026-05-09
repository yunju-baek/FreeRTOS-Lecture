# Module 11 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 8, Resource Management.
- Kernel Book Figures 8.1, 8.3, 8.4, 8.5, 8.6, and 8.7.
- FreeRTOS Kernel Book, Chapter 12 trace figures for kernel object history and timing evidence.
- Lab Project FreeRTOS Tutorials, Tutorial 14 and Tutorial 21.
- FreeRTOS Kernel source: semphr.h, queue.c, tasks.c, and mutex priority inheritance paths.

## Visual Assets

- Primary visual anchor: `../shared_assets/book_figures/figure_8_4_a_worst_case_priority_inversion_scenario.png`.
- Additional Kernel Book resource-management figures from `../shared_assets/book_figures/figure_8_*`.
- Trace evidence visual: `../shared_assets/book_figures/figure_12_6_figure_12_6_freertos_trace_kernel_object_history_view_one_of_more_than_2.png`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic resource-management deck into an ownership-first lecture.
- Added explicit slides for inversion timeline, inheritance limits, deadlock conditions, lock ordering, timeout recovery, recursive mutex use, gatekeeper task design, shared UART and storage service cases, diagnostics, trace evidence, source reading, and code review.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
