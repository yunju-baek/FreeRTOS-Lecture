# Module 00 Image Deck Source Notes

This is an alternate image-first version of Module 00. The original HTML-native deck remains unchanged at `html_slides/module_00/index.html`.

## Output

- Deck: `html_slides/module_00_image/index.html`
- Initial slide images: `html_slides/module_00_image/assets/slides/module_00_image_slide_*.png`
- gpt-image-2 jobs: `html_slides/module_00_image/gpt_image_2_prompts.jsonl`

## Current Image State

The initial PNGs were copied from the existing rendered Module 00 HTML deck so the new shell deck is immediately usable. The prompt JSONL targets the same filenames, so a gpt-image-2 batch run can overwrite these images in place.

An actual gpt-image-2 batch run was attempted on 2026-05-06, but the current shell environment did not have `OPENAI_API_KEY` set, so no API images were generated yet.

## gpt-image-2 Batch Command

Dry run:

```bash
python3 /Users/yunju/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch --model gpt-image-2 --input html_slides/module_00_image/gpt_image_2_prompts.jsonl --out-dir html_slides/module_00_image/assets/slides --size 2048x1152 --quality high --output-format png --no-augment --concurrency 3 --force --dry-run
```

Actual generation, requires `OPENAI_API_KEY` and network access:

```bash
python3 /Users/yunju/.codex/skills/.system/imagegen/scripts/image_gen.py generate-batch --model gpt-image-2 --input html_slides/module_00_image/gpt_image_2_prompts.jsonl --out-dir html_slides/module_00_image/assets/slides --size 2048x1152 --quality high --output-format png --no-augment --concurrency 3 --force
```

## Design Notes

- HTML is only the navigation/slideshow shell.
- Each slide body is a single 16:9 PNG.
- The deck links shared slideshow CSS/JS.
- Prompts request English-only text, large projection-readable labels, no watermarks, no bottom captions, and no slide numbers inside the generated image.
