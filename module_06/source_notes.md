# Module 06 Source Notes

English-only rich rebuild for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 5: Queue Management.
- Lab Project FreeRTOS Tutorials, Tutorial 09: Creating and using FreeRTOS queues to send messages between tasks.
- FreeRTOS API reference for queue management APIs.
- FreeRTOS Kernel source: `queue.c`.

## Visual Assets

- Generated infographic: `../shared_assets/infographics/object_selection_map.png`.
- Kernel Book figures from `../shared_assets/book_figures/`:
  - `figure_5_1_an_example_sequence_of_writes_to_and_reads_from_a_queue.png`
  - `figure_5_3_the_sequence_of_execution_produced_by_example_5_1.png`
  - `figure_5_4_an_example_scenario_where_structures_are_sent_on_a_queue.png`
- Shared generated icons from `../shared_assets/icons/`.

## Design Notes

- The module treats queue as a bounded copy buffer, a synchronization point, and a memory-sized kernel object.
- It deliberately separates timeout policy, queue length, item size, copy-by-value semantics, pointer lifetime risk, and producer-consumer throughput pressure.
- References and Further Reading are included as the final slide.
- Shared browser slideshow mode is included through `../shared_assets/slideshow.css` and `../shared_assets/slideshow.js`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
