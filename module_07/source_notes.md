# Module 07 Source Notes

English-only rich rebuild for a third-year CS audience.

## Primary Sources

- FreeRTOS Kernel Book, Chapter 5, Queue Management, advanced queue patterns.
- FreeRTOS Kernel Book, Chapter 7, Interrupt Management examples for deferred processing.
- Lab Project FreeRTOS Tutorials, Tutorial 09 and Tutorial 10.
- FreeRTOS Kernel source: queue.c and port yield-from-ISR path.

## Visual Assets

- Primary shared visual: `../shared_assets/infographics/isr_deferred_processing_choices.png`.
- Figure visual: `../shared_assets/book_figures/figure_5_4_an_example_scenario_where_structures_are_sent_on_a_queue.png`.
- Figure visual: `../shared_assets/book_figures/figure_7_1_completing_interrupt_processing_in_a_high_priority_task.png`.
- Figure visual: `../shared_assets/book_figures/figure_7_6_the_scenario_when_one_interrupt_occurs_before_the_task_has_finished_proc.png`.
- Shared generated icons from `../shared_assets/icons/`.

## Design Notes

- This module defines new terms before using APIs and includes source-reading prompts.
- The final slide separates References Used from Further Reading.
- Shared browser slideshow mode is included through `../shared_assets/slideshow.css` and `../shared_assets/slideshow.js`.

## Verification Notes

- Validate slide count, section ids, missing image assets, slideshow assets, and English-only visible HTML after rebuild.
