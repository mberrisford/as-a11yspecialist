---
layout: ../../layouts/MarkdownPostLayout.astro
title: "WCAG auditor checks - Work in progress"
pubDate: 2024-12-04
description: "Straightforward WCAG audit checks."
author: "Martin Berrisford"
# image:
#   url: "https://docs.astro.build/assets/rose.webp"
#   alt: ""
tags: ["WCAG", "audits", "draft"]
---

## Sensory Alternatives - image media

### Text alternatives for images 

Images and other visual non-text content, like icons and graphs, include a text alternative accessible to assistive technology that delivers equivalent information.

- Images that provide important information or function as links or buttons should have a clear and accurate text description.

- If images serve as links or buttons, the text should explain where they lead or what they do (e.g., "XYZ Inc. - Visit homepage", "Search", "Play video", "Add to favorites").

- Images used only for decoration and not for conveying information should be hidden from assistive technologies.

### Alternatives for complex images 

Complex images, graphs, and other complex visual content must have a text alternative accessible to assistive technologies that conveys the purpose and the same information.

- Charts, graphs, diagrams, and other complex images should have text descriptions either on the same page or on a linked page. These descriptions must convey the purpose of the image and provide guidance for screen reader users on interacting with the image when applicable. For more information, refer to [WCAG 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).

- If charts or graphs display tabular data (such as interrelated or time-based data), ensure the data is available for download, on alternative pages, or embedded in hidden tables that are screen reader accessible if it cannot be accessed within the graphic.

### Background images

Background images are only used for decoration and do not convey meaning that is otherwise unavailable.

## Sensory Alternatives - time based media (excluding live media)	

### Captions and text transcripts 

Multimedia content, such as video and audio, should provide a text alternative accessible to assistive technologies that conveys equivalent information.

- A text transcript should be available (either on the same page or linked from the page containing the media) for any audio-only content (e.g., podcasts), video-only content (e.g., videos with no audio track), or multimedia content (e.g., videos with both video and audio content).

- Captions (either closed or open) should be provided for any multimedia content where the audio track conveys important information.