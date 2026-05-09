# Module 14 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS API reference: stream buffer and message buffer APIs.
- FreeRTOS Kernel source: stream_buffer.c and message_buffer.h.
- FreeRTOS Kernel Book, Chapter 5 queue figures for fixed-record comparison.
- FreeRTOS Kernel Book, Chapter 10 communication-path figure 10.6.
- FreeRTOS Kernel Book, Chapter 12 trace figure for kernel object history.
- Lab Project FreeRTOS Tutorials, Tutorial 19 and Tutorial 20.

## Visual Assets

- Primary shared visual: `../shared_assets/infographics/stream_message_buffer_comparison.png`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Kernel Book comparison figures from `../shared_assets/book_figures/figure_5_*`, `figure_10_6_*`, and Chapter 12 trace figure.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the generic buffer deck into a payload-shape-first lecture.
- Added slides for byte stream mental model, message boundary mental model, trigger level, endpoint assumptions, queue comparison, ISR byte feed, command packet pattern, DMA chunk receiver, diagnostics, trace evidence, source reading, and code review.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
