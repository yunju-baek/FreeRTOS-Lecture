# Module 08 Source Notes

English-only second-pass enrichment for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 7, Interrupt Management.
- Kernel Book Figures 7.1, 7.2, 7.3, 7.6, 7.7, 7.8, 7.14, and 7.15.
- Lab Project FreeRTOS Tutorials, Tutorial 10 and Tutorial 12.
- FreeRTOS Kernel source: queue.c, tasks.c, timers.c, port.c, and portmacro.h.
- Cortex-M and STM32 NVIC priority configuration documentation as further reading context.

## Visual Assets

- Primary shared visual: `../shared_assets/infographics/isr_deferred_processing_choices.png`.
- Object-selection visual: `../shared_assets/infographics/object_selection_map.png`.
- Kernel Book figure assets from `../shared_assets/book_figures/figure_7_*`.
- Shared generated icons from `../shared_assets/icons/`.

## Second-Pass Design Notes

- Expanded the interrupt-specific flow beyond the generic Module 07-15 template.
- Added explicit visual/table slides for FromISR APIs, `xHigherPriorityTaskWoken`, yield-from-ISR, Cortex-M priority numbering, STM32CubeIDE NVIC review, and diagnostics.
- Kept image aspect ratios through shared `figure-frame` and `object-fit: contain` styles.
- Kept the final slide as `References and Further Reading`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
