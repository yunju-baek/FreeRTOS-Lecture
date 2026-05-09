# Module 12 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 9, Event Groups.
- Kernel Book Figures 9.1, 9.2, 9.3, 9.4, and 9.5.
- FreeRTOS Kernel Book, Chapter 10, task notification comparison figures 10.1 and 10.2.
- FreeRTOS Kernel Book, Chapter 12 trace figure for kernel object history.
- Lab Project FreeRTOS Tutorials, Tutorial 15 and Tutorial 16.
- FreeRTOS Kernel source: event_groups.c, tasks.c, and timers.c.

## Visual Assets

- Primary visual anchor: `../shared_assets/book_figures/figure_9_1_event_flag_to_bit_number_mapping_in_a_variable_of_type_eventbits_t.png`.
- Additional Kernel Book event group figures from `../shared_assets/book_figures/figure_9_*`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic event group deck into a bit-policy-first lecture.
- Added slides for bit naming, wait-any, wait-all, clear-on-exit, barrier synchronization, object alternatives, mini cases, diagnostics, trace evidence, source reading, and code review.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
