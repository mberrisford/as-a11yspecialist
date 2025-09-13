---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Why Landmark Elements Matter for Web Accessibility"
pubDate: 2025-07-24
description: "Learn how using HTML landmark elements creates better structure and improve the experience for people using assistive technology."
author: "Martin Berrisford"
tags: ["accessibility", "HTML", "landmarks", "semantics"]
---

Landmark elements are the backbone of accessible web pages. They provide structure and context that benefit all users but are especially important for people who use assistive technology. Let's explore why these elements deserve your attention and how to use them effectively.

## What Are Landmark Elements?

Landmark elements are HTML semantic tags that define the different regions of a web page:

```html
<header>
  <nav>
    <main>
      <aside>
        <section>
          <article>
            <footer></footer>
          </article>
        </section>
      </aside>
    </main>
  </nav>
</header>
```

Each element communicates its purpose to browsers and assistive technologies without requiring additional attributes.

## Why Landmarks Matter

### Navigation Efficiency

Screen reader users can jump directly to specific page regions using landmark elements. This saves time and reduces frustration.

```html
<!-- Without landmarks -->
<div class="header">...</div>
<div class="navigation">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- With landmarks -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

The second example allows screen reader users to press a single key to jump between major page sections. For example, with NVDA, press D key to jump to the next landmark. With JAWS, it's the R key.

### Improved Context

Landmarks provide context about the current location within the page structure. When a screen reader announces "navigation" or "main," users immediately understand where they are and what content to expect.

## Core Landmark Elements and Their Purpose

### `<header>`

The `header` element represents introductory content for a page or section. It typically contains:

- The site logo and name
- Navigation links
- Search functionality

A page can have multiple `header` elements, but typically has one primary header at the top.

### `<nav>`

The `nav` element identifies major navigation blocks. Use it for:

- Primary site navigation
- Table of contents
- Footer navigation
- Pagination and breadcrumb links

Not every group of links needs a `nav` element. Reserve it for major navigation sections.

### `<main>`

The `main` element contains the primary content of the page. A page should have only one `main` element, and it should exclude content repeated across pages like headers, footers, and primary navigation.

### `<aside>`

The `aside` element represents content that is not directly related to the main content. This includes:

- Sidebars
- Quotes
- Related article links
- Ads
- Author bios

### `<footer>`

The `footer` element represents concluding content for a page or section. It typically contains:

- Other secondary links (e.g. privacy policy, terms of service, accessibility statement)
- Copyright information
- Contact details
- Social media links

Like `header`, a page can have multiple `footer` elements.

## Best Practices for Using Landmark Elements

### Use Landmarks Consistently

Apply landmark elements consistently across your site. Users can develop mental models of your site structure, so consistency is key.

### Don't Skip the `<main>` Element

Every page should have exactly one `<main>` element. This is crucial for screen reader users who rely on shortcuts to jump to the main content.

```html
<!-- Good practice -->
<body>
  <header>
    Logo and site name
    <nav>...</nav>
  </header>
  <main>
    <!-- Primary content here -->
  </main>
  <footer>...</footer>
</body>
```

### Combine with "Skip to Content" Links

Even with landmark elements, include a "skip to content" link as the first focusable element on your page. This provides another way for keyboard users to bypass repetitive navigation.

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <!-- Rest of the page -->
  <main id="main-content" tabindex="-1">...</main>
</body>
```

### Use ARIA Landmarks Only When Necessary

HTML5 landmark elements have implicit ARIA roles. You don't need to add role attributes to these elements:

```html
<!-- Unnecessary but won't cause issues -->
<nav role="navigation">...</nav>

<!-- Correct -->
<nav>...</nav>

<!-- Exception -->
<div role="navigation">...</div>
```

The exception is when you need to create landmarks with non-semantic elements for backward compatibility.

### Label Landmarks When You Have Multiples

If you have multiple instances of the same landmark type, use `aria-label` or `aria-labelledby` to distinguish them:

```html
<nav aria-label="Primary">...</nav>
<nav aria-label="Breadcrumb">...</nav>
<nav aria-label="Pagination">...</nav>
```

## Testing Landmark Implementation

To verify your landmark implementation:

1. Use an accessibility evaluation tool or bookmarklet to visualize landmarks (e.g., Microsoft Accessibility Insights).
2. Test with screen readers like NVDA, JAWS, or VoiceOver.

![Example of Microsoft Accessibility Insights' landmark visualization tool. The tool outlines and names each landmark element.](/post-images/landmarks.png)

## Common Landmark Mistakes

### Nesting Landmarks Incorrectly

Avoid nesting landmarks of the same type. For example, don't put a `<nav>` inside another `<nav>`.

### Overusing `<section>` and `<article>`

The `<section>` and `<article>` elements are not always landmarks. They only become landmarks when they have accessible names through headings or ARIA labels.

### Missing the Primary `<main>` Element

Some developers forget to include the `<main>` element or include multiple `<main>` elements on a single page. Both practices create confusion for screen reader users.

## Conclusion

Landmark elements are simple to implement but can have a significant impact. They create clear structure, improve navigation efficiency, and enhance the experience for those using screen readers.

Start with proper HTML semantics, use landmarks consistently, and test with screen readers.
