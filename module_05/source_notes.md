# Module 05 Source Notes

English-only rich rebuild for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 3: Heap Memory Management.
- FreeRTOS Kernel Book, Chapter 4: Task Management sections that explain task creation, TCB, and task stack context.
- Lab Project FreeRTOS Tutorials, Tutorial 03.
- FreeRTOS Kernel source: `portable/MemMang/heap_1.c`, `heap_2.c`, `heap_4.c`, `heap_5.c`, and `tasks.c`.

## Visual Assets

- Generated infographic: `../shared_assets/infographics/memory_reliability_map.png`.
- Kernel Book figures from `../shared_assets/book_figures/`:
  - `figure_3_1_ram_being_allocated_from_the_heap_1_array_each_time_a_task_is_created.png`
  - `figure_3_3_ram_being_allocated_and_freed_from_the_heap_4_array.png`
  - `figure_3_4_memory_map.png`
- Shared generated icons from `../shared_assets/icons/`.

## Design Notes

- The module emphasizes memory region naming, allocation policy, stack-vs-heap diagnostics, and evidence-driven troubleshooting.
- References and Further Reading are included as the final slide.
- Shared browser slideshow mode is included through `../shared_assets/slideshow.css` and `../shared_assets/slideshow.js`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
