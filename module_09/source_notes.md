# Module 09 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 6, Software Timer Management.
- Kernel Book Figures 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, and 6.9.
- Lab Project FreeRTOS Tutorials, Tutorial 11.
- FreeRTOS Kernel source: timers.c, queue.c, and tasks.c.

## Visual Assets

- Primary visual anchor: `../shared_assets/book_figures/figure_6_4_the_timer_command_queue_being_used_by_a_software_timer_api_function_to_c.png`.
- Additional Kernel Book timer figures from `../shared_assets/book_figures/figure_6_*`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded software timer coverage beyond the generic template.
- Added explicit slides for hardware versus software timers, timer command queue pressure, daemon priority effects, callback rules, pended function calls, mini cases, and Tutorial 11 source reading.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
