# Module 13 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 10, Task Notifications.
- Kernel Book Figures 10.1, 10.2, 10.3, 10.4, 10.5, and 10.6.
- FreeRTOS Kernel Book, Chapter 7 counting semaphore figure and Chapter 9 event group figure for object-choice comparisons.
- FreeRTOS Kernel Book, Chapter 12 trace figure for kernel object history and timing evidence.
- Lab Project FreeRTOS Tutorials, Tutorial 17 and Tutorial 18.
- FreeRTOS Kernel source: tasks.c notification paths and Cortex-M port yield-from-ISR path.

## Visual Assets

- Primary visual anchor: `../shared_assets/book_figures/figure_10_2_a_task_notification_used_to_send_an_event_directly_from_one_task_to_anot.png`.
- Additional Kernel Book notification figures from `../shared_assets/book_figures/figure_10_*`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic notification deck into a receiver-model-first lecture.
- Added slides for eNotifyAction semantics, binary/counting/bitfield/value-overwrite patterns, indexed notifications, ISR handoff, object alternatives, mini cases, diagnostics, trace evidence, source reading, and code review.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
