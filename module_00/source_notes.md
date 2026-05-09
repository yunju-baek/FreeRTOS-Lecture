# Module 00 Source Notes

Module: `RTOS Fundamentals and FreeRTOS Orientation`

Created: 2026-05-06

## Purpose

Module 00 is an orientation deck placed before Module 01. It supplies RTOS fundamentals, FreeRTOS identity/history, terminology, feature map, licensing context, and the NUCLEO-F439ZI course bridge.

## Primary Sources

| Source | Local / URL | Used for |
| --- | --- | --- |
| FreeRTOS RTOS Fundamentals | https://www.freertos.org/Documentation/01-FreeRTOS-quick-start/01-Beginners-guide/01-RTOS-fundamentals | RTOS beginner orientation, real-time vocabulary, embedded timing motivation |
| About / Why FreeRTOS | https://www.freertos.org/Why-FreeRTOS | FreeRTOS introduction and learning-resource framing |
| FreeRTOS homepage | https://www.freertos.org/ | Current project positioning: microcontrollers, small microprocessors, 40+ architectures, open source, LTS, ecosystem |
| AWS FreeRTOS User Guide, What is FreeRTOS | https://docs.aws.amazon.com/freertos/latest/userguide/what-is-freertos.html | Definition, MIT license, kernel/libraries/demo application framing |
| AWS FreeRTOS User Guide, Kernel fundamentals | https://docs.aws.amazon.com/freertos/latest/userguide/dev-guide-freertos-kernel.html | Scheduler, memory allocation options, intertask primitives, SMP, small kernel notes |
| FreeRTOS Kernel Book ch01 | `FreeRTOS_강의자료_원천수집/markdown/freertos_kernel_book_github/ch01.md` | Preface 1.1.1-1.1.6: kernel description, value proposition, terminology, why use an RTOS, feature list, licensing family |
| STM32F439ZI lab environment note | `FreeRTOS_STM32F439ZI_실습환경_정리.md` | NUCLEO-F439ZI, STM32CubeIDE, ST-LINK, UART log bridge |
| Previous uC/OS-III conversion memo | `FreeRTOS_uCOSIII_이전강의자료_활용메모.md` | NUCLEO-F429ZI to F439ZI development-environment reuse decision |

## Slide Mapping

| Slide | Main source basis |
| ---: | --- |
| 1-2 | Course-level Module 00 planning note |
| 3-4 | FreeRTOS RTOS Fundamentals and Kernel Book ch01, Why Use an RTOS |
| 5-6 | Kernel Book ch01 hard/soft real-time explanation and RTOS fundamentals |
| 7-8 | Kernel Book ch01 task/scheduler introduction and Kernel Book Figure 4.1 |
| 9-10 | FreeRTOS homepage, AWS What is FreeRTOS, Kernel Book ch01 |
| 11 | Kernel Book ch01 terminology note |
| 12-14 | Kernel Book ch01 Why Use an RTOS; Kernel Book interrupt/deferred processing figure |
| 15-16 | Kernel Book ch01 feature list and course module map |
| 17 | Kernel Book ch01 history/value proposition; FreeRTOS homepage and AWS user guide |
| 18 | Kernel Book ch01 licensing family |
| 19-20 | STM32F439ZI lab environment note and board target decisions |
| 21 | Course bridge into Module 01 |
| 22 | Source bibliography |

## Visual Assets Used

| Asset | Source |
| --- | --- |
| `../shared_assets/book_figures/figure_4_1_top_level_task_states.png` | Extracted from FreeRTOS Kernel Book media |
| `../shared_assets/book_figures/figure_7_1_completing_interrupt_processing_in_a_high_priority_task.png` | Extracted from FreeRTOS Kernel Book media |
| `../shared_assets/icons/*.png` | Shared generated icon assets used by existing Module 01/02/03+ decks |
| `assets/external/freertos_logo_2005.svg` | Wikimedia Commons file page: https://commons.wikimedia.org/wiki/File:FreeRTOS_logo_2005.svg |
| `assets/external/richard_barry_arm_newsroom_320.jpeg` | Arm Newsroom podcast page: https://newsroom.arm.com/podcasts/freertos-on-arm |

## External Web Asset Notes

- FreeRTOS logo was added as a visual identity anchor on the cover and FreeRTOS identity slide.
- Richard Barry photo was added to the value proposition/history slide to connect the kernel history to the creator and long-running ecosystem context.
- Downloaded local copies are kept inside `html_slides/module_00/assets/external/` so the deck can be opened offline during lecture.
- Source pages should be rechecked before public redistribution if a formal copyright/license appendix is required.

## Verification Notes

- Deck path: `html_slides/module_00/index.html`
- Deck language policy: English-only slide display text
- Slide count: 22
- External web images added: 2
- Designed to precede current Module 01 and reduce conceptual burden in Module 01.
