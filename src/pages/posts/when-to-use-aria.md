---
layout: ../../layouts/MarkdownPostLayout.astro
title: "When to Use ARIA and When to Avoid It"
pubDate: 2025-07-23
description: "Understanding the right situations for using ARIA attributes can make your websites more accessible without adding unnecessary complexity."
author: "Martin Berrisford"
tags: ["accessibility", "ARIA", "HTML", "semantics"]
---

Many web developers reach for ARIA attributes as their first solution for accessibility issues. This approach usually creates more problems than it solves. ARIA is powerful but comes with responsibility. Let's talk about when you should use ARIA and when you should avoid it.

## What is ARIA?

ARIA is a way to add extra information to HTML elements. This information helps assistive technologies like screen readers understand what the elements are for, what state they are in, and how they behave. **When used sparingly and correctly**, ARIA can make your websites more accessible.

## Native HTML is Your First Choice

The first rule of ARIA is not to use ARIA when native HTML can do the job. HTML has built-in semantics that browsers and assistive technologies understand without extra attributes.

```html
<!-- Avoid this -->
<div role="button" tabindex="0" onclick="doSomething()">Click me</div>

<!-- Use this instead -->
<button onclick="doSomething()">Click me</button>
```

The native button element gives you:

- Keyboard accessibility (Enter and Space activation)
- Focus management (no need for tabindex)
- Proper role announcement ("button")

All without writing a single line of JavaScript or adding ARIA attributes.

## When ARIA Makes Sense

ARIA becomes useful when HTML alone can't express the interface you need to build. Here are some situations where ARIA is appropriate:

### Dynamic Content Updates

When content changes without a page reload, ARIA can announce these changes to screen reader users.

```html
<div aria-live="polite" aria-atomic="true" id="notification-area">
  Your message was sent successfully.
</div>
```

The aria-live region tells screen readers to announce content changes without requiring user focus. Note: ARIA live regions must
be rendered in the DOM prior to the content change. Otherwise, screen readers may not announce the change.

### Labelling and Providing Additional Context

`aria-label`, `aria-labelledby` and `aria-describedby` may be used to provide an alternative label or associate additional help text with an element.

```html
<button aria-label="Play">▶</button>
<button aria-describedby="current-time">Play</button>

<span id="current-time">00:00</span>
```

### Complex Custom Widgets

If you're building custom components that don't match HTML elements, ARIA helps define their purpose.

```html
<div role="combobox" aria-expanded="false" aria-controls="dropdown-list">
  Select an option
  <div id="dropdown-list" role="listbox" hidden>
    <div role="option" id="option1">Option 1</div>
    <div role="option" id="option2">Option 2</div>
  </div>
</div>
```

But remember, with complex widgets comes complex responsibility. You need to implement all expected keyboard interactions and state management.

### Enriching Existing Semantics

Sometimes you need to add information to elements that already have semantics.

```html
<button aria-pressed="false">Turn On Dark Mode</button>
```

The aria-pressed attribute turns a regular button into a toggle button, communicating its current state.

## When to Avoid ARIA

ARIA isn't always the answer. Here are situations where you should avoid it:

### Duplicating Native Semantics

Adding roles that match the element's native semantics is unnecessary.

```html
<!-- Unnecessary -->
<button role="button">Click me</button>
```

### When You Can't Fulfill All Requirements

If you use ARIA roles, you must implement all expected behaviors. For example, if you add role="button" to a div, you must add keyboard support, focus management, and proper event handling.

```html
<!-- Incomplete implementation -->
<div role="button">
  <!-- Missing keyboard support, missing tabindex -->
  I look like a button but don't work like one
</div>
```

## Testing Your ARIA Implementation

Always test your ARIA implementations with actual assistive technologies. Automated testing tools can help identify issues, but they can't replace testing with real screen readers.

Common testing methods include:

1. Using VoiceOver on macOS or iOS
2. Using NVDA or JAWS on Windows
3. Using TalkBack on Android

## The ARIA Decision Tree

When deciding whether to use ARIA, ask yourself:

1. Can I use a native HTML element instead?
2. If I use ARIA, can I implement all required behaviors?
3. Have I tested this with actual assistive technologies?

If the answer to any of these questions is "no," reconsider your approach.

## Conclusion

ARIA is a powerful tool for web accessibility when used correctly. Start with semantic HTML, use ARIA only when necessary, and always test with real assistive technologies. This approach creates truly accessible experiences without unnecessary complexity.

Remember that the best ARIA is often no ARIA at all. Native HTML elements with proper semantics will take you far in creating accessible websites.

## Recommended Resources

- [Accessible Rich Internet Applications (WAI-ARIA) 1.3](https://www.w3.org/TR/wai-aria-1.3/)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [What Is ARIA And Why Use It (YouTube)](https://www.youtube.com/watch?v=0JMlva_cv9U)
- [How Not To Use ARIA (YouTube)](https://www.youtube.com/watch?v=Z51JWov4dOY)
