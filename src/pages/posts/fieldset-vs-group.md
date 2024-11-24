---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Grouping Form Controls - fieldset vs. role=group"
pubDate: 2024-11-23
description: "Grouping form controls with fieldset or role=group is a crucial part of creating accessible forms."
author: "Martin Berrisford"
# image:
#   url: "https://docs.astro.build/assets/rose.webp"
#   alt: ""
tags: ["forms", "HTML", "ARIA"]
---

Creating accessible forms is crucial to ensuring a seamless experience for all users. When grouping related form elements, you have two primary options: the semantic HTML `fieldset` with `legend` and the more flexible ARIA `role="group"`. 

It's a common misconception that grouping is only necessary for groups of radio buttons and checkboxes, but it's also a good idea to group related inputs together if you're collecting a lot of information in one form.

Let's dive into the pros, cons, and implementation of each. As an example, let's consider this partial form for user account preferences (which is using `fieldset` + `legend`):

<form>
  <fieldset style="border: 1px solid gray; padding: 1rem;">
    <legend style="font-weight: bold;">Account Preferences</legend>
    <label for="username">Username</label>
    <input style="border: 1px solid gray;" type="text" id="username" name="username" >
      <fieldset style="border: 1px solid gray; padding: 1rem;">
        <legend style="font-weight: bold;">Notification Preferences</legend>
        <input id="email" type="radio" name="notifications" value="email" style="border: 1px solid gray;">
        <label for="email">Email</label>
        <input id="sms" type="radio" name="notifications" value="sms" style="border: 1px solid gray;">
        <label for="sms">SMS</label>
      </fieldset>
  </fieldset>
</form>


## Option 1: `fieldset` + `legend`

The `fieldset` element paired with a `legend` is the gold standard for grouping related fields. This semantic combination provides clear structure, and is fully supported by assistive technologies, and requires minimal additional effort if you're starting from scratch. If you've already implemented things using a bunch of `div` elements, we'll tackle that scenario in a bit.

### Code snippet using `fieldset` + `legend`

```html
<form>
  <fieldset>
    <legend>Account Preferences</legend>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" autocomplete="username">
    <fieldset>
      <legend>Notification Preferences</legend>
      <input type="radio" name="notifications" value="email" id="email">
      <label for="email">Email</label>
      <input type="radio" name="notifications" value="sms" id="sms">
      <label for="sms">SMS</label>
    </fieldset>
  </fieldset>
  <fieldset>
    <legend>Security Preferences</legend>
    ...
```

### Pros

- Screen readers automatically announce the group and its description (from `legend`).
- Nesting `fieldset` elements retains a logical relationship.
- Reliable behavior across screen readers and devices.

### Cons

Styling may require additional CSS knowhow for "modern designs". Luckily, there is very little you can't style with CSS these days unless you're constrained by a framework. 

## Option 2: role="group"

The role="group" attribute is an alternative for situations where `fieldset` may not align with the design or structure. But, you have to be careful to match `fieldset`'s built-in accessibility.

### Code snippet using `role="group"` + `aria-labelledby`

```html
<form>
  <div role="group" aria-labelledby="account-settings">
    <h3 id="account-settings">Account Preferences</h3>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" autocomplete="username">
    <!-- You can use role="radiogroup" instead of role="group" for radio button groups -->
    <div role="radiogroup" aria-labelledby="notification-preferences">
      <h4 id="notification-preferences">Notification Preferences</h4>
      <input id="email" type="radio" name="notifications" value="email">
      <label for="email">Email</label>
      <input id="sms" type="radio" name="notifications" value="sms">
      <label for="sms">SMS</label>
    </div>
  </div>
    <div role="group" aria-labelledby="security-settings">
    <h3 id="security-settings">Security Preferences</h3>
    ...
```

### Pros

- Works well when `fieldset` styling is too restrictive or you've already implemented things using a bunch of divs and refactoring is a time constraint.
- Allows use of existing elements, preferably headings, for group labels.

### Cons

- Requires `aria-labelledby` to provide equivalent accessibility. This might complicate things if you're generating the headings and inputs dynamically (not hard-coded), and need to reference them by ID.
- Some screen readers may not consistently announce group boundaries when browsing the form. 

## When to Use Each Approach

Choose `fieldset` and `legend` if:

- Semantic HTML aligns with your design. Hopefully you're doing this already.
- You want the most reliable screen reader support.

Choose `role="group"` if:

- Design or structure constraints make `fieldset` impractical.
- You're prepared to test more using multiple screen readers. I can't tell how many times I've tested this pattern only to find a bug related to `aria-labelledby` referencing a wrongly generated or missing ID!

## Conclusion

Both `fieldset` and `role="group"` are effective tools for grouping related form controls. `fieldset` is a robust, accessible default, while `role="group"` offers flexibility when design demands it or you have other constraints. Regardless, always test your forms with multiple screen readers to ensure a great experience for everyone.