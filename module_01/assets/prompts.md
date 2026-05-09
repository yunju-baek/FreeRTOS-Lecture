# Module 01 Infographic Prompt Candidates

Created: 2026-05-06

This file stores candidate gpt-image-2 prompts for concept infographics that can be inserted into `html_slides/module_01/index.html`. The current default deck is already complete with HTML/CSS diagrams and one generated linked-kernel image asset.

## Asset 01. FreeRTOS as a linked kernel

```text
Model: gpt-image-2
Use case: infographic-diagram
Asset type: 16:9 English technical infographic for a FreeRTOS HTML lecture slide

Create a graduate embedded-systems lecture infographic, 1980 x 1114.
Topic: FreeRTOS as a linked kernel inside embedded firmware.

Show four clear layers:
1. Application code with task blocks labeled Sensor Task, Control Task, Comm Task.
2. FreeRTOS common kernel code with blocks labeled tasks.c, queue.c, timers.c, event_groups.c, stream_buffer.c, list.c.
3. Portable layer with context switch, tick interrupt, interrupt mask boundary.
4. Hardware/BSP boundary with MCU, timer peripheral, UART, GPIO.

Also show FreeRTOSConfig.h as a configuration panel connected to the kernel layer, with small labels:
configUSE_PREEMPTION, configTICK_RATE_HZ, configTOTAL_HEAP_SIZE.

Use restrained academic colors: deep indigo #2E315B, muted blue #2563A6, muted teal #147D83, deep green #2F7D4E, graphite #2B2F36, and sparing muted amber #9A6A16.
Clean white or very light neutral background. No decorative blobs, no mascot, no stock-photo look.
Keep labels readable. Do not include local file paths, source keys, or prompt metadata.
```

## Asset 02. Super loop to RTOS task model

```text
Model: gpt-image-2
Use case: infographic-diagram
Asset type: 16:9 English technical infographic for a FreeRTOS HTML lecture slide

Create a graduate embedded-systems lecture infographic, 1980 x 1114.
Topic: transition from bare-metal super loop to RTOS task-based application.

Left side: a single vertical super loop with steps sensor read, control update, packet parsing, display refresh, log write. Show one long blocking step delaying the rest.
Right side: multiple FreeRTOS tasks with scheduler tick, ready queue, and priority labels. Show Sensor Task, Control Task, Comm Task, Log Task sharing CPU over time.

Central message: RTOS structures timing and concurrency; it does not automatically make code faster.

Use restrained academic colors: deep indigo, muted blue, muted teal, deep green, graphite, and sparing muted amber for latency risk.
Clean white background. No red, bright orange, neon, pastel, cartoon character, or stock-photo style.
Keep all text short and readable.
```
