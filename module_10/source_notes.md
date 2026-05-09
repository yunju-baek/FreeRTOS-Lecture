# Module 10 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 7, Interrupt Management, semaphore signaling examples.
- FreeRTOS Kernel Book, Chapter 8, Resource Management.
- Kernel Book Figures 7.2, 7.3, 7.8, 8.1, 8.3, 8.4, 8.5, and 8.6.
- Lab Project FreeRTOS Tutorials, Tutorials 12, 13, and 21.
- FreeRTOS Kernel source: semphr.h, queue.c, tasks.c, and port critical-section code.

## Visual Assets

- Primary shared visual: `../shared_assets/infographics/synchronization_choice_matrix.png`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Kernel Book figure assets from `../shared_assets/book_figures/figure_7_*` and `figure_8_*`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic synchronization deck into a semantics-first lecture: signal, count, ownership, and tiny invariant protection.
- Added explicit comparison slides for binary semaphore versus mutex, counting semaphore versus queue, mutex versus critical section, caller context rules, tutorial reading paths, mini cases, diagnostics, and source reading.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
